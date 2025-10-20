import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ShoppingCart, MessageCircle, Instagram } from 'lucide-react';
import gsap from 'gsap';
import './Product.css';

// Social media links - update these with actual owner's information
const OWNER_SOCIALS = {
  whatsapp: '+2347062306141',
  tiktok: 'https://www.tiktok.com/@olayinka_ceo?_t=ZS-90gldRCyz1Y&_r=1',
  instagram: 'https://www.instagram.com/creamypillows.ng?igsh=dGo0MGY1MmtmbDh1&utm_source=qr'
};

interface ProductData {
  id: number;
  name: string;
  ingredients: string;
  description: string;
  images: string[];
  badge?: string;
}

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductData | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [selectedProductForOrder, setSelectedProductForOrder] = useState<ProductData | null>(null);
  
  const orderModalRef = useRef<HTMLDivElement>(null);
  const socialButtonsRef = useRef<(HTMLButtonElement | HTMLAnchorElement)[]>([]);

  const productsData: ProductData[] = [
    {
      id: 1,
      name: 'BANANA BREAD MINIS',
      ingredients: '3 minis - Oreo, Coconut, Plain',
      description: 'Delicious mini banana breads available in three delightful varieties. Perfect for sampling different flavors or sharing with friends.',
      images: ['/prod1.jpeg'],
      badge: 'POPULAR',
    },
    {
      id: 2,
      name: 'BANANA BREAD MINIS',
      ingredients: '4 minis - Oreo, Coconut, Raisins, Plain',
      description: 'A quartet of mini banana breads featuring our most popular flavors. Includes the sweet addition of raisins for extra variety.',
      images: ['/prod2.jpg'],
      badge: 'BEST VALUE',
    },
    {
      id: 3,
      name: 'BANANA BREAD MINIS',
      ingredients: '6 minis - Oreo, Coconut, Raisins, Plain, Chocolate Chips, Your Favorite',
      description: 'Our premium mini banana bread collection featuring all five flavors plus one of your personal favorites. The ultimate tasting experience.',
      images: ['/prod3.jpg'],
      badge: 'PREMIUM',
    },
    {
      id: 4,
      name: 'BIG BANANA BREAD',
      ingredients: 'Available in Plain, Oreo, Coconut, Raisins, Chocolate Chips',
      description: 'Full-sized banana bread perfect for family gatherings or special occasions. Choose from our five delicious flavor variations.',
      images: ['/prod4.jpeg'],
      badge: 'FAMILY SIZE',
    },
    {
      id: 5,
      name: 'BROWNIE SLABS 6',
      ingredients: 'Available in Plain, Oreo, Chocolate Chips',
      description: 'Rich, fudgy brownie slabs in three irresistible varieties. Perfect for chocolate lovers and special treats.',
      images: ['/prod5.jpg'],
      badge: 'CHOCOLATE',
    },
    {
      id: 6,
      name: 'BROWNIE SLABS 8',
      ingredients: 'Available in Plain, Oreo, Chocolate Chips',
      description: 'Large brownie slabs for bigger gatherings or extended indulgence. Same great taste, bigger size.',
      images: ['/prod5.jpg'],
      badge: 'LARGE',
    },


    {
      id: 7,
      name: 'CHOCOLATE CAKE',
      ingredients: 'Available in 6" and 8" sizes',
      description: 'Rich, moist chocolate cake wrapped in foil. Perfect uniced for those who prefer simple, classic cake enjoyment.',
      images: ['/revcake.jpeg'],
      badge: 'CLASSIC',
    },
    {
      id: 8,
      name: 'RED VELVET CAKE',
      ingredients: 'Available in 6" and 8" sizes',
      description: 'Velvety smooth red velvet cake with its signature flavor and color. Uniced and wrapped for freshness.',
      images: ['/cakolo.jpg'],
      badge: 'PREMIUM',
    }
  ];

  // WhatsApp redirect function
  const redirectToWhatsApp = (product: ProductData) => {
    const message = `Hello! I'm interested in ordering ${product.name}. ${product.ingredients}`;
    const whatsappUrl = `https://wa.me/${OWNER_SOCIALS.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    handleCloseOrderModal();
  };

  const handleProductClick = (product: ProductData) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setCurrentImageIndex(0);
  };

  const handlePrevImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProduct.images.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prev) =>
        prev === selectedProduct.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handleOrderClick = (product: ProductData) => {
    setSelectedProductForOrder(product);
    setShowOrderModal(true);
  };

  const handleCloseOrderModal = () => {
    setShowOrderModal(false);
    setSelectedProductForOrder(null);
  };

  // GSAP animations for order modal
  useEffect(() => {
    if (showOrderModal && orderModalRef.current) {
      const ctx = gsap.context(() => {
        // Modal entrance animation
        gsap.fromTo(orderModalRef.current,
          { 
            scale: 0.8,
            opacity: 0,
            y: 50
          },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "back.out(1.7)"
          }
        );

        // Stagger animation for social buttons
        if (socialButtonsRef.current.length > 0) {
          gsap.fromTo(socialButtonsRef.current,
            {
              opacity: 0,
              y: 30,
              scale: 0.8
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.5,
              stagger: 0.15,
              delay: 0.3,
              ease: "power2.out"
            }
          );
        }
      }, orderModalRef);

      return () => ctx.revert();
    }
  }, [showOrderModal]);

  const setSocialButtonRef = (el: HTMLButtonElement | HTMLAnchorElement | null, index: number) => {
    if (el) {
      socialButtonsRef.current[index] = el;
    }
  };

  return (
    <>
      <section className="products-section" id="products">
        <motion.div
          className="products-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="products-title">OUR PRODUCTS</h2>
          <p className="products-subtitle">
            Handcrafted with love and the finest ingredients
          </p>
        </motion.div>

        <div className="products-grid">
          {productsData.map((product, index) => (
            <motion.div
              key={product.id}
              className="product-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="product-image-wrapper">
                <div className="product-icon">
                  <ShoppingCart size={24} />
                </div>

                {product.badge && (
                  <span className={`product-badge ${product.badge.toLowerCase().replace(' ', '-')}`}>
                    {product.badge}
                  </span>
                )}

                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="product-image"
                />
              </div>

              <div className="product-content">
                <div className="product-header-info">
                  <h3 className="product-name">{product.name}</h3>
                </div>
                <p className="product-ingredients">{product.ingredients}</p>
                <p className="product-description">{product.description}</p>
                <div className="product-buttons">
                  <button
                    className="product-btn view-btn"
                    onClick={() => handleProductClick(product)}
                  >
                    VIEW IMAGE
                  </button>
                  <motion.button
                    className="product-btn order-btn"
                    onClick={() => handleOrderClick(product)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    ORDER NOW
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Order Information Note */}
        <motion.div 
          className="order-note"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="order-note-content">
            <h4>Order Information</h4>
            <p>
              <strong>Order Timing:</strong> Order taking ends by 12pm everyday. Same day delivery available for orders made late previous day and paid for before 10am following day.
            </p>
            <p>
              <strong>Delivery:</strong> Delivery will be handled by the customer. Pick up is also available.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Product Image Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="product-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <button className="product-modal-close" onClick={handleCloseModal}>
              <X size={24} />
            </button>

            <button
              className="product-modal-nav product-modal-prev"
              onClick={(e) => {
                e.stopPropagation();
                handlePrevImage();
              }}
            >
              <ChevronLeft size={32} />
            </button>

            <motion.div
              className="product-modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="product-modal-image-wrapper">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={selectedProduct.images[currentImageIndex]}
                    alt={selectedProduct.name}
                    className="product-modal-image"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>
                <div className="product-modal-counter">
                  {currentImageIndex + 1} of {selectedProduct.images.length}
                </div>
              </div>
            </motion.div>

            <button
              className="product-modal-nav product-modal-next"
              onClick={(e) => {
                e.stopPropagation();
                handleNextImage();
              }}
            >
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Order Modal */}
      <AnimatePresence>
        {showOrderModal && selectedProductForOrder && (
          <motion.div
            className="order-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseOrderModal}
          >
            <motion.div
              ref={orderModalRef}
              className="order-modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="order-modal-close"
                onClick={handleCloseOrderModal}
              >
                <X size={24} />
              </button>

              <div className="order-modal-header">
                <h3>Order {selectedProductForOrder.name}</h3>
                <p>Choose your preferred platform to place your order</p>
              </div>

              <div className="social-buttons-container">
                <motion.button
                  ref={(el) => setSocialButtonRef(el, 0)}
                  className="social-order-btn whatsapp-btn"
                  onClick={() => redirectToWhatsApp(selectedProductForOrder)}
                  whileHover={{ 
                    scale: 1.1,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle size={32} />
                  <span>WhatsApp</span>
                </motion.button>

                <motion.a
                  ref={(el) => setSocialButtonRef(el, 1)}
                  href={OWNER_SOCIALS.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-order-btn tiktok-btn"
                  whileHover={{ 
                    scale: 1.1,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCloseOrderModal}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-3.77-1.105l-.001-.001z"/>
                  </svg>
                  <span>TikTok</span>
                </motion.a>

                <motion.a
                  ref={(el) => setSocialButtonRef(el, 2)}
                  href={OWNER_SOCIALS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-order-btn instagram-btn"
                  whileHover={{ 
                    scale: 1.1,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCloseOrderModal}
                >
                  <Instagram size={32} />
                  <span>Instagram</span>
                </motion.a>
              </div>

              <motion.div 
                className="order-product-info"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <p><strong>Product:</strong> {selectedProductForOrder.name}</p>
                <p><strong>Options:</strong> {selectedProductForOrder.ingredients}</p>
                <p><strong>Description:</strong> {selectedProductForOrder.description}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Products;