import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Camera, Aperture } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0A0A0A]">
      {/* Dynamic background blur of photography work */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          backgroundImage: [
            'url("https://images.unsplash.com/photo-1732965757891-368c1f235e7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwYmVhdXRpZnVsfGVufDF8fHx8MTc1ODU3NjI0M3ww&ixlib=rb-4.1.0&q=80&w=1080")',
            'url("https://images.unsplash.com/photo-1690626826523-a3224f48eb15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RpYyUyMGxhbmRzY2FwZSUyMHBob3RvZ3JhcGh5JTIwc3R1bm5pbmd8ZW58MXx8fHwxNzU4NTc2MjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080")',
            'url("https://images.unsplash.com/photo-1680511352929-f36478d2e424?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcGhvdG9ncmFwaHklMjBtb2RlbCUyMHN0dWRpb3xlbnwxfHx8fDE3NTg1NzYyNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080")',
          ],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(20px)',
        }}
      />
      
      {/* Subtle metallic texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFC107]/5 via-transparent to-[#FFC107]/10 opacity-60" />
      
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        {/* Hero Content */}
        <motion.div
          className="flex-1 text-center lg:text-left max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          {/* Kinetic Typography - Name */}
          <motion.h1
            className="text-5xl lg:text-7xl xl:text-8xl text-[#FFC107] mb-4 leading-tight font-['Playfair_Display'] italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              style={{
                textShadow: '0 0 30px rgba(255, 193, 7, 0.5)',
              }}
            >
              Marcus
            </motion.span>
            <br />
            <motion.span
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              style={{
                textShadow: '0 0 30px rgba(255, 193, 7, 0.5)',
              }}
            >
              Sterling
            </motion.span>
          </motion.h1>
          
          {/* Specialty */}
          <motion.h2
            className="text-2xl lg:text-3xl text-white mb-6 font-['Inter']"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            Visual Storyteller
          </motion.h2>
          
          {/* Typewriter motto */}
          <motion.p
            className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed font-['Inter'] max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, delay: 1.5 }}
              className="block overflow-hidden whitespace-nowrap"
            >
              Capturing the poetry of life through the lens of artistry
            </motion.span>
          </motion.p>
          
          {/* Liquid effect CTA */}
          <motion.button
            className="relative bg-[#FFC107] text-black px-10 py-4 rounded-lg text-lg font-['Inter'] overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#FFC107] via-[#FFD54F] to-[#FFC107]"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <motion.span
              className="relative z-10"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              اكتشف عالمي الفوتوغرافي
            </motion.span>
          </motion.button>
          
          {/* Rotating 3D aperture icon */}
          <motion.div
            className="absolute top-0 right-0 lg:top-10 lg:right-10"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Aperture className="w-16 h-16 lg:w-20 lg:h-20 text-[#FFC107] opacity-60" />
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Hero Portrait */}
        <motion.div
          className="flex-1 max-w-lg lg:max-w-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          <div className="relative">
            {/* Chiaroscuro lighting effect */}
            <div className="absolute inset-0 bg-gradient-to-l from-[#FFC107]/30 via-transparent to-transparent rounded-3xl blur-2xl" />
            <div className="absolute -inset-4 bg-gradient-to-r from-[#FFC107]/20 to-transparent rounded-3xl blur-xl" />
            
            <motion.div
              className="relative z-10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1643264623879-bb85ea39c62a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoZXIlMjBwb3J0cmFpdCUyMGNhbWVyYXxlbnwxfHx8fDE3NTg1Njg3NDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Marcus Sterling - Professional Photographer"
                className="w-full h-auto rounded-3xl shadow-2xl border border-[#FFC107]/20"
                style={{
                  filter: 'contrast(1.1) saturate(0.9)',
                }}
              />
            </motion.div>
            
            {/* Subtle camera overlay */}
            <motion.div
              className="absolute bottom-6 right-6 bg-[#FFC107]/90 backdrop-blur-sm rounded-full p-3"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Camera className="w-6 h-6 text-black" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}