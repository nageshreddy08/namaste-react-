//import resList from "../utils/mockData;

const RestaurantCard= (props)=>{

    const { resData }= props;


    const {cloudinaryImageId,name,cuisines,costForTwo,avgRating }=resData?.card?.card?.info
    console.log(resData);
    return(
        <div className="res-card">
            <img
            className="res-logo"
            alt="res-logo"
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/"+cloudinaryImageId}
             />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} stars</h4>
        </div>
    )
    }
export default RestaurantCard;