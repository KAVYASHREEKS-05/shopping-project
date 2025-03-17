import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async action to fetch products
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
});

// Load cart data from localStorage
const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
const totalQuantity = savedCart.reduce((total, item) => total + item.quantity, 0);
const totalPrice = savedCart.reduce((total, item) => total + item.quantity * item.price, 0);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null,
    cartItems: savedCart,  // Load saved cart from localStorage
    totalQuantity: totalQuantity,
    totalPrice: totalPrice,
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;

      localStorage.setItem("cart", JSON.stringify(state.cartItems)); // Persist to localStorage
    },
    removeFromCart: (state, action) => {
      console.log(action.payload); // Log to check the id being passed
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload);
      if (itemIndex !== -1) {
        state.totalQuantity -= state.cartItems[itemIndex].quantity;
        state.totalPrice -= state.cartItems[itemIndex].price * state.cartItems[itemIndex].quantity;
        state.cartItems.splice(itemIndex, 1);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
       
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addToCart, removeFromCart } = productSlice.actions;
export default productSlice.reducer;
