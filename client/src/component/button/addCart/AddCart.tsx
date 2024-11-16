import React from 'react';
import { FaBasketShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const AddCart: React.FC = (): JSX.Element => {
    return (
        <div className="relative tooltip tooltip-left hover:bg-bg border border-bg p-2 rounded-md" data-tip="MY CART">
            <Link to="/">
                <FaBasketShopping className="w-6 h-6" />
            </Link>
            <span className='bg-bg text-text absolute right-0 -top-3 px-2 rounded-md' > 3 </span>
        </div>
    );
};

export default AddCart;