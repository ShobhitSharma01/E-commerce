import React, { useEffect, useState } from 'react'; 
import axios from 'axios';
import "./Product.css";  
import { ClipLoader } from 'react-spinners';  
import { useParams, useNavigate } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';  
import { addToCart, removeFromCart } from '../../Redux/CartSlice';  
import { RootState } from '../../Redux/Store';

interface Product {
  id: number;
  title: string;
  description: string;  
  price: number;  
  image: string;
  category: string;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state: RootState) => state.cart.cart);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
      .catch(err => {
        alert("Failed to fetch products");
        console.error('Error fetching products:', err);
      })
      .finally(() => setLoading(false));
  }, []);

  const filteredProducts = categoryName
    ? products.filter(p => p.category === categoryName)
    : products;

  const formatCategory = (name: string) => {
    if (name === "men's clothing") return "Men's Clothing";
    if (name === "women's clothing") return "Women's Clothing";
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  const isInCart = (id: number) => {
    return cart.some(item => item.id === id.toString());
  };

  const handleAddToCart = (product: Product) => {
    const cartItem = {
      id: product.id.toString(),
      description: product.description,
      price: product.price.toString(),
      image: product.image,
      title: product.title,
    };
    dispatch(addToCart(cartItem));
  };

  if (loading) {
    return (
      <div className="loading-overlay">
        <ClipLoader color="#3498db" size={60} />
        <p style={{ marginTop: '16px', color: '#555' }}>Loading products...</p>
      </div>
    );
  }

  return (
    <div className="main">
     {categoryName && (
  <div className="page-wrapper2">
    <div className="back-inside-wrapper">
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
    <h2 className="heading-container">
      {formatCategory(categoryName)} Category
    </h2>
  </div>
)}
      <div className="data">
        {filteredProducts.map((product) => (
          <div key={product.id} className="card">
            <img className='img' src={product.image} alt={product.title} />
            <div className='title' title={product.title}>{product.title.slice(0, 22)}</div>
            <div className='description' title={product.description}>{product.description.slice(0, 20)}...</div>
            <div className='price'>Price: ${product.price}</div>
            <div className='button'>
              <button onClick={() => navigate(`/product/${product.id}`)}>Buy Now</button>
              {isInCart(product.id) ? (
                <button onClick={() => dispatch(removeFromCart(product.id.toString()))}>
                  Remove
                </button>
              ) : (
                <button onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
