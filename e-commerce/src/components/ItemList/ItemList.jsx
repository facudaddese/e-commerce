import Item from "../Item/Item";

const ItemList = ({ listadoProductos }) => {

  return (

    <>
      {listadoProductos.map((unProducto) =>
        <Item key={unProducto.id} name={unProducto.name} image={unProducto.img} price={unProducto.price} />
      )}
    </>
  )
}

export default ItemList;