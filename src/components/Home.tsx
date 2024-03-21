import React from "react";
import ProfilePic from "../assets/img/profile_pic.jpeg";
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import { MdOutlineEmail } from "react-icons/md";
import html from "../assets/logo/html.svg";
import css from "../assets/logo/css.svg";
import javascript from "../assets/logo/javascript.svg";
import reactImage from "../assets/logo/react.svg";
import tailwind from "../assets/logo/tailwind.svg";
import github from "../assets/logo/github.svg";

const Home = () => {
    const techs = [
        {
            id: 1,
            src: html,
            title: "HTML",
        },
        {
            id: 2,
            src: css,
            title: "CSS",
        },
        {
            id: 3,
            src: javascript,
            title: "JavaScript",
        },
        {
            id: 4,
            src: reactImage,
            title: "React",
        },
        {
            id: 5,
            src: tailwind,
            title: "Tailwind CSS",
        },
        {
            id: 6,
            src: github,
            title: "GitHub",
        },
    ];
    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-600">
            <div className="max-w-screen-lg mx-auto flex flex-col-reverse justify-center items-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full mb-[100px] md:mb-0">
                    <h2 className="text-4xl md:text-7xl font-bold text-[#f3f3f3]">
                        I'm a Front Stack Web Developer
                    </h2>
                    <p className="text-[#f3f3f3] py-4 max-w-md">
                        I have a year of experience building and desiging
                        websites. Currently, I love work on we applications
                        using React, and Tailwind CSS.
                    </p>

                    <div className="flex flex-row text-[#f3f3f3]">
                        <a
                            className="pr-2"
                            href="https://www.linkedin.com/in/mns42/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <AiOutlineLinkedin
                                size={30}
                                className="hover:scale-105"
                            />
                        </a>
                        <a
                            className="pr-2"
                            href="https://github.com/MNaseemS"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <VscGithub size={30} className="hover:scale-105" />
                        </a>
                        <a
                            className="pr-2"
                            href="mailto:example@example.com"
                            rel="noopener noreferrer"
                        >
                            <MdOutlineEmail
                                size={30}
                                className="hover:scale-105"
                            />
                        </a>
                    </div>

                    <div className="flex flex-row text-[#f3f3f3] py-4">
                        <p className="font-bold mt-2">Skills:</p>
                        {techs.map(({id, src, title}) => (
                            <img key={id} src={src} alt={title} className="w-10 mx-2" />
                        ))}
                        
                    </div>
                </div>

                <div>
                    <img
                        src={ProfilePic}
                        alt="my profile"
                        className="scale-75 rounded-full mx-auto w-2/3 md:w-full md:scale-90"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
