import React from "react";

const About = () => {
    
    return (
        <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-600 to-black text-[#f3f3f3]">
            <div className="max-w-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </p>
                </div>

                <p className="text-xl mt-15 mb-10">
                    I excel at identifying the most efficient and beneficial
                    solutions to enhance processes, constantly seeking
                    challenges to foster my growth and skill development. With a
                    robust blend of technical expertise and exceptional
                    interpersonal skills, I adeptly engage with diverse
                    problems, facilitating effective communication and
                    problem-solving across various domains.
                </p>
            </div>
        </div>
    );
};

export default About;
