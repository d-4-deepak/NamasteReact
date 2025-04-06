// import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { MENU_IMGURL } from "../utils/constant";
import { useParams } from "react-router";
// import { MENU_API } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = ()=>{

  const [showIndex,setShowIndex] = useState(0);
     const {resId}=useParams();

    console.log(resId);

  const resInfo = useRestaurantMenu(resId);
  
  //   const[resInfo,setResInfo] = useState(null)
 

  //   useEffect(()=>{
  //       fetchMenu();
        
  //   },[])

  // const fetchMenu = async ()=>{
  //   const data = await fetch(`${MENU_API}${resId}`);
  //   const json = await data.json();
  //   console.log(json);
  //   setResInfo(json)
    
  // }
  if(resInfo==null){
    return <ShimmerUI/>;
  } 
  const {name,cuisines,costForTwoMessage,areaName,avgRating, totalRatingsString, sla:{minDeliveryTime, maxDeliveryTime}={} } = resInfo?.data?.cards[2]?.card?.card?.info;

  const {itemCards} = resInfo.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card 

  // console.log("menu card",resInfo.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const  categories = resInfo.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c?.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  console.log("item Category", categories);
  
  
// console.log(itemCards);

    return (
        <div className=" max-w-screen-lg mx-auto px-4">
          <h1 className="text-3xl font-extrabold flex justify-left ml-5">{name}</h1>

       <div className="rounded-3xl p-6 my-8 shadow-2xl border-[1px] border-gray-200 ">
            <div className="flex font-bold text-[1.0rem]">
            <div>{avgRating}({totalRatingsString})</div>
            <div>-</div>
            <div>{costForTwoMessage}</div>
            </div>
            <div className="text-orange-400">{cuisines.join(", ")}</div>

            <div className="flex font-bold text-[0.8rem]">
            <div>Outlet</div>
            <div>-</div>
            <div className="text-[#6b6666]">{areaName}</div>
            </div>

            <div className="flex font-bold text-[0.8rem]">
            <div>{minDeliveryTime}</div>
            <div>-</div>
            <div >{maxDeliveryTime}mins</div>
            </div>
            
       </div> 
   <div className="mt-20">
        {
          categories.map((category,index)=>{

            return(
              //CONTROLLED COMPONENT
              <RestaurantCategory key={category.card.card.
                categoryId} data ={category.card.card} showItems = {index===showIndex ? true : false} setShowIndex = {()=>setShowIndex(index===showIndex? null : index)}/>
            )
          })
        }
        </div>

        </div>


    )
}
export default RestaurantMenu;

// <h2>Recommended({itemCards?.length ? itemCards?.length:0 })</h2>

// {itemCards?.map((item)=>{
//   return (
//     <div className="menu-list" key={item.card.info.id}>
//             <div className="dish-details" >
//               <h3>{item.card.info.name}</h3>
//               <h3>
//                 {item.card.info.finalPrice   ? (
//                   <>
//                     <span style={{ textDecoration: "line-through", color: "gray" }}>
//                       ₹{item.card.info.price / 100 }
//                     </span>{" "}
//                     ₹{item.card.info.finalPrice / 100}
//                   </>
//                 ) : (
//                   <>₹{item.card.info.price / 100  || item.card.info.defaultPrice/100}</>
//                 )}
//               </h3>


//               <h4> {item?.card?.info?.ratings?.aggregatedRating?.rating ? (
//                 <>{item.card.info.ratings.aggregatedRating.rating} ({item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2}) 
//                 </>): ""}</h4>
//               <h4>{item.card.info.description}</h4>

//             </div>
//             <div className="dish-image">
//             <img src={item.card.info.imageId? `${MENU_IMGURL}${item.card.info.imageId}`:null} />
//             </div>
//         </div>
//   )
// })}