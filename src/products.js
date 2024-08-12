/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import imageProduct1 from './assets/images/1.png' 
import imageProduct2 from './assets/images/2.png' 
import imageProduct3 from './assets/images/3.png' 
import imageProduct4 from './assets/images/4.png' 
import imageProduct5 from './assets/images/5.png' 
import imageProduct6 from './assets/images/6.png' 
import imageProduct7 from './assets/images/7.png' 
import imageProduct8 from './assets/images/8.png' 
import imageProduct9 from './assets/images/9.png' 
import imageProduct10 from './assets/images/10.png' 
import imageProduct11 from './assets/images/11.png' 
import imageProduct12 from './assets/images/12.png' 
import imageProduct13 from './assets/images/13.png' 
import imageProduct14 from './assets/images/14.png' 
import imageProduct15 from './assets/images/15.png' 
import imageProduct16 from './assets/images/16.png' 
import imageProduct17 from './assets/images/17.png' 
import imageProduct18 from './assets/images/18.png' 
import imageProduct19 from './assets/images/19.png' 
import imageProduct20 from './assets/images/20.png' 
import imageProduct21 from './assets/images/21.png' 
import imageProduct22 from './assets/images/22.png' 
import imageProduct23 from './assets/images/23.png' 
import imageProduct24 from './assets/images/24.png' 
import imageProduct25 from './assets/images/25.png' 
import imageProduct26 from './assets/images/26.png' 
import imageProduct27 from './assets/images/27.png' 
import imageProduct28 from './assets/images/28.png' 
import imageProduct29 from './assets/images/29.png' 
import imageProduct30 from './assets/images/30.png' 
import imageProduct31 from './assets/images/31.png'
import imageProduct32 from './assets/images/32.png' 


// Mapping of image variables for easy lookup
const imageMap = {
    
    P001: imageProduct1,
    P00101: imageProduct1,
    P002: imageProduct2,
    P003:imageProduct3,
    P004:imageProduct4,
    P005:imageProduct5,
    P006:imageProduct6,
    P007:imageProduct7,
    P008:imageProduct8,
    P009:imageProduct9,
    P010:imageProduct10,
    P011:imageProduct11,
    P012:imageProduct12,
    P013:imageProduct13,
    P014:imageProduct14,
    P015:imageProduct15,
    P016:imageProduct16,
    P017:imageProduct17,
    P018:imageProduct18,
    P019:imageProduct19,
    P020:imageProduct20,
    P021:imageProduct21,
    P022:imageProduct22,
    P023:imageProduct23,
    P024:imageProduct24,
    P025:imageProduct25,
    P026:imageProduct26,
    P027:imageProduct27,
    P028:imageProduct28,
    P029:imageProduct29,
    P030:imageProduct30,
    P031:imageProduct31,
    P032:imageProduct32,


    // ... other image mappings
};

// Function to fetch and update products
const fetchProducts = async () => {
    try {
        const response = await axios.get('http://localhost:5255/api/Product');
        const data = response.data;

        // Map the API data to the desired structure
        return data.map(product => ({
            id: product.id, // Keep id unchanged
            name: product.name,
            description: product.description,
            category: product.category,
            price: product.price,
            quantity:product.quantity,
            meal: product.meal,
            slug: product.slug,
            quantityChangedAt: product.quantityChangedAt,
            image: imageMap[product.id] // Map image based on id
        }));
    } catch (error) {
        console.error('Error fetching products:', error);
        return []; // Return an empty array in case of error
    }
};

// Export the fetched products
export const products = await fetchProducts();

/*export const products = [
    {
        id: 'P00101',
        name: 'Hertfoid Upholstered Chair',
        price: 101,
        image: imageProduct1,
        meal:['Breakfast', 'Lunch','Dinner'],
        category:'Pizza',
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.',
        slug: 'hertfoid-upholstered-chair'
    },
    {
        id: 'P002',
        name: 'Abingdon Upholstered Chair Swivel',
        price: 151,
        image: imageProduct2,
        meal:['Breakfast', 'Lunch','Dinner'],
        category:'Fruits',
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.',
        slug: 'bingdon-pholstered-chair-swivel'
    },
    {
        id: 'P003',
        name: 'Jeses Minimore Modern Style Etta',
        price: 181,
        image: imageProduct3,
        meal:['Breakfast', 'Lunch','Dinner'],
        category:'Vegie',
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.',
        slug: 'jeses-minimore-modern-style-etta'
    },
    {
        id:  'P004',
        name: 'JJeses Minimore Modern Style',
        price: 201,
        image: imageProduct4,
        meal:['Breakfast', 'Lunch','Dinner'],
        category:'Buns',
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.',
        slug: 'eses-minimore-modern-style-zakari'
    },
    {
        id: 'P005',
        name: 'Bolanle Upholstered Armchair',
        price: 251,
        image: imageProduct5,
        meal:['Breakfast', 'Lunch','Dinner'],
        category:'Fish',
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.',
        slug: 'corrigan-studio-tufed-upholstered-wide-winback-armchair'
    },
    {
        id: 'P006',
        name: 'Jaqueze Upholstered Armchair',
        price: 111,
        image: imageProduct6,
        meal:['Breakfast', 'Lunch','Dinner'],
        category:'Snacks',
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.',
        slug: 'corrigan-studio-273-wide-armchair'
    },
    {
        id: 'P007',
        name: 'Leston Wide Upholstered Fabric',
        price: 121,
        image: imageProduct7,
        meal:'Breakfast',
        category:'Pizza',
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.',
        slug: 'leston-wide-upholstered-fabric'
    },
    {
        id: 'P008',
        name: 'Stephanny 27.5" Wide Tufted',
        price: 220,
        image: imageProduct8,
        meal:'Lunch',
        category:'Vegie',
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.',
        slug: 'stephanny-275-wide-tufted-armchair'
    },
    {
        id: 'P009',
        name: 'Hertfoid Upholstered Chair',
        price: 101,
        image: imageProduct9,
        meal:'Breakfast',
        category:'Roti',
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.',
        slug: 'hertfoid-upholstered-Roti'
    },
    {
        id: 'P010',
        name: 'Abingdon Upholstered Chair Swivel',
        price: 151,
        image: imageProduct10,
        meal:'Lunch',
        category:'Ice-Creams',
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.',
        slug: 'bingdon-pholstered-chair-IceCreams'
    },
    {
        id: 'P011',
        name: 'Jeses Minimore Modern Style Etta',
        price: 181,
        image: imageProduct11,
        meal:'Dinner',
        category:'Vegie',
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.',
        slug: 'jeses-minimore-modern-style-e11'
    },
    {
        id: 'P012',
        name: 'JJeses Minimore Modern Style',
        price: 201,
        image: imageProduct12,
        meal:'Breakfast',
        category:'Buns',
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.',
        slug: 'eses-minimore-modern-style-zakari12'
    },
    {
        id: 'P013',
        name: 'Bolanle Upholstered Armchair',
        price: 251,
        image: imageProduct13,
        meal:'Lunch',
        category:'Fish',
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.',
        slug: 'corrigan-studio-tufed-upholstered-wide-winback-armchair13'
    },
    {
        id: 'P014',
        name: 'Jaqueze Upholstered Armchair',
        price: 111,
        image: imageProduct14,
        meal:'Dinner',
        category:'Snacks',
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.',
        slug: 'corrigan-studio-273-wide-armchair14'
    },
    {
        id: 'P015',
        name: 'Leston Wide Upholstered Fabric',
        price: 121,
        image: imageProduct15,
        meal:'Breakfast',
        category:'Pizza',
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.',
        slug: 'leston-wide-upholstered-fabric15'
    },
    {
        id: 'P016',
        name: 'Stephanny 27.5" Wide Tufted',
        price: 220,
        image: imageProduct16,
        meal:'Lunch',
        category:'Vegie',
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.',
        slug: 'stephanny-275-wide-tufted-armchair16'
    },
    {
        id: 'P017',
        name: 'Hertfoid Upholstered Chair',
        price: 101,
        image: imageProduct17,
        meal:'Breakfast',
        category:'Pizza',
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.',
        slug: 'hertfoid-upholstered-chair17'
    },
    {
        id: 'P018',
        name: 'Abingdon Upholstered Chair Swivel',
        price: 151,
        image: imageProduct18,
        meal:'Lunch',
        category:'Fruits',
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.',
        slug: 'bingdon-pholstered-chair-swivel-18'
    },
    {
        id: 'P019',
        name: 'Jeses Minimore Modern Style Etta',
        price: 181,
        image: imageProduct19,
        meal:'Dinner',
        category:'Vegie',
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.',
        slug: 'jeses-minimore-modern-style-etta-19'
    },
    {
        id: 'P020',
        name: 'JJeses Minimore Modern Style',
        price: 201,
        image: imageProduct20,
        meal:'Breakfast',
        category:'Buns',
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.',
        slug: 'eses-minimore-modern-style-zakari-20'
    },
    {
        id: 'P021',
        name: 'Bolanle Upholstered Armchair',
        price: 251,
        image: imageProduct21,
        meal:'Lunch',
        category:'Fish',
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.',
        slug: 'corrigan-studio-tufed-upholstered-wide-winback-armchair-21'
    },
    {
        id: 'P022',
        name: 'Jaqueze Upholstered Armchair',
        price: 111,
        image: imageProduct22,
        meal:'Dinner',
        category:'Snacks',
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.',
        slug: 'corrigan-studio-273-wide-armchair-22'
    },
    {
        id: 'P023',
        name: 'Leston Wide Upholstered Fabric',
        price: 121,
        image: imageProduct23,
        meal:'Breakfast',
        category:'Pizza',
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.',
        slug: 'leston-wide-upholstered-fabric-23'
    },
    {
        id: 'P024',
        name: 'Stephanny 27.5" Wide Tufted',
        price: 220,
        image: imageProduct24,
        meal:'Lunch',
        category:'Vegie',
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.',
        slug: 'stephanny-275-wide-tufted-armchair-24'
    },
    {
        id: 'P025',
        name: 'Hertfoid Upholstered Chair',
        price: 101,
        image: imageProduct25,
        meal:'Breakfast',
        category:'Pizza',
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.',
        slug: 'hertfoid-upholstered-chair-25'
    },
    {
        id: 'P026',
        name: 'Abingdon Upholstered Chair Swivel',
        price: 151,
        image: imageProduct26,
        meal:'Lunch',
        category:'Fruits',
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.',
        slug: 'bingdon-pholstered-chair-swivel-26'
    },
    {
        id: 'P027',
        name: 'Jeses Minimore Modern Style Etta',
        price: 181,
        image: imageProduct27,
        meal:'Dinner',
        category:'Vegie',
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.',
        slug: 'jeses-minimore-modern-style-etta-27'
    },
    {
        id: 'P028',
        name: 'JJeses Minimore Modern Style',
        price: 201,
        image: imageProduct28,
        meal:'Breakfast',
        category:'Buns',
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.',
        slug: 'eses-minimore-modern-style-zakari28'
    },
    {
        id: 'P029',
        name: 'Bolanle Upholstered Armchair',
        price: 251,
        image: imageProduct29,
        meal:'Lunch',
        category:'Fish',
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.',
        slug: 'corrigan-studio-tufed-upholstered-wide-winback-armchai30r'
    },
    {
        id: 'P030',
        name: 'Jaqueze Upholstered Armchair',
        price: 111,
        image: imageProduct30,
        meal:'Dinner',
        category:'Snacks',
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.',
        slug: 'corrigan-studio-273-wide-armchair--30'
    },
    {
        id: 'P031',
        name: 'Leston Wide Upholstered Fabric',
        price: 121,
        image: imageProduct31,
        meal:'Breakfast',
        category:'Pizza',
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.',
        slug: 'leston-wide-upholstered-fabric-31'
    },
    {
        id: 'P032',
        name: 'Stephanny 27.5" Wide Tufted',
        price: 220,
        image: imageProduct32,
        meal:'Lunch',
        category:'Vegie',
        description: 'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris. Dolor tempor ipsum culpa Lorem ipsum ullamco ullamco dolor sit do. Do proident quis ad laborum et proident laborum. Non voluptate eiusmod aute labore ea aute.',
        slug: 'stephanny-275-wide-tufted-armchair-32'
    },
];*/

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

