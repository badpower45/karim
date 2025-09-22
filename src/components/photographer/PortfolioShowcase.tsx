import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useState, useRef } from 'react';
import { X } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    title: "Ethereal Portraits",
    category: "Portrait Photography",
    image: "https://images.unsplash.com/photo-1732965757891-368c1f235e7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwYmVhdXRpZnVsfGVufDF8fHx8MTc1ODU3NjI0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Capturing the soul through light and shadow"
  },
  {
    id: 2,
    title: "Nature's Symphony",
    category: "Landscape Photography",
    image: "https://images.unsplash.com/photo-1690626826523-a3224f48eb15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RpYyUyMGxhbmRzY2FwZSUyMHBob3RvZ3JhcGh5JTIwc3R1bm5pbmd8ZW58MXx8fHwxNzU4NTc2MjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Where earth meets sky in perfect harmony"
  },
  {
    id: 3,
    title: "Eternal Vows",
    category: "Wedding Photography",
    image: "https://images.unsplash.com/photo-1722078543080-7c57c4a62888?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBlbW90aW9uYWwlMjBtb21lbnR8ZW58MXx8fHwxNzU4NTc2MjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Love stories written in light"
  },
  {
    id: 4,
    title: "Urban Elegance",
    category: "Fashion Photography",
    image: "https://images.unsplash.com/photo-1680511352929-f36478d2e424?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcGhvdG9ncmFwaHklMjBtb2RlbCUyMHN0dWRpb3xlbnwxfHx8fDE3NTg1NzYyNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Where fashion meets artistry"
  },
  {
    id: 5,
    title: "Golden Hour Dreams",
    category: "Artistic Photography",
    image: "https://images.unsplash.com/photo-1643264623879-bb85ea39c62a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoZXIlMjBwb3J0cmFpdCUyMGNhbWVyYXxlbnwxfHx8fDE3NTg1Njg3NDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Chasing perfect light"
  }
];

export function PortfolioShowcase() {
  const [selectedImage, setSelectedImage] = useState<typeof portfolioItems[0] | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleImageClick = (item: typeof portfolioItems[0]) => {
    setSelectedImage(item);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-20 lg:py-32 bg-[#0A0A0A] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl text-[#FFC107] mb-6 font-['Playfair_Display'] italic">
            Portfolio
          </h2>
          <p className="text-xl text-gray-300 font-['Inter'] max-w-2xl mx-auto">
            A curated collection of moments transformed into masterpieces
          </p>
        </motion.div>
        
        {/* Desktop: Horizontal Scroll Gallery */}
        <div className="hidden lg:block">
          <motion.div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto pb-6 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="flex-shrink-0 w-[400px] h-[600px] relative group cursor-pointer"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                onClick={() => handleImageClick(item)}
              >
                <div className="relative w-full h-full overflow-hidden rounded-2xl">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ filter: 'contrast(1.1) saturate(0.9)' }}
                  />
                  
                  {/* Depth of field overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  
                  {/* Golden frame on hover */}
                  <motion.div
                    className="absolute inset-0 border-2 border-[#FFC107] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                  />
                  
                  {/* Title overlay */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                    initial={{ y: "100%" }}
                    whileHover={{ y: 0 }}
                  >
                    <h3 className="text-white text-2xl font-['Playfair_Display'] mb-2">{item.title}</h3>
                    <p className="text-[#FFC107] text-sm font-['Inter'] mb-1">{item.category}</p>
                    <p className="text-gray-300 text-sm font-['Inter']">{item.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Mobile: Vertical Swipeable Carousel */}
        <div className="lg:hidden">
          <div className="space-y-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="relative h-[500px] group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => handleImageClick(item)}
              >
                <div className="relative w-full h-full overflow-hidden rounded-2xl">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute inset-0 border border-[#FFC107]/30 rounded-2xl" />
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white text-xl font-['Playfair_Display'] mb-2">{item.title}</h3>
                    <p className="text-[#FFC107] text-sm font-['Inter'] mb-1">{item.category}</p>
                    <p className="text-gray-300 text-sm font-['Inter']">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Elegant Lightbox */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLightbox}
        >
          <motion.div
            className="relative max-w-4xl max-h-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <ImageWithFallback
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl border border-[#FFC107]/30"
            />
            
            <motion.button
              className="absolute top-4 right-4 bg-[#FFC107] text-black rounded-full p-2 hover:bg-[#FFD54F] transition-colors"
              onClick={closeLightbox}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-6 h-6" />
            </motion.button>
            
            <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-4">
              <h3 className="text-white text-xl font-['Playfair_Display'] mb-1">{selectedImage.title}</h3>
              <p className="text-[#FFC107] text-sm font-['Inter'] mb-1">{selectedImage.category}</p>
              <p className="text-gray-300 text-sm font-['Inter']">{selectedImage.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}