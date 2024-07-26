/*import React from 'react'
import { products } from '../products'
import ProductCart from '../components/productCart'
const Home = () => {
  return (
    <div>
        <h1 className='text-3xl my-5'>Search Bars Should Be Come For their.................</h1>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
            {products.map((product, key) => 
                <ProductCart key={key} data={product}/>
            )}
        </div>
    </div>
  )
}

export default Home*/
/*import React, { useState } from 'react';
import { products } from '../products';
import ProductCart from '../components/productCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleReset = () => {
    setSearchTerm('');
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className='my-5 flex justify-center'>
        <div className='relative w-full max-w-2xl'>
          <input
            type='text'
            placeholder='Search for a food item...'
            value={searchTerm}
            onChange={handleSearch}
            className='w-full p-3 pl-10 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-yellow-500'
          />
          <FontAwesomeIcon icon={faSearch} className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-900' />
          {searchTerm && (
            <button onClick={handleReset} className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-900'>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          )}
        </div>
      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
        {filteredProducts.map((product, key) => 
          <ProductCart key={key} data={product} />
        )}
      </div>
    </div>
  );
};

export default Home;
*/
//home component before the categories search
//home component after categories search
/*import React, { useState } from 'react';
import { products } from '../products';
import ProductCart from '../components/productCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useOutletContext } from 'react-router-dom';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { selectedCategory } = useOutletContext();

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleReset = () => {
    setSearchTerm('');
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    return matchesSearchTerm && matchesCategory;
  });

  return (
    <div>
      <div className='my-5 flex justify-center'>
        <div className='relative w-full max-w-2xl'>
          <input
            type='text'
            placeholder='Search for a food item...'
            value={searchTerm}
            onChange={handleSearch}
            className='w-full p-3 pl-10 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-yellow-500'
          />
          <FontAwesomeIcon icon={faSearch} className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-900' />
          {searchTerm && (
            <button onClick={handleReset} className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-900'>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          )}
        </div>
      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
        {filteredProducts.map((product, key) => 
          <ProductCart key={key} data={product} />
        )}
      </div>
    </div>
  );
};

export default Home;*/
//home component before the categories search and reset categories search
//bome  component after categories search and reset categories search
/*import React, { useState } from 'react';
import { useParams} from 'react-router-dom';
import { products } from '../products';
import ProductCart from '../components/productCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useOutletContext } from 'react-router-dom';

const Home = () => {
  const { meal } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const { selectedCategory } = useOutletContext();

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleReset = () => {
    setSearchTerm('');
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    return matchesSearchTerm && matchesCategory;
  });

  return (
    <div>
      <div className='my-5 flex justify-center'>
        <div className='relative w-full max-w-2xl'>
          <input
            type='text'
            placeholder='Search For a Food Item...'
            value={searchTerm}
            onChange={handleSearch}
            className='w-full p-4 pl-10 pr-10 rounded-full border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-yellow-500'
          />
          <FontAwesomeIcon icon={faSearch} className='absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500' />
          {searchTerm && (
            <button onClick={handleReset} className='absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500'>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          )}
        </div>
      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
        {filteredProducts.map((product, key) => 
          <ProductCart key={key} data={product} />
        )}
      </div>
    </div>
  );
};

export default Home;*/
/*import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../products';
import ProductCart from '../components/productCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useOutletContext } from 'react-router-dom';

const Home = () => {
  const { meal } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const { selectedCategory } = useOutletContext();

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleReset = () => {
    setSearchTerm('');
  };

  const filteredProducts = products.filter((product) => {
    const matchesMeal = meal ? product.meal === meal : true;
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    return matchesMeal && matchesSearchTerm && matchesCategory;
  });

  return (
    <div>
      <div className='my-5 flex justify-center'>
        <div className='relative w-full max-w-2xl'>
          <input
            type='text'
            placeholder='Search For a Food Item...'
            value={searchTerm}
            onChange={handleSearch}
            className='w-full p-4 pl-10 pr-10 rounded-full border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-yellow-500'
          />
          <FontAwesomeIcon icon={faSearch} className='absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500' />
          {searchTerm && (
            <button onClick={handleReset} className='absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500'>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          )}
        </div>
      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
        {filteredProducts.map((product, key) => 
          <ProductCart key={key} data={product} />
        )}
      </div>
    </div>
  );
};

export default Home;*/


// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { products } from '../products';
// import ProductCart from '../components/productCart';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
// import { useOutletContext } from 'react-router-dom';
// import logo from '../assets/images/breakfast.png';

// const Home = () => {
  //   const { meal } = useParams();
  //   const [searchTerm, setSearchTerm] = useState('');
  //   const { selectedCategory } = useOutletContext();
  
  //   const handleSearch = (event) => {
    //     setSearchTerm(event.target.value);
    //   };
    
//   const handleReset = () => {
  //     setSearchTerm('');
//   };

//   const filteredProducts = products.filter((product) => {
  //     const matchesMeal = meal ? product.meal.includes(meal) : true;
//     const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
//     return matchesMeal && matchesSearchTerm && matchesCategory;
//   });

//   return (
  //     <div>
  //       <div className='my-5 flex justify-center'>
  //         <div className='relative w-full max-w-2xl'>
  //         <img src={logo} alt="background" className='w-full max-w-2xl rounded' />
  //           <input
  //             type='text'
  //             placeholder='Search For a Food Item...'
  //             value={searchTerm}
  //             onChange={handleSearch}
  //             className='w-full p-4 pl-10 pr-10 rounded-full border focus:outline-none focus:ring-2 focus:ring-[#E3E6F6] text-black placeholder-[#D2D2D2]'
  //           />
  //           <FontAwesomeIcon icon={faSearch} className='absolute left-3 top-1/2 transform -translate-y-1/2 text-[#28245F]' />
  //           {searchTerm && (
    //             <button onClick={handleReset} className='absolute right-3 top-1/2 transform -translate-y-1/2 text-[#28245F]'>
    //               <FontAwesomeIcon icon={faTimes} />
    //             </button>
    //           )}
    //         </div>
    //       </div>
    //       {/* Insert the image below the search bar */}
    //       <div className='flex justify-center my-5'>
    
    //       </div>
    //       <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
    //         {filteredProducts.map((product, key) => 
      //           <ProductCart key={key} data={product} />
      //         )}
      //       </div>
      //     </div>
      //   );
      // };
      
      // export default Home;
      
      
      // import React, { useState } from 'react';
      // import { useParams } from 'react-router-dom';
      // import { products } from '../products';
      // import ProductCart from '../components/productCart';
      // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
      // import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
      // import { useOutletContext } from 'react-router-dom';
      // import logo from '../assets/images/breakfast.png';
      
      // const Home = () => {
      //   const { meal } = useParams();
      //   const [searchTerm, setSearchTerm] = useState('');
      //   const { selectedCategory } = useOutletContext();
      
      //   const handleSearch = (event) => {
      //     setSearchTerm(event.target.value);
      //   };
      
      //   const handleReset = () => {
      //     setSearchTerm('');
      //   };
      
      //   const filteredProducts = products.filter((product) => {
      //     const matchesMeal = meal ? product.meal.includes(meal) : true;
      //     const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      //     const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
      //     return matchesMeal && matchesSearchTerm && matchesCategory;
      //   });
      
      //   return (
      //     <div>
      //       <div className='my-5 flex justify-center'>
      //         <div className='relative w-full max-w-2xl'>
      //         <img src={logo} alt="background" className='w-full max-w-2xl rounded' />
      
      //           <input
      //             type='text'
      //             placeholder='Search For a Food Item...'
      //             value={searchTerm}
      //             onChange={handleSearch}
      //             className='w-full p-4 pl-10 pr-10 rounded-full border focus:outline-none focus:ring-2 focus:ring-[#E3E6F6] text-black placeholder-[#D2D2D2]'
      //           />
      //           <FontAwesomeIcon icon={faSearch} className='absolute left-3 top-1/2 transform -translate-y-1/2 text-[#28245F]' />
      //           {searchTerm && (
      //             <button onClick={handleReset} className='absolute right-3 top-1/2 transform -translate-y-1/2 text-[#28245F]'>
      //               <FontAwesomeIcon icon={faTimes} />
      //             </button>
      //           )}
      //         </div>
      //       </div>
      //       <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
      //         {filteredProducts.map((product, key) => 
      //           <ProductCart key={key} data={product} />
      //         )}
      //       </div>
      //     </div>
      //   );
      // };
      
      // export default Home;
//       import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { products } from '../products';
// import ProductCart from '../components/productCart';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
// import { useOutletContext } from 'react-router-dom';
// import logo from '../assets/images/breakfast.png';

// const Home = () => {
//   const { meal } = useParams();
//   const [searchTerm, setSearchTerm] = useState('');
//   const { selectedCategory } = useOutletContext();

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleReset = () => {
//     setSearchTerm('');
//   };

//   const filteredProducts = products.filter((product) => {
//     const matchesMeal = meal ? product.meal.includes(meal) : true;
//     const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
//     return matchesMeal && matchesSearchTerm && matchesCategory;
//   });

//   return (
//     <div>
//       <div className='my-5 flex justify-center'>
//         <div className='relative w-full max-w-2xl'>
//           <img src={logo} alt="background" className='w-full max-w-2xl rounded mb-5' />
          
//           <div className='relative'>
//             <input
//               type='text'
//               placeholder='Search For a Food Item...'
//               value={searchTerm}
//               onChange={handleSearch}
//               className='w-full p-4 pl-10 pr-10 rounded-full border focus:outline-none focus:ring-2 focus:ring-[#E3E6F6] text-black placeholder-[#D2D2D2]'
//             />
//             <FontAwesomeIcon icon={faSearch} className='absolute left-4 top-1/2 transform -translate-y-1/2 text-[#28245F]' />
//             {searchTerm && (
//               <button onClick={handleReset} className='absolute right-4 top-1/2 transform -translate-y-1/2 text-[#28245F]'>
//                 <FontAwesomeIcon icon={faTimes} />
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//       <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
//         {filteredProducts.map((product, key) => 
//           <ProductCart key={key} data={product} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;
// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { products } from '../products';
// import ProductCart from '../components/productCart';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
// import { useOutletContext } from 'react-router-dom';
// import logo from '../assets/images/breakfast.png';

// const Home = () => {
//   const { meal } = useParams();
//   const [searchTerm, setSearchTerm] = useState('');
//   const { selectedCategory } = useOutletContext();

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleReset = () => {
//     setSearchTerm('');
//   };

//   const filteredProducts = products.filter((product) => {
//     const matchesMeal = meal ? product.meal.includes(meal) : true;
//     const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
//     return matchesMeal && matchesSearchTerm && matchesCategory;
//   });

//   return (
//     <div>
//       <div className='my-5 flex justify-center'>
//         <div className='relative w-full max-w-2xl'>
//           <img src={logo} alt="background" className='w-full max-w-2xl rounded mb-5' />
          
//           <div className='relative'>
//             <input
//               type='text'
//               placeholder='Search For a Food Item...'
//               value={searchTerm}
//               onChange={handleSearch}
//               className='w-full p-4 pl-12 pr-12 rounded-full border focus:outline-none focus:ring-2 focus:ring-[#E3E6F6] text-black placeholder-[#D2D2D2]'
//             />
//             <FontAwesomeIcon icon={faSearch} className='absolute left-4 top-2/4 transform -translate-y-1/2 text-[#28245F]' />
//             {searchTerm && (
//               <button onClick={handleReset} className='absolute right-4 top-1/2 transform -translate-y-1/2 text-[#28245F]'>
//                 <FontAwesomeIcon icon={faTimes} />
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//       <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
//         {filteredProducts.map((product, key) => 
//           <ProductCart key={key} data={product} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;
// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { products } from '../products';
// import ProductCart from '../components/productCart';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
// import { useOutletContext } from 'react-router-dom';
// import logo from '../assets/images/breakfast.png';

// const Home = () => {
//   const { meal } = useParams();
//   const [searchTerm, setSearchTerm] = useState('');
//   const { selectedCategory } = useOutletContext();

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleReset = () => {
//     setSearchTerm('');
//   };

//   const filteredProducts = products.filter((product) => {
//     const matchesMeal = meal ? product.meal.includes(meal) : true;
//     const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
//     return matchesMeal && matchesSearchTerm && matchesCategory;
//   });

//   return (
//     <div>
//       <div className='relative my-5 flex justify-center'>
//         <img src={logo} alt="background" className='w-full max-w-2xl rounded mb-5' />
        
//         <div className='absolute w-full max-w-2xl top-1/2 transform -translate-y-1/2 px-5'>
//           <div className='relative'>
//             <input
//               type='text'
//               placeholder='Search For a Food Item...'
//               value={searchTerm}
//               onChange={handleSearch}
//               className='w-full p-4 pl-10 pr-10 rounded-full border focus:outline-none focus:ring-2 focus:ring-[#E3E6F6] text-black placeholder-[#D2D2D2] bg-white opacity-90'
//             />
//             <FontAwesomeIcon icon={faSearch} className='absolute left-3 top-1/2 transform -translate-y-1/2 text-[#28245F]' />
//             {searchTerm && (
//               <button onClick={handleReset} className='absolute right-3 top-1/2 transform -translate-y-1/2 text-[#28245F]'>
//                 <FontAwesomeIcon icon={faTimes} />
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//       <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
//         {filteredProducts.map((product, key) => 
//           <ProductCart key={key} data={product} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { products } from '../products';
// import ProductCart from '../components/productCart';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
// import { useOutletContext } from 'react-router-dom';
// import logo from '../assets/images/breakfast.png';

// const Home = () => {
//   const { meal } = useParams();
//   const [searchTerm, setSearchTerm] = useState('');
//   const { selectedCategory } = useOutletContext();

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleReset = () => {
//     setSearchTerm('');
//   };

//   const filteredProducts = products.filter((product) => {
//     const matchesMeal = meal ? product.meal.includes(meal) : true;
//     const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
//     return matchesMeal && matchesSearchTerm && matchesCategory;
//   });

//   return (
//     <div>
//       <div className='my-5 flex justify-center'>
//         <img src={logo} alt="background" className='w-full max-w-4xl rounded mb-5' />
//       </div>
//       <div className='flex justify-center'>
//         <div className='relative w-full max-w-lg' style={{ marginLeft: '-10%' }}>
//           <input
//             type='text'
//             placeholder='Search for a food item...'
//             value={searchTerm}
//             onChange={handleSearch}
//             className='w-full p-2 pl-10 pr-10 rounded-full border focus:outline-none focus:ring-2 focus:ring-[#E3E6F6] text-black placeholder-[#D2D2D2] bg-white opacity-90'
//           />
//           <FontAwesomeIcon icon={faSearch} className='absolute left-3 top-1/2 transform -translate-y-1/2 text-[#28245F]' />
//           {searchTerm && (
//             <button onClick={handleReset} className='absolute right-3 top-1/2 transform -translate-y-1/2 text-[#28245F]'>
//               <FontAwesomeIcon icon={faTimes} />
//             </button>
//           )}
//         </div>
//       </div>
//       <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 mt-5'>
//         {filteredProducts.map((product, key) => 
//           <ProductCart key={key} data={product} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { products } from '../products';
// import ProductCart from '../components/productCart';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
// import { useOutletContext } from 'react-router-dom';
// import logo from '../assets/images/breakfast.png';

// const Home = () => {
//   const { meal } = useParams();
//   const [searchTerm, setSearchTerm] = useState('');
//   const { selectedCategory } = useOutletContext();

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleReset = () => {
//     setSearchTerm('');
//   };

//   const filteredProducts = products.filter((product) => {
//     const matchesMeal = meal ? product.meal.includes(meal) : true;
//     const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
//     return matchesMeal && matchesSearchTerm && matchesCategory;
//   });

//   return (
//     <div>
//       <div className='relative my-5 flex justify-center'>
//         <img src={logo} alt="background" className='w-full max-w-4xl rounded mb-5' />
        
//         <div className='absolute w-full max-w-4xl top-10 left-1/2 transform -translate-x-1/2'>
//           <div className='relative'>
//             <input
//               type='text'
//               placeholder='Search for a food item...'
//               value={searchTerm}
//               onChange={handleSearch}
//               className='w-full p-4 pl-10 pr-10 rounded-full border focus:outline-none focus:ring-2 focus:ring-[#E3E6F6] text-black placeholder-[#D2D2D2] bg-white opacity-90'
//             />
//             <FontAwesomeIcon icon={faSearch} className='absolute left-3 top-1/2 transform -translate-y-1/2 text-[#28245F]' />
//             {searchTerm && (
//               <button onClick={handleReset} className='absolute right-3 top-1/2 transform -translate-y-1/2 text-[#28245F]'>
//                 <FontAwesomeIcon icon={faTimes} />
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//       <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
//         {filteredProducts.map((product, key) => 
//           <ProductCart key={key} data={product} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;
// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { products } from '../products';
// import ProductCart from '../components/productCart';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
// import { useOutletContext } from 'react-router-dom';
// import logo from '../assets/images/breakfast.png';

// const Home = () => {
//   const { meal } = useParams();
//   const [searchTerm, setSearchTerm] = useState('');
//   const { selectedCategory } = useOutletContext();

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleReset = () => {
//     setSearchTerm('');
//   };

//   const filteredProducts = products.filter((product) => {
//     const matchesMeal = meal ? product.meal.includes(meal) : true;
//     const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
//     return matchesMeal && matchesSearchTerm && matchesCategory;
//   });

//   return (
//     <div>
//       <div className='relative my-5 flex justify-center'>
//         <img src={logo} alt="background" className='w-full max-w-4xl rounded mb-5' />
        
//         <div className='absolute w-full max-w-md top-10 left-1/2 transform -translate-x-1/2'>
//           <div className='relative'>
//             <input
//               type='text'
//               placeholder='Search for a food item...'
//               value={searchTerm}
//               onChange={handleSearch}
//               className='w-full p-3 pl-10 pr-10 rounded-full border focus:outline-none focus:ring-2 focus:ring-[#E3E6F6] text-black placeholder-[#D2D2D2] bg-white opacity-90'
//             />
//             <FontAwesomeIcon icon={faSearch} className='absolute left-3 top-1/2 transform -translate-y-1/2 text-[#28245F]' />
//             {searchTerm && (
//               <button onClick={handleReset} className='absolute right-3 top-1/2 transform -translate-y-1/2 text-[#28245F]'>
//                 <FontAwesomeIcon icon={faTimes} />
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//       <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
//         {filteredProducts.map((product, key) => 
//           <ProductCart key={key} data={product} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;
// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { products } from '../products';
// import ProductCart from '../components/productCart';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
// import { useOutletContext } from 'react-router-dom';
// import logo from '../assets/images/breakfast.png';

// const Home = () => {
//   const { meal } = useParams();
//   const [searchTerm, setSearchTerm] = useState('');
//   const { selectedCategory } = useOutletContext();

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleReset = () => {
//     setSearchTerm('');
//   };

//   const filteredProducts = products.filter((product) => {
//     const matchesMeal = meal ? product.meal.includes(meal) : true;
//     const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
//     return matchesMeal && matchesSearchTerm && matchesCategory;
//   });

//   return (
//     <div>
//       <div className='relative my-5 flex justify-center'>
//         <img src={logo} alt="background" className='w-full max-w-4xl rounded mb-5' />
        
//         <div className='absolute w-full max-w-md top-28 left-1/4 transform -translate-x-1/2'>
//           <div className='relative'>
//             <input
//               type='text'
//               placeholder='Search for a food item...'
//               value={searchTerm}
//               onChange={handleSearch}
//               className='w-full p-3 pl-10 pr-10 rounded-full border focus:outline-none focus:ring-2 focus:ring-[#E3E6F6] text-black placeholder-[#D2D2D2] bg-white opacity-90'
//             />
//             <FontAwesomeIcon icon={faSearch} className='absolute left-3 top-1/2 transform -translate-y-1/2 text-[#28245F]' />
//             {searchTerm && (
//               <button onClick={handleReset} className='absolute right-3 top-1/2 transform -translate-y-1/2 text-[#28245F]'>
//                 <FontAwesomeIcon icon={faTimes} />
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//       <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
//         {filteredProducts.map((product, key) => 
//           <ProductCart key={key} data={product} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;
// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { products } from '../products';
// import ProductCart from '../components/productCart';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
// import { useOutletContext } from 'react-router-dom';
// import logo from '../assets/images/breakfast.png';

// const Home = () => {
//   const { meal } = useParams();
//   const [searchTerm, setSearchTerm] = useState('');
//   const { selectedCategory } = useOutletContext();

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleReset = () => {
//     setSearchTerm('');
//   };

//   const filteredProducts = products.filter((product) => {
//     const matchesMeal = meal ? product.meal.includes(meal) : true;
//     const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
//     return matchesMeal && matchesSearchTerm && matchesCategory;
//   });

//   return (
//     <div>
//       <div className='relative my-5 flex justify-center'>
//         <img src={logo} alt="background" className='w-full max-w-4xl rounded mb-5' />
        
//         <div className='absolute w-full max-w-md top-28 left-[30%] transform -translate-x-1/4'>
//           <div className='relative'>
//             <input
//               type='text'
//               placeholder='Search for a food item...'
//               value={searchTerm}
//               onChange={handleSearch}
//               className='w-full p-3 pl-10 pr-10 rounded-full border focus:outline-none focus:ring-2 focus:ring-[#E3E6F6] text-black placeholder-[#D2D2D2] bg-white opacity-90'
//             />
//             <FontAwesomeIcon icon={faSearch} className='absolute left-3 top-1/2 transform -translate-y-1/2 text-[#28245F]' />
//             {searchTerm && (
//               <button onClick={handleReset} className='absolute right-3 top-1/2 transform -translate-y-1/2 text-[#28245F]'>
//                 <FontAwesomeIcon icon={faTimes} />
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//       <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
//         {filteredProducts.map((product, key) => 
//           <ProductCart key={key} data={product} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../products';
import ProductCart from '../components/productCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useOutletContext } from 'react-router-dom';
import logo from '../assets/images/breakfast.png';

const Home = () => {
  const { meal } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const { selectedCategory } = useOutletContext();

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleReset = () => {
    setSearchTerm('');
  };

  const filteredProducts = products.filter((product) => {
    const matchesMeal = meal ? product.meal.includes(meal) : true;
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    return matchesMeal && matchesSearchTerm && matchesCategory;
  });

  return (
    <div>
      <div className='relative my-5 flex justify-center'>
        <img src={logo} alt="background" className='w-full max-w-4xl rounded mb-5' />
        
        <div className='absolute w-full max-w-md top-28 left-[30%] transform -translate-x-1/4'>
          <div className='relative'>
            <input
              type='text'
              placeholder='Search for a food item...'
              value={searchTerm}
              onChange={handleSearch}
              className='w-full p-3 pl-10 pr-10 rounded-full border focus:outline-none focus:ring-2 focus:ring-[#E3E6F6] text-black placeholder-[#D2D2D2] bg-white opacity-90'
            />
            <FontAwesomeIcon icon={faSearch} className='absolute left-3 top-[45%] transform -translate-y-1/2 text-[#28245F]' />
            {searchTerm && (
              <button onClick={handleReset} className='absolute right-3 top-[45%] transform -translate-y-1/2 text-[#28245F]'>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            )}
          </div>
        </div>
      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
        {filteredProducts.map((product, key) => 
          <ProductCart key={key} data={product} />
        )}
      </div>
    </div>
  );
};

export default Home;
