import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  const years = new Date().getFullYear() - 2011;

  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16 pt-[80px]"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About Me
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I have spent the last {years} years in the education sector working
            as a professional teacher. I have always had a knack for technology
            and working with computers. In the early 2000's I started working
            with HTML and programming in general but I took a turn in my career
            to be where I am at now.
          </p>
          <p className="py-2 text-gray-600">
            However, I never lost interest in that space until in 2019, I
            decided to give it a try again as my personal goals and aspirations
            shifted. Starting in 2021, I committed myself in teaching myself
            programming languages. Today, I am efficient with three progamming
            languages and continuing to learn more new technologies. I am now
            spending my time building projects with JavaScript, TypeScript,
            Python, Firebase, and learning new technologies.
          </p>
          <Link href="#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt="/"
            width={700}
            height={700}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
