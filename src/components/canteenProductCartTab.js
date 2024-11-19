

/*import React, { useState } from 'react'; 
import { FaEdit, FaCheck } from "react-icons/fa";
import axios from 'axios';
import QuantityModal from './QuantityModal';

const CanteenProductCartTab = (props) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [updateDate, setUpdateDate] = useState(null);
    const { id, name, image, quantity, submitClickedAt } = props.data;

    // Ensure submitClickedAt is valid and not null/undefined
    const [submitClickedDate, submitClickedTime] = submitClickedAt
        ? submitClickedAt.split('T')
        : [null, null];

    // Check if the submit date was today
    const isUpdatedToday = submitClickedDate === new Date().toISOString().split('T')[0];

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
            window.location.reload();

            if (response.status === 204) {
                // Set update date if successful
                setUpdateDate(new Date().toISOString().split('T').join(' '));
                alert('Quantity updated successfully');
            }
        } catch (error) {
            console.error('Error updating quantity', error);
            alert('Error updating quantity');
        }
    };

    // Determine background color for quantity
    const quantityBackground = quantity === 0 ? 'bg-red-500' : 'bg-yellow-500';
    // Determine button border color
    const buttonBorderColor = updateDate ? 'border-green-500' : 'border-red-500';

    return (
        <div className='bg-gray-100 p-4 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 relative'>
            <div className='relative'>
                <img 
                    src={image} 
                    alt={name} 
                    className={`w-full h-52 object-cover object-center rounded-lg transform transition-all duration-500 ${quantity === 0 ? 'opacity-20' : 'hover:scale-110'}`}
                />
               
                <button 
                    className={`absolute top-2 left-2 bg-[#FFC10C] p-6 rounded-full shadow-lg border-2 ${buttonBorderColor} hover:bg-blue-100`}
                    onClick={handleAddClick}
                >
                    <FaEdit className='text-white w-10 h-10' />
                </button>
            </div>
            
            <h6 className='py-1 text-center font-semibold text-gray-800'>{name}</h6>
            
            <div className={`flex justify-between py-1 ${isUpdatedToday ? 'bg-green-100' : 'bg-red-100'} p-2 rounded-md`}>
                <p className='text-blue-600'>Date</p>
                <p className='text-gray-600'>{submitClickedDate || 'N/A'}</p>
            </div>
            
            <div className='flex justify-between py-1'>
                <p className='text-blue-600'>Time</p>
                <p className='text-gray-600'>{submitClickedTime || 'N/A'}</p>
            </div>
            
            <div className='flex justify-between py-1'>
                <p className='text-blue-600'>Available Quantity</p>
                <p className={`text-gray-800 ${quantityBackground} p-1 rounded-md`}>{quantity}</p>
            </div>

            {modalOpen && (
                <div className='fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50'>
                    <div className='bg-gray-200 rounded-lg p-6 shadow-lg w-96'>
                        <QuantityModal 
                            name={name} 
                            quantity={quantity} 
                            onSubmit={handleQuantitySubmit} 
                            onClose={() => setModalOpen(false)} 
                        />
                    </div>
                </div>
            )}

            
            <div 
                className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center text-white ${isUpdatedToday ? 'bg-green-500' : 'bg-red-500'}`}
            >
                <FaCheck className='w-4 h-4' />
            </div>
        </div>
    );
};

export default CanteenProductCartTab;*/

import React, { useState } from 'react'; 
import { FaEdit, FaCheck } from "react-icons/fa";
import axios from 'axios';
import QuantityModal from './QuantityModal';

const CanteenProductCartTab = (props) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [updateDate, setUpdateDate] = useState(null);
    const { id, name, image, quantity, submitClickedAt } = props.data;

    // Ensure submitClickedAt is valid and not null/undefined
    const [submitClickedDate, submitClickedTime] = submitClickedAt
        ? submitClickedAt.split('T')
        : [null, null];

    // Check if the submit date was today
    const isUpdatedToday = submitClickedDate === new Date().toISOString().split('T')[0];

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
            window.location.reload();

            if (response.status === 204) {
                // Set update date if successful
                setUpdateDate(new Date().toISOString().split('T').join(' '));
                alert('Quantity updated successfully');
            }
        } catch (error) {
            console.error('Error updating quantity', error);
            alert('Error updating quantity');
        }
    };

    // Determine background color for quantity
    const quantityBackground = quantity === 0 ? 'bg-red-500' : 'bg-yellow-500';
    // Determine button border color
  //  const buttonBorderColor = updateDate ? 'border-green-500' : 'border-red-500';

    return (
        <div className='bg-gray-100 p-4 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 relative'>
            <div className='relative'>
                <img 
                    src={image} 
                    alt={name} 
                    className={`w-full h-52 object-cover object-center rounded-lg transform transition-all duration-500 ${quantity === 0 ? 'opacity-20' : 'hover:scale-110'}`}
                />
                {/* Enlarged Edit Button */}
                <button 
                    className={`absolute top-2 left-2 bg-[#FFC10C] p-3 rounded-full shadow-lg  hover:bg-blue-100`}
                    onClick={handleAddClick}
                >
                    <FaEdit className='text-white w-8 h-8' />
                </button>
            </div>
            
            <h6 className='py-1 text-center font-semibold text-gray-800'>{name}</h6>
            
            <div className={`flex justify-between py-1 ${isUpdatedToday ? 'bg-green-100' : 'bg-red-100'} p-2 rounded-md`}>
                <p className='text-blue-600'>Date</p>
                <p className='text-gray-600'>{submitClickedDate || 'N/A'}</p>
            </div>
            
            <div className='flex justify-between py-1'>
                <p className='text-blue-600'>Time</p>
                <p className='text-gray-600'>{submitClickedTime || 'N/A'}</p>
            </div>
            
            <div className='flex justify-between py-1'>
                <p className='text-blue-600'>Available Quantity</p>
                <p className={`text-gray-800 ${quantityBackground} p-1 rounded-md`}>{quantity}</p>
            </div>

            {modalOpen && (
                <div className='fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50'>
                    <div className='bg-gray-200 rounded-lg p-6 shadow-lg w-96'>
                        <QuantityModal 
                            name={name} 
                            quantity={quantity} 
                            onSubmit={handleQuantitySubmit} 
                            onClose={() => setModalOpen(false)} 
                        />
                    </div>
                </div>
            )}

            {/* Round icon with tick mark */}
            <div 
                className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center text-white ${isUpdatedToday ? 'bg-green-500' : 'bg-red-500'}`}
            >
                <FaCheck className='w-4 h-4' />
            </div>
        </div>
    );
};

export default CanteenProductCartTab;

