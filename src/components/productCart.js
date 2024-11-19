
// import React from 'react'; 
// import { Link } from 'react-router-dom';

// import {  useDispatch } from 'react-redux';
// import { addToCart } from '../stores/cart';

// const ProductCart = (props) => {
    

//     const {id, name, price, image, slug, quantity} = props.data;
    

//     const dispatch = useDispatch();
//     const handleAddToCart = () => {
//         dispatch(addToCart({
//             productId: id,
//             quantity: 1
//         }));
//         // Open the cart tab

//     };

//     return (
//         <div className='bg-white p-4 rounded-lg shadow-2xl w-48 h-56 transform transition-transform duration-300 hover:scale-105 flex flex-col justify-between'>
//             <Link to={slug}>
//                 <div className='relative'>
//                     <img src={image} alt={name} className='w-full h-24 object-cover rounded-t-lg' />
//                     <div className='absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent'></div>
//                 </div>
//             </Link>
//             <div className='p-2 flex flex-col justify-between flex-grow'>
//                 <h3 className='text-sm font-bold  text-left'>{name}</h3>
//                 <div className='flex justify-between items-center mt-2'>
//                     <p className='text-sm font-medium text-left'>
//                         <span className='text-[#747474]'>Rs {price}.00</span>
//                     </p>
//                     <button 
//                         className='bg-[#ca0000] p-2 rounded-full text-xs flex items-center gap-2 hover:bg-[#FFC10C] shadow-lg' 
//                         onClick={handleAddToCart}
//                     >
//                         <span className='font-bold text-white w-12'>Add</span>
//                         {/* <img src={iconCart} alt="cart icon" className='w-4' /> */}
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

   


// export default ProductCart;
import React from 'react'; 
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../stores/cart';

const ProductCart = (props) => {
    const { id, name, price, image, slug, quantity } = props.data;
    const dispatch = useDispatch();
    
    const handleAddToCart = () => {
        if (quantity > 0) {
            dispatch(addToCart({
                productId: id,
                quantity: 1
            }));
            // Open the cart tab
        }
    };

    return (
        <div className='bg-white p-4 rounded-lg shadow-2xl w-48 h-56 transform transition-transform duration-300 hover:scale-105 flex flex-col justify-between relative'>
            <Link to={slug} className={quantity === 0 ? 'pointer-events-none' : ''}>
                <div className='relative'>
                    <img 
                        src={image} 
                        alt={name} 
                        className={`w-full h-24 object-cover rounded-t-lg ${quantity === 0 ? 'filter blur-sm grayscale' : ''}`} 
                    />
                    {quantity === 0 && (
                        <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold rounded-t-lg'>
                            <span>Out of Stock</span>
                        </div>
                    )}
                </div>
            </Link>
            <div className='p-2 flex flex-col justify-between flex-grow'>
                <div className='flex justify-between items-center'>
                    <h3 className='text-sm font-bold text-left'>{name}</h3>
                    {quantity > 0 && (
                        <span className='text-blue-500 text-xs font-medium'>{quantity} </span>
                    )}
                </div>
                <div className='flex justify-between items-center mt-2'>
                    <p className='text-sm font-medium text-left'>
                        <span className='text-[#747474]'>Rs {price}.00</span>
                    </p>
                    <button 
                        className={`p-2 rounded-full text-xs flex items-center gap-2 ${quantity === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#ca0000] hover:bg-[#FFC10C] shadow-lg'}`} 
                        onClick={handleAddToCart}
                        disabled={quantity === 0}
                    >
                        <span className='font-bold text-white w-12'>Add</span>
                        {/* <img src={iconCart} alt="cart icon" className='w-4' /> */}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCart;
