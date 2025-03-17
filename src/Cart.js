import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "./redux/productSlice"; // Import remove action
import "../src/styles/cart.css"; // Import CSS

const Cart = () => {
    const { cartItems, totalPrice, totalQuantity } = useSelector((state) => state.products);
    const dispatch = useDispatch();

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
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.id} className="cart-item">
                                    <td>
                                        <img src={item.image} alt={item.title} className="cart-item-img" />
                                    </td>
                                    <td className="cart-item-title">
                                        {item.title.split(" ").slice(0, 4).join(" ") + (item.title.split(" ").length > 4 ? " ..." : "")}
                                    </td>
                                    <td className="cart-item-price">${item.price}</td>
                                    <td className="cart-item-quantity">{item.quantity}</td>
                                    <td>
                                        <button className="remove-btn" onClick={() => dispatch(removeFromCart(item))}>
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="cart-summary">
                        <h3 className="cart-total-items">Total Items: {totalQuantity}</h3>
                        <h3 className="cart-total-price">Total Price: ${totalPrice.toFixed(2)}</h3>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
