import React, { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { HiOutlineBars3 } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
import { TbArrowRampRight } from "react-icons/tb";
import ThemeMode from "../button/themeController/ThemeMode";
import AddCart from "../button/addCart/AddCart";

interface NavbarProps {
    setSearch: (value: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setSearch }): JSX.Element => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    const handleMenu = (): void => {
        setMenuOpen(prev => !prev)
    }

    const handleSearching = (e: ChangeEvent<HTMLInputElement>): void => {
        setSearch(e.target.value);
    };

    return (
        <Fragment>
            <nav className="relative px-4 py-2 flex justify-between items-center border-b-2 ">
                <Link className="text-2xl font-bold text-text hover:text-bg" to="/">
                    HELLO SHOP
                </Link>
                <div className="lg:hidden flex items-center">
                    <AddCart />
                    <ThemeMode />
                    <button onClick={handleMenu} className="navbar-burger flex items-center text-text p-1" id="navbar_burger">
                        {menuOpen ? <LiaTimesSolid className="block h-6 w-6 fill-current" /> : <HiOutlineBars3 className="block h-6 w-6 fill-current" />}
                    </button>
                </div>

                {/* search option */}
                <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto md:flex lg:flex lg:items-center lg:w-auto lg:space-x-6">
                    <li>
                        <div className=" relative mx-auto text-text">
                            {/* for lapltop */}
                            <input onChange={handleSearching} className="border border-gray-300 placeholder-current h-10 px-5 pr-16  rounded-lg text-sm focus:outline-none" type="search" name="search" placeholder="Search" />
                            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                                <svg className="text-text h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 56.966 56.966" xmlSpace="preserve" width="512px" height="512px">
                                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                </svg>
                            </button>
                        </div>
                    </li>
                </ul>

                {/* right options */}
                <div className="hidden lg:flex items-center">
                    <AddCart />
                    <ThemeMode />
                    <Link to="/store">
                        <button className=" py-2 px-3 m-1 text-center border border-bg rounded-md text-text hover:bg-bg hover:text-textWhite">
                            GO TO STORE
                        </button>
                    </Link>
                    <div className="tooltip tooltip-bottom border border-bg p-2 rounded-md" data-tip="SIGN IN">
                        <Link to="/sign-in">
                            <TbArrowRampRight className="w-6 h-6" />
                        </Link>
                    </div>
                </div>
            </nav>

            {/* mobile navbar */}
            <div className={`${menuOpen ? "block" : "hidden"} navbar-menu relative z-50`}>
                <div className="navbar-backdrop fixed inset-y-0" />
                <nav className="fixed top-0 left-0 bottom-0 bg-textWhite flex flex-col w-5/6 max-w-sm py-3 px-4 border-r overflow-y-auto">
                    <div className="flex items-center mb-8">
                        <Link className="mr-auto text-2xl font-bold text-text" to="/">
                            HELLO SHOP
                        </Link>
                        <button onClick={handleMenu} >
                            <LiaTimesSolid className="block h-6 w-6 fill-current text-text border border-bg " />
                        </button>
                    </div>
                    <div className="relative mx-auto text-text">
                        <input onChange={handleSearching} className="border-2 border-gray-300 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" type="search" name="search" placeholder="Search here" />
                        <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                            <svg className="text-text h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 56.966 56.966" xmlSpace="preserve" width="512px" height="512px">
                                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-auto">
                        <div className="pt-6">
                            <Link className="block m-1 border border-gray-300 text-text px-4 py-3 mb-3 text-sm text-center font-semibold rounded-xl" to="/sign-in">
                                Sign in
                            </Link>
                            <Link className="block m-1 border hover:text-text/90 px-4 py-3 mb-2 text-xs text-center text-text font-semibold rounded-xl" to="/store">
                                GO TO STORE
                            </Link>
                        </div>
                        <p className="my-4 text-xs text-center text-gray-400">
                            <span>HELLO SHOP Copyright © 2023</span>
                        </p>
                    </div>
                </nav>
            </div>
        </Fragment>
    );
};

export default Navbar;