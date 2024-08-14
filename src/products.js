
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Function to fetch and map food data
const fetchFoods = async () => {
    try {
        // Fetch food data
        const response = await axios.get('http://localhost:5255/api/Foods');
        const data = response.data;

        

        // Map the API data to the desired structure
        return data.map(food => ({
            id: food.id, // Keep id unchanged
            name: food.name,
            description: food.description,
            category: food.category,
            price: food.price,
            quantity: food.quantity,
            meal: food.meal,
            slug: food.slug,
            quantityChangedAt: food.quantityChangedAt,
            image: food.imageSrc // Map image based on id
        }));
    } catch (error) {
        console.error('Error fetching foods:', error);
        return []; // Return an empty array in case of error
    }
};


export const products = await fetchFoods();

