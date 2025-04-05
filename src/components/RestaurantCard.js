import { CDN_URL } from "../utils/constant";
const RestaurantCard = (props)=>{
    

    const {resData} = props;
    const {name,cuisines,avgRating,sla,cloudinaryImageId,costForTwo} = resData?.info;

   return (
    <div className="m-4 p-4 w-[230px] h-[400px] bg-[#f0f0f0] hover:bg-gray-200 rounded-lg">
        <img 
        className="h-[150px] w-[220px] rounded-lg object-fit-cover shadow"
        src={`${CDN_URL}${cloudinaryImageId}`}   />
        <h2 className="font-bold py-4 text-lg">{name}</h2>
        <h5>{cuisines.join(",")}</h5>
        <h5>{costForTwo}</h5>
        <h5>{avgRating} stars</h5>
        <h5>{sla.slaString} </h5>
    </div>
)
}

export const withPromotedLabel = (RestaurantCard)=>{
    return (props)=>{
        // console.log("props have",props);
        // console.log("props spread have",{...props});
        
        return (
            <div>
                <label className="bg-black text-white absolute ml-9 p-1.5 rounded-sm">Promoted</label>
                <RestaurantCard {...props}/> 
            

            </div>
        )
    }
}

export default RestaurantCard