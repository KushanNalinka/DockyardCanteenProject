/*import React from 'react'
import { Outlet } from 'react-router-dom' 
import Home from '../pages/home'
import Header from './header'
import CartTab from './cartTab' 
import { useSelector } from 'react-redux'

const Layout = () => {
    const statusTabCart = useSelector(store => store.cart.statusTab);
  return (
    <div className='bg-zinc-200'>
        <main className={`w-[1200px] max-w-full m-auto p-5 transform transition-transform duration-500
        ${statusTabCart === false ? "" : "-translate-x-56" }`}>
            <Header />
            <Outlet />
        </main>
        <CartTab />
    </div>
  )
}

export default Layout*/
/*import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sideBar'; // Adjust the path as necessary
import Header from './header';
import CartTab from './cartTab';
import { useSelector } from 'react-redux';

const Layout = () => {
  const statusTabCart = useSelector(store => store.cart.statusTab);
  
  return (
    <div className='bg-zinc-200 flex'>
      <Sidebar /> 
      <div className={`flex-1 max-w-full transition-transform duration-500 `}>
        <main className='w-[1200px] m-auto p-5'>
          <Header />
          <Outlet />
        </main>
      </div>
      <CartTab />
    </div>
  );
}

export default Layout;*/
//layout component before the categories search
//layout component after categories search
/*import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sideBar';
import Header from './header';
import CartTab from './cartTab';
import { useSelector } from 'react-redux';

const Layout = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const statusTabCart = useSelector(store => store.cart.statusTab);

  return (
    <div className='bg-zinc-200 flex'>
      <Sidebar setSelectedCategory={setSelectedCategory} /> 
      <div className='flex-1 max-w-full transition-transform duration-500 ml-64'>
        <main className='w-[1200px] m-auto p-1'>
          <Header />
          <Outlet context={{ selectedCategory }} />
        </main>
      </div>
      <CartTab />
    </div>
  );
};

export default Layout;*/
/*import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sideBar';
import Header from './header';
import CartTab from './cartTab';
import { useSelector } from 'react-redux';

const Layout = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const statusTabCart = useSelector(store => store.cart.statusTab);

  return (
    <div className='bg-zinc-200 flex'>
      <Sidebar setSelectedCategory={setSelectedCategory} /> 
      <div className={`flex-1 transition-transform duration-500 ${statusTabCart ? 'ml-56 mr-96' : 'ml-56'}`}>
        <main className='w-full m-auto p-1'>
          <Header />
          <Outlet context={{ selectedCategory }} />
        </main>
      </div>
      {statusTabCart && <CartTab />}
    </div>
  );
};

export default Layout;*/
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sideBar';
import Header from './header';
import CartTab from './cartTab';
import { useSelector } from 'react-redux';

const Layout = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  //const statusTabCart = useSelector(store => store.cart.statusTab);

  return (
    <div className='bg-zinc-200 flex'>
      <Sidebar setSelectedCategory={setSelectedCategory} /> 
      <div className={`flex-1 transition-transform duration-500 ml-56 mr-96`}>
        <main className='w-full m-auto p-1'>
          <Header />
          <Outlet context={{ selectedCategory }} />
        </main>
      </div>
      <CartTab />
    </div>
  );
};

export default Layout;





