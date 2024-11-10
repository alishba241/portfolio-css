"use client"

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const HomeSection = () => (
  <div className="homeSectionContainer">
    <motion.div
      className="mainFlex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="textContainer"
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="nameHeading"
          transition={{ duration: 0.3 }}
        >
          Hi, It&#39;s <span className="highlightedText">Alishba Naveed</span>
        </motion.h2>

        <motion.p
          className="introText"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          I&#39;m a <span className="highlightedText2">Frontend Developer</span>
        </motion.p>

        <motion.p
          className="description"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I’m Alishba Naveed, a dedicated Frontend Developer with a passion for creating visually
          appealing, efficient, and user-friendly web experiences with HTML, CSS, JavaScript,
          TypeScript, Node.js, and frameworks like React and Next.js.
        </motion.p>

        <motion.div
          className="socialIcons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {[FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaYoutube].map((Icon, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Icon className="iconStyle" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="contactButtonContainer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Link href="#contact">
            <motion.button
              className="contactButton"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Contact me
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="imageContainer"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="profileImageWrapper">
          <motion.svg
            className="absolute inset-0 w-full h-full flex justify-center"
            viewBox="0 0 506 506"
            fill="transparent"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <motion.circle
              cx="253"
              cy="253"
              r="250"
              stroke="#eab308"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: "24 10 0 0" }}
              animate={{
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate: [0, 120, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
          </motion.svg>
          <Image
            src="/img.jpg"
            alt="profile photo"
            className="profileImage"
            width={300}
            height={300}
            priority
          />
        </div>
      </motion.div>
    </motion.div>
  </div>
);

export default HomeSection;
