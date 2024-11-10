"use client"

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLink, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built with Next.js, showcasing my projects, skills, and experience.",
      imageUrl: "/proj1.JPG",
      liveDemoUrl: "https://portfolio2-html-css.vercel.app/",
      codeUrl: "#",
    },
     {
      title: "Online Courese Website",
      description:
        "A platform for exploring and enrolling in online courses, developed in Next.js.",
      imageUrl: "/proj2.JPG",
      liveDemoUrl: "https://online-course-assignment-tailwind.vercel.app/",
      codeUrl:
        "https://github.com/alishba241/online-course-assignment-tailwind.git",
    },

    {
      title: "Blog Website",
      description:
        " A responsive blog site created with Next.js, featuring categories and individual blog posts.",
      imageUrl: "/proj4.JPG",
      liveDemoUrl: "https://nextjs-blog-website-lemon.vercel.app/",
      codeUrl: "https://github.com/alishba241/nextjs-blog-website.git",
    },
    {
      title: "Figma Design",
      description:
        "Custom UI/UX design prototypes made in Figma to visualize and plan website layouts.",
      imageUrl: "/proj5.JPG",
      liveDemoUrl: "https://figma-hackathon-project.vercel.app/",
      codeUrl: "https://github.com/alishba241/figma-hackathon-project.git",
    },
    {
      title: "Personal Portfolio",
      description:
        "A visually engaging portfolio highlighting my work, skills, and experience, built using Next.js.",
      imageUrl: "/proj3.JPG",
      liveDemoUrl: "https://portfolio-website-yqir.vercel.app/",
      codeUrl: "https://github.com/alishba241/portfolio-website.git",
    },
    {
      title: "Stop Watch App",
      description:
        "A functional stopwatch app with start, stop, and reset options, developed in Next.js.",
      imageUrl: "/proj6.JPG",
      liveDemoUrl: "https://stop-watch-nine-nu.vercel.app/",
      codeUrl: "https://github.com/alishba241/stop-watch",
    },
  ];

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <div className={"projects-section"} id="projects">
      <motion.div
        className="Container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
      >
        <h2 className={"projects-heading"}>Projects</h2>

        {isMobile && (
          <div className={"slider-buttons"}>
            <button onClick={handlePrev} className={"slider-button"}>
              <FaChevronLeft />
            </button>
            <button onClick={handleNext} className={"slider-button"}>
              <FaChevronRight />
            </button>
          </div>
        )}

        <div className={`${"projects-container"} ${isMobile ? "overflow-hidden justify-center" : ""}`}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className={`${"project-card"} ${isMobile ? (index === currentIndex ? "block" : "hidden") : ""}`}
            >
              <div className={"project-image"}>
                <Image src={project.imageUrl} alt={project.title} width={300} height={300} />
              </div>
              <div className="mt-4">
                <h3 className={"project-title"}>{project.title}</h3>
                <p className={"project-description"}>{project.description}</p>
                <div className={"project-links"}>
                  <Link href={project.liveDemoUrl} target="_blank">
                    <button className={"project-link-button"}>
                      <FaLink />
                    </button>
                  </Link>
                  <Link href={project.codeUrl} target="_blank">
                    <button className={"project-link-button"}>
                      <FaGithub />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsSection;
