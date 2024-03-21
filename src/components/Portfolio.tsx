import React from "react";
import Port1 from "../assets/img/port_1.png";
import Port2 from "../assets/img/port_2.png";
import Port3 from "../assets/img/port_3.png";

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: Port1,
            name: "Responsive Landing Page",
            link: "https://github.com/MNaseemS/PRODIGY_WD_01"
        },
        {
            id: 2,
            src: Port2,
            name: "Stopwatch Web Application",
            link: "https://github.com/MNaseemS/PRODIGY_WD_02"
        },
        {
            id: 3,
            src: Port3,
            name: "Tic-Tac-Toe Web Application",
            link: "https://github.com/MNaseemS/PRODIGY_WD_03"
        },
    ];

    return (
        <div name="portfolio" className="bg-gradient-to-b from-black to-gray-600 w-full text-[#f3f3f3] md:h-screen">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Portfolio
                    </p>
                    <p className="py-6">Check out some of my work here:</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, src, name, link }) => (
                        <a
                            key={id}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="shadow-md shadow-gray-500 rounded-lg duration-200 hover:scale-105">
                                <img
                                    src={src}
                                    className="rounded-[0.375rem_0.375rem_0rem_0rem]"
                                ></img>

                                <p className="flex items-center justify-center py-2">
                                    {name}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
