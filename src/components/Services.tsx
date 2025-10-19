import { motion } from 'framer-motion';
import { Calendar, Users, Sparkles, Award } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: Calendar,
      title: 'CORPORATE EVENTS',
      subtitle: 'Professional Excellence',
      description: 'Elevate your brand with seamlessly executed corporate events that leave lasting impressions.'
    },
    {
      icon: Sparkles,
      title: 'WEDDINGS',
      subtitle: 'Dream Celebrations',
      description: 'Transform your special day into an unforgettable celebration of love, beauty, and elegance.'
    },
    {
      icon: Users,
      title: 'PRIVATE PARTIES',
      subtitle: 'Personalized Experiences',
      description: 'Create magical moments with bespoke private events tailored to your unique vision and style.'
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
            <p className="services-label">EXCEPTIONAL</p>
            <h2 className="services-title">Event Management Services</h2>
            <p className="services-description">
              Crafting extraordinary experiences that transcend expectations. As a passionate event manager 
              with years of expertise, I specialize in transforming visions into reality — creating unforgettable 
              moments that resonate long after the celebration ends. From intimate gatherings to grand corporate 
              affairs, every detail is meticulously curated to perfection.
            </p>

            <motion.button 
              className="services-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              READ MORE
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
              alt="Event Management Excellence"
              className="services-image"
            />
            <div className="services-image-overlay">
              <div className="services-image-content">
                <Award size={48} />
                <h3>10+ Years of Excellence</h3>
                <p>Delivering unforgettable events with precision, creativity, and passion</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
