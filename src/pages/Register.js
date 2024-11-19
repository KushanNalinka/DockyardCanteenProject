// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Register = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('https://localhost:7269/api/Account/register', { username, email, password });
//       setSuccess(response.data.message);
//       setError('');
//       setTimeout(() => {
//         navigate('/');
//       }, 2000);
//     } catch (err) {
//       setError('Registration failed');
//       setSuccess('');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="max-w-md w-full bg-white p-8 shadow-md rounded">
//         <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
//         <form onSubmit={handleRegister}>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Username</label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="mt-1 block w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="mt-1 block w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="mt-1 block w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>
//           {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
//           {success && <div className="text-green-500 text-sm mb-4">{success}</div>}
//           <button
//             type="submit"
//             className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//           >
//             Register
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Register = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('https://localhost:7269/api/Account/register', { username, email, password });
//       setSuccess(response.data.message);
//       setError('');
//       setTimeout(() => {
//         navigate('/');
//       }, 2000);
//     } catch (err) {
//       setError('Registration failed');
//       setSuccess('');
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-blue-200 overflow-hidden">
//       <div className="absolute inset-0">
//         <div className="absolute bg-gradient-to-r from-purple-500 to-yellow-500 opacity-30 animate-blob rounded-full filter blur-2xl w-72 h-72 top-1/4 left-1/4"></div>
//         <div className="absolute bg-gradient-to-r from-yellow-500 to-pink-500 opacity-30 animate-blob rounded-full filter blur-2xl w-72 h-72 bottom-1/4 right-1/4"></div>
//         <div className="absolute bg-gradient-to-r from-green-500 to-teal-500 opacity-30 animate-blob rounded-full filter blur-2xl w-72 h-72 top-1/4 right-1/4"></div>
//         <div className="absolute bg-gradient-to-r from-red-500 to-orange-500 opacity-30 animate-blob rounded-full filter blur-2xl w-72 h-72 bottom-1/4 left-1/4"></div>
//       </div>
//       <div className="relative bg-white bg-opacity-20 backdrop-blur-lg p-8 shadow-md rounded-lg max-w-md w-full z-10">
//         <h2 className="text-3xl font-bold text-center text-white mb-6">Register</h2>
//         <form onSubmit={handleRegister}>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-white">Username</label>
//             <div className="relative">
//               <input
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 className="mt-1 block w-full p-2.5 bg-transparent border border-white rounded text-white placeholder-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500"
//                 placeholder="Enter your username"
//                 required
//               />
//               <div className="absolute inset-y-0 right-3 flex items-center">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 01-8 0 4 4 0 018 0zm4 8a9 9 0 10-18 0h18z" />
//                 </svg>
//               </div>
//             </div>
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-white">Email</label>
//             <div className="relative">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="mt-1 block w-full p-2.5 bg-transparent border border-white rounded text-white placeholder-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500"
//                 placeholder="Enter your email"
//                 required
//               />
//               <div className="absolute inset-y-0 right-3 flex items-center">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c2.757 0 5-2.243 5-5s-2.243-5-5-5-5 2.243-5 5 2.243 5 5 5zm0 2c-3.874 0-7 3.126-7 7h14c0-3.874-3.126-7-7-7z" />
//                 </svg>
//               </div>
//             </div>
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-white">Password</label>
//             <div className="relative">
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="mt-1 block w-full p-2.5 bg-transparent border border-white rounded text-white placeholder-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500"
//                 placeholder="Enter your password"
//                 required
//               />
//               <div className="absolute inset-y-0 right-3 flex items-center">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c2.757 0 5-2.243 5-5s-2.243-5-5-5-5 2.243-5 5 2.243 5 5 5zm0 2c-3.874 0-7 3.126-7 7h14c0-3.874-3.126-7-7-7z" />
//                 </svg>
//               </div>
//             </div>
//           </div>
//           {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
//           {success && <div className="text-green-500 text-sm mb-4">{success}</div>}
//           <button
//             type="submit"
//             className="w-full mt-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
//           >
//             Register
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;
import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import yourImage from '../assets/images/B6.png';
import foodIcon1 from '../assets/images/Untitled-25.png';
import foodIcon2 from '../assets/images/Untitled-4.png';
import foodIcon3 from '../assets/images/Untitled-8.png';
import foodIcon4 from '../assets/images/Untitled-3.png'; // Add your fourth food icon here
import foodIcon5 from '../assets/images/Untitled-27.png'; // Add your fifth food icon here
import foodIcon6 from '../assets/images/Untitled-35.png'; // Add your sixth food icon here
import foodIcon7 from '../assets/images/Untitled-28.png'; // Add your seventh food icon here
import foodIcon8 from '../assets/images/Untitled-9.png'; // Add your eighth food icon here
import foodIcon9 from '../assets/images/Untitled-15.png'; // Add your ninth food icon here
import foodIcon10 from '../assets/images/Untitled-21.png'; // Add your tenth food icon here


const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();


  useEffect(() => {
    const foodItems = document.querySelectorAll('.falling-food');

    foodItems.forEach((item) => {
      const randomLeft = Math.floor(Math.random() * window.innerWidth);
      const randomDuration = Math.floor(Math.random() * 10) + 8; // Slower falling speed (8s to 18s)
      item.style.left = `${randomLeft}px`;
      item.style.animationDuration = `${randomDuration}s`;
    });
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://localhost:7269/api/Account/register', { username, email, password });
      setSuccess(response.data.message);
      setError('');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (err) {
      setError('Registration failed');
      setSuccess('');
    }
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${yourImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
      }}
    >
        <div className="falling-food-container absolute inset-0 pointer-events-none">
        {[foodIcon1, foodIcon2, foodIcon3, foodIcon4, foodIcon5, foodIcon6, foodIcon7, foodIcon8, foodIcon9, foodIcon10].map((icon, i) => (
          <img key={i} src={icon} alt={`Food Icon ${i + 1}`} className="falling-food absolute w-12 h-12" />
        ))}
      </div>

      <div className="absolute inset-0">
        <div className="absolute bg-gradient-to-r from-purple-500 to-yellow-500 opacity-30 animate-blob rounded-full filter blur-2xl w-72 h-72 top-1/4 left-1/4"></div>
        <div className="absolute bg-gradient-to-r from-yellow-500 to-pink-500 opacity-30 animate-blob rounded-full filter blur-2xl w-72 h-72 bottom-1/4 right-1/4"></div>
        <div className="absolute bg-gradient-to-r from-green-500 to-teal-500 opacity-30 animate-blob rounded-full filter blur-2xl w-72 h-72 top-1/4 right-1/4"></div>
        <div className="absolute bg-gradient-to-r from-red-500 to-orange-500 opacity-30 animate-blob rounded-full filter blur-2xl w-72 h-72 bottom-1/4 left-1/4"></div>
      </div>
      <div className="relative bg-white bg-opacity-20 backdrop-blur-lg p-8 shadow-md rounded-lg max-w-md w-full z-10">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white">Username</label>
            <div className="relative">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full p-2.5 bg-transparent border border-white rounded text-white placeholder-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500"
                placeholder="Enter your username"
                required
              />
              <div className="absolute inset-y-0 right-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 01-8 0 4 4 0 018 0zm4 8a9 9 0 10-18 0h18z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white">Email</label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full p-2.5 bg-transparent border border-white rounded text-white placeholder-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
              <div className="absolute inset-y-0 right-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c2.757 0 5-2.243 5-5s-2.243-5-5-5-5 2.243-5 5 2.243 5 5 5zm0 2c-3.874 0-7 3.126-7 7h14c0-3.874-3.126-7-7-7z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white">Password</label>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full p-2.5 bg-transparent border border-white rounded text-white placeholder-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500"
                placeholder="Enter your password"
                required
              />
              <div className="absolute inset-y-0 right-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c2.757 0 5-2.243 5-5s-2.243-5-5-5-5 2.243-5 5 2.243 5 5 5zm0 2c-3.874 0-7 3.126-7 7h14c0-3.874-3.126-7-7-7z" />
                </svg>
              </div>
            </div>
          </div>
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
          {success && <div className="text-green-500 text-sm mb-4">{success}</div>}
          <button
            type="submit"
            className="w-full mt-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
