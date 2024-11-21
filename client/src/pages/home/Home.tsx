import React, { ChangeEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import useAllProducts from "../../api/useAllProducts";
import Products from "../../component/product/productComp/Products";
import Sorting from "../../component/filtering/sorting/Sorting";
import Filterize from "../../component/filtering/filterize/Filterize";
import { useOutletContext } from "react-router-dom";
import MyPagination from "../../component/myPagination/MyPagination";
import { Product } from "../../allInterface/productsInterface";
import instance from "../../api/Instance";

interface ContextType {
    search: string;
}
interface CustomError {
    message: string;
}

const Home: React.FC = (): JSX.Element => {
    const { search } = useOutletContext<ContextType>();

    // Fetch products using useQuery with proper types
    const [sort, setSort] = useState<string>(" ");
    const [category, setCategory] = useState<string>("all");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const { products, totalPages, isLoading, error } = useAllProducts({ sort, category, search, currentPage });

    const handleAddCart = async (product: Product): Promise<void> => {
        console.log(product)
        try {
            const response = await instance.post("/product/cart", product)
            console.log('response', response)
            if (response?.status) {
                toast.success(response.data.message)
            }

        } catch (error) {
            console.log((error as CustomError).message)
        }
    }
    const handleAddwishlist = (id: string): void => {
        console.log(id)
        toast.success('Product added to wish list')
    }
    const handleSorting = async (e: ChangeEvent<HTMLInputElement>): Promise<void> => {
        setSort(e.target.value);
    };
    const handleCategorise = async (e: ChangeEvent<HTMLInputElement>): Promise<void> => {
        setCategory(e.target.value);
    };
    const handlePageChange = (page: number): void => {
        setCurrentPage(page);
        // Fetch new data based on the page
        console.log(`Fetching data for page ${page}`);
    };

    // Handle loading and error state
    if (isLoading) return <p className="h-screen flex items-center justify-center"> Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    // Render the component
    return (
        <div className="md:grid grid-cols-5 gap-5 my-10">
            {/* Left side filtering */}
            <div className="grid-cols-1 p-2">
                {/* sorting by price */}
                <Sorting handleSorting={handleSorting} sort={sort} />


                {/* filtering by category */}
                <Filterize handleCategorise={handleCategorise} category={category} />
            </div>

            {/* Right side show products */}
            <div className="col-span-4 p-2">
                <div className="grid lg:grid-cols-4 grid-cols-2 gap-3">
                    {products?.map((product) => (
                        <Products product={product} key={product._id} handleAddCart={handleAddCart} handleAddwishlist={handleAddwishlist} />
                    ))}
                </div>

                {/* pagination */}
                <MyPagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
            </div>
            <Toaster />
        </div>
    );
};

export default Home;
