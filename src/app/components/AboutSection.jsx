"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-none pl-2">
        <li>OpenCV</li>
        <li>Blog Writing</li>
        <li>Canva</li>
        <li>ReactJS</li>
        <li>NextJS</li>
        <li>Postman</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-none pl-2">
        <li>NEDUET Karachi (2020 - 2024)</li>
        <li>Saint Patricks High School Karachi (2007 - 2020)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="content and web"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          With over two years of experience in front-end development and content writing, I have successfully contributed to various projects and am well-equipped to handle a range of tasks, from creating dynamic user interfaces to crafting compelling blog posts and social media content.<br /><br />
          I served as the Director of Information Technology at IEEE PES NEDUET, leading hybrid teams with a focus on the MERN Stack, and also held the position of Deputy Director of Content Writing at The AI Club, excelling in writing blogs and social media captions.<br /><br />
          My work with Digtrosoft Technologies Pvt. Ltd. and NCAI NEDUET Smart City Lab has further enhanced my proficiency in GitHub, React.js, and Tailwind CSS.<br /><br />
          In addition to my professional pursuits, I am passionate about continuous learning, currently studying German, Chinese, and ASL, and enjoy engaging in strategic challenges like Chess to sharpen my problem-solving skills.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;