
import React, { useEffect, useState } from 'react';
import Navbar from '../components/AdminNavbar';
import axios from 'axios';
import EditUserModal from './EditUserModal';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('https://localhost:7269/api/Account/users');
            setUsers(response.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    const handleDeleteUser = async (id) => {
        try {
            await axios.delete(`https://localhost:7269/api/Account/delete-user/${id}`);
            fetchUsers();
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    const handleEditUser = (id) => {
        setSelectedUserId(id);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        fetchUsers(); // Refresh user list after editing
    };

    return (
        <>
        <Navbar />
        
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">User Management</h1>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Username</th>
                        <th className="py-2 px-4 border-b">Email</th>
                        <th className="py-2 px-4 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td className="py-2 px-4 border-b">{user.userName}</td>
                            <td className="py-2 px-4 border-b">{user.email}</td>
                            <td className="py-2 px-4 border-b">
                                <button 
                                    className="bg-blue-500 text-white px-4 py-2 rounded mr-2" 
                                    onClick={() => handleEditUser(user.id)}
                                >
                                    Edit
                                </button>
                                <button 
                                    className="bg-red-500 text-white px-4 py-2 rounded" 
                                    onClick={() => handleDeleteUser(user.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isModalOpen && (
                <EditUserModal userId={selectedUserId} closeModal={closeModal} />
            )}
        </div>
        </>
    );
};

export default UserManagement;
