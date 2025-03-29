import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import { Link } from "react-router";

import ShimmerUI from "./ShimmerUI";
const Body = ()=>{
    const[listRestaurant,setListRestaurant] = useState([])
    const [searchText,setSearchText] = useState("");
   const [filteredRestaurtant,setFilteredRestaurtant] =useState([])
    

    useEffect(()=>{
        fetchData();        
    },[])
    
    const fetchData = async ()=>{
        const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        
        //  console.log(json);
       
            //Finding the card which contain gridElements and further
        const restaurantCard = json.data.cards.find((card)=>
            card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )
        // console.log("list of res car ",restaurantCard);
        
        const allRestaurants = restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants
                
             setListRestaurant(allRestaurants); 
          setFilteredRestaurtant(allRestaurants)
          
    };

      
    return  listRestaurant.length === 0?<ShimmerUI/>:(
    <div className="body">
        <div className="filter">
            <input type="text" className="search-box" value={searchText} onChange={(e)=>setSearchText(e.target.value)}>
            </input>
            {/* filter the restaurant cards and update the UI */}
            <button onClick={()=>{
               
                const filteredRestaurants = listRestaurant.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()) )

                setFilteredRestaurtant(filteredRestaurants)
                
            }}>Search</button>
            <button className="filter-btn" onClick={()=>{
              const filteredList =  listRestaurant.filter(
                (res)=> res.info.avgRating>4.3);
                setFilteredRestaurtant(filteredList);
            }} >Top Rated Restaurants</button>
        </div>
    
    <div className="res-container">
        {
        filteredRestaurtant.map((restaurant)=>(
          <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id}> <RestaurantCard   resData={restaurant}/></Link> 
        ))
        }
    </div>
    </div>
    )
}
export default Body;