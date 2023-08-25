import { restaurantList } from "./Config"
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
//import Shimmer from "react-shimmer"
import { Link } from "react-router-dom";
function filterData(searchInput, restaurants) {
    const filteredData = restaurants.filter((restaurant) =>
        restaurant?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
    );
    return filteredData;
}

const Body = () => {
   const [restaurants, setRestaurants] = useState(restaurantList);
    const [searchInput, setSearchInput] = useState('');

    return (!restaurants) ? (<Shimmer />) :(
                <>
                    <div className='search-container'>
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search"
                            value={searchInput}
                            onChange={(e) => {
                                setSearchInput(e.target.value);
                            }}
                        />

                        <button
                            className="search-btn"
                            onClick={() => {
                                const data = filterData(searchInput, restaurantList);
                                setRestaurants(data);
                            }}
                        >
                            Search
                        </button>
                    </div>

                    <div className='restaurant-list'>
                
                        {restaurants.map((restaurant) => (
                           <Link to={"/RestaurantMenu/" + restaurant.id} key={restaurant.id}> 
                           
                           <RestaurantCard {...restaurant} key={restaurant.id} /></Link>
                        ))}
                    </div>
                  
                </>
            )
        };
      

export default Body;

/* 
  const [searchClicked, setSearchClicked] = useState("false");

  <h1>{searchClicked}</h1>
          <button className="search-btn" onClick={() =>{
            if(searchClicked == "true"){
                setSearchClicked("False");
            }else{
                setSearchClicked("true");
            }
             
          }}> search </button>
    -------------------------------------      
    const [allRestaurants, setAllRestaurants] = useState();
    const [filteredRestaurants, setFilteredRestaurants] = useState();
    
   useEffect(() =>{
        getRestaurants();
    },[]);

    async function getRestaurants(){
        const data = await fetch("https://cdn.shopify.com/static/sample-images/bath_grande_crop_center.jpeg");
        const data = await fetch("restaurantList.data");
        const json = await data.json();
        console.log(json);
        setAllRestaurants(json?.data?.cards[2].data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2].data?.data?.cards);
    }
      -------------    
    useEffect(() =>{
        getRestaurants();
    },[]);

    async function getRestaurants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=15.4642339&lng=78.4908221&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
    }

       const [allRestaurants, setAllRestaurants] = useState();
       const [filteredRestaurants, setFilteredRestaurants] = useState();
       setAllRestaurants(json?.data?.cards[2].data?.data?.cards);
       setFilteredRestaurants(json?.data?.cards[2].data?.data?.cards);
       {restaurants.map((restaurant) => (
                            <RestaurantCard {...restaurant} key={restaurant.id} />
                        ))}

if (!restaurants) return null;
    if(restaurants?.length==0)
     return <h1>No Restaurant match you find !!!</h1>
*/