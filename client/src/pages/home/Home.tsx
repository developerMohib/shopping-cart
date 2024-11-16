import React from "react";
import toast, { Toaster } from "react-hot-toast";
import useAllProducts from "../../api/useAllProducts";
import Products from "../../component/product/productComp/Products";

const Home: React.FC = (): JSX.Element => {
    // Fetch products using useQuery with proper types
    const { products, isLoading, error } = useAllProducts();

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
                    <h1>Product sorting</h1>
                    <ul className="md:block flex md:flex-col flex-row md:mt-6 mt-2">
                        <li className="flex items-center mb-2">
                            <input
                                type="radio"
                                id="ratings"
                                name="sortOption"
                                value="ratings"
                                className="mr-2"
                            />
                            <label htmlFor="ratings">Ratings</label>
                        </li>
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
                        <Products product={product} key={idx} handleAddCart={handleAddCart} handleAddwishlist={handleAddwishlist} />                        
                    ))}
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default Home;
