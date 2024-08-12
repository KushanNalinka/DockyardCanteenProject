//import './App.css';
/*import Layout from './components/layout';
import Home from './pages/home';
import Detail from './pages/detail';
import My from './pages/my';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/:slug' element={<Detail />} />
        </Route>
        <Route path='/my' element={<My/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;*/
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
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
    
        <Route path="/register" element={<Register />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/cashier" element={<InitialScreen/>} />
        <Route path="/canteen" element={<CanteenInitialScreen/>} />
        <Route path='/canteen/meal/:meal' element={<CanteenLayout />}>
          <Route index element={<CanteenHome />} />
          
        </Route>

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;