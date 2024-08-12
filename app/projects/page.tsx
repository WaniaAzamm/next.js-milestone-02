import React from "react";
import Navbar from "../components/navbar";
import { Header} from "next/dist/lib/load-custom-routes";
import Footer from "../footer";

const Portfolio = () => {
  return (
  <><Navbar /><>
        <div className="text-center bg-[url('/bg.png')] bg-cover bg-fixed px-6 md:px-12 lg:px-44 py-20 lg:py-40">

        <div className="text-cyan-950 text-6xl md:text-5xl lg:text-6xl font-extrabold text-left border-spacing-3 border-l-[6px]  pl-3 border-cyan-800 mb-8 md:mb-12 mt-32 ml-6 md:ml-10 ">
          My Projects:
      </div><div className="py-12 px-7">
              <div className="text-center mb-28">
                  <p className="text-3xl font-extrabold text-cyan-950 text-left mb-19 ml-5 ">
                      Here are some of my Typescript and Node.js CLI Based projects I've worked on!
                  </p>
              </div>

              <div className="flex flex-wrap gap-8 justify-center">
                  <div className="bg-cyan-800 bg-opacity-35 shadow-md rounded-lg p-6 w-full max-w-xs text-center text-gray-900 font-semibol transition-transform hover:scale-110 hover:shadow-2xl flex flex-col justify-between h-80">
                      <div>
                          <h3 className="text-xl font-extrabold mb-2">MyBank</h3>
                          <p className="mb-4 text-cyan-950 font-semibold mt-5"> A (CLI) based application using object-oriented programming (OOP) principles to manage bank operations like credits and debits!</p>
                      </div>
                      <a
                          href="https://github.com/WaniaAzamm/typescript--oopmybank"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white bg-cyan-800 rounded-lg mr-7 ml-7 mt-3 pb-2 pt-2 font-semibold hover:bg-opacity-20"
                      >
                          View on GitHub
                      </a>
                  </div>

                  <div className="bg-cyan-800 bg-opacity-35 shadow-md rounded-lg p-6 w-full max-w-xs text-center text-gray-900 font-semibold transition-transform hover:scale-110 hover:shadow-2xl flex flex-col justify-between h-80">
                      <div>
                          <h3 className="text-xl font-extrabold mb-2">Countdown Timer</h3>
                          <p className="mb-4 text-white-600 mt-5"> A software tool designed to count down from a specified time to zero, often used for setting timers for various activities or events!</p>
                      </div>
                      <a
                          href="https://github.com/WaniaAzamm/Countdown-Timerr"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white bg-cyan-800 rounded-lg mr-7 ml-7 mt-3 pb-2 pt-2 font-semibold hover:bg-opacity-20"
                      >
                          View on GitHub
                      </a>
                  </div>

                  <div className="bg-cyan-800 bg-opacity-35 shadow-md rounded-lg p-6 w-full max-w-xs text-center text-gray-900 font-semibold transition-transform hover:scale-110 hover:shadow-2xl flex flex-col justify-between h-80">
                      <div>
                          <h3 className="text-xl font-extrabold mb-2">Student Management System</h3>
                          <p className="mb-4 text-white-600 mt-5">Build a system to track student enrollments, registration, course progress, and statuses across various courses!</p>
                      </div>
                      <a
                          href="https://github.com/WaniaAzamm/Student-Management-syestem"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white bg-cyan-800 rounded-lg mr-7 ml-7 mt-3 pb-2 pt-2 font-semibold hover:bg-opacity-20"
                      >
                          View on GitHub
                      </a>
                  </div>

                  <div className="bg-cyan-800 bg-opacity-35 shadow-md rounded-lg p-6 w-full max-w-xs text-center text-gray-900 font-semibold transition-transform hover:scale-110 hover:shadow-2xl flex flex-col justify-between h-80">
                      <div>
                          <h3 className="text-xl font-extrabold mb-2">Adventure Game</h3>
                          <p className="mb-4 text-white-600 mt-5">A CLI Based Adventure game using Node.js and TypeScript. Players collect valuable items like fuel, and overcome challenges!</p>
                      </div>
                      <a
                          href="https://github.com/WaniaAzamm/Adventure-Game"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white bg-cyan-800 rounded-lg mr-7 ml-7 mt-3 pb-2 pt-2 font-semibold hover:bg-opacity-20"
                      >
                          View on GitHub
                      </a>
                  </div>

                  <div className="bg-cyan-800 bg-opacity-35 shadow-md rounded-lg p-6 w-full max-w-xs text-center text-gray-900 font-semibold transition-transform hover:scale-110 hover:shadow-2xl flex flex-col justify-between h-80">
                      <div>
                          <h3 className="text-xl font-extrabold mb-2">Currency Converter</h3>
                          <p className="mb-4 text-white-600 mt-5 "> A CLI based application that converts amounts from one currency to another based on current exchange rates!</p>
                      </div>
                      <a
                          href="https://github.com/WaniaAzamm/currency-converter"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white bg-cyan-800 rounded-lg mr-7 ml-7 mt-3 pb-2 pt-2 font-semibold hover:bg-opacity-20"
                      >
                          View on GitHub
                      </a>
                  </div>

                  <div className="bg-cyan-800 bg-opacity-35 shadow-md rounded-lg p-6 w-full max-w-xs text-center text-gray-900 font-semibold transition-transform hover:scale-110 hover:shadow-2xl flex flex-col justify-between h-80">
                      <div>
                          <h3 className="text-xl font-extrabold mb-2">ATM Simulator</h3>
                          <p className="mb-4 text-white-600 mt-5"> A CLI Based (ATM) Application that handles banking transactions such as cash withdrawals and PIN verification!</p>
                      </div>
                      <a
                          href="https://github.com/WaniaAzamm/Atm"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white bg-cyan-800 rounded-lg mr-7 ml-7 mt-3 pb-2 pt-2 font-semibold hover:bg-opacity-20"
                      >
                          View on GitHub
                      </a>
                  </div>
              </div>
          </div>
          /</div>
          </></>
  );
};

export default Portfolio;
