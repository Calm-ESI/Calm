import { Link } from "react-router-dom";
import logo from "../../assets/images/logos/logo.png"
import "./style.css";

const NavBar = () => {

    return ( 
        
    <nav className="navbar">
       <a href="/">
        <img src={logo} alt="" style={{
            width:"4rem"
        }} /> </a>

        <div className="links">
            <ul>
                <Link className='a'to="/"><li>Home</li> </Link>
                <Link className='a'to="/learn"><li>Learn</li></Link>
                <Link className='a'to="/ide"><li>Emulate</li></Link>
                <Link className='a'to="/profile"><li>Profile</li></Link>
            </ul>
        </div> 
    </nav>
    );
    }

export default NavBar;