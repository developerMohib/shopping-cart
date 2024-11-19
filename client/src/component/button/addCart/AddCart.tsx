import React, { useState } from 'react';
import { FaBasketShopping } from 'react-icons/fa6';

const AddCart: React.FC = (): JSX.Element => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    const handleCart = (): void => {
        setMenuOpen(prev => !prev)
    }
    return (
        <div className="relative tooltip tooltip-left hover:bg-bg border border-bg rounded-md" data-tip="MY CART">
            <button onClick={handleCart} className='px-3 py-2'>
                <FaBasketShopping className="w-6 h-6" />
            </button>
            <span className='bg-bg text-text absolute right-0 -top-3 px-2 rounded-md' > 3 </span>

            <div className={`${menuOpen ? "block" : "hidden"} bg-bg`}>
                <p>helo world</p>
            </div>
        </div>
    );
};

export default AddCart;