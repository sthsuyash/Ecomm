import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Item() {
    const { id } = useParams();

    const [item, setItem] = useState({});

    const addToCart = async (itemId) => {
        try {
            await axios.post('http://localhost:5000/api/cart', { itemId }, {
                headers: {
                    "token": `${localStorage.getItem('token')}`
                }
            });
        } catch (error) {
            console.error('Error adding item to cart:', error);
        }
    };

    useEffect(() => {
        axios.get(`http://localhost:5000/api/items/${id}`)
            .then(response => setItem(response.data))
            .catch(error => console.error('Error fetching item:', error));
    }, [id]);

    return (
        <>

            <div className='max-w-[1280px] mx-auto py-10'>
                <div className="px-4 sm:px-0">
                    <h1 className="text-2xl font-semibold leading-7 text-gray-900 text-center"><span className='italic'>{item.name}</span> Information</h1>
                </div>
                <div className="mt-6 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">ID</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{item._id}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Name</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{item.name}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Description</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{item.description}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Price</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Rs. {item.price}</dd>
                        </div>
                    </dl>
                </div>
                {
                    localStorage.getItem('token') && (
                        <div className="mt-6 px-4 py-4 sm:px-0">
                            <button
                                onClick={() => addToCart(item._id)} // Pass the item ID to addToCart
                                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                            >
                                Add to Cart
                            </button>
                        </div>
                    )}
            </div>

        </>
    )
}
