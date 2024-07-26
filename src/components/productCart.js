/*import React from 'react' 
import { Link } from 'react-router-dom';
import iconCart from '../assets/images/iconCart.png'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, openStatusTab } from '../stores/cart';

const ProductCart = (props) => {
    const carts = useSelector(store => store.cart.items);
    const {id, name, price, image,category,meal, slug} = props.data;
    const mealText = Array.isArray(meal) ? meal.join(', ') : meal;

    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart({
            productId: id,
            quantity: 1
        }));
        // Open the cart tab
        dispatch(openStatusTab());
    }
    return (
    <div className='bg-white p-5 rounded-xl shadow-sm'>
        <Link to={slug}>
            <img src={image} alt='' className='w-full h-80 object-cover object-top drop-shadow-[0_80px_30px_#0007]' />
        </Link>
        <h3 className='text-2xl py-3 text-center font-medium'>{name}</h3>
        <p className='text-1xl py-1 text-center font-medium'>{category}</p>
        <p className='text-1xl py-1 text-center font-medium'> {mealText} </p>
        <div className='flex justify-between items-center'>
            <p>
                $<span className='text-2xl font-medium'>{price}</span>
            </p>
            <button className='bg-[#FFC10C] p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2' onClick={handleAddToCart}>
                <img src={iconCart} alt="" className='w-5'/>
                Add 
            </button>
        </div>
    </div>
  )
}

export default ProductCart*/
// import React from 'react' 
// import { Link } from 'react-router-dom';
// import iconCart from '../assets/images/iconCart.png'
// import { useSelector, useDispatch } from 'react-redux';
// import { addToCart } from '../stores/cart';

// const ProductCart = (props) => {
//     const carts = useSelector(store => store.cart.items);
//     const {id, name, price, image,category,meal, slug} = props.data;
//     const mealText = Array.isArray(meal) ? meal.join(', ') : meal;

//     const dispatch = useDispatch();
//     const handleAddToCart = () => {
//         dispatch(addToCart({
//             productId: id,
//             quantity: 1
//         }));
//         // Open the cart tab
        
//     }
//     return (
//     <div className='bg-white p-5 rounded-xl shadow-sm'>
//         <Link to={slug}>
//             <img src={image} alt='' className='w-full h-80 object-cover object-top drop-shadow-[0_80px_30px_#0007]' />
//         </Link>
//         <h3 className='text-2xl py-3 text-center font-medium'>{name}</h3>
//         <p className='text-1xl py-1 text-center font-medium'>{category}</p>
//         <p className='text-1xl py-1 text-center font-medium'> {mealText} </p>
//         <div className='flex justify-between items-center'>
//             <p>
//                 $<span className='text-2xl font-medium'>{price}</span>
//             </p>
//             <button className='bg-[#FFC10C] p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2' onClick={handleAddToCart}>
//                 <img src={iconCart} alt="" className='w-5'/>
//                 Add 
//             </button>
//         </div>
//     </div>
//   )
// }

// export default ProductCart
// import React from 'react';
// import { Link } from 'react-router-dom';
// import iconCart from '../assets/images/iconCart.png';
// import { useSelector, useDispatch } from 'react-redux';
// import { addToCart } from '../stores/cart';

// const ProductCart = (props) => {
//     const carts = useSelector(store => store.cart.items);
//     const {id, name, price, image, category, meal, slug} = props.data;
//     const mealText = Array.isArray(meal) ? meal.join(', ') : meal;

//     const dispatch = useDispatch();
//     const handleAddToCart = () => {
//         dispatch(addToCart({
//             productId: id,
//             quantity: 1
//         }));
//         // Open the cart tab
//     };

//     return (
//         <div className='bg-white p-5 rounded-xl shadow-sm'>
//             <Link to={slug}>
//                 <img src={image} alt={name} className='w-full h-40 object-cover rounded-t-xl' />
//             </Link>
//             <div className='p-4'>
//                 <h3 className='text-lg font-bold text-center'>{name}</h3>
//                 {/* <p className='text-sm text-center text-gray-500'>{category}</p>
//                 <p className='text-sm text-center text-gray-500'>{mealText}</p> */}
//                 <div className='flex justify-between items-center mt-3'>
//                     <p className='text-lg font-bold'>
//                         LKR <span>{price}</span>
//                     </p>
//                     <button 
//                         className='bg-[#FFC10C] p-2 rounded-full text-sm flex items-center gap-2 hover:bg-[#E5A906]' 
//                         onClick={handleAddToCart}
//                     >
//                         <img src={iconCart} alt="cart icon" className='w-4' />
//                         Add
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductCart;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import iconCart from '../assets/images/iconCart.png';
// import { useSelector, useDispatch } from 'react-redux';
// import { addToCart } from '../stores/cart';

// const ProductCart = (props) => {
//     const carts = useSelector(store => store.cart.items);
//     const {id, name, price, image, category, meal, slug} = props.data;
//     const mealText = Array.isArray(meal) ? meal.join(', ') : meal;

//     const dispatch = useDispatch();
//     const handleAddToCart = () => {
//         dispatch(addToCart({
//             productId: id,
//             quantity: 1
//         }));
//         // Open the cart tab
//     };

//     return (
//         <div className='bg-white p-5 rounded-xl shadow-sm w-64 h-80'>
//             <Link to={slug}>
//                 <img src={image} alt={name} className='w-full h-40 object-cover rounded-t-xl' />
//             </Link>
//             <div className='p-4'>
//                 <h3 className='text-lg font-bold text-left'>{name}</h3>
//                 {/* <p className='text-sm text-center text-gray-500'>{category}</p>
//                 <p className='text-sm text-center text-gray-500'>{mealText}</p> */}
//                 <div className='flex justify-between items-center mt-3'>
//                     <p className='text-lg font-bold text-left'>
//                         LKR <span>{price}</span>
//                     </p>
//                     <button 
//                         className='bg-[#FFC10C] p-2 rounded-full text-sm flex items-center gap-2 hover:bg-[#E5A906]' 
//                         onClick={handleAddToCart}
//                     >
//                         <img src={iconCart} alt="cart icon" className='w-4' />
//                         Add
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductCart;
import React from 'react';
import { Link } from 'react-router-dom';
import iconCart from '../assets/images/iconCart.png';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../stores/cart';

const ProductCart = (props) => {
    const carts = useSelector(store => store.cart.items);
    const { id, name, price, image, category, meal, slug } = props.data;
    const mealText = Array.isArray(meal) ? meal.join(', ') : meal;

    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart({
            productId: id,
            quantity: 1
        }));
        // Open the cart tab
    };

    return (
        <div className='bg-white p-4 rounded-xl shadow-xl w-48 h-64 transform transition-transform duration-300 hover:scale-105 flex flex-col justify-between'>
            <Link to={slug}>
                <img src={image} alt={name} className='w-full h-32 object-cover rounded-t-xl' />
            </Link>
            <div className='p-2 flex flex-col justify-between flex-grow'>
                <h3 className='text-sm font-bold text-left'>{name}</h3>
                <div className='flex justify-between items-center mt-2'>
                    <p className='text-sm font-medium text-left'>
                        LKR <span>{price}</span>
                    </p>
                    <button 
                        className='bg-[#FFC10C] p-1 rounded-full text-xs flex items-center gap-2 hover:bg-[#35a436]' 
                        onClick={handleAddToCart}
                    >
                        <span>Add</span>
                        <img src={iconCart} alt="cart icon" className='w-3' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCart;
