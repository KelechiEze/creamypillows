import { motion } from 'framer-motion';
import { Calendar, ClipboardCheck, Cake } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: Calendar,
      title: 'EVENT CURATION',
      subtitle: 'Immersive Experiences',
      description: 'Design and execute memorable events that bring brand visions to life through meticulous planning, creative execution, and seamless coordination from concept to completion.'
    },
    {
      icon: ClipboardCheck,
      title: 'PROJECT MANAGEMENT',
      subtitle: 'Strategic Execution',
      description: 'Lead projects with precision and efficiency, ensuring timely delivery, budget management, and quality control while coordinating cross-functional teams for optimal results.'
    },
    {
      icon: Cake,
      title: 'ARTISAN BAKER',
      subtitle: 'Culinary Creations',
      description: 'Craft exquisite baked goods and desserts with artistic flair, combining traditional techniques with innovative flavors for memorable culinary experiences.'
    }
  ];

  return (
    <section id="services" className="services-section">
      {/* --- Hero Section --- */}
      <div className="services-hero">
        <div
          className="services-hero-background"
          style={{ backgroundImage: "url('/productsback.PNG')" }}
        />
        <div className="services-hero-overlay" />

        <div className="services-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="services-label">VERSATILE</p>
            <h2 className="services-title">Professional Services</h2>
            <p className="services-description">
              Bringing diverse expertise to every project with precision and creative excellence. As a multi-faceted professional, 
              I specialize in creating unforgettable experiences, managing complex projects, and crafting delightful culinary creations. 
              From event coordination to project leadership and artisanal baking, every service is delivered with meticulous attention to detail and a passion for excellence.
            </p>

            {/* View Portfolio Button - Commented Out */}
            {/*
            <motion.button 
              className="services-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              VIEW PORTFOLIO
            </motion.button>
            */}
          </motion.div>
        </div>
      </div>

      {/* --- Services Details --- */}
      <div className="services-details">
        <div className="services-details-content">
          <div className="services-details-grid">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="service-icon">
                  <service.icon size={40} />
                </div>
                <p className="service-subtitle">{service.subtitle}</p>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="services-image-section"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/eventz.PNG"
              alt="Professional Services Excellence"
              className="services-image"
            />
            <div className="services-image-overlay">
              <div className="services-image-content">
                <ClipboardCheck size={48} />
                <h3>Multi-Disciplinary Expertise</h3>
                <p>Event curator, project manager, and artisanal baker - bringing diverse skills to create exceptional results across different domains</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;