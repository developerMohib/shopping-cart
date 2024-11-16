import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Products: React.FC = ({ product, handleAddCart, handleAddwishlist }): JSX.Element => {
    return (
        <Link to={`/product-details/${product.id}`} className="p-4 border border-indigo-300 rounded-xl hover:shadow-lg hover:shadow-indigo-50 flex flex-col items-center">
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
    );
};

export default Products;