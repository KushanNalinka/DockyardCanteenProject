// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import RoleEditPopup from '../components/RoleEditPopup';
// import Navbar from '../components/AdminNavbar'; 

// const AdminDashboard = () => {
//   const [role, setRole] = useState('');
//   const [username, setUsername] = useState('');
//   const [assignRole, setAssignRole] = useState('');
//   const [users, setUsers] = useState([]);
//   const [message, setMessage] = useState('');
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [currentUserToEdit, setCurrentUserToEdit] = useState(null);

//   useEffect(() => {
//     fetchUsersWithRoles();
//   }, []);

//   const fetchUsersWithRoles = async () => {
//     try {
//       const response = await axios.get('https://localhost:7269/api/Account/users-with-roles');
//       setUsers(response.data);
//     } catch (err) {
//       setMessage('Error fetching users');
//     }
//   };

  

//   const handleAssignRole = async () => {
//     try {
//       const response = await axios.post('https://localhost:7269/api/Account/assign-role', { username, role: assignRole });
//       setMessage(response.data.message);
//       setUsername('');
//       setAssignRole('');
//       fetchUsersWithRoles();  // Refresh the table after assigning role
//     } catch (err) {
//       setMessage('Error assigning role');
//     }
//   };

//   const handleEditRole = (user) => {
//     setCurrentUserToEdit(user);
//     setIsPopupOpen(true);
//   };

//   const handlePopupClose = () => {
//     setIsPopupOpen(false);
//     setCurrentUserToEdit(null);
//   };

//   return (
//     <>
//      <Navbar /> 
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
     
      

//       <div className="w-full max-w-md bg-white p-8 shadow-md rounded mb-8">
//         <h3 className="text-xl font-bold mb-4">Assign Role</h3>
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           className="mt-1 block w-full p-2 border border-gray-300 rounded mb-4"
//           placeholder="Username"
//         />
//         <input
//           type="text"
//           value={assignRole}
//           onChange={(e) => setAssignRole(e.target.value)}
//           className="mt-1 block w-full p-2 border border-gray-300 rounded mb-4"
//           placeholder="Role"
//         />
//         <button
//           onClick={handleAssignRole}
//           className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//         >
//           Assign Role
//         </button>
//       </div>

//       <div className="w-full max-w-md bg-white p-8 shadow-md rounded">
//         <h3 className="text-xl font-bold mb-4">Users and Roles</h3>
//         <table className="w-full table-auto">
//           <thead>
//             <tr>
//               <th className="px-4 py-2">Username</th>
//               <th className="px-4 py-2">Role</th>
//               <th className="px-4 py-2">Edit Role</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user, index) => (
//               <tr key={index}>
//                 <td className="border px-4 py-2">{user.username}</td>
//                 <td className="border px-4 py-2">{user.role}</td>
//                 <td className="border px-4 py-2">
//                   <button
//                     onClick={() => handleEditRole(user)}
//                     className="py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700"
//                   >
//                     Edit Role
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {message && <div className="text-green-500 text-sm mt-4">{message}</div>}

//       {isPopupOpen && currentUserToEdit && (
//         <RoleEditPopup 
//           user={currentUserToEdit} 
//           onClose={handlePopupClose} 
//           fetchUsersWithRoles={fetchUsersWithRoles} 
//           setMessage={setMessage} 
//         />
//       )}
//     </div>
//     </>
//   );
// };

// export default AdminDashboard;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RoleEditPopup from '../components/RoleEditPopup';
import Navbar from '../components/AdminNavbar'; 

const AdminDashboard = () => {
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [assignRole, setAssignRole] = useState('');
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentUserToEdit, setCurrentUserToEdit] = useState(null);

  useEffect(() => {
    fetchUsersWithRoles();
  }, []);

  const fetchUsersWithRoles = async () => {
    try {
      const response = await axios.get('https://localhost:7269/api/Account/users-with-roles');
      setUsers(response.data);
    } catch (err) {
      setMessage('Error fetching users');
    }
  };

  

  const handleAssignRole = async () => {
    try {
      const response = await axios.post('https://localhost:7269/api/Account/assign-role', { username, role: assignRole });
      setMessage(response.data.message);
      setUsername('');
      setAssignRole('');
      fetchUsersWithRoles();  // Refresh the table after assigning role
    } catch (err) {
      setMessage('Error assigning role');
    }
  };

  const handleEditRole = (user) => {
    setCurrentUserToEdit(user);
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
    setCurrentUserToEdit(null);
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100 p-4">
      {/* Form Section */}
      <div className="w-full max-w-md bg-white p-8 shadow-md rounded mb-8 md:mb-0 md:mr-4">
        <h3 className="text-xl font-bold mb-4">Assign Role</h3>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded mb-4 focus:border-blue-500 focus:outline-none"
          placeholder="Username"
        />
        <input
          type="text"
          value={assignRole}
          onChange={(e) => setAssignRole(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded mb-4 focus:border-blue-500 focus:outline-none"
          placeholder="Role"
        />
        <button
          onClick={handleAssignRole}
          className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
        >
          Assign Role
        </button>
      </div>
  
      {/* Table Section */}
      <div className="w-full max-w-md bg-white p-8 shadow-md rounded">
        <h3 className="text-xl font-bold mb-4">Users and Roles</h3>
        <table className="w-full table-auto border-collapse">
          <thead className="bg-[#24256D] text-white">
            <tr>
              <th className="px-4 py-2 border-b border-gray-300 text-left">Username</th>
              <th className="px-4 py-2 border-b border-gray-300 text-left">Role</th>
              <th className="px-4 py-2 border-b border-gray-300 text-left">Edit Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="hover:bg-gray-200">
                <td className="border px-4 py-2">{user.username}</td>
                <td className="border px-4 py-2">{user.role}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleEditRole(user)}
                    className="py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700 transition duration-300"
                  >
                    Edit Role
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  
      {message && <div className="text-green-500 text-sm mt-4">{message}</div>}
  
      {isPopupOpen && currentUserToEdit && (
        <RoleEditPopup 
          user={currentUserToEdit} 
          onClose={handlePopupClose} 
          fetchUsersWithRoles={fetchUsersWithRoles} 
          setMessage={setMessage} 
        />
      )}
    </div>
  </>
  
  );
};

export default AdminDashboard;
