// import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { MENU_IMGURL } from "../utils/constant";
import { useParams } from "react-router";
// import { MENU_API } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";



const RestaurantMenu = ()=>{

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

console.log(itemCards);

    return (
        <div className="menu">
          <h1>{name}</h1>
       <div className="hotel-details">
       
            <h3>{avgRating}({totalRatingsString}) - {costForTwoMessage}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>Outlet - {areaName}</h5>
            <h5>{minDeliveryTime}-{maxDeliveryTime}mins</h5>
       </div>
        <h2>Recommended({itemCards?.length ? itemCards?.length:0 })</h2>

        {itemCards?.map((item)=>{
          return (
            <div className="menu-list" key={item.card.info.id}>
                    <div className="dish-details" >
                      <h3>{item.card.info.name}</h3>
                      <h3>
                        {item.card.info.finalPrice   ? (
                          <>
                            <span style={{ textDecoration: "line-through", color: "gray" }}>
                              ₹{item.card.info.price / 100 }
                            </span>{" "}
                            ₹{item.card.info.finalPrice / 100}
                          </>
                        ) : (
                          <>₹{item.card.info.price / 100  || item.card.info.defaultPrice/100}</>
                        )}
                      </h3>


                      <h4> {item?.card?.info?.ratings?.aggregatedRating?.rating ? (
                        <>{item.card.info.ratings.aggregatedRating.rating} ({item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2}) 
                        </>): ""}</h4>
                      <h4>{item.card.info.description}</h4>

                    </div>
                    <div className="dish-image">
                    <img src={item.card.info.imageId? `${MENU_IMGURL}${item.card.info.imageId}`:null} />
                    </div>
                </div>
          )
        })}
                
        </div>
    )
}
export default RestaurantMenu;