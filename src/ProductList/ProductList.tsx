import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import "./ProductList.css";
import { ClipLoader } from 'react-spinners';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from ".././Redux/CartSlice";
import { RootState } from '../Redux/Store';

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    category: string;
}

const ProductList = () => {
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

    const filteredProducts = useMemo(() => {
        return categoryName
            ? products.filter(p => p.category === categoryName)
            : products;
    }, [categoryName, products]);

    const isInCart = (id: number) => {
        return cart.some(item => item.id === id.toString());
    };

    const handleAddToCart = (product: Product) => {
        const cartItem = {
            id: product.id.toString(),
            title: product.title,
            description: product.description,
            price: product.price.toString(),
            image: product.image,
            quantity: 1,
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

        <div className="data-list">
            {filteredProducts.map((product) => (
                <div
                    key={product.id}
                    className="list-card"
                    onClick={() => navigate(`/product/${product.id}`)}
                >
                    <img className="img" src={product.image} alt={product.title} />

                    <div className="title" title={product.title}>
                        {product.title ? product.title.slice(0, 22) : "No title"}
                    </div>

                    <div className="description" title={product.description}>
                        {product.description ? product.description.slice(0, 20) + "..." : "No description"}
                    </div>

                    <div className="price">Price: ${product.price}</div>

                    <div className="list-button">

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
                                if (!isLoggedIn) {
                                    navigate("/login");
                                    return;
                                }

                                dispatch(clearCart());
                                handleAddToCart(product);
                                navigate("/cart");
                            }}
                        >
                            Buy Now
                        </button>
                        {isInCart(product.id) ? (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    dispatch(removeFromCart(product.id.toString()));
                                }}
                            >
                                Remove
                            </button>
                        ) : (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
                                    if (!isLoggedIn) {
                                        navigate("/login");
                                        return;
                                    }
                                    handleAddToCart(product);
                                }}
                            >
                                Add to Cart
                            </button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
