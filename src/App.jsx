import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Plan from "./pages/Plan";
import Contact from "./pages/Contact";
import { Toaster } from "sonner";
import SingleProduct from "./pages/SingleProduct";
import NotFound from "./pages/NotFound";

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
          <Route path="/products/:slug" element={<SingleProduct />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />

        {/* Route without Layout */}
      </Routes>
    </>
  );
};

export default App;
