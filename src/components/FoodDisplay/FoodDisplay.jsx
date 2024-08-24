import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  // Check if food_list is an array
  if (!Array.isArray(food_list)) {
    return <p>Error: Food list is not available or is not an array.</p>;
  }

  return (
    <div className='food-display' id='food-display'>
      <h2 className='h2we'>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />;
          }
          return null; // Ensure you return something if the condition is not met
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
