import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import './Product.css';

// ✅ All product images now come from /public/images/
// Make sure these files exist:
// public/images/product-apple-cake.jpg
// public/images/product-nuts-cookies.jpg
// public/images/product-cupcakes.jpg
// public/images/product-fresh-bread.jpg
// public/images/product-biscuits.jpg
// public/images/product-pretzels.jpg

interface ProductData {
  id: number;
  name: string;
  price: string;
  ingredients: string;
  description: string;
  images: string[];
  badge?: string;
}

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductData | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const productsData: ProductData[] = [
    {
      id: 1,
      name: 'APPLE CAKE',
      price: '11 $',
      ingredients: 'Wholemeal Flour / Apple',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu libero elit.',
      images: ['/apple-cake.PNG'],
      badge: 'SALE',
    },
    {
      id: 2,
      name: 'NUTS COOKIES',
      price: '14 $',
      ingredients: 'Sugar / Flour / Nuts / Walnuts',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu libero elit.',
      images: ['/biscuits.PNG'],
      badge: 'SALE',
    },
    {
      id: 3,
      name: 'CUP CAKES',
      price: '12 $',
      ingredients: 'Flour / Sugar / Cocoa / Stars',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu libero elit.',
      images: ['/apple-cake.PNG'],
      badge: 'SALE',
    },
    {
      id: 4,
      name: 'FRESH BREAD',
      price: '21 $',
      ingredients: 'Oil / Flour / Sesame / Water',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu libero elit.',
      images: ['/apple-cake.PNG'],
      badge: 'SALE',
    },
    {
      id: 5,
      name: 'BISCUITS',
      price: '8 $',
      ingredients: 'Butter / Flour / Chocolate',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu libero elit.',
      images: ['/apple-cake.PNG'],
      badge: 'SALE',
    },
    {
      id: 6,
      name: 'SAL BREATZLE',
      price: '5 $',
      ingredients: 'Salt / Sesame / Flour / Olives',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu libero elit.',
      images: ['/apple-cake.PNG'],
      badge: 'NEW',
    },
  ];

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
                  <span className={`product-badge ${product.badge.toLowerCase()}`}>
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
                  <span className="product-price">{product.price}</span>
                </div>
                <p className="product-ingredients">{product.ingredients}</p>
                <p className="product-description">{product.description}</p>
                <button
                  className="product-btn"
                  onClick={() => handleProductClick(product)}
                >
                  VIEW IMAGE
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

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
    </>
  );
};

export default Products;
