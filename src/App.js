import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Navbar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import ProductDetails from "./ProductDetails";

const App = () => {
  return (
    <>
     <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes></>
       
   
  );
};

export default App;
