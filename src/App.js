import logo from './logo.svg';
import TemporaryDrawer from './Components/Drawer';
import Card from './Components/Card';
import Parallex from './Components/parallex';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import St from './Components/reg/components/App';
import Footer from './Components/footer';
import Login from './Components/login/login';
import Cart from './Components/Cart_Context';
import { useState } from 'react';
import User_Cart from './Components/Cart';
function App() {
  const cart=useState([]);
  return (
    <Router>
    <Cart.Provider value={cart}>
    <div className="App">
    <Routes>
      <Route path='/' exact element={<TemporaryDrawer />} />
      <Route path='/signup' exact element={<St />} />
      <Route path='/home' exact element={<TemporaryDrawer />} />
      <Route path='/login' exact element={<Login />} />
      <Route path='/cart' exact element={<TemporaryDrawer />} />
      <Route path='/contact' exact element={<TemporaryDrawer />} />
      <Route path='/about' exact element={<TemporaryDrawer />} />
    </Routes>
    </div>
    </Cart.Provider>
    <Footer />
    </Router>
  );
}

export default App;
