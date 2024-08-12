import React from "react";
import Navbar from "../components/navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="text-center bg-[url('/bg.png')] bg-cover bg-fixed px-6 md:px-12 lg:px-44 py-20 lg:py-40">
     
      <div className="px-4 md:px-8 lg:px-16 mt-12 md:mt-24 lg:mt-36">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-cyan-950 text-left border-l-8 pl-4 border-cyan-800 mb-8 md:mb-12">
            About Me:
          </h1>
        
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="bg-gradient-to-r from-cyan-700 via-cyan-800 to-cyan-900 p-8 md:p-12 lg:p-16 rounded-2xl shadow-lg flex flex-col justify-center transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
              <h2 className="md:text-left text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-4">
                About:
              </h2>
              <p className="text-left text-base md:text-lg lg:text-xl font-semibold text-white leading-relaxed">
                I'm Wania Azam, a seasoned web developer with a passion for creating dynamic and user-friendly websites. My experience spans across various technologies, and I enjoy solving complex problems through innovative solutions.
              </p>
            </div>
            <div className="bg-gradient-to-r from-cyan-700 via-cyan-800 to-cyan-900 p-8 md:p-12 lg:p-16 rounded-2xl shadow-lg flex flex-col justify-center transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-4">
                Skills:
              </h2>
              <ul className="list-disc pl-4 text-base md:text-lg lg:text-xl text-white font-semibold">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
              </ul>
            </div>
          </div>
        </div>
        </div>
    </>
  );
};

export default About;
