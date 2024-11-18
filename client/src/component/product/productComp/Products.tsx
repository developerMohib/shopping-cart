import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { Product } from '../../../allInterface/productsInterface';

// Define the component's props type
interface ProductsProps {
    product: Product;
    handleAddCart: (id: string) => void;
    handleAddwishlist: (id: string) => void;
}

const Products: React.FC<ProductsProps> = ({ product, handleAddCart, handleAddwishlist }): JSX.Element => {

    const { _id, amount, category, price, productName, ratings, releaseYear } = product;

    return (
        <Link to={`/product-details/${_id}`} className="pb-4 border border-indigo-300 rounded-xl hover:shadow-md hover:shadow-indigo-50 flex flex-col items-center">
            <img src="https://ikall.in/wp-content/uploads/2023/06/51sJmHfw92L._SL1000_.jpg" className="overflow-hidden rounded-t-lg" />
            <div className="mt-8">
                <small> Category : {category} </small>
                <h4 className="font-bold text-xl text-text">{productName}</h4>
                <code> in-stock : {amount}
                </code>
                <br />
                <code> Price : {price} </code>
                <br />
                <code> Ratings : {ratings} </code>
                <br />
                <code> Release Year : {releaseYear} </code>
                <div className="mt-5 flex justify-between">
                    <button onClick={() => handleAddCart(_id)} type="button" className="inline-flex items-center rounded-md border border-transparent bg-bg px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-700">Add to cart</button>
                    <button onClick={() => handleAddwishlist(_id)} type="button" className="inline-flex items-center rounded-md border border-transparent text-bg px-3 py-2 text-sm font-medium leading-4 shadow-sm"> < FaHeart /> <FaRegHeart className="text-2xl text-bg" /> </button>
                </div>
            </div>
        </Link>
    );
};

export default Products;