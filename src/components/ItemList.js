import { MENU_IMGURL } from "../utils/constant";
import { addItems } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";
const ItemList = (itemList)=>{
    console.log("itemList",itemList);
        const dispatch = useDispatch();

        const cartItems = useSelector((store)=>store.cart.items);

    const handleClickAddItems = (item)=>{
            //dispatch an action
            if(!cartItems.includes(item)){
                dispatch(addItems(item));
            }
           
    }
    
    return (
        <div>{itemList.data.map((item)=> (
            <div data-testid="foodItems" key={item.card.info.id} className="m-4 p-8 border-b-2  border-gray-200 hover:bg-gray-100">
             <div className="flex flex-wrap  justify-between gap-4">
                <div className="w-full md:w-3/4">

                    <div>
                      <span className="text-gray-700 text-[1.2rem] font-bold"  >{item.card.info.name}</span>
                    </div>

                    <div>
                        <span>₹{item.card.info.price ? item.card.info.price /100 : item.card.info.defaultPrice / 100}</span>
                    </div>

                   <div > <p className="text-[0.9rem] font-medium text-gray-500 break-words w-full max-w-md pt-3 ">{item.card.info.description}</p></div>
                </div>
                        <div className="relative w-36 h-36 ">
                            {item.card.info.imageId ? 
                              <img src={`${MENU_IMGURL}${item.card.info.imageId}`} className="rounded-lg w-36 h-34 object-cover flex-shrink-0"/>
                                : 
                                    <div className="w-36 h-36 bg-gray-100 rounded-lg"></div> // placeholder
                                
                            }
                            <div className="absolute bottom-[-10] left-1/2 transform -translate-x-1/2 shadow-sm text-center ">
                                <button className="bg-white text-green-700 font-semibold text-[1.2rem] px-6 py-1 border border-gray-200 rounded-lg cursor-pointer" onClick={()=>handleClickAddItems(item)} >
                                    ADD+
                                </button>
                            </div>
                           
                             </div>
             </div>
                    
            </div>
           
        ))} </div>
    )
}
export default ItemList;