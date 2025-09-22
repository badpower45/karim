import { motion } from 'motion/react';
import { Camera, Heart, Zap, Users, Palette, Award } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: "Portrait Photography",
    description: "Capturing the essence of personality through masterful composition and lighting.",
    features: ["Individual Portraits", "Family Sessions", "Corporate Headshots"]
  },
  {
    icon: Heart,
    title: "Wedding Photography",
    description: "Documenting love stories with elegance, emotion, and timeless artistry.",
    features: ["Engagement Sessions", "Wedding Day Coverage", "Reception Photography"]
  },
  {
    icon: Zap,
    title: "Event Photography",
    description: "Preserving special moments with dynamic energy and creative vision.",
    features: ["Corporate Events", "Social Gatherings", "Brand Activations"]
  },
  {
    icon: Users,
    title: "Commercial Photography",
    description: "Elevating brands through compelling visual storytelling and professional imagery.",
    features: ["Product Photography", "Brand Campaigns", "Marketing Materials"]
  },
  {
    icon: Palette,
    title: "Fashion Photography",
    description: "Where style meets artistry in striking editorial and commercial fashion imagery.",
    features: ["Editorial Shoots", "Lookbook Creation", "Brand Collaborations"]
  },
  {
    icon: Award,
    title: "Fine Art Photography",
    description: "Creating museum-quality art pieces that transcend traditional photography.",
    features: ["Limited Editions", "Gallery Exhibitions", "Custom Commissions"]
  }
];

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-[#1A1A1A] to-[#0A0A0A] relative overflow-hidden">
      {/* Isometric grid background */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `
          linear-gradient(30deg, transparent 40%, rgba(255, 193, 7, 0.1) 40%, rgba(255, 193, 7, 0.1) 60%, transparent 60%),
          linear-gradient(-30deg, transparent 40%, rgba(255, 193, 7, 0.1) 40%, rgba(255, 193, 7, 0.1) 60%, transparent 60%)
        `,
        backgroundSize: '40px 40px'
      }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl text-[#FFC107] mb-6 font-['Playfair_Display'] italic">
            Behind the Lens
          </h2>
          <p className="text-xl text-gray-300 font-['Inter'] max-w-3xl mx-auto">
            Crafting visual narratives across diverse photography disciplines with uncompromising artistic vision
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative"
              initial={{ opacity: 0, rotateY: -15 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              style={{ perspective: 1000 }}
            >
              <motion.div
                className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full relative overflow-hidden"
                whileHover={{ 
                  rotateY: 5,
                  rotateX: 5,
                  boxShadow: "0 25px 50px rgba(255, 193, 7, 0.15)"
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Particle effect on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `
                      radial-gradient(circle at 20% 20%, rgba(255, 193, 7, 0.1) 1px, transparent 1px),
                      radial-gradient(circle at 80% 80%, rgba(255, 193, 7, 0.1) 1px, transparent 1px),
                      radial-gradient(circle at 40% 40%, rgba(255, 193, 7, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px, 30px 30px, 70px 70px'
                  }}
                  animate={{
                    backgroundPosition: [
                      '0px 0px, 0px 0px, 0px 0px',
                      '50px 50px, 30px 30px, 70px 70px'
                    ]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Icon with glow effect */}
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-[#FFC107] to-[#FFD54F] rounded-xl flex items-center justify-center mx-auto mb-6 relative"
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon className="w-8 h-8 text-black" />
                  
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-[#FFC107] rounded-xl blur-xl opacity-0 group-hover:opacity-50"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                
                <h3 className="text-xl text-white mb-4 group-hover:text-[#FFC107] transition-colors font-['Playfair_Display']">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed font-['Inter']">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      className="text-sm text-gray-500 flex items-center gap-2 font-['Inter']"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.1) + (featureIndex * 0.05) }}
                      viewport={{ once: true }}
                    >
                      <div className="w-1 h-1 bg-[#FFC107] rounded-full" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                
                {/* Subtle tilt indicator */}
                <motion.div
                  className="absolute bottom-4 right-4 w-6 h-6 border border-[#FFC107]/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-1 h-1 bg-[#FFC107] rounded-full mt-1 ml-1" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-gradient-to-r from-[#FFC107] to-[#FFD54F] text-black px-8 py-4 rounded-lg text-lg font-['Inter'] hover:shadow-lg hover:shadow-[#FFC107]/25"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Discuss Your Vision
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}