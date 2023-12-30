/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const ItemDetailContainer = () => {

    const { id } = useParams();
    const [products, setProducts] = useState([])

    useEffect(() => {

        fetch('../../../productos.json')
            .then(res => res.json())
            .then(data => setProducts(id ? data.find(e => e.id == id) : data))
            .catch(err => console.log(err))
    }, [id])

    return (
        <>
            {/*no se de que manera usar products */}
        </>
    )
}

export default ItemDetailContainer