"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => (
  <section
    id="about"
    className="flex flex-col md:flex-row items-center py-20 px-6 bg-gradient-to-t from-black to-cyan-950 text-white relative"
  >
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      className="md:flex"
    >
      {/* ! image sect */}
      <motion.div
        className="w-full md:w-[40%] flex justify-center relative z-10"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.2 }}
      >
        <div className="group relative w-52 h-52 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg transition-transform duration-500 hover:scale-105">
          <Image
            src="/img.jpg"
            alt="Alishba Naveed's profile photo"
            className="object-cover"
           fill
    
          />
          {/*! circular border*/}

          <div className="absolute inset-0 border-4 border-yellow-500 rounded-full opacity-80 transform scale-90 transition duration-500 group-hover:scale-100"></div>
        </div>
      </motion.div>

      {/*! text sect */}

      <motion.div
        className="w-full md:w-[50%] flex flex-col mt-12 md:mt-0 items-center md:items-start text-center md:text-left relative z-10"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-yellow-500"
          transition={{ duration: 0.3 }}
        >
          About <span className="text-white">Me</span>
        </motion.h2>

        <motion.p
          className="md:text-xl text-[15px] text-cyan-500 md:mt-2 mt-1 font-semibold italic"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="text-white">Frontend</span> Developer
        </motion.p>

        <motion.p
          className="hidden md:flex text-sm md:text-base text-gray-200 mt-6 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Hello! I’m Alishba Naveed, a dedicated Frontend Developer with a
          passion for creating visually appealing, efficient, and user-friendly
          web experiences. My journey in web development started from a
          curiosity about how websites work, which led me to mastering HTML,
          CSS, JavaScript, and frameworks like React and Next.js. I enjoy
          crafting intuitive user interfaces, optimizing performance, and adding
          subtle animations that bring sites to life. With a focus on
          user-centered design, I strive to make each project both functional
          and engaging. Collaboration is key to my work—I thrive in team
          settings, valuing open communication and feedback to deliver the best
          results. When I’m not coding, I’m often exploring new design ideas and
          learning about the latest in frontend tech. I’m excited to continue
          growing in this field and look forward to connecting!
        </motion.p>

        <motion.p
          className="md:hidden text-sm md:text-base text-gray-200 mt-6 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Hi! I’m Alishba Naveed, a Frontend Developer skilled in HTML, CSS,
          JavaScript, React, and Next.js. I create user-friendly, efficient web
          experiences with a focus on design, performance, and usability. I
          thrive in collaborative settings and love exploring new ideas in
          frontend tech. Let’s connect!
        </motion.p>

        <Link
          href="#contact"
          className="relative md:px-7 px-6 py-2 rounded-full font-semibold bg-cyan-500 text-black shadow-lg hover:bg-yellow-500 hover:text-black transition duration-500 overflow-hidden md:mt-6 mt-9"
        >
          <motion.span
            className="absolute inset-0 bg-purple-400 opacity-0 hover:opacity-20 rounded-full transition duration-300"
            whileHover={{ opacity: 0.2 }}
          ></motion.span>
          Contact Me
        </Link>
      </motion.div>
    </motion.div>
  </section>
);

export default AboutSection;
