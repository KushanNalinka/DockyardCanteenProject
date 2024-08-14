
/*import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/AdminNavbar'; 


function AddRole() {
    const [role, setRole] = useState('');
    const [message, setMessage] = useState('');

    const handleAddRole = async () => {
        try {
            const response = await axios.post('https://localhost:7269/api/Account/add-role', role, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setMessage(response.data.message);
            setRole('');
        } catch (err) {
            setMessage('Error adding role');
        }
    };
    
  return (
    <div>
         <Navbar /> 
         
        <div className="w-full max-w-md bg-white p-8 shadow-md rounded mb-8">
        <h3 className="text-xl font-bold mb-4">Add Role</h3>
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Role"
        />
        <button
          onClick={handleAddRole}
          className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Role
        </button>
      </div>
      {message && <div className="text-green-500 text-sm mt-4">{message}</div>}
    </div>

  )
}

export default AddRole*/

import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/AdminNavbar';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

function AddRole() {
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');

  const handleAddRole = async () => {
    try {
      const response = await axios.post('https://localhost:7269/api/Account/add-role', role, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setMessage(response.data.message);
      setRole('');
    } catch (err) {
      setMessage('Error adding role');
    }
  };

  return (
    <>
    <Navbar />
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        
      {/* Background Image Slider */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="h-full w-full relative">
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-700 opacity-100"
            style={{ backgroundImage: 'url(https://as1.ftcdn.net/v2/jpg/02/88/87/08/1000_F_288870820_kBCVZroaWMSxArHDWfJxd7iKjpc2F3Jq.jpg)' }}
          ></div>
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-700 opacity-0"
            style={{ backgroundImage: 'url(https://www.transparentpng.com/thumb/jobs/jobs-images-png-26.png)' }}
          ></div>
        </div>
      </div>

      {/* Overlay for content visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md">
       
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 shadow-lg rounded-lg"
        >
          <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">Add Role</h3>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="mt-1 block w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:border-blue-500"
            placeholder="Enter Role Name"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddRole}
            className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none"
          >
            Add Role
          </motion.button>
          {message && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center text-green-500 text-sm mt-4"
            >
              <FaCheckCircle className="mr-2" />
              {message}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
    </>
  );
}

export default AddRole;

