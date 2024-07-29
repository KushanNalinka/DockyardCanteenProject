
// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import CartItem from './cartItem';
// import { closeStatusTab, clearCart } from '../stores/cart';
// import { products } from '../products'; // Import products

// const CartTab = () => {
//     const carts = useSelector(store => store.cart.items);
//     const statusTab = useSelector(store => store.cart.statusTab);
//     const dispatch = useDispatch();
//     const [serviceNumber, setServiceNumber] = useState('');

    

//     // Calculate total amount
//     const totalAmount = carts.reduce((total, item) => {
//         const product = products.find(product => product.id === item.productId);
//         return total + (product.price * item.quantity);
//     }, 0);

//     const handleCheckout = () => {
//         // Extract product names
//         const itemsWithNames = carts.map(item => {
//             const product = products.find(product => product.id === item.productId);
//             return {
//                 ...item,
//                 name: product.name,
//             };
//         });

//         // Mock database insertion
//         const purchaseData = {
//             items: itemsWithNames,
//             totalAmount,
//             serviceNumber,
//         };
//         console.log('Inserting data into the database:', purchaseData);

//         // Clear the cart
//         dispatch(clearCart());

//         // Clear the service number input box
//         setServiceNumber('');
//     };

//     return (
//         <div className={`fixed top-0 right-0  bg-white  shadow-2xl w-96 h-full flex flex-col transform transition-transform duration-500 ${statusTab ? '' : 'translate-x-full'}`}>
//             <div className={'bg-[#E3E6F6] shadow-sm'}>
//                 <h2 className='p-5 text-[#28245F] font-black text-2xl text-center '>SHOPPING CART</h2>
//             </div>
//             <div className='p-5 flex-grow overflow-y-auto'>
//                 {carts.map((item, key) => 
//                     <CartItem key={key} data={item}/>
//                 )}
//             </div>

            
//     <div className='bg-[#E3E6F6] shadow-lg'>
//         <div className='p-3 text-[#4E4E4E] font-bold'>
//             <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
//         </div>
//         <div className='p-3 font-semibold'>
//             <input
//                 type="text"
//                 placeholder="Enter Service Number"
//                 value={serviceNumber}
//                 onChange={(e) => setServiceNumber(e.target.value)}
//                 className='w-full p-2 mb-2 rounded-md'
//             />
//         </div>
//         <div className='grid grid-cols-2 gap-2 p-2'>
//             <button className='bg-[#24256D] text-white font-bold px-5 py-3 text-lg rounded-md shadow-md'>Pay Here</button>
//             <button className='bg-[#FFC10C] text-white font-bold px-5 py-3 text-lg rounded-md shadow-md' onClick={handleCheckout}>Check Out</button>
//         </div>
//     </div>

//             {/* <div className={'bg-[#E3E6F6] shadow-lg'}>
//             <div className='p-3 text-[#4E4E4E] font-bold'>
//                 <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
//             </div>
//             <div className='p-3 font-semibold'>
//                 <input
//                     type="text"
//                     placeholder="Enter Service Number"
//                     value={serviceNumber}
//                     onChange={(e) => setServiceNumber(e.target.value)}
//                     className='w-full p-2 mb-2 rounded-md'
//                 />
//             </div>
//             <div className='grid grid-cols-2'>
//     <div className='col-span-2 flex justify-center'>
//     <button className='bg-[#24256D] text-white font-bold px-5 py-3 text-lg rounded-md' >Pay Here</button>
//         <button className='bg-[#FFC10C] text-white font-bold px-5 py-3 text-lg rounded-md' onClick={handleCheckout}>Check Out</button>
//     </div>
// </div>
// </div> */}
//         </div>
//     )
// }

// export default CartTab;





import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './cartItem';
import { clearCart } from '../stores/cart';
import { products } from '../products';

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
        const itemsWithNames = carts.map(item => {
            const product = products.find(product => product.id === item.productId);
            return {
                ...item,
                name: product ? product.name : 'Unknown',
            };
        });

        const purchaseData = {
            items: itemsWithNames,
            totalAmount,
            serviceNumber,
        };
        console.log('Inserting data into the database:', purchaseData);

        dispatch(clearCart());
        setServiceNumber('');
    };

    return (
        <div className={`fixed top-0 right-0 bg-white shadow-2xl w-96 h-full flex flex-col transform transition-transform duration-500 ${statusTab ? '' : 'translate-x-full'}`}>
            <div className='bg-[#E3E6F6] shadow-sm'>
                <h2 className='p-5 text-[#28245F] font-black text-2xl text-center'>SHOPPING CART</h2>
            </div>
            <div className='p-5 flex-grow overflow-y-auto' style={{ maxHeight: 'calc(100vh - 300px)' }}>
                {/* Display all items */}
                {carts.map((item, key) => 
                    <CartItem key={key} data={item} />
                )}
            </div>
            <div className='bg-[#E3E6F6] shadow-lg'>
                <div className='p-3 text-[#4E4E4E] font-bold'>
                    <h3>Total Amount: Rs {totalAmount.toFixed(2)}</h3>
                </div>
                <div className='p-3 font-semibold'>
                    <input
                        type="text"
                        placeholder="Enter Service Number"
                        value={serviceNumber}
                        onChange={(e) => setServiceNumber(e.target.value)}
                        className='w-full p-2 mb-2 rounded-md'
                    />
                </div>
                <div className='grid grid-cols-2 gap-2 p-2'>
                    <button className='bg-[#24256D] text-white font-bold px-5 py-3 text-lg rounded-md shadow-md'>Pay Here</button>
                    <button className='bg-[#FFC10C] text-white font-bold px-5 py-3 text-lg rounded-md shadow-md' onClick={handleCheckout}>Check Out</button>
                </div>
            </div>
        </div>
    );
};

export default CartTab;
