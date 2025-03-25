import { CDN_URL } from "../utils/constant";
const RestaurantCard = (props)=>{
    

    const {resData} = props;
    const {name,cuisines,avgRating,sla,cloudinaryImageId,costForTwo} = resData?.info;

   return (
    <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
        <img 
        className="res-logo"
        src={`${CDN_URL}${cloudinaryImageId}`} style={{ height: "150px", width: "190px", borderRadius: "10px", objectFit: "cover", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}  />
        <h2>{name}</h2>
        <h5>{cuisines.join(",")}</h5>
        <h5>{costForTwo}</h5>
        <h5>{avgRating} stars</h5>
        <h5>{sla.deliveryTime} minutes</h5>
    </div>
)
}
export default RestaurantCard