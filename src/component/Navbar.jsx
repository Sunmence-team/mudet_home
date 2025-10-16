import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import assets from '../assets/assests';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Prevent scrolling on main page when sidebar is open
    useEffect(() => {
        if (isSidebarOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isSidebarOpen]);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About Us' },
        { path: '/product', label: 'Products' },
        { path: '/plan', label: 'Compensation Plan' },
        { path: '/contact', label: 'Contact Us' },
    ];

    return (
        <nav className="bg-white text-black py-2 w-full flex items-center justify-center fixed top-0 left-0 z-50 shadow-lg">
            <div className="w-[90%] flex items-center justify-between">
                {/* Logo (Left) */}
                <img src={assets.logo} className="w-12 h-12 object-contain" alt="Logo" />

                {/* Hamburger Menu for Mobile */}
                <button
                    className="md:hidden focus:outline-none p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    onClick={toggleSidebar}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isSidebarOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                        />
                    </svg>
                </button>

                {/* Desktop Menu (Centered NavLinks + Login Button on Right) */}
                <div className="hidden md:flex flex-1 items-center justify-center">
                    <div className="flex space-x-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-xs hover:text-pryClr transition-colors duration-200 ${
                                        isActive ? 'text-black font-bold' : 'text-pryClr'
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
                <div className="hidden md:block">
                    <NavLink
                        to="/login"
                        className="bg-pryClr hover:bg-pryClr/80 text-white font-semibold py-3 px-6 rounded-3xl transition-colors duration-200 text-xs"
                    >
                        Member Login
                    </NavLink>
                </div>
            </div>

            {/* Overlay for blocking interactions */}
            {isSidebarOpen && (
                <div className="fixed inset-0 bg-black/80 z-40 md:hidden"></div>
            )}

            {/* Mobile Sidebar (Vertical Layout, Drops from Top) */}
            <div
                className={`fixed top-0 left-0 w-full h-[60vh] bg-white bg-gradient-to-b from-white to-pryClr/25 text-black z-50 transform transition-transform duration-500 ease-in-out ${
                    isSidebarOpen ? 'translate-y-0' : '-translate-y-full'
                } md:hidden shadow-2xl rounded-b-3xl border-b-2 border-pryClr/30 overflow-y-auto`}
            >
                <div className="flex flex-col min-h-[60vh] p-6">
                    {/* Logo and Close Button (Top) */}
                    <div className="flex items-center justify-between mb-8">
                        <img src={assets.logo} className="w-10 h-10 object-contain" alt="Logo" />
                        <button
                            onClick={toggleSidebar}
                            className="p-2 rounded-full hover:bg-pryClr/10 transition-colors duration-200"
                            aria-label="Close menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* NavLinks and Login Button (Centered Vertically) */}
                    <div className="flex-1 flex flex-col items-center justify-center space-y-6">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-base font-medium hover:text-pryClr hover:scale-110 transition-all duration-300 ${
                                        isActive ? 'text-black font-bold border-l-4 border-pryClr pl-2' : ''
                                    }`
                                }
                                onClick={toggleSidebar}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                        {/* Login Button (Centered Below NavLinks) */}
                        <NavLink
                            to="/login"
                            className="bg-pryClr hover:bg-pryClr/80 text-white font-semibold py-3 px-12 rounded-3xl transition-all duration-300 text-base text-center shadow-lg hover:shadow-xl hover:scale-105"
                            onClick={toggleSidebar}
                        >
                            Member Login
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;