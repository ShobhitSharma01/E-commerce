import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Axios.css"

interface CartProduct {
  productId: number;
  quantity: number;
}
interface Cart {
  id: number;
  userId: number;
  date: string;
  products: CartProduct[];
}
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const Axios = () => {
  const [cartData, setCartData] = useState<Cart[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    Promise.all([
      axios.get('https://fakestoreapi.com/carts'),
      axios.get('https://fakestoreapi.com/products')
    ])
      .then(([cartRes, productRes]) => {
        setCartData(cartRes.data);
        setProducts(productRes.data);
      })
      .catch(err => {
        alert("Failed to fetch data");
        console.error('Error fetching data:', err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loading-overlay">
        <div>Loading, please wait...</div>
      </div>
    );
  }

  const allCartProducts = cartData.flatMap(cart =>
    cart.products.map(item => ({
      ...item,
      cartId: cart.id,
      userId: cart.userId,
      date: cart.date
    }))
  );

  const filteredCartProducts = allCartProducts.filter(item => {
    const product = products.find(p => p.id === item.productId);
    return product?.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className='Main'>
      <h2>All Cart Products</h2>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search by product name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="data">
        {filteredCartProducts.map((item, index) => {
          const product = products.find(p => p.id === item.productId);
          return product ? (
            <div key={`${item.cartId}-${item.productId}-${index}`} className="card">
              <img src={product.image} alt={product.title} width={80} height={80} />
              <div>{product.title}</div>
              <div>Qty: {item.quantity}</div>
              <div>Price: ${product.price}</div>
              <div>Cart ID: {item.cartId}</div>
              <button className='buy'>Buy Now</button>
              <br />
              <button className="button">Add to Cart</button>
            </div>
          ) : (
            <p key={index}>Product not found</p>
          );
        })}
      </div>
    </div>
  );
};

export default Axios;
