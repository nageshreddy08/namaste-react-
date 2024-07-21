import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const Body = () => {
const [listOfRestaurants, setListOfRestaurants]=useState([]);

useEffect(() => {
    fetchData();
}, []);

const fetchData= async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4434646&lng=78.3771953&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

const json = await data.json();
console.log(json);
setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
console.log("listofres");
console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
};

    return (
        <div className="body">
            <div className="filter">
                
                <button
                className="filter-btn"
                onClick={() => {
                       const filteredList = listOfRestaurants.filter
                       (
                       (res)=> res?.info.avgRating >=4
                        );
                        setListOfRestaurants(filteredList);
              }}      
                >Show Top Rated Restaurants
                </button>
                </div>
            <div className="res-container">
            {listOfRestaurants?.map((res)=>(
            <RestaurantCard key={res?.info?.id} resData={res?.info}/>
            ))
            }     
           
            </div>
        </div>
    )
};


export default Body;