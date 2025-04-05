import RestaurantCard ,{withPromotedLabel} from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import ShimmerUI from "./ShimmerUI";
const Body = ()=>{
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    const[listRestaurant,setListRestaurant] = useState([])
    const [searchText,setSearchText] = useState("");
   const [filteredRestaurtant,setFilteredRestaurtant] =useState([])


    useEffect(()=>{
        fetchData();        
    },[])
    
    const fetchData = async ()=>{
        const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        
         console.log(json);
       
            //Finding the card which contain gridElements and further
    

        //deletable
        const restaurantCard = json.data.cards.filter((card)=>
            card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )
        console.log("list of res car ",restaurantCard);

        const allRestaurants = restaurantCard.flatMap(
            (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
          );


          console.log("allRestaurant",allRestaurants);

          const uniqueRestaurants = [];
          const seenIds = new Set();

          allRestaurants.forEach((res)=>{
                const id = res?.info?.id;
                if(id && !seenIds.has(id)){
                    seenIds.add(id);
                    uniqueRestaurants.push(res);
                }
          })
          console.log("uniq" , uniqueRestaurants);
          setListRestaurant(uniqueRestaurants);
          setFilteredRestaurtant(uniqueRestaurants)
        //deletable
        

        // const restaurantCard = json.data.cards.find((card)=>
        //     card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        // )
        // const allRestaurants = restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
        // console.log("all Restaurants", allRestaurants);
        
        //         console.log(typeof allRestaurants);
                
        //      setListRestaurant(allRestaurants); 
        //   setFilteredRestaurtant(allRestaurants)
        //    console.log(listRestaurant.length);
    };
    
    
    const onlineStatus = useOnlineStatus();
    if (onlineStatus == false){
        return <h1>Looks like  you are offLine!! please check your Internet Connection </h1>
    }

      
    return  listRestaurant.length === 0?<ShimmerUI/>:(
    <div className="px-48 text-center w-full">
        <div className="flex justify-between items-center">
        <div className="p-4 m-4">
            <input type="text" className="border border-black " value={searchText} onChange={(e)=>setSearchText(e.target.value)}>
            </input>
            {/* filter the restaurant cards and update the UI */}
            <button className="m-4 px-4 py-1 bg-green-200 rounded-sm" onClick={()=>{
               
                const filteredRestaurants = listRestaurant.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()) )

                setFilteredRestaurtant(filteredRestaurants)
                
            }}>Search</button>
            </div>
          <div className="p-4 m-4">
          <button className="m-4 px-4 py-1 bg-gray-200 rounded-sm cursor-pointer hover:bg-gray-300" onClick={()=>{
              const filteredList =  listRestaurant.filter(
                (res)=> res.info.avgRating>4.3);
                setFilteredRestaurtant(filteredList);
            }} >Top Rated Restaurants</button>
          </div>
        </div>
        
    
    <div className="flex flex-wrap gap-4 w-full">
        {
        filteredRestaurtant.map((restaurant)=>(
            
          <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id}>
            {restaurant?.info?.avgRating>4.3 ? <RestaurantCardPromoted  resData={restaurant} /> : <RestaurantCard   resData={restaurant}/>}
             </Link> 
        ))
        }
    </div>
    </div>
    )
}
export default Body;