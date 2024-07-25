import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
const [listOfRestaurants, setListOfRestaurants]=useState([]);
const [filteredRestaurant, setFilteredRestaurant]=useState([]);//created another state varibale to Search restaurants
const[searchText, setSearchText]=useState("");


console.log("body rendered")
useEffect(() => {
    fetchData();
}, []);

const fetchData= async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4434646&lng=78.3771953&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

const json = await data.json();
console.log(json);
setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);//storing copy of restaurants in another state variable for "Search" feature
// console.log("listofres");
// console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
};

//Conditional Rendering-->Rendering on basis of condition
    return listOfRestaurants.length===0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                  <input type="text" className="search-box" 
                  value={searchText} 
                  onChange={(e) => {
                      setSearchText(e.target.value);
                  }}
                  />
                    <button onClick={() => {
                        console.log(searchText)
                        const searchedRestaurant=listOfRestaurants.filter(
                            (res) => res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
                        );

                        setFilteredRestaurant(searchedRestaurant);
                    }}>Search</button>
                </div> 

                <button
                className="filter-btn"
                onClick={() => {
                       const filteredList = listOfRestaurants.filter(
                       (res)=> res?.info.avgRating >4.5
                        );
                        setListOfRestaurants(filteredList);
              }}      
                >Show Top Rated Restaurants
                </button>
                </div>

            <div className="res-container">
            {filteredRestaurant.map((res)=>(
            <RestaurantCard key={res?.info?.id} resData={res?.info}/>
            ))
            };  
            </div>
        </div>
    )
};


export default Body;