import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { Instagram, Facebook, Twitter, Youtube, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const [aboutRef, aboutInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [contactsRef, contactsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [partnersRef, partnersInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const aboutAnimation = useSpring({
    opacity: aboutInView ? 1 : 0,
    transform: aboutInView ? 'translateY(0px)' : 'translateY(40px)',
    config: { tension: 120, friction: 14 }
  });

  const contactsAnimation = useSpring({
    opacity: contactsInView ? 1 : 0,
    transform: contactsInView ? 'translateY(0px)' : 'translateY(40px)',
    config: { tension: 120, friction: 14 },
    delay: 100
  });

  const partnersAnimation = useSpring({
    opacity: partnersInView ? 1 : 0,
    transform: partnersInView ? 'translateY(0px)' : 'translateY(40px)',
    config: { tension: 120, friction: 14 },
    delay: 200
  });

  // Smooth scroll handler
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      className="footer"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.85), rgba(20, 10, 10, 0.9)), url('/fotback.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-left">
            <div className="footer-text-block">
              <h2 className="footer-title">Book your Events Today, Contact Us!</h2>

              <div className="footer-brand">
                <h3>CREAMY PILLOWS</h3>
                <div className="brand-tag">FOOD</div>
              </div>

              <p className="footer-description">
                Indulge your guests with the unforgettable taste of Creamy Pillows.  
                From corporate events to private celebrations, we bring flavor, flair, and freshness to every table.  
                Let’s make your next event deliciously memorable—crafted with love, served with style.
              </p>

              <div className="footer-socials">
                <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                <a href="#" aria-label="YouTube"><Youtube size={20} /></a>
                <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                <a href="#" aria-label="Pinterest"><Heart size={20} /></a>
              </div>
            </div>
          </div>

          <div className="footer-right">
            <div className="footer-links-grid">
              <animated.div ref={aboutRef} style={aboutAnimation} className="footer-section">
                <h4>ABOUT</h4>
                <ul>
                  <li><a href="#about" onClick={(e) => handleScroll(e, 'about')}>About Us</a></li>
                  <li><a href="#services" onClick={(e) => handleScroll(e, 'services')}>Services</a></li>
                  <li><a href="#reviews" onClick={(e) => handleScroll(e, 'reviews')}>Testimonial</a></li>
                </ul>
              </animated.div>

              <animated.div ref={contactsRef} style={contactsAnimation} className="footer-section">
                <h4>CONTACTS</h4>
                <ul>
                  <li><a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact Us</a></li>
                  <li><a href="#about" onClick={(e) => handleScroll(e, 'about')}>About Us</a></li>
                </ul>
              </animated.div>

              <animated.div ref={partnersRef} style={partnersAnimation} className="footer-section">
                <h4>PARTNERS</h4>
                <ul>
                  <li><a href="#partners" onClick={(e) => handleScroll(e, 'partners')}>Our Partners</a></li>
                  <li><a href="#collaborate" onClick={(e) => handleScroll(e, 'collaborate')}>Collaborate</a></li>
                </ul>
              </animated.div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Creamy Pillows. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
