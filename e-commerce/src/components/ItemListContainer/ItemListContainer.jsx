import "./ItemListContainer.css";
import axios from "axios";
import { useState, useEffect } from "react";
import data from "../../../productos.json";

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        axios(data)
            .then((res) => setProducts(res.data))
    }, []);

    return (
        <div>
            {products}
        </div>
    );
}

export default ItemListContainer;