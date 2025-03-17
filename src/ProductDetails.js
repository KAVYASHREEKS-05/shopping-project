import React from "react";
import { useSelector, useDispatch } from "react-redux"; 
import { addToCart } from "./redux/productSlice";
import { useParams, useNavigate } from "react-router-dom";
import "./styles/ProductDetails.css";

const ProductDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const products = useSelector((state) => state.products.products);
  const product = products.find((item) => item.id === parseInt(id));
  const conversionRate = 83;
  const productPriceInINR = product.price * conversionRate; // Calculate price for each product
  if (!product) return <h2>Product Not Found</h2>;

  const handleAddToCart = () => {
    dispatch(addToCart(product)); // Dispatch action to add product to cart
  };

  return (
    <div className="product-details-page">
      <div className="product-container">
        <div className="product-image">
          <img
            src={product.image}
            className="img-fluid"
            alt={product.title}
            style={{ maxWidth: "300px", height: "auto" }}
          />
        </div>
        <div className="product-details">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h4>Price:₹{productPriceInINR.toFixed(2)}</h4>
          <div className="buttons">
            <button className="btn btn-success mt-3 me-3" onClick={handleAddToCart}>
              Add to Cart 🛒
            </button>
            <button className="btn btn-primary mt-3" onClick={() => navigate("/")}>
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
