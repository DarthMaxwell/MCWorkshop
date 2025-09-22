import { Link } from "react-router";
import "./Navbar.css"

function Navbar() {
    return (
        <ul>
            <Link to="/"><li><a>Home</a></li></Link>
            <Link to="/booking"><li><a>Booking</a></li></Link>
            <Link to="/inventory"><li><a>Inventory</a></li></Link>
            <Link to="/bikes"><li><a>Bikes</a></li></Link>
            <Link to="/storage"><li><a>Storage</a></li></Link>
        </ul>
  );
}

export default Navbar;