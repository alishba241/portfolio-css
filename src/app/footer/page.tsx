import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Copyright Info */}
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()}{" "}
          <span className="footer-highlight">Alishba Naveed</span>. All rights
          reserved.
        </p>

        {/* Social Links */}
        <div className="footer-social-links">
          <Link
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="footer-social-icon" />
          </Link>
          <Link
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="footer-social-icon" />
          </Link>
          <Link
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter className="footer-social-icon" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
