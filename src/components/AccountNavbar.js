import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaFileAlt, FaMoneyBillWave,LiaMoneyBillSolid, FaCog } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-around">
      <Link to="/dashboard" className={`flex items-center ${location.pathname === '/dashboard' ? 'text-yellow-400' : ''}`}>
        <FaHome className="mr-2" /> Dashboard
      </Link>
      <Link to="/reports" className={`flex items-center ${location.pathname === '/reports' ? 'text-yellow-400' : ''}`}>
        <FaFileAlt className="mr-2" /> Reports
      </Link>
      <Link to="/orders" className={`flex items-center ${location.pathname === '/transactions' ? 'text-yellow-400' : ''}`}>
        < FaMoneyBillWave className="mr-2" /> Bills
      </Link>
      <Link to="/purchased" className={`flex items-center ${location.pathname === '/transactions' ? 'text-yellow-400' : ''}`}>
        <FaMoneyBillWave className="mr-2" /> Transactions
      </Link>
      <Link to="/settings" className={`flex items-center ${location.pathname === '/settings' ? 'text-yellow-400' : ''}`}>
        <FaCog className="mr-2" /> Settings
      </Link>
    </nav>
  );
};

export default Navbar;
