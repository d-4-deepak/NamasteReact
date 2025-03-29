import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router";
const Header = ()=> {
    const [button,setButton] = useState("Login");
    const handlebtn = ()=>{
        if(button=="Login"){
            setButton("Logout")
        }else{
            setButton("Login")
        }
    }
    return(
    <div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="nav-items">
            <ul>
                <li>
                  <Link to="/"> Home</Link> 
                    </li>
                <li>
                <Link to="/about">  About us</Link>
                   </li>
                <li>
                <Link to="/contact">Contact us</Link>
                    </li>
                <li>Cart</li>
                <button className="login-btn" onClick={handlebtn}>{button}</button>
            </ul>
        </div>

    </div>
)
}
export default Header;