import { createContext, useEffect, useReducer } from "react";
import { useState } from "react";
import React from 'react'
const initialState = {
    products: []
}
function reducer(state, action) {
    switch (action.type) {
        case 'SET_PRODUCT':
            return { ...state, products: action.payload }
        default:
            return state
    }
}
export const ProvideContext = createContext()
export const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchData()
    }, [])
    async function fetchData() {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            dispatch({ type: "SET_PRODUCT", payload: data });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        finally {
            setLoading(false)
        }
    }
    return (
        <div>
            <ProvideContext.Provider value={{ state, dispatch }}>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    children
                )}
            </ProvideContext.Provider>
        </div>
    )
}

export default ProductProvider
