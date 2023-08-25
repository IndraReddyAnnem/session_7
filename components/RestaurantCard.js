const RestaurantCard = (props) => {
   
    return (
      <div className='rest-card'>
        <img src={props.image} alt={props.name} />
        <h2>{props.name}</h2>
        <h3>{props.cuisines.join(", ")}</h3>
        <h4>{props.rating} stars</h4>
        <h4>{props.deliveryTime} minutes</h4>
      </div>
    );
  };

  export default RestaurantCard;