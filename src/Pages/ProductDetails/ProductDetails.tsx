import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./ProductDetails.css";

import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, removeFromCart } from "../../Redux/CartSlice";
import { RootState } from "../../Redux/Store";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductDetail = () => {
  const [product, setProduct] = useState<Product>();
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state: RootState) => state.cart.cart);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then((res) => setProduct(res.data))
        .catch((err) => console.error("Error fetching product:", err));
    }
  }, [id]);

  const isInCart = (productId: number) => {
    return cart.some(item => item.id === productId.toString());
  };

  const handleBuyNow = () => {
    if (product) {
      dispatch(clearCart());
      dispatch(addToCart({
        id: product.id.toString(),
        title: product.title,
        description: product.description,
        price: product.price.toString(),
        image: product.image,
        quantity: 1,
      }));
      navigate("/cart");
    }
  };

  const handleAddToCart = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    if (product) {
      dispatch(addToCart({
        id: product.id.toString(),
        title: product.title,
        description: product.description,
        price: product.price.toString(),
        image: product.image,
        quantity: 1,
      }));
    }
  };

  const handleRemoveFromCart = () => {
    if (product) {
      dispatch(removeFromCart(product.id.toString()));
    }
  };

  return (
    <div className="add-container2">
      <div className="page-wrapper2">
        <div className="back-inside-wrapper">
          <button onClick={() => navigate(-1)}>Back</button>
        </div>

        {product ? (
          <div>
            <img src={product.image} alt={product.title} width="200" />
            <h2>{product.title}</h2>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
              <Rating 
                name="read-only" 
                value={product.rating?.rate || 0}
                precision={0.5}
                readOnly
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
              />
              <Box sx={{ ml: 1, fontSize: '14px' }}>
                ({product.rating?.count || 0} reviews)
              </Box>
            </Box>

            <p>{product.description}</p>
            <p>Price: ₹{product.price}</p>

            <div className="button-group">
              <button onClick={handleBuyNow}>Buy Now</button>

              {isInCart(product.id) ? (
                <button onClick={handleRemoveFromCart}>Remove</button>
              ) : (
                <button onClick={handleAddToCart}>Add to Cart</button>
              )}
            </div>
          </div>
        ) : (
          <p>Loading product...</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
