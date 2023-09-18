import Image from "next/image";
import React from "react";
import Link from "next/link";
import ProjectItem from "./ProjectItem";
import propertyImg from "@/public/assets/projects/daria-nepriakhina-LZkbXfzJK4M-unsplash.jpg";
import cryptoImg from "@/public/assets/projects/daria-nepriakhina-LZkbXfzJK4M-unsplash.jpg";
import netflixImg from "@/public/assets/projects/PG-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg";
import linkedinImg from "@/public/assets/projects/daria-nepriakhina-LZkbXfzJK4M-unsplash.jpg";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Property Finder"
            backgroundImg={propertyImg}
            projectUrl="/property"
          />
          <ProjectItem
            title="Crypto App"
            backgroundImg="https://images.unsplash.com/photo-1622630998477-20aa696ecb05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3J5cHRvY3VycmVuY3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            projectUrl="/crypto"
          />
          <ProjectItem
            title="Netflix Clone"
            backgroundImg="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/f2ab67ec-ffdc-478d-a5ad-c9106dfd5564/PG-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            projectUrl="/netflix"
          />
          <ProjectItem
            title="LinkedIn Clone"
            backgroundImg="https://images.unsplash.com/photo-1585288766827-c62e98d70191?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGlua2VkaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            projectUrl="/linkedin"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
