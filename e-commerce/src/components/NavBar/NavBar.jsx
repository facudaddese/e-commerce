import "./NavBar.css";

import CartWidget from "../CartWidget/CartWidget";

const navBar = () => {
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
                        <li><a href="">Mujer</a></li>
                        <li><a href="">Hombre</a></li>
                        <li><a href="">Niño</a></li>
                    </ul>
                </div>
                <div className="logo-carrito">
                    <CartWidget />
                </div>
            </nav>
        </div >
    );
}

export default navBar;
