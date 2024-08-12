import React, { useState } from 'react';

const QuantityModal = ({ onSubmit, onClose }) => {
    const [quantity, setQuantity] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (quantity >= 0) {
            onSubmit(quantity);
        } else {
            alert("Please enter a valid quantity.");
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Update Quantity</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                        min="0"
                        required
                    />
                    <button type="submit">Submit</button>
                    <button type="button" onClick={onClose}>Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default QuantityModal;
