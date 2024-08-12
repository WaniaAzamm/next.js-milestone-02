import Link from "next/link";
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bottom-0 bg-cyan-900 bg-opacity-90 py-20 text-white text-3xl ">
      <div className="flex justify-center items-center space-x-6 text-3xl">
        <Link
          className="hover:text-black duration-200 text-5xl mb-4"
          href="https://www.linkedin.com/in/waniaa-azam/"
        >
          <BsLinkedin />
        </Link>

        <Link
          className="hover:text-black 0 duration-200 text-6xl mb-4"
          href="https://github.com/WaniaAzamm"
        >
          <FaGithub />
        </Link>
      </div>

      <p className="text-center text-lg mt-2">Follow us for more updates! 🚀</p>

      <p className="text-center text-sm mt-2 ">
        © 2024 All rights reserved. Wania Azam.
      </p>
    </div>
  );
};

export default Footer;