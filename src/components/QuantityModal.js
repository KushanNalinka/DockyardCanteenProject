
import React, { useState } from 'react';

const QuantityModal = ({ name, quantity, onSubmit, onClose }) => {
    const [newQuantity, setNewQuantity] = useState(quantity);

    const handleSubmit = () => {
        onSubmit(newQuantity);
    };

    return (
        <div className='p-4'>
            <h2 className='text-xl font-semibold mb-4'>{`Change Quantity for ${name}`}</h2>
            <div className='mb-4'>
                <p className='text-lg'>Current Quantity: {quantity}</p>
            </div>
            <div className='mb-4'>
                <label htmlFor='newQuantity' className='block text-lg font-medium mb-2'>New Quantity</label>
                <input 
                    id='newQuantity' 
                    type='number' 
                    value={newQuantity} 
                    onChange={(e) => setNewQuantity(Number(e.target.value))} 
                    className='border border-gray-300 rounded p-2 w-full' 
                />
            </div>
            <div className='flex justify-between'>
                <button 
                    onClick={handleSubmit} 
                    className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
                >
                    Submit
                </button>
                <button 
                    onClick={onClose} 
                    className='bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600'
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default QuantityModal;
