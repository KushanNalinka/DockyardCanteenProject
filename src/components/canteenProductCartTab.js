

import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import QuantityModal from './QuantityModal';
import axios from 'axios';

const ProductCart = (props) => {
    const [modalOpen, setModalOpen] = useState(false);
    const { id, name, price, image, category, meal, slug, quantity, quantityChangedAt } = props.data;
    const mealText = Array.isArray(meal) ? meal.join(', ') : meal;

    const handleAddClick = () => {
        setModalOpen(true);
    };

    const handleQuantitySubmit = async (newQuantity) => {
        setModalOpen(false); // Close the modal after submitting

        try {
            const response = await axios.patch(
                `http://localhost:5255/api/Foods/${id}/quantity`, // Correct URL
                JSON.stringify(newQuantity), // Wrap newQuantity in a JSON.stringify call
                {
                    headers: {
                        'Content-Type': 'application/json', // Ensure correct Content-Type
                    }
                }
            );

            if (response.status === 200) {
                // Handle successful update, e.g., display a message or refresh data
                console.log('Quantity updated successfully', response.data);
                alert('Quantity updated successfully');
                // Refresh product list or update state here
            }
        } catch (error) {
            console.error('Error updating quantity', error);
            alert('Error updating quantity');
        }
    };

    return (
        <div className='bg-white p-5 rounded-xl shadow-sm'>
            <Link to={slug}>
                <img src={image} alt='' className='w-full h-80 object-cover object-top drop-shadow-[0_80px_30px_#0007]' />
            </Link>
            <h2 className='text-2xl py-3 text-center font-medium'>{name}</h2>
            <p className='text-1xl py-1 text-center font-medium text-blue-500'>Last Quantity Update</p>
            <p className='text-1xl py-1 text-center font-medium'>{quantityChangedAt}</p>
            <p className='text-1xl py-1 text-center font-medium text-blue-500'>Available Quantity</p>
            <p className='text-1xl py-1 text-center font-medium'>{quantity}</p>
            
            <div className='flex justify-between items-center'>
                <button className='bg-[#FFC10C] p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2' onClick={handleAddClick}>
                    <FaEdit className='w-5' />
                    Change the {name} Quantity
                </button>
            </div>

            {modalOpen && (
                <QuantityModal onSubmit={handleQuantitySubmit} onClose={() => setModalOpen(false)} />
            )}
        </div>
    );
};

export default ProductCart;
