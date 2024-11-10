'use client'

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaPalette, FaSearch, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaServer } from 'react-icons/fa';

const services = [
  { id: 1, title: 'Web Development', icon: <FaCode className="animate-bounce" />, description: 'Creating responsive, high-performance websites and web applications.' },
  { id: 2, title: 'Mobile App Development', icon: <FaMobileAlt className="animate-bounce" />, description: 'Building intuitive and efficient mobile applications for iOS and Android.' },
  { id: 3, title: 'UI/UX Design', icon: <FaPalette className="animate-bounce" />, description: 'Designing modern, user-friendly interfaces that enhance user experience.' },
  { id: 4, title: 'SEO Optimization', icon: <FaSearch className="animate-bounce" />, description: 'Improving your website’s visibility and ranking on search engines.' },
  { id: 5, title: 'E-commerce Solutions', icon: <AiOutlineShoppingCart className="animate-bounce" />, description: ' Build and integrate custom APIs that allow websites to interact with third-party services.' },
  { id: 6, title: 'API Development', icon: <FaServer className="animate-bounce" />, description: 'Implementing scalable and secure cloud solutions for your applications.' },
];

const ServiceSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  return (
    <section id="services" className="service-section">
      <motion.div
        className="service-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
      >
        <h2 className="service-heading">Services</h2>

        {isMobile && (
          <div className="mobile-slider-buttons">
            <button onClick={handlePrev} className="mobile-slider-button">
              <FaChevronLeft />
            </button>
            <button onClick={handleNext} className="mobile-slider-button">
              <FaChevronRight />
            </button>
          </div>
        )}

        <motion.div 
          className={`service-grid`}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.2 } }
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3 }}
              className={`service-card ${isMobile && index !== currentIndex ? "hidden" : ""}`}
              whileHover={{ scale: 1.05 }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServiceSection;
