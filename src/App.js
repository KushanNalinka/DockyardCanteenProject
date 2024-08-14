
import Layout from './components/layout';
import Home from './pages/home';
import Detail from './pages/detail';
import My from './pages/my';
import './styles.css';
import InitialScreen from './pages/initialScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialScreen/>} />
        <Route path='/meal/:meal' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/meal/:meal/:slug' element={<Detail />} />
        </Route>
        <Route path='/my' element={<My/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;