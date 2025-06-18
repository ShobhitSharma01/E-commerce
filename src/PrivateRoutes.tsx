import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/PrivateNavbar";
import Axios from "./Axios/Axios";

const PrivateRoutes = () => {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Axios" element={<Axios />} />
      </Routes>
      <Footer />
    </>
  );
};

export default PrivateRoutes;
