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
/*
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
        <div className={fixed top-0 right-0  bg-blue-200 bg-opacity-50 shadow-2xl w-96 h-full flex flex-col transform transition-transform duration-500 ${statusTab ? '' : 'translate-x-full'}}>
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
*/
/*import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './cartItem';
import { closeStatusTab, clearCart } from '../stores/cart';
import { products } from '../products'; // Import products

//
import axios from 'axios'; // Import Axios for API calls


const CartTab = () => {
    const carts = useSelector(store => store.cart.items);
    const statusTab = useSelector(store => store.cart.statusTab);
    const dispatch = useDispatch();
    const [serviceNumber, setServiceNumber] = useState('');

    //
    const [serviceUserName, setServiceUserName] = useState('');


    

    // Calculate total amount
    const totalAmount = carts.reduce((total, item) => {
        const product = products.find(product => product.id === item.productId);
        return total + (product.price * item.quantity);
    }, 0);


    //
    useEffect(() => {
        if (serviceNumber) {
            // Fetch user name by service number
            axios.get(`http://localhost:5255/api/ServiceUser/${serviceNumber}`)
                .then(response => {
                    setServiceUserName(response.data.name);
                })
                .catch(error => {
                    setServiceUserName(''); // Clear user name if service number is invalid
                    console.error('Service number not found:', error);
                });
        }
    }, [serviceNumber]);
//


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
            //
            serviceUserName,
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
                <h4>Service User: {serviceUserName}</h4>
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

export default CartTab;*/

/*import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './cartItem';
import {  clearCart } from '../stores/cart';
import { products } from '../products'; // Import products
import axios from 'axios'; // Import Axios for API calls
import debounce from 'lodash.debounce';

const CartTab = () => {
    const carts = useSelector(store => store.cart.items);
    const statusTab = useSelector(store => store.cart.statusTab);
    const dispatch = useDispatch();
    const [serviceNumber, setServiceNumber] = useState('');
    const [serviceUserName, setServiceUserName] = useState('');
    const [serviceError, setServiceError] = useState('');

    // Calculate total amount
    const totalAmount = carts.reduce((total, item) => {
        const product = products.find(product => product.id === item.productId);
        return total + (product.price * item.quantity);
    }, 0);

    // Debounce function to delay API call
    const fetchServiceUserName = debounce((number) => {
        if (number) {
            axios.get(`http://localhost:5255/api/ServiceUser/${number}`)
                .then(response => {
                    setServiceUserName(response.data.name);
                    setServiceError(''); // Clear error if found
                })
                .catch(error => {
                    setServiceUserName(''); // Clear user name if service number is invalid
                    setServiceError('Service number not found');
                    console.error('Service number not found:', error);
                });
        } else {
            setServiceUserName(''); // Clear username if input is empty
            setServiceError('');
        }
    }, 300); // Adjust delay as needed

    // Effect to fetch user name by service number
    useEffect(() => {
        fetchServiceUserName(serviceNumber);
    }, [serviceNumber]);

    // const handleCheckout = () => {
    //     // Extract product names
    //     const itemsWithNames = carts.map(item => {
    //         const product = products.find(product => product.id === item.productId);
    //         return {
    //             ...item,
    //             name: product.name,
    //         };
    //     });

    //     // Mock database insertion
    //     const purchaseData = {
    //         items: itemsWithNames,
    //         totalAmount,
    //         serviceNumber,
    //         serviceUserName,
    //     };
    //     console.log('Inserting data into the database:', purchaseData);
        


        const handleCheckout = async () => {
            // Extract product names
            const itemsWithNames = carts.map(item => {
                const product = products.find(product => product.id === item.productId);
                return {
                    productId: item.productId,
                    name: product.name,
                    quantity: item.quantity,
                };
            });
        
            // Prepare the purchase data
            const purchaseData = {
                items: itemsWithNames,
                totalAmount,
                serviceNumber,
                serviceUserName,
            };
        
            try {
                const response = await axios.post("http://localhost:5255/api/orders/checkout", purchaseData);
                console.log('Order successfully placed:', response.data);
            } catch (error) {
                console.error('Error during checkout:', error);
            }
        

        // Clear the cart
        dispatch(clearCart());

        // Clear the service number input box
        setServiceNumber('');
    };

    return (
        <div className={`fixed top-0 right-0 bg-blue-200 bg-opacity-50 shadow-2xl w-96 h-full flex flex-col transform transition-transform duration-500 ${statusTab ? '' : 'translate-x-full'}`}>
            <h2 className='p-5 text-[#28245F] font-semibold text-2xl text-center'>SHOPPING CART</h2>
            <div className='p-5 flex-grow overflow-y-auto'>
                {carts.map((item, key) => 
                    <CartItem key={key} data={item}/>
                )}
            </div>

            <div className='p-5 text-white'>
                <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
                <h4>Service User: {serviceUserName || 'N/A'}</h4>
                {serviceError && <p className="text-red-500">{serviceError}</p>}
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
                <button className='bg-[#FFC10C] text-white px-5 py-3 text-lg' onClick={handleCheckout} disabled={!serviceNumber || !serviceUserName}>CHECKOUT</button>
            </div>
        </div>
    );
}

export default CartTab;*/
/*import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './cartItem';
import { clearCart } from '../stores/cart';
import { products } from '../products'; // Import products
import axios from 'axios'; // Import Axios for API calls

const CartTab = () => {
    const carts = useSelector((store) => store.cart.items);
    const statusTab = useSelector((store) => store.cart.statusTab);
    const dispatch = useDispatch();
    const [serviceNumber, setServiceNumber] = useState('');
    const [serviceUserName, setServiceUserName] = useState('');
    const [serviceError, setServiceError] = useState('');

    // Calculate total amount
    const totalAmount = carts.reduce((total, item) => {
        const product = products.find((product) => product.id === item.productId);
        return total + product.price * item.quantity;
    }, 0);

    // Fetch service user name by service number
    const fetchServiceUserName = async (number) => {
        if (number) {
            try {
                const response = await axios.get(`http://localhost:5255/api/ServiceUser/${number}`);
                setServiceUserName(response.data.name);
                setServiceError(''); // Clear error if found
            } catch (error) {
                setServiceUserName(''); // Clear user name if service number is invalid
                setServiceError('Service number not found');
                console.error('Service number not found:', error);
            }
        } else {
            setServiceUserName(''); // Clear username if input is empty
            setServiceError('');
        }
    };

    // Handle confirmation of the service number
    const handleConfirmServiceNumber = () => {
        fetchServiceUserName(serviceNumber);
    };

    const handleCheckout = async () => {
        // Extract product names
        const itemsWithNames = carts.map((item) => {
            const product = products.find((product) => product.id === item.productId);
            return {
                productId: item.productId,
                name: product.name,
                quantity: item.quantity,
            };
        });

        // Prepare the purchase data
        const purchaseData = {
            items: itemsWithNames,
            totalAmount,
            serviceNumber,
            serviceUserName,
        };

        try {
            const response = await axios.post('http://localhost:5255/api/orders/checkout', purchaseData);
            console.log('Order successfully placed:', response.data);
        } catch (error) {
            console.error('Error during checkout:', error);
        }

        // Clear the cart
        dispatch(clearCart());

        // Clear the service number input box
        setServiceNumber('');
    };

    
const handleBuyNow = async () => {
    const itemsWithNames = carts.map((item) => {
        const product = products.find((product) => product.id === item.productId);
        return {
            productId: item.productId,
            name: product.name,
            quantity: item.quantity,
        };
    });

    // Prepare the purchase data
    const purchaseData = {
        items: itemsWithNames,
        totalAmount,
        serviceNumber,
        serviceUserName,
    };

    try {
        const response = await axios.post('http://localhost:5255/api/Purchased/buynow', purchaseData);
        console.log('Purchase successfully made:', response.data);
    } catch (error) {
        console.error('Error during purchase:', error.response.data || error.message);
    }

    // Clear the cart
    dispatch(clearCart());

    // Clear the service number input box
    setServiceNumber('');
};



    return (
        <div
            className={`fixed top-0 right-0 bg-blue-200 bg-opacity-50 shadow-2xl w-96 h-full flex flex-col transform transition-transform duration-500 ${
                statusTab ? '' : 'translate-x-full'
            }`}
        >
            <h2 className="p-5 text-[#28245F] font-semibold text-2xl text-center">SHOPPING CART</h2>
            <div className="p-5 flex-grow overflow-y-auto">
                {carts.map((item, key) => (
                    <CartItem key={key} data={item} />
                ))}
            </div>

            <div className="p-5 text-white">
                <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
                <h4>Service User: {serviceUserName || 'N/A'}</h4>
                {serviceError && <p className="text-red-500">{serviceError}</p>}
            </div>

            <div className="p-5">
                <input
                    type="text"
                    placeholder="Enter Service Number"
                    value={serviceNumber}
                    onChange={(e) => setServiceNumber(e.target.value)}
                    className="w-full p-2 mb-2 rounded-md"
                />
                <button
                    className="bg-[#28245F] text-white px-5 py-2 mt-2 w-full rounded-md"
                    onClick={handleConfirmServiceNumber}
                >
                    Confirm Service Number
                </button>
            </div>

            <div className="grid grid-cols-2">
            <button
        className="bg-[#28245F] text-white px-5 py-3 text-lg"
        onClick={handleBuyNow}
        disabled={!serviceNumber || !serviceUserName}
    >
        BUY NOW
    </button>
                <button
                    className="bg-[#FFC10C] text-white px-5 py-3 text-lg"
                    onClick={handleCheckout}
                    disabled={!serviceNumber || !serviceUserName}
                >
                    CHECKOUT
                </button>
            </div>
        </div>
    );
};

export default CartTab;*/
// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import CartItem from './cartItem';
// import { clearCart } from '../stores/cart';
// import { products } from '../products'; // Import products
// import axios from 'axios'; // Import Axios for API calls

// const CartTab = () => {
//     const carts = useSelector((store) => store.cart.items);
//     const statusTab = useSelector((store) => store.cart.statusTab);
//     const dispatch = useDispatch();
//     const [serviceNumber, setServiceNumber] = useState('');
//     const [serviceUserName, setServiceUserName] = useState('');
//     const [serviceError, setServiceError] = useState('');
//     const [orderConfirmed, setOrderConfirmed] = useState(false); // New state for order confirmation

//     // Calculate total amount
//     const totalAmount = carts.reduce((total, item) => {
//         const product = products.find((product) => product.id === item.productId);
//         return total + product.price * item.quantity;
//     }, 0);

//     // Fetch service user name by service number
//     const fetchServiceUserName = async (number) => {
//         if (number) {
//             try {
//                 const response = await axios.get(`http://localhost:5255/api/ServiceUser/${number}`);
//                 setServiceUserName(response.data.name);
//                 setServiceError(''); // Clear error if found
//             } catch (error) {
//                 setServiceUserName(''); // Clear user name if service number is invalid
//                 setServiceError('Service number not found');
//                 console.error('Service number not found:', error);
//             }
//         } else {
//             setServiceUserName(''); // Clear username if input is empty
//             setServiceError('');
//         }
//     };

//     // Handle confirmation of the service number
//     const handleConfirmServiceNumber = () => {
//         fetchServiceUserName(serviceNumber);
//     };

//       // Handle order confirmation
//       const handleConfirmOrder = () => {
//         setOrderConfirmed(true);
//         // Additional logic to handle order confirmation can be added here
//     };

//     const handleCheckout = async () => {
//         // Extract product names
//         const itemsWithNames = carts.map((item) => {
//             const product = products.find((product) => product.id === item.productId);
//             return {
//                 productId: item.productId,
//                 name: product.name,
//                 quantity: item.quantity,
//             };
//         });

//         // Prepare the purchase data
//         const purchaseData = {
//             items: itemsWithNames,
//             totalAmount,
//             serviceNumber,
//             serviceUserName,
//         };

//         try {
//             const response = await axios.post('http://localhost:5255/api/orders/checkout', purchaseData);
//             console.log('Order successfully placed:', response.data);
//         } catch (error) {
//             console.error('Error during checkout:', error);
//         }

//         // Clear the cart
//         dispatch(clearCart());

//         // Clear the service number input box
//         setServiceNumber('');
//     };

//     const handleBuyNow = async () => {
//         const itemsWithNames = carts.map((item) => {
//             const product = products.find((product) => product.id === item.productId);
//             return {
//                 productId: item.productId,
//                 name: product.name,
//                 quantity: item.quantity,
//             };
//         });

//         // Prepare the purchase data
//         const purchaseData = {
//             items: itemsWithNames,
//             totalAmount,
//             serviceNumber,
//             serviceUserName,
//         };

//         try {
//             const response = await axios.post('http://localhost:5255/api/Purchased/buynow', purchaseData);
//             console.log('Purchase successfully made:', response.data);
//         } catch (error) {
//             console.error('Error during purchase:', error.response.data || error.message);
//         }

//         // Clear the cart
//         dispatch(clearCart());

//         // Clear the service number input box
//         setServiceNumber('');
//     };

//     // Handle opening the application in a new tab
//     const handleOpenApplication = () => {
//         // Open the application in a new tab
//         window.open('http://localhost:3000', '_blank'); // Adjust the URL to point to your application
//     };

//     return (
//         <div
//         className={`fixed top-0 right-0 bg-blue-200 bg-opacity-50 shadow-2xl w-96 h-full flex flex-col transform transition-transform duration-500 ${
//             statusTab ? '' : 'translate-x-full'
//         }`}
//     >
//         <div className="p-5 flex justify-between items-center">
//             <h2 className="text-[#28245F] font-semibold text-2xl text-center">SHOPPING CART</h2>
//             <button
//                 className="bg-[#FFC10C] text-white px-3 py-1 rounded-md"
//                 onClick={handleOpenApplication}
//             >
//                 On Hold
//             </button>
//         </div>
       
//             <div className="p-5 flex-grow overflow-y-auto">
//                 {carts.map((item, key) => (
//                     <CartItem key={key} data={item} />
//                 ))}
               
//             </div>

//             <div className="p-5 text-white">
//                 <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
//                 <h4>Service User: {serviceUserName || 'N/A'}</h4>
//                 {serviceError && <p className="text-red-500">{serviceError}</p>}
//             </div>

//             {/* New button for order confirmation */}
//             <div className="p-5">
//                 <button
//                     className="bg-[#28245F] text-white px-5 py-2 mt-2 w-full rounded-md"
//                     onClick={handleConfirmOrder}
//                 >
//                     Confirm this order
//                 </button>
//                 {orderConfirmed && <p className="text-green-500 mt-2">Order Confirmed</p>}
//             </div>

//             <div className="p-5">
//                 <input
//                     type="text"
//                     placeholder="Enter Service Number"
//                     value={serviceNumber}
//                     onChange={(e) => setServiceNumber(e.target.value)}
//                     className="w-full p-2 mb-2 rounded-md"
//                 />
//                 <button
//                     className="bg-[#28245F] text-white px-5 py-2 mt-2 w-full rounded-md"
//                     onClick={handleConfirmServiceNumber}
//                 >
//                     Confirm Service Number
//                 </button>
//             </div>

//             <div className="grid grid-cols-2">
//                 <button
//                     className="bg-[#28245F] text-white px-5 py-3 text-lg"
//                     onClick={handleBuyNow}
//                     disabled={!serviceNumber || !serviceUserName}
//                 >
//                     BUY NOW
//                 </button>
//                 <button
//                     className="bg-[#FFC10C] text-white px-5 py-3 text-lg"
//                     onClick={handleCheckout}
//                     disabled={!serviceNumber || !serviceUserName}
//                 >
//                     CHECKOUT
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default CartTab;


// THE MOST CORRECTED  CART TAB

/*import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './cartItem';
import { clearCart } from '../stores/cart';
import { products } from '../products'; // Import products
import axios from 'axios'; // Import Axios for API calls

const CartTab = () => {
    const carts = useSelector((store) => store.cart.items);
    const statusTab = useSelector((store) => store.cart.statusTab);
    const dispatch = useDispatch();
    const [serviceNumber, setServiceNumber] = useState('');
    const [serviceUserName, setServiceUserName] = useState('');
    const [serviceError, setServiceError] = useState('');

    // Calculate total amount
    const totalAmount = carts.reduce((total, item) => {
        const product = products.find((product) => product.id === item.productId);
        return total + product.price * item.quantity;
    }, 0);

    // Fetch service user name by service number
    const fetchServiceUserName = async (number) => {
        if (number) {
            try {
                const response = await axios.get(`http://localhost:5255/api/ServiceUser/${number}`);
                setServiceUserName(response.data.name);
                setServiceError(''); // Clear error if found
            } catch (error) {
                setServiceUserName(''); // Clear user name if service number is invalid
                setServiceError('Service number not found');
                console.error('Service number not found:', error);
            }
        } else {
            setServiceUserName(''); // Clear username if input is empty
            setServiceError('');
        }
    };

    // Handle confirmation of the service number
    const handleConfirmServiceNumber = () => {
        fetchServiceUserName(serviceNumber);
    };

    const handleCheckout = async () => {
        const itemsWithNames = carts.map((item) => {
            const product = products.find((product) => product.id === item.productId);
            return {
                productId: item.productId,
                name: product.name,
                quantity: item.quantity,
            };
        });

        const purchaseData = {
            items: itemsWithNames,
            totalAmount,
            serviceNumber,
            serviceUserName,
        };
        console.log('Inserting data into the database:', purchaseData);

        try {
            const response = await axios.post('http://localhost:5255/api/orders/checkout', purchaseData);
            console.log('Order successfully placed:', response.data);
           
        } catch (error) {
            console.error('Error during checkout:', error);
        }

        dispatch(clearCart());
        setServiceNumber('');
    };

    const handleBuyNow = async () => {
        const itemsWithNames = carts.map((item) => {
            const product = products.find((product) => product.id === item.productId);
            return {
                productId: item.productId,
                name: product.name,
                quantity: item.quantity,
            };
        });

        const purchaseData = {
            items: itemsWithNames,
            totalAmount,
            serviceNumber,
            serviceUserName,
        };
        console.log('Inserting data into the database:', purchaseData);

        try {
            const response = await axios.post('http://localhost:5255/api/Purchased/buynow', purchaseData);
            console.log('Purchase successfully made:', response.data);
           
        } catch (error) {
            console.error('Error during purchase:', error.response.data || error.message);
        }

        dispatch(clearCart());
        setServiceNumber('');
    };

    const handleOpenApplication = () => {
        window.open('http://localhost:3000', '_blank');
    };

    const handleConfirmOrder = async () => {
        // Prepare data for reducing product quantities
        const reduceData = carts.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
        }));

        try {
            const response = await axios.post('http://localhost:5255/api/Product/reduceQuantity', reduceData);
            console.log('Product quantities reduced:', response.data);
        } catch (error) {
            console.error('Error reducing product quantities:', error.response.data || error.message);
        }
    };

    return (
        <div
            className={`fixed top-0 right-0 bg-blue-200 bg-opacity-50 shadow-2xl w-96 h-full flex flex-col transform transition-transform duration-500 ${
                statusTab ? '' : 'translate-x-full'
            }`}
        >
            <div className="p-5 flex justify-between items-center">
                <h2 className="text-[#28245F] font-semibold text-2xl text-center">SHOPPING CART</h2>
                <button
                    className="bg-[#FFC10C] text-white px-3 py-1 rounded-md"
                    onClick={handleOpenApplication}
                >
                    On Hold
                </button>
            </div>

            <div className="p-5 flex-grow overflow-y-auto">
                {carts.map((item, key) => (
                    <CartItem key={key} data={item} />
                ))}
            </div>

            <div className="p-5 text-white">
                <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
                <h4>Service User: {serviceUserName || 'N/A'}</h4>
                {serviceError && <p className="text-red-500">{serviceError}</p>}
            </div>

            <div className="p-5">
                <input
                    type="text"
                    placeholder="Enter Service Number"
                    value={serviceNumber}
                    onChange={(e) => setServiceNumber(e.target.value)}
                    className="w-full p-2 mb-2 rounded-md"
                />
                <button
                    className="bg-[#28245F] text-white px-5 py-2 mt-2 w-full rounded-md"
                    onClick={handleConfirmServiceNumber}
                >
                    Confirm Service Number
                </button>
                <button
                    className="bg-[#28A745] text-white px-5 py-2 mt-2 w-full rounded-md"
                    onClick={handleConfirmOrder}
                >
                    Confirm This Order
                </button>
            </div>

            <div className="grid grid-cols-2">
                <button
                    className="bg-[#28245F] text-white px-5 py-3 text-lg"
                    onClick={handleBuyNow}
                    disabled={!serviceNumber || !serviceUserName}
                >
                    BUY NOW
                </button>
                <button
                    className="bg-[#FFC10C] text-white px-5 py-3 text-lg"
                    onClick={handleCheckout}
                    disabled={!serviceNumber || !serviceUserName}
                >
                    CHECKOUT
                </button>
            </div>
        </div>
    );
};

export default CartTab;*/




// Cotrrected code according to me confirm order/ input box/ confirm service no
/*import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './cartItem';
import { clearCart } from '../stores/cart';
import axios from 'axios';

const CartTab = () => {
    const carts = useSelector((store) => store.cart.items);
    const statusTab = useSelector((store) => store.cart.statusTab);
    const dispatch = useDispatch();
    const [serviceNumber, setServiceNumber] = useState('');
    const [serviceUserName, setServiceUserName] = useState('');
    const [serviceError, setServiceError] = useState('');
    const [products, setProducts] = useState([]); // State to hold products

   

    // Calculate total amount
    const totalAmount = carts.reduce((total, item) => {
        const product = products.find((product) => product.id === item.productId);
        return total + (product ? product.price * item.quantity : 0);
    }, 0);

    // Fetch service user name by service number
    const fetchServiceUserName = async (number) => {
        if (number) {
            try {
                const response = await axios.get(`http://localhost:5255/api/ServiceUser/${number}`);
                setServiceUserName(response.data.name);
                setServiceError(''); // Clear error if found
            } catch (error) {
                setServiceUserName(''); // Clear user name if service number is invalid
                setServiceError('Service number not found');
                console.error('Service number not found:', error);
            }
        } else {
            setServiceUserName(''); // Clear username if input is empty
            setServiceError('');
        }
    };

    // Handle confirmation of the service number
    const handleConfirmServiceNumber = () => {
        fetchServiceUserName(serviceNumber);
    };

    const handleCheckout = async () => {
        const itemsWithNames = carts.map((item) => {
            const product = products.find((product) => product.id === item.productId);
            return {
                productId: item.productId,
                name: product.name,
                quantity: item.quantity,
            };
        });

        const purchaseData = {
            items: itemsWithNames,
            totalAmount,
            serviceNumber,
            serviceUserName,
        };
        console.log('Inserting data into the database:', purchaseData);

        try {
            const response = await axios.post('http://localhost:5255/api/orders/checkout', purchaseData);
            console.log('Order successfully placed:', response.data);
        } catch (error) {
            console.error('Error during checkout:', error);
        }

        dispatch(clearCart());
        setServiceNumber('');
    };

    const handleBuyNow = async () => {
        const itemsWithNames = carts.map((item) => {
            const product = products.find((product) => product.id === item.productId);
            return {
                productId: item.productId,
                name: product.name,
                quantity: item.quantity,
            };
        });

        const purchaseData = {
            items: itemsWithNames,
            totalAmount,
            serviceNumber,
            serviceUserName,
        };
        console.log('Inserting data into the database:', purchaseData);

        try {
            const response = await axios.post('http://localhost:5255/api/Purchased/buynow', purchaseData);
            console.log('Purchase successfully made:', response.data);

           

        } catch (error) {
            console.error('Error during purchase:', error.response.data || error.message);
        }

        dispatch(clearCart());
        setServiceNumber('');

         // Refresh the entire window after a successful purchase
        // window.location.reload();
    };

    const handleOpenApplication = () => {
        window.open('http://localhost:3000', '_blank');
    };

    const handleConfirmOrder = async () => {
        // Prepare data for reducing product quantities
        const reduceData = carts.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
        }));

        try {
            const response = await axios.post('http://localhost:5255/api/Product/reduceQuantity', reduceData);
            console.log('Product quantities reduced:', response.data);

            // Fetch updated products
            const updatedResponse = await axios.get('http://localhost:5255/api/Product');
            setProducts(updatedResponse.data);

        } catch (error) {
            console.error('Error reducing product quantities:', error.response.data || error.message);
        }
    };

    return (
        <div
            className={`fixed top-0 right-0 bg-blue-200 bg-opacity-50 shadow-2xl w-96 h-full flex flex-col transform transition-transform duration-500 ${statusTab ? '' : 'translate-x-full'}`}
        >
            <div className="p-5 flex justify-between items-center">
                <h2 className="text-[#28245F] font-semibold text-2xl text-center">SHOPPING CART</h2>
                <button
                    className="bg-[#FFC10C] text-white px-3 py-1 rounded-md"
                    onClick={handleOpenApplication}
                >
                    On Hold
                </button>
            </div>

            <div className="p-5 flex-grow overflow-y-auto">
                {carts.map((item, key) => (
                    <CartItem key={key} data={item} />
                ))}
            </div>

            <div className="p-5 text-white">
                <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
                <h4>Service User: {serviceUserName || 'N/A'}</h4>
                {serviceError && <p className="text-red-500">{serviceError}</p>}
            </div>
            <button
          className="bg-[#28A745] text-white px-5 py-2 mt-2 w-full rounded-md"
          onClick={handleConfirmOrder}
        >
          Confirm This Order
        </button>

            <div className="p-5">
                <input
                    type="text"
                    placeholder="Enter Service Number"
                    value={serviceNumber}
                    onChange={(e) => setServiceNumber(e.target.value)}
                    className="w-full p-2 mb-2 rounded-md"
                />
                <button
                    className="bg-[#28245F] text-white px-5 py-2 mt-2 w-full rounded-md"
                    onClick={handleConfirmServiceNumber}
                >
                    Confirm Service Number
                </button>
               
            </div>

            <div className="grid grid-cols-2">
                <button
                    className="bg-[#28245F] text-white px-5 py-3 text-lg"
                    onClick={handleBuyNow}
                    disabled={!serviceNumber || !serviceUserName}
                >
                    BUY NOW
                </button>
                <button
                    className="bg-[#FFC10C] text-white px-5 py-3 text-lg"
                    onClick={handleCheckout}
                    disabled={!serviceNumber || !serviceUserName}
                >
                    CHECKOUT
                </button>
            </div>
        </div>
    );
};

export default CartTab;*/
// without popups
/*import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './cartItem';
import { clearCart } from '../stores/cart';
import axios from 'axios';

const CartTab = () => {
    const carts = useSelector((store) => store.cart.items);
    const statusTab = useSelector((store) => store.cart.statusTab);
    const dispatch = useDispatch();
    const [serviceNumber, setServiceNumber] = useState('');
    const [serviceUserName, setServiceUserName] = useState('');
    const [serviceError, setServiceError] = useState('');
    const [products, setProducts] = useState([]); // State to hold products
    const [totalAmount, setTotalAmount] = useState(0); // State to hold the total amount

    // Calculate total amount whenever carts or products change
    useEffect(() => {
        const newTotalAmount = carts.reduce((total, item) => {
            const product = products.find((product) => product.id === item.productId);
            return total + (product ? product.price * item.quantity : 0);
        }, 0);
        setTotalAmount(newTotalAmount);
    }, [carts, products]); // Dependency array

    // Fetch products from the backend
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5255/api/Product');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []); // Fetch once on component mount

    // Fetch service user name by service number
    const fetchServiceUserName = async (number) => {
        if (number) {
            try {
                const response = await axios.get(`http://localhost:5255/api/ServiceUser/${number}`);
                setServiceUserName(response.data.name);
                setServiceError(''); // Clear error if found
            } catch (error) {
                setServiceUserName(''); // Clear user name if service number is invalid
                setServiceError('Service number not found');
                console.error('Service number not found:', error);
            }
        } else {
            setServiceUserName(''); // Clear username if input is empty
            setServiceError('');
        }
    };

    // Handle confirmation of the service number
    const handleConfirmServiceNumber = () => {
        fetchServiceUserName(serviceNumber);
    };

    const handleCheckout = async () => {
        const itemsWithNames = carts.map((item) => {
            const product = products.find((product) => product.id === item.productId);
            return {
                productId: item.productId,
                name: product.name,
                quantity: item.quantity,
            };
        });

        const purchaseData = {
            items: itemsWithNames,
            totalAmount,
            serviceNumber,
            serviceUserName,
        };
        console.log('Inserting data into the database:', purchaseData);

        try {
            const response = await axios.post('http://localhost:5255/api/orders/checkout', purchaseData);
            console.log('Order successfully placed:', response.data);
        } catch (error) {
            console.error('Error during checkout:', error);
        }

        dispatch(clearCart());
        setServiceNumber('');
    };

    const handleBuyNow = async () => {
        const itemsWithNames = carts.map((item) => {
            const product = products.find((product) => product.id === item.productId);
            return {
                productId: item.productId,
                name: product.name,
                quantity: item.quantity,
            };
        });

        const purchaseData = {
            items: itemsWithNames,
            totalAmount,
            serviceNumber,
            serviceUserName,
        };
        console.log('Inserting data into the database:', purchaseData);

        try {
            const response = await axios.post('http://localhost:5255/api/Purchased/buynow', purchaseData);
            console.log('Purchase successfully made:', response.data);
        } catch (error) {
            console.error('Error during purchase:', error.response.data || error.message);
        }

        dispatch(clearCart());
        setServiceNumber('');

        // Refresh the entire window after a successful purchase
        // window.location.reload();
    };

    const handleOpenApplication = () => {
        window.open('http://localhost:3000', '_blank');
    };

    const handleConfirmOrder = async () => {
        // Prepare data for reducing product quantities
        const reduceData = carts.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
        }));

        try {
            const response = await axios.post('http://localhost:5255/api/Product/reduceQuantity', reduceData);
            console.log('Product quantities reduced:', response.data);

            // Fetch updated products
            const updatedResponse = await axios.get('http://localhost:5255/api/Product');
            setProducts(updatedResponse.data);

        } catch (error) {
            console.error('Error reducing product quantities:', error.response.data || error.message);
        }
    };

    return (
        <div
            className={`fixed top-0 right-0 bg-blue-200 bg-opacity-50 shadow-2xl w-96 h-full flex flex-col transform transition-transform duration-500 ${statusTab ? '' : 'translate-x-full'}`}
        >
            <div className="p-5 flex justify-between items-center">
                <h2 className="text-[#28245F] font-semibold text-2xl text-center">SHOPPING CART</h2>
                <button
                    className="bg-[#FFC10C] text-white px-3 py-1 rounded-md"
                    onClick={handleOpenApplication}
                >
                    On Hold
                </button>
            </div>

            <div className="p-5 flex-grow overflow-y-auto">
                {carts.map((item, key) => (
                    <CartItem key={key} data={item} />
                ))}
            </div>

            <div className="p-5 text-white">
                <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
                <h4>Service User: {serviceUserName || 'N/A'}</h4>
                {serviceError && <p className="text-red-500">{serviceError}</p>}
            </div>
            <button
                className="bg-[#28A745] text-white px-5 py-2 mt-2 w-full rounded-md"
                onClick={handleConfirmOrder}
            >
                Confirm This Order
            </button>

            <div className="p-5">
                <input
                    type="text"
                    placeholder="Enter Service Number"
                    value={serviceNumber}
                    onChange={(e) => setServiceNumber(e.target.value)}
                    className="w-full p-2 mb-2 rounded-md"
                    onKeyDown={(e) => e.key === 'Enter' && handleConfirmServiceNumber()} // Added event listener
                />
            </div>

            <div className="grid grid-cols-2">
                <button
                    className="bg-[#28245F] text-white px-5 py-3 text-lg"
                    onClick={handleBuyNow}
                    disabled={!serviceNumber || !serviceUserName}
                >
                    BUY NOW
                </button>
                <button
                    className="bg-[#FFC10C] text-white px-5 py-3 text-lg"
                    onClick={handleCheckout}
                    disabled={!serviceNumber || !serviceUserName}
                >
                    CHECKOUT
                </button>
            </div>
        </div>
    );
};

export default CartTab;*/

//

// The most corrected one according to me.

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './cartItem';
import { clearCart } from '../stores/cart';
import { products } from '../products'; // Import products
import axios from 'axios'; // Import Axios for API calls
import PopUp from './PopUp'; // Import the PopUp component
import CheckPopUp from './checkPopUp';
import { FaCaretDown } from 'react-icons/fa'; // Import down arrow icon

const CartTab = () => {
    const carts = useSelector((store) => store.cart.items);
    const statusTab = useSelector((store) => store.cart.statusTab);
    const dispatch = useDispatch();
    const [serviceNumber, setServiceNumber] = useState('');
    const [serviceUserName, setServiceUserName] = useState('');
    const [serviceError, setServiceError] = useState('');
    const [showPopUp, setShowPopUp] = useState(false);
    const [showCheckPopUp, setShowCheckPopUp] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown menu

    // Calculate total amount
    const totalAmount = carts.reduce((total, item) => {
        const product = products.find((product) => product.id === item.productId);
        return total + product.price * item.quantity;
    }, 0);

    // Fetch service user name by service number
    const fetchServiceUserName = async (number) => {
        if (number) {
            try {
                const response = await axios.get(`http://localhost:5255/api/ServiceUser/${number}`);
                setServiceUserName(response.data.name);
                setServiceError(''); // Clear error if found
            } catch (error) {
                setServiceUserName(''); // Clear user name if service number is invalid
                setServiceError('Service number not found');
                console.error('Service number not found:', error);
            }
        } else {
            setServiceUserName(''); // Clear username if input is empty
            setServiceError('');
        }
    };

    // Handle confirmation of the service number
    const handleConfirmServiceNumber = () => {
        fetchServiceUserName(serviceNumber);
    };

    const handleCheckout = async () => {
        const itemsWithNames = carts.map((item) => {
            const product = products.find((product) => product.id === item.productId);
            return {
                productId: item.productId,
                name: product.name,
                quantity: item.quantity,
            };
        });

        const purchaseData = {
            items: itemsWithNames,
            totalAmount,
            serviceNumber,
            serviceUserName,
        };
        console.log('Inserting data into the database:', purchaseData);

        try {
            handleConfirmOrder();
            const response = await axios.post('http://localhost:5255/api/Orders/checkout', purchaseData);
            console.log('Order successfully placed:', response.data);
            setShowCheckPopUp(true);
        } catch (error) {
            console.error('Error during checkout:', error);
        }

        dispatch(clearCart());
        setServiceNumber('');
    };

    const handleBuyNow = async () => {
        const itemsWithNames = carts.map((item) => {
            const product = products.find((product) => product.id === item.productId);
            return {
                productId: item.productId,
                name: product.name,
                quantity: item.quantity,
            };
        });

        const purchaseData = {
            items: itemsWithNames,
            totalAmount,
            serviceNumber,
            serviceUserName,
        };
        console.log('Inserting data into the database:', purchaseData);

        try {
            handleConfirmOrder();
            const response = await axios.post('http://localhost:5255/api/Purchased/buynow', purchaseData);
            console.log('Purchase successfully made:', response.data);
            setShowPopUp(true);
        } catch (error) {
            console.error('Error during purchase:', error.response.data || error.message);
        }

        dispatch(clearCart());
        setServiceNumber('');
    };

    const handleOpenApplication = () => {
        window.open('http://localhost:3000', '_blank');
    };

    const handleConfirmOrder = async () => {
        // Prepare data for reducing product quantities
        const reduceData = carts.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
        }));

        try {
            const response = await axios.post('http://localhost:5255/api/Foods/reduceQuantity', reduceData);
            console.log('Product quantities reduced:', response.data);
        } catch (error) {
            console.error('Error reducing product quantities:', error.response.data || error.message);
        }
    };

    // Handle closing the pop-up and reloading the page
    const handleClosePopUp = () => {
        setShowPopUp(false);
        window.location.reload(); // Reload the page
    };

    // Handle closing the check pop-up
    const handleCloseCheckPopUp = () => {
        setShowCheckPopUp(false);
        window.location.reload(); // Reload the page
    };

    // Handle dropdown menu
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    return (
        <div
            className={`fixed top-0 right-0 bg-blue-200 bg-opacity-50 shadow-2xl w-96 h-full flex flex-col transform transition-transform duration-500 ${
                statusTab ? '' : 'translate-x-full'
            }`}
        >
            <div className="p-5 flex justify-between items-center">
                <h2 className="text-[#28245F] font-semibold text-2xl text-center">SHOPPING CART</h2>
                <div className="relative">
                    <button
                        className="bg-[#FFC10C] text-white p-2 rounded-md flex items-center justify-center"
                        onClick={toggleDropdown}
                    >
                        <FaCaretDown className="text-2xl" />
                    </button>
                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 bg-white border border-gray-300 shadow-lg rounded-md w-40">
                            <button
                                className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100"
                                onClick={() => {
                                    dispatch(clearCart());
                                    setDropdownOpen(false);
                                }}
                            >
                                Clear Cart
                            </button>
                            <button
                                className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100"
                                onClick={handleOpenApplication}
                            >
                                On Hold
                            </button>
                            <button
                                className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100"
                            >
                                Settings
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <div className="p-5 flex-grow overflow-y-auto">
                {carts.map((item, key) => (
                    <CartItem key={key} data={item} />
                ))}
            </div>

            <div className="p-5 text-white">
                <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
                <h4>Service User: {serviceUserName || 'N/A'}</h4>
                {serviceError && <p className="text-red-500">{serviceError}</p>}
            </div>

            <div className="p-5">
                <input
                    type="text"
                    placeholder="Enter Service Number"
                    value={serviceNumber}
                    onChange={(e) => setServiceNumber(e.target.value)}
                    className="w-full p-2 mb-2 rounded-md"
                    onKeyDown={(e) => e.key === 'Enter' && handleConfirmServiceNumber()}
                />
            </div>

            <div className="grid grid-cols-2">
                <button
                    className="bg-[#28245F] text-white px-5 py-3 text-lg"
                    onClick={handleBuyNow}
                    disabled={!serviceNumber || !serviceUserName}
                >
                    BUY NOW
                </button>
                <button
                    className="bg-[#FFC10C] text-white px-5 py-3 text-lg"
                    onClick={handleCheckout}
                    disabled={!serviceNumber || !serviceUserName}
                >
                    CHECKOUT
                </button>
            </div>
            {showPopUp && <PopUp onClose={handleClosePopUp} />}
            {showCheckPopUp && <CheckPopUp onClose={handleCloseCheckPopUp} />}
        </div>
    );
};

export default CartTab;

