import React from "react";
import { MdOutlineWorkOutline, MdOutlineSchool } from "react-icons/md";
import { LuSchool, LuBookMarked } from "react-icons/lu";

const Experience = () => {
    const exp = [
        {
            id: 1,
            Icon: MdOutlineWorkOutline,
            title: "Customer Service Representative | June 2020 – October 2020",
            sub: "Prime BPO, Pakistan",
        },
        {
            id: 2,
            Icon: MdOutlineSchool,
            title: "Bachelor of Computer Science | 2021 - Current",
            sub: "University of Peshawar, Pakistan",
        },
        {
            id: 3,
            Icon: LuBookMarked,
            title: "Machine Learning (Online Course) | 2020",
            sub: "Stanford University, USA",
        },
        {
            id: 4,
            Icon: LuSchool,
            title: "GCE A-Level | 2018 - 2020",
            sub: "The City School Peshawar Campus, Pakistan",
        },
        {
            id: 5,
            Icon: LuSchool,
            title: "GCE O-Level | 2015 - 2018",
            sub: "The City School Town Senior, Pakistan",
        },
    ];

    return (
        <div name="experience" className="bg-gradient-to-b from-gray-600 to-black min-h-screen md:h-screen text-[#f3f3f3]">
            <div className="max-w-screen-lg mx-auto p-4 pt-[100px] flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Experience
                    </p>
                    <p className="py-6">
                        Here are school, course, and work experiences:
                    </p>
                </div>

                <div className="py-6">
                    {exp.map(({ id, Icon, title, sub }) => (
                        <div key={id} className="flex flex-col md:flex-row pb-8">
                            <Icon
                                size={50}
                                className="mb-2 mx-auto md:mx-0 md:mb-0"
                            />
                            <div className="flex flex-col items-center md:items-start w-full md:inline md:pl-4">
                                <p className="text-xl font-bold text-center md:text-left">
                                    {title}
                                </p>
                                <p className="text-xl text-center md:text-left">
                                    {sub}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
