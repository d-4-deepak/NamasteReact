import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clear } from "../utils/cartSlice";

const Cart = ()=>{

    const dispatch = useDispatch();

    const handleClearcart = ()=>{
        dispatch(clear());
    }

    const cartItems = useSelector((store)=>store.cart.items)
   return (
    <div className="max-w-screen-lg mx-auto px-4 text-center">
        <div className=" font-bold text-2xl mt-5 p-4">cart</div>
        <button className="bg-black text-white p-2 rounded-lg " onClick={handleClearcart}>Clear Cart</button>
        {cartItems.length ==0 && <h1> Cart is Empty ,add  items to the cart</h1> }
        <div>
            <ItemList data={cartItems}/>
        </div>
    </div>
   )
}
export default Cart;