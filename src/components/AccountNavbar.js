/*import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaFileAlt, FaMoneyBillWave,LiaMoneyBillSolid, FaCog } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-[#FFC10C] text-white p-4 flex justify-around">
      <Link to="/accounts" className={`flex items-center ${location.pathname === '/dashboard' ? 'text-yellow-400' : ''}`}>
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

export default Navbar;*/

// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { FaHome, FaFileAlt, FaMoneyBillWave, FaCog } from 'react-icons/fa';
// import logo from '../assets/images/doccanteen.png.png'; // Import the logo image

// const Navbar = () => {
//   const location = useLocation();

//   return (
//     <nav className="bg-[#FFC10C] text-white p-4 flex justify-between items-center fixed top-0 w-full z-10" style={{ paddingLeft: '20px' }}> {/* Added left padding for margin */}
//       <div className="flex items-center">
//         <img src={logo} alt="Logo" className="h-12 mr-6" /> {/* Increased logo size */}
//         <Link to="/accounts" className={`flex items-center ${location.pathname === '/dashboard' ? 'text-yellow-400' : ''}`}>
//           <FaHome className="mr-2" /> Dashboard
//         </Link>
//       </div>
//       <div className="flex space-x-6">
//         <Link to="#" className={`flex items-center ${location.pathname === '/reports' ? 'text-yellow-400' : ''}`}>
//           <FaFileAlt className="mr-2" /> Reports
//         </Link>
//         <Link to="/orders" className={`flex items-center ${location.pathname === '/transactions' ? 'text-yellow-400' : ''}`}>
//           <FaMoneyBillWave className="mr-2" /> Bills
//         </Link>
//         <Link to="/purchased" className={`flex items-center ${location.pathname === '/transactions' ? 'text-yellow-400' : ''}`}>
//           <FaMoneyBillWave className="mr-2" /> Transactions
//         </Link>
//         <Link to="#" className={`flex items-center ${location.pathname === '/settings' ? 'text-yellow-400' : ''}`}>
//           <FaCog className="mr-2" /> Settings
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaFileAlt, FaMoneyBillWave, FaSignOutAlt } from 'react-icons/fa'; // Removed FaCog and added FaSignOutAlt
import logo from '../assets/images/doccanteen.png.png'; // Ensure the correct path and file extension

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-[#FFC10C] text-white p-4 flex justify-between items-center fixed top-0 w-full z-10" style={{ paddingLeft: '20px' }}>
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-12 mr-6" />
        <Link to="/accounts" className={`flex items-center ${location.pathname === '/accounts' ? 'text-blue-800' : ''} text-2xl`}>
          <FaHome className="mr-2" /> Home {/* Changed from Dashboard to Home */}
        </Link>
      </div>
      <div className="flex space-x-6">
        <Link to="#" className={`flex items-center ${location.pathname === '/reports' ? 'text-blue-600' : ''} hover:text-gray-400 text-2xl`}>
          <FaFileAlt className="mr-2" /> Reports
        </Link>
        <Link to="/orders" className={`flex items-center ${location.pathname === '/orders' ? 'text-blue-600' : ''} hover:text-gray-400 text-2xl`}>
          <FaMoneyBillWave className="mr-2" /> Bills
        </Link>
        <Link to="/purchased" className={`flex items-center ${location.pathname === '/purchased' ? 'text-blue-600' : ''} hover:text-gray-400 text-2xl`}>
          <FaMoneyBillWave className="mr-2" /> Transactions
        </Link>
        <Link to="/logout" className={`flex items-center hover:text-blue-600 text-2xl`}>
          <FaSignOutAlt className="mr-2" /> Logout {/* Added Logout */}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
