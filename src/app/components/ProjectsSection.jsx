"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Falcon Archery Club",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/screamEagles/falcon-archery-club",
    previewUrl: "https://falcon-archery-club.netlify.app/",
  },
  {
    id: 2,
    title: "Spieldaas",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/screamEagles/spieldaas",
    previewUrl: "https://user-images.githubusercontent.com/91723589/216777829-7f3441e7-c823-4e91-aaa6-2b744553e17e.mp4",
  },
  {
    id: 3,
    title: "Pak-Forts",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/screamEagles/pak-forts",
    previewUrl: "https://verdant-sprinkles-94ba51.netlify.app/",
  },
  {
    id: 4,
    title: "School Website",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/screamEagles/school-website",
    previewUrl: "https://user-images.githubusercontent.com/91723589/219856335-f6e7f1b3-df40-49ca-8de9-4163e0c3a32a.mp4",
  },
  {
    id: 5,
    title: "Zik-r",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/screamEagles/tasbeeh",
    previewUrl: "https://zik-r.netlify.app/",
  },
  {
    id: 6,
    title: "Online Morse",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/screamEagles/online-morse",
    previewUrl: "https://cute-cheesecake-a87f39.netlify.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        {/* <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;