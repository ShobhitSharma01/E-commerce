import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Profile from "../Pages/Profile/Profile";
import Footer from "../Components/Footer/Footer";
import Product from "../Pages/Products/product"; 
import ProductDetail from "../Pages/ProductDetails/ProductDetails";
import Cart from "../Pages/Cart/Cart";
import Address from "../Pages/Address/Address";

const PrivateRoutes = () => {
  return (
    <>
  <Routes>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/" element={<Home />} />
    <Route path="*" element={<Navigate to={"/"} />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/category/:categoryName" element={<Product />} />
    <Route path="/product/:id" element={<ProductDetail />} />
   <Route  path="/address" element={<Address/>}/>
  </Routes>
  <Footer />
</>

  );
};

export default PrivateRoutes;
