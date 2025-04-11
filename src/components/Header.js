import {  useState,useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = ()=> {

//subscribing to the store using the selector
    const cartItems =  useSelector((store)=>store.cart.items);
    console.log(cartItems);
    

    const {loggedInUser} = useContext(UserContext);
    // console.log(data);
    

    const onlineStatus = useOnlineStatus();
    const [button,setButton] = useState("Login");
    const handlebtn = ()=>{
        if(button=="Login"){
            setButton("Logout")
        }else{
            setButton("Login")
        }
    }
    return(
    <div className="flex justify-between shadow-lg mb-3 items-center">
        <div className="logo-container">
            <img className="w-54" src={LOGO_URL}/>
        </div>
        <div className="nav-items">
            <ul className="flex p-4 m-3 [&>li]:p-3 [&>li]:hover:bg-green-100">
                <li className=" ">Online Status: {onlineStatus ? "✅":"🔴"}</li>
                <li>
                  <Link to="/"> Home</Link> 
                    </li>
                <li>
                <Link to="/about">  About us</Link>
                   </li>
                <li>
                <Link to="/contact">Contact us</Link>
                    </li>
                 <li ><Link to='/grocery'>Grocery</Link>   </li>

                <li className="cursor-pointer font-bold "><Link to='/cart'>Cart({cartItems.length})</Link> </li>
                <button className="px-6 ml-2 font-bold rounded-lg cursor-pointer bg-gray-200 hover:bg-gray-300" onClick={handlebtn}>{button}</button>
                <li className="cursor-pointer font-bold">{loggedInUser}</li>
            </ul>
        </div>

    </div>
)
}
export default Header;