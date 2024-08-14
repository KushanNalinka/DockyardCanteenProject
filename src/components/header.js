
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import iconCart from '../assets/images/iconCart.png';
import logo from '../assets/images/doccanteen.png.png';
import { useSelector } from 'react-redux';

const Header = () => {
    const { meal } = useParams();

    const [totalQuantity, setTotalQuantity] = useState(0);
    const carts = useSelector(store => store.cart.items);

    useEffect(() => {
        let total = 0;
        carts.forEach(item => total += item.quantity);
        setTotalQuantity(total);
    }, [carts]);
// adjuust the fixings of the header
    return (
        <header className='fixed  left-56 right-96 z-50 top-0 h-16 flex justify-between items-center mb-5 bg-[#FFC10C] p-4'>
            <div className='flex items-center'>
                <img src={logo} alt="Logo" className='w-12 h-12 mr-2' />
                <h3 className='text-lg font-semibold text-white'>
                    <span className='text-2xl font-bold'>DOCCAFÉ</span> <span className='text-lg'></span>
                </h3>
            </div>
            {/* <h6 className="text-4xl font-bold mb-1 text-white">{meal.charAt(0).toUpperCase() + meal.slice(1)}</h6> */}
            <div className='w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative'>
                <img src={iconCart} alt="" className='w-6' />
                <span className='absolute top-2/3 right-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center'>
                    {totalQuantity}
                </span>
            </div>
        </header>
    );
};

export default Header;