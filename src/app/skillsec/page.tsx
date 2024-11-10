"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  percentage: number;
}

const skills: Skill[] = [
  { name: "HTML", percentage: 95 },
  { name: "CSS", percentage: 90 },
  { name: "Tailwind css", percentage: 70 },
  { name: "Typescript", percentage: 85 },
  { name: "Next.js", percentage: 80 },
];

interface Circle {
  name: string;
  percentage: number;
}

const circleSkills: Circle[] = [
  { name: "Communication", percentage: 90 },
  { name: "Time Management", percentage: 80 },
  { name: "Problem-Solving", percentage: 85 },
  { name: "Adaptability", percentage: 75 },
];

const SkillBar: React.FC<Skill> = ({ name, percentage }) => {
  const barRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (barRef.current) {
        const rect = barRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setInView(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="skillBar">
      <div className="skillInfo">
        <h3>{name}</h3>
        <h2 className='percentage'>{percentage}%</h2>
      </div>
      <div className="barWrapper">
        <div
          ref={barRef}
          className={`skillBarProgress ${inView ? "inView" : ""}`}
          style={{ width: inView ? `${percentage}%` : "0%" }}
        />
      </div>
    </div>
  );
};

const CircularSkill: React.FC<Skill> = ({ name, percentage }) => {
  const circleRef = useRef<SVGCircleElement>(null);
  const [inView, setInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (circleRef.current) {
        const rect = circleRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setInView(true);
        }
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleScroll();
    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const baseRadius = 50;
  const strokeWidth = isMobile ? 5 : 6;
  const svgSize = isMobile ? 100 : 120;
  const radius = isMobile ? baseRadius * 0.7 : baseRadius;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="circularSkill">
      <svg width={svgSize} height={svgSize} className="svg">
        <circle
          cx={svgSize / 2}
          cy={svgSize / 2}
          r={radius}
          fill="transparent"
          stroke="black"
          opacity="0.7"
          strokeWidth={strokeWidth}
        />
        <circle
          ref={circleRef}
          cx={svgSize / 2}
          cy={svgSize / 2}
          r={radius}
          fill="transparent"
          stroke="#22d3ee"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={inView ? offset : circumference}
          className="transitionCircle"
        />
      </svg>
      <span>{name}</span>
      <span className='percentage'>{percentage}%</span>
    </div>
  );
};

export default function SkillsSection() {
  return (
    <div className="section" id="skills">
      <h1 className="title">Skills</h1>

      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, y: 50, scale: 0.9 },
          visible: { opacity: 1, y: 0, scale: 1 },
        }}
      >
        <div className="skillSection">
          <h2 className="Heading">Technical Skills</h2>
          {skills.map((skill, index) => (
            <SkillBar key={index} {...skill} />
          ))}
        </div>

        <div className="skillSection">
          <h2 className="Heading">Professional Skills</h2>
          <div className="circularSkillsWrapper">
            {circleSkills.map((circularSkill, index) => (
              <CircularSkill key={index} {...circularSkill} />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
