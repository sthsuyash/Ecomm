import { useState, useEffect } from 'react';
import SingleCard from "../components/itemCard";
import axios from "axios";
import Search from '../components/Search';

export default function Items() {

    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(); // Total number of pages
    const itemsPerPage = 9;


    const fetchItems = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/items?page=${currentPage}&limit=${itemsPerPage}`);
            setItems(response.data.items);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };

    // Change page
    const handlePageChange = newPage => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    useEffect(() => {
        fetchItems();
    }, [currentPage]); // Fetch items whenever the currentPage changes

    return (
        <>
            <Search />
            <div className="lg:p-16 p-6">
                <h1 className="text-4xl font-semibold text-center mt-12">All Items</h1>
                <div className="lg:p-16 p-6">
                    <section className="lg:pb-20 h-full bg-[#F3F4F6] max-w-[1280px] mx-auto rounded-2xl lg:p-10 p-4">
                        <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
                            {items.map((item, index) => (
                                <SingleCard
                                    key={index}
                                    CardTitle={item.name}
                                    titleHref={`/items/${item._id}`}
                                    btnHref={`/items/${item._id}`}
                                    CardDescription={item.description}
                                />
                            ))}
                        </div>
                        <div className="pagination space-x-5 pt-10 flex justify-center">
                            {Array.from({ length: totalPages }).map((_, index) => (
                                <button
                                    className={`px-3 py-1 rounded-md ${currentPage === index + 1
                                        ? 'bg-blue-500 text-white hover:bg-blue-600'
                                        : 'bg-gray-200 hover:bg-gray-300'
                                        }`}
                                    key={index}
                                    onClick={() => handlePageChange(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}
