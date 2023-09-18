import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I have spend the last 12 years in the fire service working as a
            professional fithter & paramedic. I have always had a knack for
            technology and workign with computers. In 2019 I started working
            with HTML & kCSS to make some minor edits on a small business
            website that I was operting. What I thought was just a few small
            edits turned into a love for programming.
          </p>
          <p className="py-2 text-gray-600">
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started leraning jaascript and was even more
            enthused wit making websites interactive. I than started freelancing
            for e-commerce companies on the Shopify platform. I am now spending
            m time building projects with React JS, Firebase, and leraning new
            technologies.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my lates projects.
          </p>
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
