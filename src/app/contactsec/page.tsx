'use client';

import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => (
  <section id="contact" className="contact-section">
    <motion.div
      className="contact-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <h2 className="contact-heading">Contact Me</h2>
      <p className="contact-description">
        Were here to help! Please fill out the form below, and well get back to
        you as soon as possible.
      </p>

      <form className="contact-form">
        <motion.input
          whileFocus={{ scale: 1.05 }}
          className="contact-input"
          type="text"
          placeholder="Your Name"
        />
        <motion.input
          whileFocus={{ scale: 1.05 }}
          className="contact-input"
          type="email"
          placeholder="Your Email"
        />
        <motion.input
          whileFocus={{ scale: 1.05 }}
          className="contact-input"
          type="tel"
          placeholder="Your Phone Number"
        />
        <motion.input
          whileFocus={{ scale: 1.05 }}
          className="contact-input"
          type="text"
          placeholder="Subject"
        />
        <motion.textarea
          whileFocus={{ scale: 1.05 }}
          className="contact-textarea"
          rows={5}
          placeholder="Your Message"
        ></motion.textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="contact-button"
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  </section>
);

export default ContactSection;
