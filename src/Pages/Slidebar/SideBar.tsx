import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DropDown from "../../Components/Navbar/DropDown";

const Sidebar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [loggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      const isLoggedInValue = localStorage.getItem("isLoggedIn") === "true";
      setIsLoggedIn(isLoggedInValue);
    }); 

    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    localStorage.removeItem("Token");
    setIsLoggedIn(false);
    handleClose();
    navigate("/");
  };
  console.log(loggedIn, 'dd');

  return (
    <>
      <div className="header">
        <div className="header-left">
          <h5>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </h5>
        </div>
      </div>

      <div
        className="navbar"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {isMobile ? (
            <>
              <Button variant="primary" onClick={handleShow}>
                ☰
              </Button>

              <Offcanvas show={show} onHide={handleClose} placement="start">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>
                    <img src="/images/lego.png" alt="logo" style={{ height: "80px" }} />
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="d-flex flex-column gap-3">
                  <Link to="/" className="nav-link" onClick={handleClose}>Home</Link>
                  <Link to="/about" className="nav-link" onClick={handleClose}>About</Link>
                  <Link to="/contact" className="nav-link" onClick={handleClose}>Contact</Link>
                  {loggedIn && <Link to="/profile" className="nav-link" onClick={handleClose}>Profile</Link>}
                  {!loggedIn ? (
                    <>
                      <Link to="/login" className="nav-link" onClick={handleClose}>Login</Link>
                      <Link to="/signup" className="nav-link" onClick={handleClose}>Signup</Link>
                    </>
                  ) : (
                    <button className="btn btn-link nav-link text-start" onClick={handleLogout}>
                      Logout
                    </button>
                  )}
                </Offcanvas.Body>
              </Offcanvas>
            </>
          ) : (
            <>
              <Link to="/">
                <img src="/images/lego.png" alt="logo" className="logo" style={{ height: "50px" }} />
              </Link>
              <ul style={{ display: "flex", gap: "20px", listStyle: "none", marginBottom: 0 }}>
                <li><Link to="/" className="nav-link">Home</Link></li>
                <li><Link to="/about" className="nav-link">About</Link></li>
                <li><Link to="/contact" className="nav-link">Contact</Link></li>
                {loggedIn && (
                  <>
                    <li><Link to="/profile" className="nav-link">Profile</Link></li>
                    <li><button onClick={handleLogout} className="btn btn-link nav-link">Logout</button></li>
                  </>
                )}
                {!loggedIn && (
                  <>
                    <li><Link to="/login" className="nav-link">Login</Link></li>
                    <li><Link to="/signup" className="nav-link">Signup</Link></li>
                  </>
                )}
              </ul>
              <div className="dropdown-container">
                <DropDown />
              </div>
            </>
          )}
        </div>

        <div className="cart-icon">
          <img
            src="/images/caert.png"
            alt="cart"
            className="heart"
            style={{ width: "50px", height: "50px", cursor: "pointer" }}
            onClick={() => navigate("/cart")}
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
