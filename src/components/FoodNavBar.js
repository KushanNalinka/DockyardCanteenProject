// Navbar.js
import React from 'react';
import { FaHome, FaList, FaUser, FaCog } from 'react-icons/fa';
import logo from '../assets/images/doccanteen.png.png';
const Navbar = () => {
    return (
        <nav className="bg-[#FFC10C] text-white p-3 fixed top-0 w-full z-10">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <img src={logo} alt="Logo" className="w-14 h-14 rounded-full" />
                    <div className="text-2xl font-bold">Food Manager</div>
                </div>
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-yellow-300 flex items-center">
                        <FaHome className="mr-2" /> Home
                    </a>
                    <a href="#" className="hover:text-yellow-300 flex items-center">
                        <FaList className="mr-2" /> Food List
                    </a>
                    <a href="#" className="hover:text-yellow-300 flex items-center">
                        <FaUser className="mr-2" /> Profile
                    </a>
                    <a href="#" className="hover:text-yellow-300 flex items-center">
                        <FaCog className="mr-2" /> Settings
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
