import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Main/Home";
import About from "./pages/Main/About";
import Products from "./pages/js/Products";
import Contact from "./pages/js/Contact";
import SingleProduct from "./pages/js/SingleProduct"
import Cart from "./pages/js/Cart";
import ErrorPage from "./pages/js/ErrorPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
