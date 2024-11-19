// OnHoldPopUp.js

import React, { useEffect, useState } from 'react';

const OnHoldPopUp = () => {
    const [onHoldItems, setOnHoldItems] = useState([]);

    useEffect(() => {
        // Retrieve on hold items from session storage
        const items = JSON.parse(sessionStorage.getItem('onHoldItems')) || [];
        setOnHoldItems(items);
    }, []);

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-80">
                <h2 className="text-2xl font-semibold mb-4">On Hold Items</h2>
                <ul className="space-y-2">
                    {onHoldItems.map((item, index) => (
                        <li key={index} className="flex justify-between items-center">
                            <span>{item.name}</span>
                            <span>Qty: {item.quantity}</span>
                        </li>
                    ))}
                </ul>
                <button
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => window.close()}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default OnHoldPopUp;
