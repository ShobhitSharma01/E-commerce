import "./Cart.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Redux/Store";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../../Redux/CartSlice";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.cart);

  const totalItems=cart.reduce((sum,item)=>sum+item.quantity,0)
  const totalPrice=cart.reduce((sum,item)=>sum+Number(item.price)*item.quantity,0)
  if (cart.length === 0) {
    return (
     
      <div className="noData">
        <img src="/images/emptycart.png" alt="noData" className="nodata" />
        <h1>YOUR CART IS EMPTY</h1>
        <div className="button-group">
          <button onClick={() => navigate("/home")}> SHOP NOW </button>
        </div>
      </div>
    );
  }
else{
  return (
    
      <div className="page-wrapper">
      <div className="back-inside-wrapper">
  <button onClick={() => navigate(-1)}>Back</button>
</div>
    <div className="cart-Container">
      <h1>Your Cart ({totalItems}items)</h1>
    {cart.map((item) => (
  <div key={item.id} className="cart-item">
    
    <img src={item.image} alt={item.description} />
    <div className="item-details">
         <h3>{item.title}</h3>
      <h6>{item.description}</h6>
      <p>Price: ₹{item.price}</p>
     <p>Total: {Math.round(Number(item.price)* item.quantity)}</p>
      <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
    </div>
     <div className="quantity-controls">
          <button onClick={()=>dispatch(decreaseQuantity(item.id))}>-</button>
          <p>{item.quantity}</p>
          <button onClick={()=>dispatch(increaseQuantity(item.id))}>+</button>
    
       </div>
       
  </div>
))}
      
      <h1>Total Price:({Math.round(totalPrice)}price)</h1>
      <div className="place">
         <button
  onClick={() => {navigate("/address");}}
> Place Order</button>
      </div>
     
    </div>
    </div>
  );
};
}

export default Cart;





// {cart.map((item) => (
//   <div key={item.id} className="cart-item">
//     <img src={item.image} alt={item.description} />
//     <div className="item-details">
//       <h3>{item.description}</h3>
//       <p>Price: ₹{item.price}</p>
//       <p>Quantity: {item.quantity}</p>
//       <p>Total: ₹{item.price * item.quantity}</p>
//       <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
//     </div>
//   </div>
// ))}
