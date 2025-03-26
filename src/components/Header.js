import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
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
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Cart</li>
                <button className="login-btn" onClick={handlebtn}>{button}</button>
            </ul>
        </div>

    </div>
)
}
export default Header;