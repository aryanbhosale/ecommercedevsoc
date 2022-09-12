import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import About from './components/About';
import Contact from './components/Contact';
import Success from './components/Success';
import Login from './components/Login';

function App() {

  const navigate = useNavigate();

  const [stateAuth, setStateAuth] = useState();

  const response = (res) => {
    setStateAuth(res)
  }

  useEffect(() => {
    if (!stateAuth) navigate('/login');
  }, [navigate, stateAuth])

  return (
    <>
      {!stateAuth ? (
        <>
          <Routes>
            <Route exact path="/login" element={<Login response={response} />} />
          </Routes>
        </>
      ) : (
        <>
          <Navbar response={response} stateAuth={stateAuth} />
          <Routes>
            <Route exact path="/*" element={<Home />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/products/:id" element={<Product />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/success" element={<Success />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
