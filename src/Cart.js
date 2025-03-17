import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "./redux/productSlice"; // Import remove action
import "../src/styles/cart.css"; // Import CSS

const Cart = () => {
    const { cartItems, totalPrice, totalQuantity } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const conversionRate = 83; // Conversion rate from USD to INR

    return (
        <div className="cart-container">
            <h2 className="cart-title">Shopping Cart</h2>

            {cartItems.length === 0 ? (
                <p className="cart-empty">Your cart is empty.</p>
            ) : (
                <>
                    <table className="cart-table">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Price (INR)</th>
                                <th>Quantity</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => {
                                const priceInINR = item.price * conversionRate; // Convert price to INR

                                return (
                                    <tr key={item.id} className="cart-item">
                                        <td>
                                            <img src={item.image} alt={item.title} className="cart-item-img" />
                                        </td>
                                        <td className="cart-item-title">
                                            {item.title.split(" ").slice(0, 4).join(" ") + (item.title.split(" ").length > 4 ? " ..." : "")}
                                        </td>
                                        <td className="cart-item-price">₹{priceInINR.toFixed(2)}</td> {/* Display price in INR */}
                                        <td className="cart-item-quantity">{item.quantity}</td>
                                        <td>
                                            <button className="remove-btn" onClick={() => dispatch(removeFromCart(item))}>
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>

                    <div className="cart-summary">
                        <h3 className="cart-total-items">Total Items: {totalQuantity}</h3>
                        <h3 className="cart-total-price">
                            Total Price: ₹{(totalPrice * conversionRate).toFixed(2)} {/* Display total price in INR */}
                        </h3>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
