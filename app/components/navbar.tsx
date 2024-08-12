import Link from "next/link";
import React from "react";
import { FiAlignJustify } from "react-icons/fi";
import Image from "next/image";


const navbar = () => {
  return (
    
      <div className="flex justify-between items-center px-5 py-3/2 w-full bg-opacity-90 text-cyan-800 shadow absolute">
      <div className="text-cyan-950"><Image src="/images.png" alt={"logo"}  width={190} height={100}></Image></div>

        <div>
          <ul className="hidden md:flex space-x-12 text-3xl font-bold font-sans ">
            <li className="hover:text-cyan-500  duration-700">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="hover:text-cyan-500  duration-700 ">
              <Link href={"/about"}>About</Link>
            </li>
          
            <li className="hover:text-cyan-500 duration-700">
              <Link href={"/projects"}>projects</Link>
            </li>
            <li className="hover:text-cyan-500 duration-700">
              <Link href={"/contact"}>Contact</Link>
            </li> 
          </ul>
        </div>
        <div className="text-cyan-800 static md:hidden text-7xl "><FiAlignJustify /> </div>
       
      </div>
    
  );
};

export default navbar;
