import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import './Hero.css';

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

  // Background images for the carousel
  const backgroundImages = [
    '/heroip.jpeg',
    '/firstimage.jpeg',
    '/cakebag.png'
  ];

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
            THE<br />BEST
          </h1>
          <h2 className="hero-subtitle">PASTRY</h2>
          <p className="hero-or">or</p>
          <p className="hero-description">
            BEST BAKERY SHOP IN TOWN<br />
            20 YEAR BY YOUR SIDE
          </p>

          <div className="zigzag-divider">
            <div className="zigzag-line" />
            <div className="zigzag-line" />
            <div className="zigzag-line" />
          </div>

          <div className="hero-social">
            <motion.button 
              className="social-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Facebook size={20} />
            </motion.button>
            <motion.button 
              className="social-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Twitter size={20} />
            </motion.button>
            <motion.button 
              className="social-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
              </svg>
            </motion.button>
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
              <img src="/firstimage.jpeg" alt="Organic drink" className="card-image" />
              <div className="card-text">
                <h3 className="card-title">Taste Our Organic<br />Great Ingredients</h3>
                <p className="card-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum felis. Praesent nec lobortis sem. Duis non nulla felis.
                </p>
                <motion.button 
                  className="card-btn"
                  whileHover={{ x: 5 }}
                >
                  KEEP READING
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
              <h3 className="card-title">Met Our Cupcakes<br />Great Assortment</h3>
              <p className="card-description">
                Cras rutrum iaculis viverra. Etiam odio diam, vehicula sit amet libero ut amet, elementum dapibus dui. Donec in dui urna.
              </p>
              <motion.button 
                className="card-btn"
                whileHover={{ x: 5 }}
              >
                LEARN MORE
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            className="hero-card product-card"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <img src="/cakebag.png" alt="Product" className="product-image" />
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
              className="social-btn-mobile"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Facebook size={20} />
            </motion.button>
            <motion.button 
              className="social-btn-mobile"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Twitter size={20} />
            </motion.button>
            <motion.button 
              className="social-btn-mobile"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
              </svg>
            </motion.button>
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