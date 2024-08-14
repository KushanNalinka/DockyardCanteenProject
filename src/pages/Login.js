import React, { useState } from 'react';
import { useNavigate , Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://localhost:7269/api/Account/login', { username, password });
      const { token } = response.data;
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      const roles = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
      
      if (roles.includes('Admin')) {
        navigate('/admin-dashboard');
      } else if (roles.includes('Cashier')) {
        navigate('/cashier');
      } else if (roles.includes('Canteen')) {
        navigate('/canteen');
      } else if (roles.includes('Welfare')) {
        navigate('/food');
      }else if (roles.includes('Accountant')) {
        navigate('/accounts');
      }
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 shadow-md rounded">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/recover-password" className="text-blue-600 hover:underline">
            Forgot Password?
          </Link>
        </div>
        <div className="mt-2 text-center">
          <span className="text-gray-600">Don't have an account? </span>
          <Link to="/register" className="text-blue-600 hover:underline">
            Sign Up Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
