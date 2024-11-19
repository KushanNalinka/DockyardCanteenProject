import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCoffee, FaHamburger, FaUtensils } from 'react-icons/fa';

const MealSelector = () => {
  const navigate = useNavigate();

  const handleMealClick = (meal) => {
    navigate(`/canteen/meal/${meal}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <h1 className="text-4xl font-bold mb-10">Select Your Meal</h1>
      <div className="flex space-x-10">
        <div
          className="meal-card bg-white w-40 h-40 rounded-full flex flex-col items-center justify-center cursor-pointer transform transition-transform duration-200 hover:bg-yellow-300 active:bg-yellow-500"
          onClick={() => handleMealClick('Breakfast')}
        >
          <FaCoffee size={100} className="text-blue-900" />
          <h2 className="text-xl font-semibold mt-2">Breakfast</h2>
        </div>
        <div
          className="meal-card bg-white w-40 h-40 rounded-full flex flex-col items-center justify-center cursor-pointer transform transition-transform duration-200 hover:bg-yellow-300 active:bg-yellow-500"
          onClick={() => handleMealClick('Lunch')}
        >
          <FaHamburger size={100} className="text-blue-900" />
          <h2 className="text-xl font-semibold mt-2">Lunch</h2>
        </div>
        <div
          className="meal-card bg-white w-40 h-40 rounded-full flex flex-col items-center justify-center cursor-pointer transform transition-transform duration-200 hover:bg-yellow-300 active:bg-yellow-500"
          onClick={() => handleMealClick('Dinner')}
        >
          <FaUtensils size={100} className="text-blue-900" />
          <h2 className="text-xl font-semibold mt-2">Dinner</h2>
        </div>
      </div>
      
    </div>
  );
};

export default MealSelector;

