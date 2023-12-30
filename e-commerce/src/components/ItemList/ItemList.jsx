import Item from "../Item/Item";

const ItemList = ({ listadoProductos }) => {

  return (

    <>
      {listadoProductos.map((producto) =>
        <Item key={producto.id} name={producto.description} image={producto.img} precio={producto.price} />
      )}
    </>
  )
}

export default ItemList;