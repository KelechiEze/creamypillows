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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut diam et nibh condimentum
                venenatis eu ac magnasin. Quisque interdum est mauris, eget ullamcorper.
              </p>

              <div className="footer-socials">
                <a href="#" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" aria-label="YouTube">
                  <Youtube size={20} />
                </a>
                <a href="#" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a href="#" aria-label="Pinterest">
                  <Heart size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-right">
            <div className="footer-links-grid">
              <animated.div ref={aboutRef} style={aboutAnimation} className="footer-section">
                <h4>ABOUT</h4>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Testimonial</a></li>
                  <li><a href="#">Faq</a></li>
                  <li><a href="#">Payment</a></li>
                </ul>
              </animated.div>

              <animated.div ref={contactsRef} style={contactsAnimation} className="footer-section">
                <h4>CONTACTS</h4>
                <ul>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Book a Table</a></li>
                  <li><a href="#">Cost Calc.</a></li>
                  <li><a href="#">Our Chef</a></li>
                  <li><a href="#">About Us</a></li>
                </ul>
              </animated.div>

              <animated.div ref={partnersRef} style={partnersAnimation} className="footer-section">
                <h4>PARTNERS</h4>
                <ul>
                  <li><a href="#">Wedding</a></li>
                  <li><a href="#">Cake Decorator</a></li>
                  <li><a href="#">Restaurant</a></li>
                  <li><a href="#">Coffee Shop</a></li>
                  <li><a href="#">Flowers</a></li>
                </ul>
              </animated.div>
            </div>

            <div className="footer-button">
              <button>REQUEST IT NOW</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Creamy Pillows. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;