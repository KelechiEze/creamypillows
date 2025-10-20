import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import './About.css';

interface CardData {
  id: number;
  image: string;
  title: string;
  description: string;
  fullDescription: string;
  info: string;
}

const About = () => {
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

 const cardsData: CardData[] = [
  {
    id: 1,
    image: '/abt1.jpeg',
    title: 'THE PROJECT MANAGER',
    description: 'Bringing order to creative chaos with careful planning and collaborative leadership.',
    fullDescription:
      "My journey in project management has taught me that the most beautiful ideas need solid foundations to become reality. I focus on creating clear roadmaps, fostering team collaboration, and maintaining open communication throughout every project phase. What drives me is seeing a team work together seamlessly and watching initial concepts transform into finished products that make a real impact. I'm constantly learning new methodologies and approaches to make project delivery smoother and more efficient.",
    info: 'Successfully delivered 50+ projects across multiple industries',
  },
  {
    id: 2,
    image: '/sample1.jpeg',
    title: 'THE BAKER',
    description: 'Discovering the art and science of baking through practice, patience, and continuous learning.',
    fullDescription:
      "Baking is my creative sanctuary where precision meets passion. While I'm still developing my skills, I approach each recipe as an opportunity to learn and improve. The process of transforming simple ingredients into something beautiful and delicious never fails to inspire me. I'm dedicated to mastering techniques, understanding the science behind baking, and eventually creating my own signature styles. Every batch teaches me something new, and I cherish the joy that homemade baked goods bring to others.",
      info: 'Currently expanding skills through professional courses and practice',
  },
  {
    id: 3,
    image: '/sample2.jpeg',
    title: 'THE EVENT CURATOR',
    description: 'Creating meaningful experiences by paying attention to the details that make events special.',
    fullDescription:
      "My approach to event curation is rooted in understanding what makes moments memorable. I believe successful events aren't just about grand gestures, but about the thoughtful details that make attendees feel valued. From selecting the perfect venue to coordinating the flow of activities, I focus on creating cohesive experiences that tell a story. I'm passionate about learning how different elements—lighting, music, layout—work together to create atmosphere and connection. Each event is a chance to create something truly meaningful.",
      info: 'Helped coordinate 30+ events with focus on attendee experience',
  },
  {
    id: 4,
    image: '/abt4.jpeg',
    title: 'THE EVENT MANAGER',
    description: 'Ensuring everything runs smoothly so creative visions can shine without logistical worries.',
    fullDescription:
      "Behind every successful event is careful planning and attention to detail. My strength lies in anticipating needs, solving problems before they arise, and creating systems that allow creative teams to focus on what they do best. I take pride in building reliable processes and contingency plans that ensure events unfold seamlessly. Whether it's coordinating vendors, managing timelines, or troubleshooting last-minute changes, I'm committed to creating the stable foundation that lets creativity flourish. I believe great event management should be invisible but essential.",
      info: 'Managed operations for numerous events with 100% execution rate',
  },
];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const blockVariants = {
    hidden: {
      opacity: 0,
      scale: 0.3,
      x: Math.random() * 400 - 200,
      y: Math.random() * 400 - 200,
      rotate: Math.random() * 360,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      rotate: 0,
      transition: {
        type: 'spring' as const,
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <>
      <section className="about-section" id="about">
        <div className="about-background">
          <img src="/about-background.PNG" alt="Creative workspace background" />
        </div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="about-title">ABOUT ME</h2>
          <p className="about-description">
            Hi, I'm Oluwatosin — a creative strategist with a serious soft spot for bringing ideas to life. ✨

            Since joining RedLantan Media in January 2025, I've worn a few hats — social media manager, event curator, logistics lead — all rolled into one purpose: to make brands look, sound, and feel unforgettable.
          </p>
          <button className="about-btn">CONTACT</button>
        </motion.div>

        <div className="about-cards">
          {cardsData.map((card, index) => (
            <motion.div
              key={card.id}
              className="about-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="about-card-image">
                <img src={card.image} alt={card.title} />
              </div>
              <div className="about-card-content">
                <h3 className="about-card-title">{card.title}</h3>
                <p className="about-card-description">{card.description}</p>
                <p className="about-card-info">{card.info}</p>
                <button
                  className="about-card-btn"
                  onClick={() => setSelectedCard(card)}
                >
                  LEARN MORE
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedCard && (
          <motion.div
            className="about-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCard(null)}
          >
            <motion.div
              className="about-modal-content"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="about-modal-close"
                onClick={() => setSelectedCard(null)}
              >
                <X size={24} />
              </button>

              <motion.div
                className="about-modal-image"
                variants={blockVariants}
              >
                <img src={selectedCard.image} alt={selectedCard.title} />
              </motion.div>

              <div className="about-modal-text">
                <motion.h3
                  className="about-modal-title"
                  variants={blockVariants}
                >
                  {selectedCard.title}
                </motion.h3>
                <motion.p
                  className="about-modal-description"
                  variants={blockVariants}
                >
                  {selectedCard.fullDescription}
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default About;