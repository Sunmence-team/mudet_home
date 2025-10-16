import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './component/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Plan from './pages/Plan';
import Contact from './pages/Contact';
import Login from './pages/Login';
import { Toaster } from 'sonner';

const App = () => {
  return (
    <>
      <Toaster richColors closeButton />
      <Routes>
        {/* Routes with Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Products />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Route without Layout */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
