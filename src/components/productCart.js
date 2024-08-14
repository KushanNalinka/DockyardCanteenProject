
import React from 'react'; 
import { Link } from 'react-router-dom';
import iconCart from '../assets/images/iconCart.png';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../stores/cart';

const ProductCart = (props) => {
    const carts = useSelector(store => store.cart.items);
    const {id, name, price, image, category, meal, slug, quantity} = props.data;
    const mealText = Array.isArray(meal) ? meal.join(', ') : meal;

    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart({
            productId: id,
            quantity: 1
        }));
        // Open the cart tab
    }

    return (
        <div className={`bg-white p-5 rounded-xl shadow-sm ${quantity === 0 ? 'opacity-50' : ''}`}>
            <Link to={slug} className={`${quantity === 0 ? 'pointer-events-none' : ''}`}>
                <img src={image} alt='' className='w-full h-80 object-cover object-top drop-shadow-[0_80px_30px_#0007]' />
            </Link>
            <h3 className={`text-2xl py-3 text-center font-medium ${quantity === 0 ? 'text-red-500' : ''}`}>
                {name} {quantity === 0 && ' - Out of Stock'}
            </h3>
            <p className='text-1xl py-1 text-center font-medium'>{category}</p>
            <p className='text-1xl py-1 text-center font-medium'>{mealText}</p>
            <p className='text-1xl py-1 text-center font-medium'>{quantity}</p>
            <div className='flex justify-between items-center'>
                <p>
                    $<span className='text-2xl font-medium'>{price}</span>
                </p>
                <button 
                    className={`bg-[#FFC10C] p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2 ${quantity === 0 ? 'cursor-not-allowed opacity-50' : ''}`} 
                    onClick={handleAddToCart}
                    disabled={quantity === 0}
                >
                    <img src={iconCart} alt="" className='w-5'/>
                    Add 
                </button>
            </div>
        </div>
    );
}

export default ProductCart;
