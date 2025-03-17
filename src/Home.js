import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, addToCart } from "./redux/productSlice";
import { Link } from "react-router-dom";
import "../src/styles/home.css";
import Main from "./Main";

const Home = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <h2 className="loading-text">Loading...</h2>;
  if (error) return <h2 className="error-text">Error: {error}</h2>;

  const conversionRate = 83; // Example conversion rate from USD to INR

  return (
    <div>
      <Main />
      <div className="product-container">
        {products.map((product) => {
          const productPriceInINR = product.price * conversionRate; // Calculate price for each product

          return (
            <div key={product.id} className="product-card">
              <div className="product-image-wrapper">
                <img src={product.image} className="product-image" alt={product.title} />
              </div>
              <div className="product-details">
                <h5 className="product-title">{product.title}</h5>

                <p className="product-price">₹{productPriceInINR.toFixed(2)}</p>

                <Link to={`/product/${product.id}`} className="details-link">
                  <button className="btn btn-primary">View Details</button>
                </Link>
                <button
                  className="btn btn-success add-cart-btn"
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add to Cart 🛒
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
