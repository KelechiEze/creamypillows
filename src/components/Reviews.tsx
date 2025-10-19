"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Reviews.css";

const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Seattle",
      text: "The quality of products and services from this business is consistently top-notch. I've been a long-time customer, and I'm always impressed.",
      image: "/smol3.jpg",
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "New York",
      text: "Exceptional service and attention to detail. Every interaction has been professional and the results speak for themselves.",
      image: "/smole3.jpg",
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section
      className="reviews-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Header */}
      <motion.div
        className="reviews-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2, duration: 0.6 },
          },
        }}
      >
        <motion.span className="subtitle" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          CUSTOMER VOICES
        </motion.span>
        <motion.h2 className="title" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          Standard of Excellence
        </motion.h2>
        <motion.p className="description" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          As you explore these testimonials, we hope you'll gain insight into the quality,
          reliability, and outstanding customer service.
        </motion.p>
      </motion.div>

      {/* Grid */}
      <div className="reviews-grid">
        {/* Left */}
        <motion.div
          className="reviews-left"
          style={{ backgroundImage: "url('/cake1.png')" }}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="overlay-content">
            <h3>Hear what our clients have to say</h3>
            <p>
              We take immense pride in our work and continuously strive to provide top-quality
              services/products that meet and exceed your expectations.
            </p>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              READ MORE
            </motion.button>
          </div>
        </motion.div>

        {/* Middle */}
        <motion.div
          className="reviews-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src="/smol2.jpg" alt="Customer" />
        </motion.div>

        {/* Right */}
        <motion.div
          className="reviews-right"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[currentSlide].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="testimonial-text">
                “{testimonials[currentSlide].text}”
              </div>
              <div className="testimonial-author">
                <img src={testimonials[currentSlide].image} alt={testimonials[currentSlide].name} />
                <div>
                  <h4>{testimonials[currentSlide].name}</h4>
                  <p>{testimonials[currentSlide].location}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="testimonial-nav">
            <motion.button whileHover={{ scale: 1.2 }} onClick={prevSlide}>
              <ChevronLeft size={22} />
            </motion.button>
            <motion.button whileHover={{ scale: 1.2 }} onClick={nextSlide}>
              <ChevronRight size={22} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Reviews;
