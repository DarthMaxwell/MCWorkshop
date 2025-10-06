import { Link } from "react-router";
import "./Navbar.css"

function Navbar() {
    return (
        <nav>
            <ul>
                <li className="logo">
                    <img src="/logo.svg"/>
                </li>

                <div className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/booking">Booking</Link></li>
                    <li><Link to="/inventory">Inventory</Link></li>
                    <li><Link to="/bikes">Bikes</Link></li>
                    <li><Link to="/storage">Storage</Link></li>
                </div>

                <li className="contact">
                    <Link to="/contact">Contact Us</Link>
                </li>
            </ul>
        </nav>
  );
}

export default Navbar;