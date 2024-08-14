import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/AdminNavbar'; 

const RoleManagement = () => {
    const [roles, setRoles] = useState([]);

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

    const deleteRole = async (roleName) => {
        if (window.confirm(`Are you sure you want to delete the role: ${roleName}?`)) {
            try {
                await axios.delete(`https://localhost:7269/api/Account/delete-role/${roleName}`);
                fetchRoles(); // Refresh roles list after deletion
            } catch (error) {
                console.error('Error deleting role:', error);
            }
        }
    };

    return (
        <>
        <Navbar />
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Role Management</h2>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2">Role Name</th>
                        <th className="py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {roles.map((role) => (
                        <tr key={role.id} className="border-b">
                            <td className="py-2 px-4">{role.name}</td>
                            <td className="py-2 px-4">
                                <button
                                    onClick={() => deleteRole(role.name)}
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
        </>
    );
};

export default RoleManagement;
