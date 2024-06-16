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
            I am a passionate and dedicated developer with a strong background
            in both education and technology. With over a decade of experience
            in the professional world, I have cultivated a diverse skill set
            that spans various programming languages and frameworks. My journey
            in technology began with HTML and has since expanded to include
            JavaScript, TypeScript, Python, and and modern web development
            frameworks like React and Node.js.
          </p>
          <p className="py-2 text-gray-600">
            Driven by a commitment to continuous learning and personal growth, I
            am always exploring new technologies and methodologies to enhance my
            capabilities. I thrive on solving complex problems and building
            innovative solutions that make a difference.
          </p>
          <p className="py-2 text-gray-600">
            In my spare time, I enjoy working on personal projects, contributing
            to open-source communities, and staying up-to-date with the latest
            industry trends. I am excited to bring my expertise and enthusiasm
            to new challenges and opportunities in the tech world.
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
