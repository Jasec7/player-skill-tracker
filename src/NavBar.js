import "./App.css";
import { NavLink } from "react-router-dom"; 

function NavBar(){
    return(
        <nav>
        <NavLink
        to="/"
        className="nav-link"
        >
            Home
        </NavLink>

        
        <NavLink
        to="/players"
        className="nav-link"
        >
            Players
        </NavLink>
       </nav>
    )

}

export default NavBar