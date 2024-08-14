/*import React, { useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [assignRole, setAssignRole] = useState('');
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


  const handleAssignRole = async () => {
    try {
      const response = await axios.post('https://localhost:7269/api/Account/assign-role', { username, role: assignRole });
      setMessage(response.data.message);
      setUsername('');
      setAssignRole('');
    } catch (err) {
      setMessage('Error assigning role');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
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
      <div className="w-full max-w-md bg-white p-8 shadow-md rounded">
        <h3 className="text-xl font-bold mb-4">Assign Role</h3>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Username"
        />
        <input
          type="text"
          value={assignRole}
          onChange={(e) => setAssignRole(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Role"
        />
        <button
          onClick={handleAssignRole}
          className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Assign Role
        </button>
      </div>
      {message && <div className="text-green-500 text-sm mt-4">{message}</div>}
    </div>
  );
};

export default AdminDashboard;*/
/*import React, { useState, useEffect } from 'react';
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <Navbar /> 
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
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

      <div className="w-full max-w-md bg-white p-8 shadow-md rounded mb-8">
        <h3 className="text-xl font-bold mb-4">Assign Role</h3>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Username"
        />
        <input
          type="text"
          value={assignRole}
          onChange={(e) => setAssignRole(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Role"
        />
        <button
          onClick={handleAssignRole}
          className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Assign Role
        </button>
      </div>

      <div className="w-full max-w-md bg-white p-8 shadow-md rounded">
        <h3 className="text-xl font-bold mb-4">Users and Roles</h3>
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Username</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Edit Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{user.username}</td>
                <td className="border px-4 py-2">{user.role}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleEditRole(user)}
                    className="py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700"
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
  );
};

export default AdminDashboard;
*/

import React from 'react';
import { FiUsers, FiSettings, FiBarChart2 } from 'react-icons/fi';
import Navbar from '../components/AdminNavbar';

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg">
          <div className="p-4">
            <h2 className="text-2xl font-bold text-gray-700">Admin Panel</h2>
          </div>
          <nav className="mt-6">
            <a href="#" className="flex items-center p-3 hover:bg-gray-200">
              <FiUsers className="text-lg mr-3" />
              <span className="text-gray-700">Manage Users</span>
            </a>
            <a href="#" className="flex items-center p-3 hover:bg-gray-200">
              <FiSettings className="text-lg mr-3" />
              <span className="text-gray-700">Settings</span>
            </a>
            <a href="#" className="flex items-center p-3 hover:bg-gray-200">
              <FiBarChart2 className="text-lg mr-3" />
              <span className="text-gray-700">Analytics</span>
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-700">Users</h3>
              <p className="text-gray-500">Manage user roles, permissions, and more.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-700">Settings</h3>
              <p className="text-gray-500">Configure system settings and preferences.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-700">Reports</h3>
              <p className="text-gray-500">View and generate system reports.</p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-700">Dashboard Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold">Total Users</h4>
                <p className="text-4xl font-bold mt-2">1,234</p>
              </div>
              <div className="bg-green-500 text-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold">Active Sessions</h4>
                <p className="text-4xl font-bold mt-2">567</p>
              </div>
              <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold">Pending Tasks</h4>
                <p className="text-4xl font-bold mt-2">42</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;
