import "./NavBar.css";

import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="header-container">
            <nav>
                <div className="logo-adidas">
                    <a href="">
                        <img src="https://i.postimg.cc/fTZynPt9/adidas.png" alt="logo de adidas" />
                    </a>
                </div>
                <div className="contenedor-navBar">
                    <ul className="navBar">
                        <Link className="li">Mujer</Link>
                        <Link className="li">Hombre</Link>
                        <Link className="li">Niño</Link>
                    </ul>
                </div>
                <div className="logo-carrito">
                    <CartWidget />
                </div>
            </nav>
        </div >
    );
}

export default NavBar;
