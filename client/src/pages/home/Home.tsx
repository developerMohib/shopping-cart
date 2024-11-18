import React, { ChangeEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import useAllProducts from "../../api/useAllProducts";
import Products from "../../component/product/productComp/Products";
import Sorting from "../../component/filtering/sorting/Sorting";
import Filterize from "../../component/filtering/filterize/Filterize";

const Home: React.FC = (): JSX.Element => {
    // Fetch products using useQuery with proper types
    const [sort, setSort] = useState<string>(" ");
    const [category, setCategory] = useState<string>("all");
    // const [search, setSearch] = useState<string>("")
    const { products, isLoading, error } = useAllProducts({ sort, category});

    const handleAddCart = (id: string): void => {
        console.log(id)
        toast.success('data paici')
    }
    const handleAddwishlist = (id: string): void => {
        console.log(id)
        toast.success('data paici')
    }
    const handleSorting = async (e: ChangeEvent<HTMLInputElement>): Promise<void> => {
        setSort(e.target.value);
    };
    const handleCategorise = async (e: ChangeEvent<HTMLInputElement>): Promise<void> => {
        setCategory(e.target.value);
    };
    // const handleSearching = async (e: ChangeEvent<HTMLInputElement>): Promise<void> => {
    //     setSearch(e.target.value);
    // };
    
    console.log(category , 'he')



    // Handle loading and error state
    if (isLoading) return <p>Loading...</p>;
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
            </div>
            <Toaster />
        </div>
    );
};

export default Home;
