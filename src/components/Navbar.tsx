import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Share2, Star, MapPin, Menu, X, Facebook, Twitter, Instagram, MessageCircle } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // ✅ Fixed WhatsApp click handler - Direct chat with website owner
  const handleWhatsAppClick = () => {
    const phoneNumber = "2347062306141"; // ✅ Include country code (e.g., +234 for Nigeria, but without "+")
    const message = "Hello! I'd like to make a reservation or inquire about your bakery services.";

    // Construct direct WhatsApp chat URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in a new tab or app
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  // Mobile menu animation variants
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const menuItemVariants = {
    closed: {
      opacity: 0,
      x: -20
    },
    open: {
      opacity: 1,
      x: 0
    }
  };

  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  // WhatsApp button heartbeat animation
  const whatsappPulse = {
    animate: {
      scale: [1, 1.1, 1],
      boxShadow: [
        "0 0 0 0 rgba(37, 211, 102, 0.7)",
        "0 0 0 10px rgba(37, 211, 102, 0)",
        "0 0 0 0 rgba(37, 211, 102, 0)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }
    },
    hover: {
      scale: 1.15,
      rotate: [0, -5, 5, -5, 0],
      transition: {
        duration: 0.5,
        rotate: {
          duration: 0.3,
          repeat: 0
        }
      }
    },
    tap: {
      scale: 0.9,
      rotate: 0
    }
  };

  return (
    <nav className="navbar-container">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-content">
          <div className="top-bar-left">
            <a href="#" className="language-selector">
              <Globe size={16} />
              <span>LANGUAGES</span>
            </a>
            <a href="#" className="language-selector">
              <span>EN</span>
            </a>
            <a href="#" className="language-selector">
              <span>IT</span>
            </a>
            <a href="#" className="social-link">
              <Share2 size={16} />
              <span>OUR SOCIAL</span>
            </a>
            <div className="social-icons">
              <a href="#" className="social-link">
                <Facebook size={16} />
              </a>
              <a href="#" className="social-link">
                <Twitter size={16} />
              </a>
              <a href="#" className="social-link">
                <Instagram size={16} />
              </a>
            </div>
          </div>
          <div className="top-bar-right">
            <a href="#" className="top-link">
              <Star size={16} />
              <span>NEW PRODUCTS</span>
            </a>
            <a href="#" className="top-link">
              <MapPin size={16} />
              <span>CONTACT US</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="main-nav">
        <div className="main-nav-content">
          <a href="/" className="logo">
            <img 
              src="/lugu.png" 
              alt="Bakery Shop" 
              className="logo-image"
            />
          </a>

          <ul className="nav-links">
            <li><a href="#home" className="nav-link active">HOME</a></li>
            <li><a href="#about" className="nav-link">ABOUT</a></li>
            <li><a href="#products" className="nav-link">PRODUCTS</a></li>
            <li><a href="#services" className="nav-link">SERVICES</a></li>
            <li><a href="#reviews" className="nav-link">REVIEWS</a></li>
          </ul>

          {/* WhatsApp Button with Heartbeat Animation */}
          <motion.button 
            className="whatsapp-btn"
            onClick={handleWhatsAppClick}
            variants={whatsappPulse}
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            title="Chat directly with the owner on WhatsApp"
          >
            <MessageCircle size={24} />
            <span className="whatsapp-tooltip">Chat directly with us! 💬</span>
          </motion.button>

          <motion.button 
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={mobileMenuOpen ? "open" : "closed"}
              transition={{ duration: 0.3 }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="mobile-menu-overlay"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={closeMobileMenu}
            />
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="mobile-menu"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <motion.a 
                href="#home" 
                className="nav-link active"
                variants={menuItemVariants}
                onClick={closeMobileMenu}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                HOME
              </motion.a>
              <motion.a 
                href="#about" 
                className="nav-link"
                variants={menuItemVariants}
                onClick={closeMobileMenu}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                ABOUT
              </motion.a>
              <motion.a 
                href="#products" 
                className="nav-link"
                variants={menuItemVariants}
                onClick={closeMobileMenu}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                PRODUCTS
              </motion.a>
              <motion.a 
                href="#pages" 
                className="nav-link"
                variants={menuItemVariants}
                onClick={closeMobileMenu}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                SERVICES
              </motion.a>
              <motion.a 
                href="#reviews" 
                className="nav-link"
                variants={menuItemVariants}
                onClick={closeMobileMenu}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                REVIEWS
              </motion.a>
              <motion.button 
                className="whatsapp-btn mobile-whatsapp"
                variants={menuItemVariants}
                onClick={() => {
                  handleWhatsAppClick();
                  closeMobileMenu();
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle size={20} />
                <span>Chat with Owner</span>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
