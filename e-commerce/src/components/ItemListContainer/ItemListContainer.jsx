import "./ItemListContainer.css";

const ItemListContainer = ({ description }) => {
    return (
        <div className="container-section">
            <h1>{description}</h1>
        </div>
    );
}

export default ItemListContainer;