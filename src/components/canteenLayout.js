import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import CanteenSidebar from '../components/canteenSideBar';
import Header from './CanteenHeader';

import { useSelector } from 'react-redux';

const CanteenLayout = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  //const statusTabCart = useSelector(store => store.cart.statusTab);

  return (
    <div className='bg-zinc-200 flex'>
      <CanteenSidebar setSelectedCategory={setSelectedCategory} /> 
      <div className={`flex-1 transition-transform duration-500 ml-56 `}>
        <main className='w-full m-auto p-1'>
          <Header />
          <Outlet context={{ selectedCategory }} />
        </main>
      </div>
    
    </div>
  );
};

export default CanteenLayout;





