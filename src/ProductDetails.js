import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import "./App.css";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const products = useSelector((state) => state.products.products);
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) return <h2>Product Not Found</h2>;

  return (
    <div className="details">
      <div className="m-4">
        <h2>{product.title}</h2>
        <img src={product.image} className="img-fluid" alt={product.title} style={{ maxWidth: "300px", height: "auto" }} />
        <p className="mt-3">{product.description}</p>
        <h4>Price: ${product.price}</h4>
        <button className="btn btn-primary mt-3" onClick={() => navigate("/")}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
