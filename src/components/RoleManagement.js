// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Navbar from '../components/AdminNavbar'; 

// const RoleManagement = () => {
//     const [roles, setRoles] = useState([]);

//     useEffect(() => {
//         fetchRoles();
//     }, []);

//     const fetchRoles = async () => {
//         try {
//             const response = await axios.get('https://localhost:7269/api/Account/roles');
//             setRoles(response.data);
//         } catch (error) {
//             console.error('Error fetching roles:', error);
//         }
//     };

//     const deleteRole = async (roleName) => {
//         if (window.confirm(`Are you sure you want to delete the role: ${roleName}?`)) {
//             try {
//                 await axios.delete(`https://localhost:7269/api/Account/delete-role/${roleName}`);
//                 fetchRoles(); // Refresh roles list after deletion
//             } catch (error) {
//                 console.error('Error deleting role:', error);
//             }
//         }
//     };

//     return (
//         <>
//         <Navbar />
//         <div className="container mx-auto p-4">
//             <h2 className="text-2xl font-bold mb-4">Role Management</h2>
//             <table className="min-w-full bg-white">
//                 <thead>
//                     <tr>
//                         <th className="py-2">Role Name</th>
//                         <th className="py-2">Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {roles.map((role) => (
//                         <tr key={role.id} className="border-b">
//                             <td className="py-2 px-4">{role.name}</td>
//                             <td className="py-2 px-4">
//                                 <button
//                                     onClick={() => deleteRole(role.name)}
//                                     className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
//                                 >
//                                     Delete
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//         </>
//     );
// };

// export default RoleManagement;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Navbar from '../components/AdminNavbar'; 

// const RoleManagement = () => {
//     const [roles, setRoles] = useState([]);

//     useEffect(() => {
//         fetchRoles();
//     }, []);

//     const fetchRoles = async () => {
//         try {
//             const response = await axios.get('https://localhost:7269/api/Account/roles');
//             setRoles(response.data);
//         } catch (error) {
//             console.error('Error fetching roles:', error);
//         }
//     };

//     const deleteRole = async (roleName) => {
//         if (window.confirm(`Are you sure you want to delete the role: ${roleName}?`)) {
//             try {
//                 await axios.delete(`https://localhost:7269/api/Account/delete-role/${roleName}`);
//                 fetchRoles(); // Refresh roles list after deletion
//             } catch (error) {
//                 console.error('Error deleting role:', error);
//             }
//         }
//     };

//     return (
//         <>
//         <Navbar />
//         <div className="container mx-auto p-4">
//           <h2 className="text-2xl font-bold mb-4 text-center">Role Management</h2>
//           <table className="min-w-full bg-white border border-gray-400 rounded-lg overflow-hidden">
//             <thead className="bg-[#24256D] text-white">
//               <tr>
//                 <th className="py-3 px-4 border-b border-gray-400 text-center">Index</th>
//                 <th className="py-3 px-4 border-b border-gray-400 text-center">Role Name</th>
//                 <th className="py-3 px-4 border-b border-gray-400 text-center">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {roles.map((role, index) => (
//                 <tr key={role.id} className="hover:bg-gray-400">
//                   <td className="py-2 px-4 border-b border-gray-400 text-center">{index + 1}</td>
//                   <td className="py-2 px-4 border-b border-gray-400 text-center">{role.name}</td>
//                   <td className="py-2 px-4 border-b border-gray-400 text-center">
//                     <button
//                       onClick={() => deleteRole(role.name)}
//                       className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </>
      
//     );
// };

// export default RoleManagement;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/AdminNavbar';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the app element for accessibility

const RoleManagement = () => {
    const [roles, setRoles] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [roleToDelete, setRoleToDelete] = useState(null);

    useEffect(() => {
        fetchRoles();
    }, []);

    const fetchRoles = async () => {
        try {
            const response = await axios.get('https://localhost:7269/api/Account/roles');
            setRoles(response.data);
        } catch (error) {
            console.error('Error fetching roles:', error);
        }
    };

    const handleDeleteClick = (roleName) => {
        setRoleToDelete(roleName);
        setIsModalOpen(true);
    };

    const deleteRole = async () => {
        if (roleToDelete) {
            try {
                await axios.delete(`https://localhost:7269/api/Account/delete-role/${roleToDelete}`);
                fetchRoles(); // Refresh roles list after deletion
                setIsModalOpen(false);
                setRoleToDelete(null);
            } catch (error) {
                console.error('Error deleting role:', error);
            }
        }
    };

    return (
        <>
            <Navbar />
            <div className="container mx-auto p-4">
                <h2 className="text-2xl font-bold mb-4 text-center">Role Management</h2>
                <table className="min-w-full bg-white border border-gray-400 rounded-lg overflow-hidden">
                    <thead className="bg-[#24256D] text-white">
                        <tr>
                            <th className="py-3 px-4 border-b border-gray-400 text-center">Index</th>
                            <th className="py-3 px-4 border-b border-gray-400 text-center">Role Name</th>
                            <th className="py-3 px-4 border-b border-gray-400 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {roles.map((role, index) => (
                            <tr key={role.id} className="hover:bg-gray-400">
                                <td className="py-2 px-4 border-b border-gray-400 text-center">{index + 1}</td>
                                <td className="py-2 px-4 border-b border-gray-400 text-center">{role.name}</td>
                                <td className="py-2 px-4 border-b border-gray-400 text-center">
                                    <button
                                        onClick={() => handleDeleteClick(role.name)}
                                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Confirmation Modal */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                className="bg-white p-4 rounded-lg shadow-lg mx-auto mt-24 max-w-sm"
                overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-50"
            >
                <h2 className="text-lg font-bold mb-4 text-center text-[#24256D]">Confirm Deletion</h2>
                <p className="mb-4 text-center">Are you sure you want to delete the role: <span className="font-semibold">{roleToDelete}</span>?</p>
                <div className="flex justify-around">
                    <button
                        onClick={deleteRole}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                    >
                        Yes, Delete
                    </button>
                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
                    >
                        Cancel
                    </button>
                </div>
            </Modal>
        </>
    );
};

export default RoleManagement;
