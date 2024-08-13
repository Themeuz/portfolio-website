"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "NextJS Lawfirm WebSite",
    description: "Uma landingpage completa de um escritório de advocacia feito com NextJS.",
    image: "/images/law.png",
    tag: ["All"],
    gitUrl: "https://github.com/Themeuz/web-app-lawfirm",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "E-commerce Aplication",
    description: "Um projeto para vendas de carros estilo NFT para um jogo online de maneira digital e externa.",
    image: "/images/carro.png",
    tag: ["All"],
    gitUrl: "https://github.com/Themeuz/portfolio-website",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Análise de dados, hearth atack",
    description: "Análise exploratória de dados sobre doença cardiovascular.",
    image: "/images/analise.png",
    tag: ["All"],
    gitUrl: "https://github.com/Themeuz/analises-de-dados---doenca-cardiovascular",
    previewUrl: "/",
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
      <h2 className="text-center text-8xl font-bold text-[#025a4e] mt-4 mb-8 md:mb-12">
        Projetos
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
              description={project.description}
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