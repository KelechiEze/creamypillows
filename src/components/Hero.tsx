import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Instagram, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import './Hero.css';

// WhatsApp number - update this with the actual owner's number
const WHATSAPP_NUMBER = '+2347062306141'; // Replace with actual phone number

const scrollToNextSection = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  });
};

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  // Background images for the carousel - update these to match your brand
  const backgroundImages = [
    '/heroip.jpeg',
    '/firstimage.jpeg',
    '/cakebag.png'
  ];

  // WhatsApp redirect function
  const redirectToWhatsApp = () => {
    const message = "Hello! I'm interested in your services.";
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text animation - typewriter effect
      const textElements = textRef.current?.children;
      if (textElements) {
        gsap.fromTo(textElements, 
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.3,
            ease: "power2.out",
            delay: 0.5
          }
        );
      }

      // Background carousel animation
      if (backgroundRef.current) {
        let currentIndex = 0;
        
        const changeBackground = () => {
          const nextIndex = (currentIndex + 1) % backgroundImages.length;
          
          gsap.to(backgroundRef.current, {
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
            onComplete: () => {
              if (backgroundRef.current) {
                backgroundRef.current.style.backgroundImage = `url('${backgroundImages[nextIndex]}')`;
                gsap.to(backgroundRef.current, {
                  opacity: 1,
                  duration: 1,
                  ease: "power2.inOut"
                });
              }
              currentIndex = nextIndex;
            }
          });
        };

        // Change background every 5 seconds
        const interval = setInterval(changeBackground, 5000);
        
        return () => clearInterval(interval);
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-section" ref={heroRef}>
      {/* Background with carousel effect */}
      <div 
        className="hero-background"
        ref={backgroundRef}
        style={{ backgroundImage: `url('${backgroundImages[0]}')` }}
      />

      {/* Overlay */}
      <div className="hero-overlay" />

      <div className="hero-content">
        {/* Desktop Left Side - Hidden on Mobile */}
        <motion.div 
          className="hero-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            CREATIVE<br />STRATEGIST
          </h1>
          <h2 className="hero-subtitle">BRAND BUILDER</h2>
          <p className="hero-or">&</p>
          <p className="hero-description">
            MAKING BRANDS LOOK, SOUND<br />
            AND FEEL UNFORGETTABLE
          </p>

          <div className="zigzag-divider">
            <div className="zigzag-line" />
            <div className="zigzag-line" />
            <div className="zigzag-line" />
          </div>

          <div className="hero-social">
            <motion.button 
              onClick={redirectToWhatsApp}
              className="social-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle size={20} />
            </motion.button>

            <motion.a 
              href="https://www.tiktok.com/@olayinka_ceo?_t=ZS-90gldRCyz1Y&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-3.77-1.105l-.001-.001z"/>
              </svg>
            </motion.a>

            <motion.a 
              href="https://www.instagram.com/creamypillows.ng?igsh=dGo0MGY1MmtmbDh1&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram size={20} />
            </motion.a>
          </div>

        </motion.div>

        {/* Desktop Right Side - Hidden on Mobile */}
        <motion.div 
          className="hero-right"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="hero-card"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="card-content">
              <img src="/firstimage.jpeg" alt="Creative work" className="card-image" />
              <div className="card-text">
                <h3 className="card-title">Social Media<br />Excellence</h3>
                <p className="card-description">
                  Crafting compelling social media strategies that build community, drive engagement, and make brands stand out in crowded digital spaces.
                </p>
                <motion.button 
                  className="card-btn"
                  whileHover={{ x: 5 }}
                >
                  SEE WORK
                </motion.button>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="hero-card"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="card-text">
              <h3 className="card-title">Event Curation<br />& Management</h3>
              <p className="card-description">
                Designing immersive brand experiences through carefully curated events that transform visions into memorable real-world moments.
              </p>
              <motion.button 
                className="card-btn"
                whileHover={{ x: 5 }}
              >
                EXPLORE
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            className="hero-card product-card"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <img src="/cakebag.png" alt="Portfolio" className="product-image" />
            <motion.button 
              className="scroll-down-btn"
              onClick={scrollToNextSection}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronDown size={36} strokeWidth={2.5} />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Mobile Welcome Section */}
        <div className="hero-mobile">
          <div className="welcome-text" ref={textRef}>
            <h1 className="welcome-line">WELCOME</h1>
            <h1 className="welcome-line">TO CREAMY</h1>
            <h1 className="welcome-line">PILLOWS</h1>
          </div>

          {/* Mobile Social Icons */}
          <div className="hero-social-mobile">
            <motion.button 
              onClick={redirectToWhatsApp}
              className="social-btn-mobile"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle size={20} />
            </motion.button>
            <motion.a 
              href="https://www.tiktok.com/@olayinka_ceo?_t=ZS-90gldRCyz1Y&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn-mobile"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-3.77-1.105l-.001-.001z"/>
              </svg>
            </motion.a>
            <motion.a 
              href="https://www.instagram.com/creamypillows.ng?igsh=dGo0MGY1MmtmbDh1&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn-mobile"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram size={20} />
            </motion.a>
          </div>

          {/* Scroll Down Button for Mobile */}
          <motion.button 
            className="scroll-down-mobile"
            onClick={scrollToNextSection}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronDown size={32} strokeWidth={2.5} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;