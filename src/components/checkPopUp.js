// PopUp.js
import React from 'react';

const checkPopUp = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-10 rounded-md shadow-md text-center">
        <h2 className="text-lg font-semibold mb-4 text-green-600">Order Successful!</h2>
        <p>Your order was placed successfully.</p>
        <button
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={onClose}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default checkPopUp;
