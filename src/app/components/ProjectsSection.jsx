"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Falcon Archery Club",
    image: "/images/projects/falcon_archery_club.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/screamEagles/falcon-archery-club",
    previewUrl: "https://falcon-archery-club.netlify.app/",
  },
  {
    id: 2,
    title: "Motion Capture",
    image: "/images/projects/motion_capture.png",
    tag: ["All", "OpenCV"],
    gitUrl: "https://github.com/screamEagles/motion-capture",
    previewUrl: "https://github.com/user-attachments/assets/8cf1de45-8548-4124-add3-096f2e64205f",
  },
  {
    id: 3,
    title: "Hand Distance Game",
    image: "/images/projects/hand_distance_game.png",
    tag: ["All", "OpenCV"],
    gitUrl: "https://github.com/screamEagles/hand-distance-game",
    previewUrl: "https://github.com/user-attachments/assets/43ccc80e-d4e7-4604-97ac-fc17f54cf217",
  },
  {
    id: 4,
    title: "Virtual Quiz",
    image: "/images/projects/virtual_quiz.png",
    tag: ["All", "OpenCV"],
    gitUrl: "https://github.com/screamEagles/virtual-mcq-game",
    previewUrl: "https://github.com/user-attachments/assets/2a9660de-24ba-4221-9929-dafe795d235f",
  },
  {
    id: 5,
    title: "Parking Space Counter",
    image: "/images/projects/parking_space_counter.png",
    tag: ["All", "OpenCV"],
    gitUrl: "https://github.com/screamEagles/parking-space-counter",
    previewUrl: "https://github.com/user-attachments/assets/93cb064c-9b11-4b3f-b941-3e4a49f85572",
  },
  {
    id: 6,
    title: "Realtime Shape Area",
    image: "/images/projects/realtime_shape_area.png",
    tag: ["All", "OpenCV"],
    gitUrl: "https://github.com/screamEagles/shape-area",
    previewUrl: "https://github-production-user-asset-6210df.s3.amazonaws.com/91723589/360371571-f0bf783f-8b85-448e-b909-5a63ac5c8eb6.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250131%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250131T062649Z&X-Amz-Expires=300&X-Amz-Signature=4e4cc4994b0241da67e91e82fab37093d6151488a87d5b76bce7198fa8c625d0&X-Amz-SignedHeaders=host",
  },
  {
    id: 7,
    title: "Spieldaas",
    image: "/images/projects/spieldaas.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/screamEagles/spieldaas",
    previewUrl: "https://user-images.githubusercontent.com/91723589/216777829-7f3441e7-c823-4e91-aaa6-2b744553e17e.mp4",
  },
  {
    id: 8,
    title: "Pak-Forts",
    image: "/images/projects/pak_forts.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/screamEagles/pak-forts",
    previewUrl: "https://verdant-sprinkles-94ba51.netlify.app/",
  },
  {
    id: 9,
    title: "Zik-r",
    image: "/images/projects/zik_r.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/screamEagles/tasbeeh",
    previewUrl: "https://zik-r.netlify.app/",
  },
  {
    id: 10,
    title: "School Website",
    image: "/images/projects/school_website.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/screamEagles/school-website",
    previewUrl: "https://user-images.githubusercontent.com/91723589/219856335-f6e7f1b3-df40-49ca-8de9-4163e0c3a32a.mp4",
  },
  {
    id: 11,
    title: "Online Morse",
    image: "/images/projects/online_morse.png",
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
        What I Made
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
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
          name="OpenCV"
          isSelected={tag === "OpenCV"}
        />
      </div>
      <ul ref={ref} className={`grid md:grid-cols-3 gap-8 md:gap-12 ${filteredProjects.length > 3 ? "max-h-[500px] overflow-y-auto" : ""}`}>
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