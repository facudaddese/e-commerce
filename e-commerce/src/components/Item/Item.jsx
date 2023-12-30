const Item = ({ name, image, price }) => {

    return (

        <>
            <img src={image} alt={name} />

            <div>
                <h5 >{name}</h5>
                <p>{price}</p>
                <button>Ver más</button>
            </div>
        </>
    )
}

export default Item;