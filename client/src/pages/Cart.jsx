import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetchCartItems();
    }, [cartItems]);

    const fetchCartItems = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/cart', {
                headers: {
                    "token": `${localStorage.getItem('token')}`
                }
            });
            setCartItems(response.data.items);
        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    };

    const handleQuantityChange = async (itemId, newQuantity) => {
        try {
            await axios.put(`http://localhost:5000/api/cart/${itemId}`, { quantity: newQuantity }, {
                headers: {
                    "token": `${localStorage.getItem('token')}`
                }
            });
            fetchCartItems();
        } catch (error) {
            console.error('Error updating quantity:', error);
        }
    };

    const handleRemoveItem = async (itemId) => {
        try {
            await axios.delete(`http://localhost:5000/api/cart/${itemId}`, {
                headers: {
                    "token": `${localStorage.getItem('token')}`
                }
            })
            fetchCartItems();
        } catch (error) {
            console.error('Error removing item:', error);
        }
    };

    function calculateTotalPrice(cartItems) {
        return cartItems.reduce((total, item) => {
            return total + (item.item.price * item.quantity);
        }, 0);
    }

    return (
        <div className="w-full px-4 md:w-[1280px] md:mx-auto md:px-10">
            <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>
            {

                <ul>
                    {cartItems.map(item => (
                        <li key={item._id} className="border border-gray-300 rounded-md p-4 mb-4">
                            <div className="flex flex-col md:flex-row justify-between items-center">
                                <div className="mb-2 md:mb-0 md:mr-4">
                                    <Link
                                        to={`http://localhost:5173/items/${item.item._id}`}>
                                        <p className="text-lg font-semibold">{item.item.name}</p>
                                    </Link>
                                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                                    <p className="text-gray-600">Price: {item.item.price}</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={() => handleQuantityChange(item.item._id, item.quantity + 1)}
                                        className="px-3 py-1 bg-blue-500 text-white rounded"
                                    >
                                        +
                                    </button>
                                    <button
                                        onClick={() => handleQuantityChange(item.item._id, item.quantity - 1)}
                                        className="px-3 py-1 bg-red-500 text-white rounded"
                                        disabled={item.quantity === 1}
                                    >
                                        -
                                    </button>
                                    <button
                                        onClick={() => handleRemoveItem(item.item._id)}
                                        className="px-3 py-1 bg-gray-300 text-gray-700 rounded"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            }
            <div className="mt-8 flex justify-end">
                <p className="text-xl font-semibold">Total Price: ${calculateTotalPrice(cartItems)}</p>
            </div>
        </div>
    );
}
