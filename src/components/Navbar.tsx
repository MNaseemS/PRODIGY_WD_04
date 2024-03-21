import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home',
        },
        {
            id: 2,
            link: 'about',
        },
        {
            id: 3,
            link: 'portfolio',
        },
        {
            id: 4,
            link: 'experience',
        },
    ];

    return (
        <div className="flex justify-between items-center w-full h-20 text-[#e2e2e2] bg-black">
            <div className="ml-3 text-xl md:text-2xl">Muhammad Naseem Siddiqui</div>
            <ul className="hidden md:flex">
                {links.map(({ link, id }) => (
                    <li
                        key={id}
                        className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200"
                    >
                        <Link to={link} smooth duration={500}>{link}</Link>
                    </li>
                ))}
            </ul>

            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer mr-2 z-[10] text-gray-400 md:hidden"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-600 text-gray-300 z-[9]">
                    {links.map(({ link, id }) => (
                        <li
                            key={id}
                            className="px-4 py-6 cursor-pointer capitalize"
                        >
                            {link}
                        </li>
                    ))}
                </ul>

            )}

        </div>
    );
};

export default Navbar;
