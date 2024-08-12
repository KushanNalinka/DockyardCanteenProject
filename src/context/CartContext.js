import React, { createContext, useState, useContext } from 'react';

// Create a context with default values
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const updateCart = (items) => {
    setCartItems(items);
  };

  return (
    <CartContext.Provider value={{ cartItems, updateCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for easy access to context
export const useCart = () => useContext(CartContext);
