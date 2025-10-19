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
      title: 'THE STRATEGIST',
      description: 'Transforming abstract concepts into compelling brand narratives that resonate with target audiences.',
      fullDescription:
        "As a creative strategist, I bridge the gap between creative vision and strategic execution. My approach involves deep market analysis, audience insights, and brand positioning to develop strategies that not only look beautiful but drive meaningful results. I believe that every brand has a unique story waiting to be told, and my role is to craft that narrative in a way that captivates and converts. From initial concept to final execution, I ensure that every element serves a strategic purpose while maintaining creative excellence.",
      info: 'Developed 50+ brand strategies across various industries',
    },
    {
      id: 2,
      image: '/sample1.jpeg',
      title: 'THE CONTENT CREATOR',
      description: 'Crafting unforgettable social media experiences that make brands look, sound, and feel exceptional.',
      fullDescription:
        'In today\'s digital landscape, social media is the frontline of brand perception. As a social media manager, I don\'t just post content—I create immersive experiences that build community and drive engagement. My expertise spans content strategy, visual storytelling, and community management, ensuring brands maintain a consistent and compelling presence across all platforms. I specialize in developing content that not only stops the scroll but creates lasting impressions, turning followers into brand advocates.',
      info: 'Managed social media for 20+ brands with 300% average growth',
    },
    {
      id: 3,
      image: '/sample2.jpeg',
      title: 'THE EVENT CURATOR',
      description: 'Designing memorable events that transform brand visions into immersive, real-world experiences.',
      fullDescription:
        "Event curation is about creating moments that matter. I approach each event as a storytelling opportunity, where every detail—from venue selection to attendee journey—contributes to a cohesive brand experience. My background in creative strategy allows me to design events that not only impress but align perfectly with brand objectives. Whether it's a product launch, corporate gathering, or community event, I ensure each moment is strategically crafted to reinforce brand identity and create lasting memories.",
      info: 'Curated 30+ successful events with 95% attendee satisfaction',
    },
    {
      id: 4,
      image: '/abt4.jpeg',
      title: 'THE LOGISTICS LEAD',
      description: 'Bringing creative visions to life through meticulous planning and flawless execution behind the scenes.',
      fullDescription:
        'While creativity drives the vision, logistics make it reality. My role as logistics lead involves orchestrating the complex details that turn ambitious ideas into achievable projects. I thrive on solving operational challenges and ensuring that every campaign, event, or launch runs smoothly. This behind-the-scenes work is what allows creative concepts to shine without being hindered by practical constraints. My systematic approach to project management ensures that we deliver exceptional results on time and within budget, every time.',
      info: 'Managed logistics for campaigns with 100% on-time delivery',
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