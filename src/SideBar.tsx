import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure this is imported once in the app

const Sidebar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <Button variant="primary" onClick={handleShow}>
            ☰
          </Button>

          <Link to="/">
            <img src="/images/lego.png" alt="logo" className="logo" style={{ height: "50px" }} />
          </Link>
        </div>
        <div className="cart-icon">
          <img
            src="/images/caert.png"
            alt="cart"
            className="heart"
            style={{ width: "50px", height:"50px", cursor: "pointer" }}
            onClick={() => navigate("/cart")}
          />
        </div>
      </div>
      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
         <Offcanvas.Title>
  <img
    src="/images/lego.png"
    alt="logo"
    style={{ height: "80px" }}
  />
</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column gap-3">
          <Link to="/" className="nav-link" onClick={handleClose}>Home</Link>
          <Link to="/about" className="nav-link" onClick={handleClose}>About</Link>
          <Link to="/contact" className="nav-link" onClick={handleClose}>Contact</Link>
          <Link to="/profile" className="nav-link" onClick={handleClose}>Profile</Link>
          <Link to="/login" className="nav-link" onClick={handleClose}>Login</Link>
          <Link to="/signup" className="nav-link" onClick={handleClose}>Signup</Link>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;
