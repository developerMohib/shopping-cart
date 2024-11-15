import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
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
        <div className="md:grid grid-cols-5 gap-5 my-10">
            {/* Left side */}
            <div className="grid-cols-1 p-2">
                {/* sorting by price */}
                <div>
                    <h1>Sorting by price</h1>
                    <ul className="md:block flex md:flex-col flex-row md:mt-6 mt-2">
                        <li className="flex items-center mb-2">
                            <input
                                type="radio"
                                id="highToLow"
                                name="sortOption"
                                value="highToLow"
                                className="mr-2"
                            />
                            <label htmlFor="highToLow">High To Low</label>
                        </li>
                        <li className="flex items-center">
                            <input
                                type="radio"
                                id="lowToHigh"
                                name="sortOption"
                                value="lowToHigh"
                                className="mr-2"
                            />
                            <label htmlFor="lowToHigh">Low To High</label>
                        </li>
                    </ul>
                </div>

                {/* filtering by category */}
                <div className="md:mt-6 mt-2">
                    <h1>Filtering by category </h1>
                    <ul className="md:block flex md:flex-col flex-row md:mt-6 mt-2">
                        <li className="flex items-center mb-2">
                            <input
                                type="radio"
                                id="laptop"
                                name="selectOption"
                                value="laptop"
                                className="mr-2"
                            />
                            <label htmlFor="laptop">Laptop</label>
                        </li>
                        <li className="flex items-center">
                            <input
                                type="radio"
                                id="lowToHigh"
                                name="sortOption"
                                value="lowToHigh"
                                className="mr-2"
                            />
                            <label htmlFor="lowToHigh">Low To High</label>
                        </li>
                    </ul>

                </div>

            </div>

            {/* Right side */}
            <div className="col-span-4 p-2">
                <div className="grid lg:grid-cols-4 grid-cols-2 gap-5">
                    {products?.map((product, idx) => (
                        <Link key={idx} to="/" className="p-4 border border-indigo-300 rounded-xl hover:shadow-lg hover:shadow-indigo-50 flex flex-col items-center">
                            <img src={"https://loremflickr.com/cache/resized/65535_53076099609_e72e41721b_h_800_600_nofilter.jpg"} className="shadow rounded-lg overflow-hidden border" />
                            <div className="mt-8">
                                <small> Category : {product.category} </small>
                                <h4 className="font-bold text-xl text-text">{product.productName}</h4>
                                <p className="mt-2 text-text"> in stock : {product.amount}
                                </p>
                                <p className="mt-2 text-text"> Price : {product.price}
                                </p>
                                <div className="mt-5 flex justify-between">
                                    <button onClick={() => handleAddCart(product.id)} type="button" className="inline-flex items-center rounded-md border border-transparent bg-bg px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-700">Add to cart</button>
                                    <button onClick={() => handleAddwishlist(product.id)} type="button" className="inline-flex items-center rounded-md border border-transparent text-bg px-3 py-2 text-sm font-medium leading-4 shadow-sm"> < FaHeart /> <FaRegHeart className="text-2xl text-bg" /> </button>
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
