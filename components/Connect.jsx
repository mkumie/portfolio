import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Connect = () => {
  return (
    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
      <Link href="https://www.linkedin.com/in/moseskumie/" target="_blank">
        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
          <FaLinkedinIn />
        </div>
      </Link>
      <Link href="https://github.com/mkumie" target="_blank">
        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
          <FaGithub />
        </div>
      </Link>
      <Link href="#contact">
        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
          <AiOutlineMail />
        </div>
      </Link>
      <Link href="https://www.facebook.com/moses.kumie" target="_blank">
        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
          <BsFacebook />
        </div>
      </Link>
    </div>
  );
};

export default Connect;
