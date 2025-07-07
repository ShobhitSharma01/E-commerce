import React, { useEffect, useState } from "react";
import "./Address.css";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux"; 
import { clearCart } from "../../Redux/CartSlice";

const Address = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); 

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [open, setOpen] = useState(false);

  const handleConfirm = () => {
    if (!name || !address || !pincode) {
      alert("Please fill in all fields");
      return;
    }

    if (!/^\d{6}$/.test(pincode)) {
      alert("Please enter a valid 6-digit pincode");
      return;
    }

    setOpen(true);
    setName("");
    setAddress("");
    setPincode("");

    dispatch(clearCart());
  };

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        navigate("/Home");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [open, navigate]);

  return (
    <div className="page-wrapper">
      <div className="back-inside-wrapper">
  <button onClick={() => navigate(-1)}>Back</button>
</div>
      <div className="form-containerr">
        
        <img src="/images/location.png" alt="location image" />
        <h1>Enter Delivery Address</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Pincode"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
        />

        <div className="button-group">
          <button onClick={handleConfirm}>Confirm Order</button>
        </div>

        <Modal open={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "white",
              borderRadius: 3,
              boxShadow: 24,
              p: 4,
              textAlign: "center",
            }}
          >
            <Typography variant="h4" component="h2" sx={{ color: "#8b1814", mb: 2 }}>
              Order Confirmed!
            </Typography>

            <Typography sx={{ fontSize: "16px", mb: 4 }}>
              Your address has been saved. Redirecting to the page...
            </Typography>

            <Button
              variant="contained"
              onClick={() => navigate("/Home")}
              sx={{
                color: "#ffffff",
                backgroundColor: "#8b1814",
                fontSize: "16px",
                padding: "10px 20px",
                borderRadius: "8px",
                '&:hover': {
                  backgroundColor: "#d33a3a",
                },
              }}
            >
              Continue Shopping
            </Button>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Address;
