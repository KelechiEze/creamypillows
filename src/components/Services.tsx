import { motion } from 'framer-motion';
import { Calendar, Users, Sparkles, Award } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: Calendar,
      title: 'SOCIAL MEDIA MANAGEMENT',
      subtitle: 'Strategic Presence',
      description: 'Build compelling brand narratives across digital platforms with content that engages, converts, and builds loyal communities.'
    },
    {
      icon: Sparkles,
      title: 'CREATIVE STRATEGY',
      subtitle: 'Brand Transformation',
      description: 'Develop innovative brand strategies that position you for market leadership and unforgettable audience connections.'
    },
    {
      icon: Users,
      title: 'EVENT CURATION',
      subtitle: 'Immersive Experiences',
      description: 'Design and execute memorable events that bring brand visions to life through meticulous planning and creative execution.'
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
            <p className="services-label">STRATEGIC</p>
            <h2 className="services-title">Creative Services</h2>
            <p className="services-description">
              Bringing ideas to life with strategic precision and creative excellence. As a multi-faceted creative strategist, 
              I specialize in making brands look, sound, and feel unforgettable. From social media ecosystems to immersive events, 
              every project is approached with a unique blend of strategic thinking and creative execution that delivers measurable results.
            </p>

            <motion.button 
              className="services-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              VIEW PORTFOLIO
            </motion.button>
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
              alt="Creative Strategy Excellence"
              className="services-image"
            />
            <div className="services-image-overlay">
              <div className="services-image-content">
                <Award size={48} />
                <h3>Multi-Hat Expertise</h3>
                <p>Social media manager, event curator, and logistics lead rolled into one purpose-driven approach</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;