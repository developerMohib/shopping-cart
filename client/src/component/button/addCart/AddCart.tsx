import React, { useState } from 'react';
import { FaBasketShopping } from 'react-icons/fa6';

const AddCart: React.FC = (): JSX.Element => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const handleCart = (): void => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <div className="relative">
            {/* Shopping Cart Button */}
            <div className="tooltip tooltip-left hover:bg-bg border border-bg rounded-md" data-tip="MY CART">
                <button onClick={handleCart} className="px-3 py-2">
                    <FaBasketShopping className="w-6 h-6" />
                </button>
                <span className="bg-bg text-text absolute right-0 -top-3 px-2 rounded-md">3</span>
            </div>

            {/* Sliding Cart Menu */}
            <div
                className={`z-50 fixed top-0 right-0 w-96 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"
                    } overflow-y-auto `}
            >
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-semibold">Your Cart</h2>
                    <button
                        onClick={handleCart}
                        className="text-red-500 hover:text-red-700 font-bold"
                    >
                        ✕
                    </button>
                </div>
                <div className="p-4">
                    <div className="container mx-auto">
                        <div>
                            <div className="flex flex-col md:flex-row border-b border-gray-400 py-4">
                                <div >
                                    <img src="https://picsum.photos/id/237/150/150" alt="Product image" className="w-auto h-20 object-cover" />
                                </div>
                                <div className="mt-4 md:mt-0 md:ml-6">
                                    <h2 className="text-lg font-bold">Product Title</h2>
                                    <p className="mt-2 text-gray-600">Product Description</p>
                                    <div className="mt-4 flex items-center">
                                        <span className="mr-2 text-gray-600">Quantity:</span>
                                        <div className="flex items-center">
                                            <button className="bg-gray-200 rounded-l-lg px-2 py-1" disabled>-</button>
                                            <span className="mx-2 text-gray-600">1</span>
                                            <button className="bg-gray-200 rounded-r-lg px-2 py-1" disabled>+</button>
                                        </div>
                                        <span className="ml-auto font-bold">$20.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row border-b border-gray-400 py-4">
                                <div className="flex-shrink-0">
                                    <img src="https://picsum.photos/id/237/150/150" alt="Product image" className="w-32 h-32 object-cover" />
                                </div>
                                <div className="mt-4 md:mt-0 md:ml-6">
                                    <h2 className="text-lg font-bold">Product Title</h2>
                                    <p className="mt-2 text-gray-600">Product Description</p>
                                    <div className="mt-4 flex items-center">
                                        <span className="mr-2 text-gray-600">Quantity:</span>
                                        <div className="flex items-center">
                                            <button className="bg-gray-200 rounded-l-lg px-2 py-1" disabled>-</button>
                                            <span className="mx-2 text-gray-600">1</span>
                                            <button className="bg-gray-200 rounded-r-lg px-2 py-1" disabled>+</button>
                                        </div>
                                        <span className="ml-auto font-bold">$15.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row border-b border-gray-400 py-4">
                                <div className="flex-shrink-0">
                                    <img src="https://picsum.photos/id/237/150/150" alt="Product image" className="w-32 h-32 object-cover" />
                                </div>
                                <div className="mt-4 md:mt-0 md:ml-6">
                                    <h2 className="text-lg font-bold">Product Title</h2>
                                    <p className="mt-2 text-gray-600">Product Description</p>
                                    <div className="mt-4 flex items-center">
                                        <span className="mr-2 text-gray-600">Quantity:</span>
                                        <div className="flex items-center">
                                            <button className="bg-gray-200 rounded-l-lg px-2 py-1" disabled>-</button>
                                            <span className="mx-2 text-gray-600">1</span>
                                            <button className="bg-gray-200 rounded-r-lg px-2 py-1" disabled>+</button>
                                        </div>
                                        <span className="ml-auto font-bold">$15.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end items-center mt-4">
                            <span className="text-gray-600 mr-4">Subtotal:</span>
                            <span className="text-xl font-bold">$35.00</span>
                        </div>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                            <h1 className="text-2xl font-bold my-4">Shopping Cart</h1>
                            <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                                Checkout
                            </button>
                        </div>
                    </div>










                </div>
            </div>

            {/* Overlay */}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50"
                    onClick={handleCart}
                ></div>
            )}
        </div>
    );
};

export default AddCart;
