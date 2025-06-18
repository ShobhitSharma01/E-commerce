
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Signup from "./Signup/Signup";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/PrivateNavbar";
import Login from "./Login/Login";
const PublicRoutes = () => {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer />
    </>
  );
};

export default PublicRoutes;
