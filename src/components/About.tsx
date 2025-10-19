import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import './About.css';

// ✅ No imports from "@/assets" — all images now come from the public folder via /images/...
// Make sure these are inside /public/images/ like:
// public/images/about-background.jpg
// public/images/owner-passion.jpg
// public/images/owner-craft.jpg
// public/images/owner-quality.jpg
// public/images/owner-community.jpg

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
      title: 'THE PASSION',
      description: 'Baking has been my lifelong dream, turning flour and love into memorable moments for our community.',
      fullDescription:
        "From childhood memories of baking with my grandmother to opening this bakery, every day is a celebration of passion. I believe that baking is not just about creating delicious treats, but about crafting experiences that bring joy to people's lives. Each recipe I develop carries a piece of my heart, and every smile from a satisfied customer reminds me why I fell in love with this craft. My journey has taught me that the secret ingredient in every recipe is genuine care and dedication.",
      info: 'Started baking at age 7 with grandmother',
    },
    {
      id: 2,
      image: '/sample1.jpeg',
      title: 'THE CRAFT',
      description: 'Years of perfecting traditional recipes combined with innovative techniques create our signature style.',
      fullDescription:
        'Mastering the art of baking requires patience, practice, and an unwavering commitment to excellence. I spent years studying under master bakers, learning traditional European techniques while developing my own unique approach. Every cake, pastry, and bread that leaves our kitchen represents countless hours of experimentation and refinement. I believe in using time-honored methods while embracing innovation, ensuring that each creation is both rooted in tradition and refreshingly modern. The craft of baking is a lifelong journey, and I wake up every day excited to learn something new.',
      info: 'Trained in Paris for 5 years perfecting artisan techniques',
    },
    {
      id: 3,
      image: '/sample2.jpeg',
      title: 'THE QUALITY',
      description: 'Only the finest ingredients make it into our kitchen, sourced locally whenever possible for maximum freshness.',
      fullDescription:
        "Quality is never an accident; it's always the result of intelligent effort and careful selection. I personally visit local farms and suppliers to ensure we're using the freshest, highest-quality ingredients available. From organic flour to farm-fresh eggs, every component matters. I believe that you can taste the difference when ingredients are chosen with care and respect. This commitment to quality means our products not only taste better but also support our local community. When you bite into one of our creations, you're experiencing the result of relationships built on trust and a shared commitment to excellence.",
      info: 'Partnered with 15 local farms for organic ingredients',
    },
    {
      id: 4,
      image: '/abt4.jpeg',
      title: 'THE COMMUNITY',
      description: 'Building relationships with customers and being part of your celebrations is what makes this journey special.',
      fullDescription:
        'A bakery is more than a business—it’s a gathering place where community bonds are strengthened over shared treats and warm conversations. I cherish every interaction with our customers, from helping plan wedding cakes to providing daily bread for families. Your stories, celebrations, and even simple morning coffee visits inspire everything we do. I believe in giving back to the community that has supported us, which is why we partner with local charities and schools. Seeing our bakery become a cherished part of people’s routines and special moments fills my heart with gratitude every single day.',
      info: 'Donated over 5,000 pastries to local charities annually',
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
          <img src="/about-background.PNG" alt="Bakery background" />
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at ligula in ligula ultrices
            vulputate at ac sapien. In justo neque, malesuada a libero et, consectetur adipiscing elit.
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
