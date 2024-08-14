

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
