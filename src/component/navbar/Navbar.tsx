import { Fragment } from "react/jsx-runtime";
import ThemeMode from "../button/themeController/ThemeMode";

const Navbar = () => {
    return (
        <Fragment>
            <nav className="relative px-4 py-2 flex justify-between items-center border-b-2">
                <a className="text-2xl font-bold text-violet-600" href="#">
                    HELLO SHOP
                </a>
                <div className="lg:hidden">
                    <button className="navbar-burger flex items-center text-violet-600 p-1" id="navbar_burger">
                        <svg className="block h-6 w-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Hamberger menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
                    <li>
                        <div className=" relative mx-auto text-gray-600">
                            <input className="border border-gray-300 placeholder-current h-10 px-5 pr-16  rounded-lg text-sm focus:outline-none" type="search" name="search" placeholder="Search" />
                            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                                <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 56.966 56.966" xmlSpace="preserve" width="512px" height="512px">
                                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                </svg>
                            </button>
                        </div>
                    </li>
                </ul>
                <div className="hidden lg:flex">
                    <ThemeMode />
                    <a href="https://tailwindflex.com/playground">
                        <button className=" py-1.5 px-3 m-1 text-center border rounded-md hidden lg:block">
                            GO TO STORE
                        </button>
                    </a>
                    <div>
                        <span className="hidden" id="util_data" />
                        <a className=" py-1.5 px-3 m-1 text-center border border-gray-300 rounded-md text-black hidden lg:inline-block " href="https://tailwindflex.com/login">
                            Sign In
                        </a>
                    </div>
                </div>
            </nav>
            {/* mobile navbar */}
            <div className="navbar-menu relative z-50 hidden">
                <div className="navbar-backdrop fixed inset-0 opacity-50" />
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 border-r overflow-y-auto">
                    <div className="flex items-center mb-8">
                        <a className="mr-auto text-2xl font-bold text-violet-600" href="https://tailwindflex.com/">
                            HELLO SHOP
                        </a>
                        <button className="navbar-close">
                            <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div className=" relative mx-auto text-gray-600">
                        <input className="border-2 border-gray-300 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" type="search" name="search" placeholder="Search" />
                        <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                            <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 56.966 56.966" xmlSpace="preserve" width="512px" height="512px">
                                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-auto">
                        <div className="pt-6">
                            <button id="theme-toggle-2" type="button" className="w-[97.6%] mb-3 flex justify-center align-middle py-1.5 px-3 m-1 text-center border border-gray-300 rounded-md text-black">
                                <svg id="theme-toggle-dark-icon-2" className="w-6 h-6 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                </svg>
                                <svg id="theme-toggle-light-icon-2" className="w-6 h-6 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd" />
                                </svg>
                            </button>
                            <a className="block m-1 border border-gray-300 text-black px-4 py-3 mb-3 text-sm text-center font-semibold rounded-xl" href="/login">
                                Sign in
                            </a>
                            <a className="block m-1 border hover:text-gray-100 px-4 py-3 mb-2 text-xs text-center text-white font-semibold rounded-xl" href="https://tailwindflex.com/playground">
                                GO TO STORE
                            </a>
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