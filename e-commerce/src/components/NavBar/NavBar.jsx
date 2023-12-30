import "./NavBar.css";

import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <div className="header-container">
            <nav>
                <div className="logo-adidas">
                    <Link to={"/inicio"}>
                        <img src="https://i.postimg.cc/fTZynPt9/adidas.png" alt="logo de adidas" />
                    </Link>
                </div>
                <div className="contenedor-navBar">
                    <ul className="navBar">
                        <Link className="li" to={"/category/mujer"}>Mujer</Link>
                        <Link className="li" to={"/category/hombre"}>Hombre</Link>
                        <Link className="li" to={"/category/niño"}>Niño</Link>
                    </ul>
                </div>
                <div className="logo-carrito">
                    <Link>
                        <CartWidget />
                    </Link>
                </div>
            </nav>
        </div >
    );
}

export default NavBar;
