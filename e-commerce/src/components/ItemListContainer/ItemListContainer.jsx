/* eslint-disable react/jsx-key */
import "./ItemListContainer.css";
import { useState, useEffect } from "react"

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {

        fetch('../../../productos.json')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err))
    }, [])

    return (

        <>
            {products.map(unProd =>

                <div className="card">
                    <img src={unProd.img} />
                    <h3>{unProd.description}</h3>
                    {/* <h4>{unProd.category}</h4> */}
                    <p>Precio:{unProd.price}</p>
                    <button>Ver Mas</button>
                </div>
            )}
        </>

    );
}

export default ItemListContainer;