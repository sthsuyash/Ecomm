import SingleCard from "../components/itemCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "../components/Search";

export default function Home() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []); // Fetch items whenever the page is first rendered

    const fetchItems = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/items?limit=3`);
            setItems(response.data.items);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };

    return (
        <>
            <Search />
            <div className="lg:p-16 p-6">
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

                        <Link
                            to="/items"
                            className="mx-auto flex w-fit items-center justify-center px-8 py-3 mt-12 text-base font-medium text-white bg-[#818797] border border-transparent rounded-full hover:bg-[#2563EB] md:py-4 md:text-lg md:px-6">
                            View All Items
                        </Link>
                    </section>
                </div>
            </div>
        </>
    )
}