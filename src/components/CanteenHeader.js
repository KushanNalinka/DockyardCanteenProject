// import React, { useState, useEffect } from 'react';
// import { Link ,useParams} from 'react-router-dom';
// import iconCart from '../assets/images/iconCart.png';
// import logo from '../assets/images/doccanteen.png.png';

// const Header = () => {
//     const { meal } = useParams();

   

   
//     return (
//         <header className='fixed  left-56 right-96 z-50 top-0 h-16 flex justify-between items-center mb-5 bg-[#FFC10C] p-4'>
//             <div className='flex items-center'>
//                 <img src={logo} alt="Logo" className='w-12 h-12 mr-2' />
//                 <h3 className='text-lg font-semibold text-white'>
//                     <span className='text-2xl font-bold'>DOCCAFÉ</span> <span className='text-lg'></span>
//                 </h3>
//             </div>
          

         
//         </header>

//     );
// };

// export default Header;

import React from 'react';
import { useParams } from 'react-router-dom';
import iconCart from '../assets/images/iconCart.png';
import logo from '../assets/images/doccanteen.png.png';

const Header = () => {
    const { meal } = useParams();

    return (
        <header className='fixed left-56 right-0 top-0 h-16 flex justify-between items-center z-50 bg-[#FFC10C] p-4'>
            <div className='flex items-center'>
                <img src={logo} alt="Logo" className='w-12 h-12 mr-2' />
                <h3 className='text-lg font-semibold text-white'>
                    <span className='text-2xl font-bold'>DOCCAFÉ</span>
                </h3>
            </div>
        </header>
    );
};

export default Header;





