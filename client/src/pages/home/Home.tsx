import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { Product } from "../../allInterface/productsInterface";
import toast, { Toaster } from "react-hot-toast";

const Home: React.FC = (): JSX.Element => {
    // Fetch products using useQuery with proper types
    const { data: products, isLoading, error } = useQuery<Product[]>({
        queryKey: ["product"],
        queryFn: async (): Promise<Product[]> => {
            const res = await axios.get("./products.json");
            return res?.data;
        },
    });

    const handleAddCart = (id: number): void => {
        console.log(id)
        toast.success('data paici')
    }
    const handleAddwishlist = (id: number): void => {
        console.log(id)
        toast.success('data paici')
    }

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
                            <img src={"https://loremflickr.com/cache/resized/65535_53076099609_e72e41721b_h_800_600_nofilter.jpg"} className="shadow rounded-lg overflow-hidden border" />
                            <div className="mt-8">
                                <h4 className="font-bold text-xl text-text">{product.productName}</h4>
                                <p className="mt-2 text-text"> {product.description}
                                </p>
                                <div className="mt-5 flex justify-between">
                                    <button onClick={() => handleAddCart(product.id)} type="button" className="inline-flex items-center rounded-md border border-transparent bg-bg px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-700">Add to cart</button>
                                    <button onClick={() => handleAddwishlist(product.id)} type="button" className="inline-flex items-center rounded-md border border-transparent text-bg px-3 py-2 text-sm font-medium leading-4 shadow-sm"> <FaRegHeart className="text-2xl text-bg" /> </button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default Home;
