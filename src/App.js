
import Layout from './components/layout';

import CanteenLayout from './components/canteenLayout';
import Home from './pages/home';
import CanteenHome from './pages/canteenHome';
import Detail from './pages/detail';
import Products from './pages/products';
import Employee from './components/employeeList';
import Food from './components/FoodList';
import './styles.css';
import InitialScreen from './pages/initialScreen';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import CanteenInitialScreen from './pages/canteenInitialScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecoverPassword from './components/RecoverPassword';
import UserManagement from "./components/UserManagement";
import Orders from './pages/Orders';
import Account from './pages/Accountant'
import PurchasedTable from './components/PurchasedTable';
import RoleManagement from './components/RoleManagement';
import AddRole from './components/AddRole';
import AssignRoles from './components/AssignRoles';
import AdminRegister from './components/AdminRegister';
function App() {
  return (
    <BrowserRouter>
      <Routes>

      <Route path="/" element={<Login />} />
    
        <Route path="/register" element={<Register />} />
        <Route path="/adminregister" element={<AdminRegister />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/cashier" element={<InitialScreen/>} />
        <Route path="/canteen" element={<CanteenInitialScreen/>} />
        <Route path='/canteen/meal/:meal' element={<CanteenLayout />}>
          <Route index element={<CanteenHome />} /></Route>

        <Route path='/cashier/meal/:meal' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/cashier/meal/:meal/:slug' element={<Detail />} />
        </Route>
        <Route path='/product' element={<Products/>} />
        <Route path='/employee' element={<Employee/>} />
        <Route path='/food' element={<Food/>} />
        <Route path="/recover-password" element={<RecoverPassword />} />
        <Route path="/user-management" element={<UserManagement />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/accounts" element={<Account />} />
        <Route path="/purchased" element={<PurchasedTable />} />
        <Route path="/role" element={<RoleManagement />} />
        <Route path="/addrole" element={<AddRole />} />
        <Route path="/assignrole" element={<AssignRoles />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;