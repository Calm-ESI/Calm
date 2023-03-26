import { Link } from "react-router-dom";
import logo from "./assets/logo.png"
const Nav = () => {
    return ( 
    <nav className="navbar">
    <img src={logo} alt="" style={{
        width:"150px"
    }} />
    <div className="links">
        <ul>
        <Link className='a'to="/">  <li> Home   </li> </Link>
        <Link className='a'to="/ide">  <li>  Emulate </li></Link>
        <Link className='a'to="/">  <li> Learn    </li></Link> 
        <Link className='a'to="/">  <li> Examples </li></Link>
        </ul>
    </div> 
    </nav>);
    }

export default Nav;