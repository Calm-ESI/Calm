import { Link } from "react-router-dom";
import logo from "../../assets/images/logos/logo.png"
import "./style.css"
import UAParser from 'ua-parser-js';


const NavBar = () => {
  const parser = new UAParser();
  const result = parser.getResult();
  result.device.type==='mobile'? console.log("Mobile"): console.log("Pc") 
    return ( 
        
    <nav className="navbar">
       <a href="/">
        <img src={logo} alt="" style={{
            width:"150px"
        }} /> </a>
       
        
        <div className="links">
            <ul>
                <Link className='a'to="/">  <li> Home   </li> </Link>
                <Link className='a'to="/ide">  <li>  Emulate </li></Link>
                <Link className='a'to="/learn">  <li> Learn    </li></Link> 
            </ul>
        </div> 
    </nav>);
    }

export default NavBar;