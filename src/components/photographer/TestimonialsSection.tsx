import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Quote, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Isabella Rodriguez",
    role: "Fashion Designer",
    company: "Luxe Atelier",
    image: "https://images.unsplash.com/photo-1731335182750-fb7fb983ba55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGllbnQlMjB0ZXN0aW1vbmlhbCUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc1ODU3NjI1NHww&ixlib=rb-4.1.0&q=80&w=1080",
    quote: "Marcus doesn't just take photographs; he creates visual poetry. His ability to capture the essence of our designs while telling a compelling story is absolutely extraordinary.",
    rating: 5
  },
  {
    id: 2,
    name: "David Chen",
    role: "Creative Director",
    company: "Zenith Studios",
    image: "https://images.unsplash.com/photo-1731335182750-fb7fb983ba55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGllbnQlMjB0ZXN0aW1vbmlhbCUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc1ODU3NjI1NHww&ixlib=rb-4.1.0&q=80&w=1080",
    quote: "Working with Marcus elevated our entire brand aesthetic. His technical mastery combined with artistic vision produced images that exceeded our wildest expectations.",
    rating: 5
  },
  {
    id: 3,
    name: "Sophie Laurent",
    role: "Gallery Owner",
    company: "Moderne Gallery",
    image: "https://images.unsplash.com/photo-1731335182750-fb7fb983ba55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGllbnQlMjB0ZXN0aW1vbmlhbCUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc1ODU3NjI1NHww&ixlib=rb-4.1.0&q=80&w=1080",
    quote: "Marcus Sterling is a true artist. His photographs have graced our gallery walls and never fail to captivate visitors. He transforms moments into timeless masterpieces.",
    rating: 5
  }
];

const awards = [
  { name: "World Photography Awards", year: "2023", category: "Portrait" },
  { name: "International Photography Prize", year: "2022", category: "Fine Art" },
  { name: "Professional Photographer of the Year", year: "2021", category: "Wedding" }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 lg:py-32 bg-[#0A0A0A] relative overflow-hidden">
      {/* Elegant background quotation mark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <Quote className="w-96 h-96 text-[#FFC107] rotate-12" />
      </div>
      
      {/* Sparkling particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#FFC107] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl text-[#FFC107] mb-6 font-['Playfair_Display'] italic">
            The Acclaim
          </h2>
          <p className="text-xl text-gray-300 font-['Inter'] max-w-2xl mx-auto">
            Testimonials from those who've experienced the magic firsthand
          </p>
        </motion.div>
        
        {/* Testimonials Slider */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative min-h-[400px] flex items-center">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className={`absolute inset-0 ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: index === currentIndex ? 1 : 0,
                  x: index === currentIndex ? 0 : (index > currentIndex ? 100 : -100)
                }}
                transition={{ 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <div className="grid lg:grid-cols-3 gap-12 items-center">
                  {/* Client Photo */}
                  <motion.div
                    className="lg:col-span-1 text-center"
                    animate={{ scale: index === currentIndex ? 1 : 0.9 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="relative inline-block">
                      <motion.div
                        className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-[#FFC107]/30 relative"
                        animate={{ 
                          boxShadow: index === currentIndex 
                            ? "0 0 50px rgba(255, 193, 7, 0.3)" 
                            : "0 0 0px rgba(255, 193, 7, 0)"
                        }}
                      >
                        <ImageWithFallback
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                        />
                      </motion.div>
                      
                      {/* Rating stars */}
                      <div className="flex justify-center gap-1 mt-4">
                        {[...Array(testimonial.rating)].map((_, starIndex) => (
                          <motion.div
                            key={starIndex}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: starIndex * 0.1 + 0.5 }}
                          >
                            <Star className="w-5 h-5 text-[#FFC107] fill-current" />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Testimonial Content */}
                  <div className="lg:col-span-2">
                    <motion.div
                      animate={{ 
                        y: index === currentIndex ? 0 : 20,
                        opacity: index === currentIndex ? 1 : 0.8
                      }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <blockquote className="text-2xl lg:text-3xl text-gray-300 mb-8 italic leading-relaxed font-['Playfair_Display']">
                        <motion.span
                          animate={{ 
                            backgroundSize: index === currentIndex ? "100% 100%" : "0% 100%"
                          }}
                          transition={{ duration: 2, delay: 0.5 }}
                          style={{
                            background: "linear-gradient(to right, rgba(255, 193, 7, 0.1) 0%, rgba(255, 193, 7, 0.1) 100%)",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "0% 100%",
                          }}
                        >
                          "{testimonial.quote}"
                        </motion.span>
                      </blockquote>
                      
                      <div className="border-l-4 border-[#FFC107] pl-6">
                        <h4 className="text-white text-xl mb-2 font-['Playfair_Display']">
                          {testimonial.name}
                        </h4>
                        <p className="text-[#FFC107] text-sm font-['Inter']">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Testimonial Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-12 h-1 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-[#FFC107]' : 'bg-gray-600'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
        
        {/* Awards Section */}
        <motion.div
          className="border-t border-[#FFC107]/20 pt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl text-center text-[#FFC107] mb-8 font-['Playfair_Display'] italic">
            Recent Awards & Recognition
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={award.name}
                className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl border border-[#FFC107]/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-12 h-12 bg-[#FFC107] rounded-full flex items-center justify-center mx-auto mb-4"
                  animate={{ 
                    boxShadow: [
                      "0 0 20px rgba(255, 193, 7, 0.3)",
                      "0 0 30px rgba(255, 193, 7, 0.5)",
                      "0 0 20px rgba(255, 193, 7, 0.3)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Star className="w-6 h-6 text-black fill-current" />
                </motion.div>
                
                <h4 className="text-white text-lg mb-2 font-['Playfair_Display']">
                  {award.name}
                </h4>
                <p className="text-[#FFC107] text-sm font-['Inter'] mb-1">
                  {award.year}
                </p>
                <p className="text-gray-400 text-sm font-['Inter']">
                  {award.category}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}