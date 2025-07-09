
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Signup from "../Pages/Signup/Signup";
import Footer from "../Components/Footer/Footer";
import Login from "../Pages/Login/Login";
import ProductDetail from "../Pages/ProductDetails/ProductDetails";
import Product from "../Pages/Products/product"; 

const PublicRoutes = () => {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to={"/login"} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/category/:categoryName" element={<Product />} />
      </Routes>
      <Footer />
    </>
  );
};

export default PublicRoutes;
