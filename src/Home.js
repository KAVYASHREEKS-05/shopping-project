import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redux/productSlice";
import { Link } from "react-router-dom";
import "./App.css";

const Home = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div className="row mt-4 m-4">
      {products.map((product) => (
        <div key={product.id} className="col-md-4 mb-4">
          <div className="card" style={{ width: "18rem" }}>
            <img src={product.image} className="card-img-top" style={{ height: "200px" }} alt={product.title} />
            <div className="card-body">
              <h5 className="card-title title-ellipsis">{product.title}</h5>
              <p className="card-text">${product.price}</p>
              <Link to={`/product/${product.id}`}>
                <button className="btn btn-primary">View Details</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
