import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo/logo.png"
import './NavBar.css'
function NavBar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <nav>
                <a href="/Home">
                    <img  className="Logo" src={logo} alt="logo error" />
                </a>

                <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>

                <ul className={menuOpen ? "nav-links active" : "nav-links"}>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/Mission & Vision">Mission & Vision</Link>
                    </li>
                    <li>
                        <Link to="/How It Works">How It Works</Link>
                    </li>
                    <li><Link to="/Contect">Contect</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;