/*import React from 'react' 
import { useSelector, useDispatch } from 'react-redux' 
import CartItem from './cartItem';
import { toggleStatusTab } from '../stores/cart';

const CartTab = () => {
    const carts = useSelector(store => store.cart.items);
    const statusTab = useSelector(store => store.cart.statusTab);
    const dispatch = useDispatch();
    const handleCloseTabCart = () => {
        dispatch(toggleStatusTab());
    }
   

  return (
    <div className={`fixed top-0 right-0 bg-gray-700 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px] 
    transform transition-transform duration-500
    ${statusTab === false ? "translate-x-full" : ""}
    `}>
        <h2 className='p-5 text-white text-2xl'>Shopping Cart</h2>
        <div className='p-5'>
            {carts.map((item, key) => 
                <CartItem key={key} data={item}/>
            )}
        </div>
        <div className='grid grid-cols-2'>
            <button className='bg-black text-white' onClick={handleCloseTabCart}>CLOSE</button>
            <button className='bg-amber-600 text-white'>CHECKOUT</button>
        </div>
    </div>
  )
}

export default CartTab*/
/*import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './cartItem'; // Ensure case matches the filename
import { toggleStatusTab } from '../stores/cart';
import { products } from '../products'; // Import products

const CartTab = () => {
    const carts = useSelector(store => store.cart.items);
    const statusTab = useSelector(store => store.cart.statusTab);
    const dispatch = useDispatch();

    const handleCloseTabCart = () => {
        dispatch(toggleStatusTab());
    }

    // Calculate total amount
    const totalAmount = carts.reduce((total, item) => {
        const product = products.find(product => product.id === item.productId);
        return total + (product.price * item.quantity);
    }, 0);

    return (
        <div className={`fixed top-0 right-0 bg-gray-700 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px] 
        transform transition-transform duration-500
        ${statusTab === false ? "translate-x-full" : ""}
        `}>
            <h2 className='p-5 text-white text-2xl'>Shopping Cart</h2>
            <div className='p-5'>
                {carts.map((item, key) => 
                    <CartItem key={key} data={item}/>
                )}
            </div>
            <div className='p-5 text-white'>
                <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
            </div>
            <div className='grid grid-cols-2'>
                <button className='bg-black text-white' onClick={handleCloseTabCart}>CLOSE</button>
                <button className='bg-amber-600 text-white'>CHECKOUT</button>
            </div>
        </div>
    )
}

export default CartTab;*/
/*import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './cartItem';
import { toggleStatusTab, clearCart } from '../stores/cart';
import { products } from '../products'; // Import products

const CartTab = () => {
    const carts = useSelector(store => store.cart.items);
    const statusTab = useSelector(store => store.cart.statusTab);
    const dispatch = useDispatch();
    const [serviceNumber, setServiceNumber] = useState('');

    const handleCloseTabCart = () => {
        dispatch(toggleStatusTab());
    }

    // Calculate total amount
    const totalAmount = carts.reduce((total, item) => {
        const product = products.find(product => product.id === item.productId);
        return total + (product.price * item.quantity);
    }, 0);

    const handleCheckout = () => {
        // Extract product names
        const itemsWithNames = carts.map(item => {
            const product = products.find(product => product.id === item.productId);
            return {
                ...item,
                name: product.name,
            };
        });

        // Mock database insertion
        const purchaseData = {
            items: itemsWithNames,
            totalAmount,
            serviceNumber,
        };
        console.log('Inserting data into the database:', purchaseData);

        // Clear the cart
        dispatch(clearCart());

        // Clear the service number input box
        setServiceNumber('');
    };

    return (
        <div className={`fixed top-0 right-0 bg-gray-700 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px] 
        transform transition-transform duration-500
        ${statusTab === false ? "translate-x-full" : ""}
        `}>
            <h2 className='p-5 text-white text-2xl'>Shopping Cart</h2>
            <div className='p-5'>
                {carts.map((item, key) => 
                    <CartItem key={key} data={item}/>
                )}
            </div>
            <div className='p-5 text-white'>
                <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
            </div>
            <div className='p-5'>
                <input
                    type="text"
                    placeholder="Enter Service Number"
                    value={serviceNumber}
                    onChange={(e) => setServiceNumber(e.target.value)}
                    className='w-full p-2 mb-2 rounded-md'
                />
            </div>
            <div className='grid grid-cols-2'>
                <button className='bg-black text-white' onClick={handleCloseTabCart}>CLOSE</button>
                <button className='bg-amber-600 text-white' onClick={handleCheckout}>CHECKOUT</button>
            </div>
        </div>
    )
}

export default CartTab;*/
/*import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './cartItem';
import { toggleStatusTab, clearCart } from '../stores/cart';
import { products } from '../products'; // Import products

const CartTab = () => {
    const carts = useSelector(store => store.cart.items);
    const statusTab = useSelector(store => store.cart.statusTab);
    const dispatch = useDispatch();
    const [serviceNumber, setServiceNumber] = useState('');

    const handleCloseTabCart = () => {
        dispatch(toggleStatusTab());
    }

    // Calculate total amount
    const totalAmount = carts.reduce((total, item) => {
        const product = products.find(product => product.id === item.productId);
        return total + (product.price * item.quantity);
    }, 0);

    const handleCheckout = () => {
        // Extract product names
        const itemsWithNames = carts.map(item => {
            const product = products.find(product => product.id === item.productId);
            return {
                ...item,
                name: product.name,
            };
        });

        // Mock database insertion
        const purchaseData = {
            items: itemsWithNames,
            totalAmount,
            serviceNumber,
        };
        console.log('Inserting data into the database:', purchaseData);

        // Clear the cart
        dispatch(clearCart());

        // Clear the service number input box
        setServiceNumber('');
    };

    return (
        <div className={`fixed top-0 right-0 bg-gray-700 shadow-2xl w-96 h-full flex flex-col 
        transform transition-transform duration-500
        ${statusTab === false ? "translate-x-full" : ""}
        `}>
            <h2 className='p-5 text-white text-2xl'>Shopping Cart</h2>
            <div className='p-5 flex-grow overflow-y-auto'>
                {carts.map((item, key) => 
                    <CartItem key={key} data={item}/>
                )}
            </div>
            <div className='p-5 text-white'>
                <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
            </div>
            <div className='p-5'>
                <input
                    type="text"
                    placeholder="Enter Service Number"
                    value={serviceNumber}
                    onChange={(e) => setServiceNumber(e.target.value)}
                    className='w-full p-2 mb-2 rounded-md'
                />
            </div>
            <div className='grid grid-cols-2'>
                <button className='bg-black text-white' onClick={handleCloseTabCart}>CLOSE</button>
                <button className='bg-amber-600 text-white' onClick={handleCheckout}>CHECKOUT</button>
            </div>
        </div>
    )
}

export default CartTab;*/

/*import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './cartItem';
import { closeStatusTab, clearCart } from '../stores/cart';
import { products } from '../products'; // Import products

const CartTab = () => {
    const carts = useSelector(store => store.cart.items);
    const statusTab = useSelector(store => store.cart.statusTab);
    const dispatch = useDispatch();
    const [serviceNumber, setServiceNumber] = useState('');

    const handleCloseTabCart = () => {
        dispatch(closeStatusTab());
    }

    // Calculate total amount
    const totalAmount = carts.reduce((total, item) => {
        const product = products.find(product => product.id === item.productId);
        return total + (product.price * item.quantity);
    }, 0);

    const handleCheckout = () => {
        // Extract product names
        const itemsWithNames = carts.map(item => {
            const product = products.find(product => product.id === item.productId);
            return {
                ...item,
                name: product.name,
            };
        });

        // Mock database insertion
        const purchaseData = {
            items: itemsWithNames,
            totalAmount,
            serviceNumber,
        };
        console.log('Inserting data into the database:', purchaseData);

        // Clear the cart
        dispatch(clearCart());

        // Clear the service number input box
        setServiceNumber('');
    };

    return (
        <div className={`fixed top-0 right-0  bg-blue-200 bg-opacity-50 shadow-2xl w-96 h-full flex flex-col transform transition-transform duration-500 ${statusTab ? '' : 'translate-x-full'}`}>
            <h2 className='p-5 text-[#28245F] font-semibold text-2xl text-center '>SHOPPING CART</h2>
            <div className='p-5 flex-grow overflow-y-auto'>
                {carts.map((item, key) => 
                    <CartItem key={key} data={item}/>
                )}
            </div>
            <div className='p-5 text-white'>
                <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
            </div>
            <div className='p-5'>
                <input
                    type="text"
                    placeholder="Enter Service Number"
                    value={serviceNumber}
                    onChange={(e) => setServiceNumber(e.target.value)}
                    className='w-full p-2 mb-2 rounded-md'
                />
            </div>
            <div className='grid grid-cols-2'>
                <button className='bg-[#28245F] text-white px-5 py-3 text-lg' onClick={handleCloseTabCart}>CLOSE</button>
                <button className='bg-[#FFC10C] text-white px-5 py-3 text-lg' onClick={handleCheckout}>CHECKOUT</button>
            </div>
        </div>
    )
}

export default CartTab;*/
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './cartItem';
import { closeStatusTab, clearCart } from '../stores/cart';
import { products } from '../products'; // Import products

const CartTab = () => {
    const carts = useSelector(store => store.cart.items);
    const statusTab = useSelector(store => store.cart.statusTab);
    const dispatch = useDispatch();
    const [serviceNumber, setServiceNumber] = useState('');

    

    // Calculate total amount
    const totalAmount = carts.reduce((total, item) => {
        const product = products.find(product => product.id === item.productId);
        return total + (product.price * item.quantity);
    }, 0);

    const handleCheckout = () => {
        // Extract product names
        const itemsWithNames = carts.map(item => {
            const product = products.find(product => product.id === item.productId);
            return {
                ...item,
                name: product.name,
            };
        });

        // Mock database insertion
        const purchaseData = {
            items: itemsWithNames,
            totalAmount,
            serviceNumber,
        };
        console.log('Inserting data into the database:', purchaseData);

        // Clear the cart
        dispatch(clearCart());

        // Clear the service number input box
        setServiceNumber('');
    };

    return (
        <div className={`fixed top-0 right-0  bg-blue-200 bg-opacity-50 shadow-2xl w-96 h-full flex flex-col transform transition-transform duration-500 ${statusTab ? '' : 'translate-x-full'}`}>
            <h2 className='p-5 text-[#28245F] font-semibold text-2xl text-center '>SHOPPING CART</h2>
            <div className='p-5 flex-grow overflow-y-auto'>
                {carts.map((item, key) => 
                    <CartItem key={key} data={item}/>
                )}
            </div>
            <div className='p-5 text-white'>
                <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
            </div>
            <div className='p-5'>
                <input
                    type="text"
                    placeholder="Enter Service Number"
                    value={serviceNumber}
                    onChange={(e) => setServiceNumber(e.target.value)}
                    className='w-full p-2 mb-2 rounded-md'
                />
            </div>
            <div className='grid grid-cols-2'>
                <button className='bg-[#28245F] text-white px-5 py-3 text-lg'>CLOSE</button>
                <button className='bg-[#FFC10C] text-white px-5 py-3 text-lg' onClick={handleCheckout}>CHECKOUT</button>
            </div>
        </div>
    )
}

export default CartTab;





