"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenu } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbarContainer">   
      {/* Desktop Menu */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className={`desktopMenu ${isOpen ? 'desktopMenuActive' : ''}`}
      >
        <h1 className="logo">
          <span className="highlightedText">P</span>ortfolio.
        </h1>  
        <ul className="menuList">
          <li className="Menuitem"><Link href="#home">Home</Link></li>
          <li className="Menuitem"><Link href="#about">About</Link></li>
          <li className="Menuitem"><Link href="#skills">Skills</Link></li>
          <li className="Menuitem"><Link href="#projects">Projects</Link></li>
          <li className="Menuitem"><Link href="#services">Services</Link></li>
          <li className="Menuitem"><Link href="#contact">Contact</Link></li>
        </ul>
      </motion.div>

      {/* Mobile Menu Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mobileMenuButtonContainer"
      >
        <h1 className="logo">
          <span className="highlightedText">P</span>ortfolio.
        </h1>
        <button onClick={toggleMenu} className="mobileDropdownMenuButton">
          <HiMenu size={20} className="mobileDropdownMenuIcon" />
        </button>
      </motion.div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`mobileDropdownMenu ${
          isOpen ? "mobileDropdownOpen" : "mobileDropdownClose"
        }`}
      >
        <ul className="mobileMenuList">
          <li className="mobileMenuItem"><Link href="#home">Home</Link></li>
          <li className="mobileMenuItem"><Link href="#about">About</Link></li>
          <li className="mobileMenuItem"><Link href="#skills">Skills</Link></li>
          <li className="mobileMenuItem"><Link href="#projects">Projects</Link></li>
          <li className="mobileMenuItem"><Link href="#services">Services</Link></li>
          <li className="mobileMenuItem"><Link href="#contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
