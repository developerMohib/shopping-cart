import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Product } from "../../allInterface/productsInterface";
import { Link } from "react-router-dom";

const Home: React.FC = (): JSX.Element => {
    // Fetch products using useQuery with proper types
    const { data: products, isLoading, error } = useQuery<Product[]>({
        queryKey: ["product"],
        queryFn: async (): Promise<Product[]> => {
            const res = await axios.get("./products.json");
            return res?.data;
        },
    });

    // Handle loading state
    if (isLoading) return <p>Loading...</p>;

    // Handle error state
    if (error) return <p>Error: {error.message}</p>;

    // Render the component
    return (
        <div className="grid grid-cols-5 gap-5 my-10">
            {/* Left side */}
            <div className="grid-cols-1 p-2">
                <h1>Left Side</h1>
                <p>Category list</p>
            </div>

            {/* Right side */}
            <div className="col-span-4 p-2">
                <div className="grid grid-cols-3 gap-5">
                    {products?.map((product, idx) => (
                        <Link key={idx} to="/" className="p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center">
                            <img src="https://loremflickr.com/800/600/girl" className="shadow rounded-lg overflow-hidden border" />
                            <div className="mt-8">
                                <h4 className="font-bold text-xl">{product.productName}</h4>
                                <p className="mt-2 text-gray-600">Create Exercises for any subject with the topics you and your students care about.
                                </p>
                                <div className="mt-5">
                                    <button type="button" className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Start Creating</button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
