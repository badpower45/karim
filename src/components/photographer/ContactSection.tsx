import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Camera, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    setIsLoading(false);
    setFormData({ name: '', email: '', project: '', message: '' });
    
    // Show success message (in a real app, you'd handle this properly)
    alert('Message sent! I\'ll get back to you within 24 hours.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-t from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A] relative overflow-hidden">
      {/* Abstract light pattern background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 20% 20%, rgba(255, 193, 7, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 80%, rgba(255, 193, 7, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(255, 193, 7, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 80%, rgba(255, 193, 7, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgba(255, 193, 7, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 20%, rgba(255, 193, 7, 0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Lens flare effects */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255, 193, 7, 0.1) 0%, transparent 70%)',
              left: `${10 + (i * 15)}%`,
              top: `${20 + (i * 10)}%`,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
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
            The Connection
          </h2>
          <p className="text-xl text-gray-300 font-['Inter'] max-w-3xl mx-auto">
            Let's collaborate to create visual stories that transcend the ordinary
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Form */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-lg border border-[#FFC107]/20 rounded-3xl p-8 relative overflow-hidden">
              {/* Bokeh background effect */}
              <div className="absolute inset-0 opacity-30">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                      background: 'radial-gradient(circle, rgba(255, 193, 7, 0.2) 0%, transparent 70%)',
                      width: `${20 + Math.random() * 40}px`,
                      height: `${20 + Math.random() * 40}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2 font-['Inter']">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/40 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-[#FFC107] focus:outline-none focus:ring-2 focus:ring-[#FFC107]/20 transition-all font-['Inter']"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white mb-2 font-['Inter']">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/40 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-[#FFC107] focus:outline-none focus:ring-2 focus:ring-[#FFC107]/20 transition-all font-['Inter']"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="project" className="block text-white mb-2 font-['Inter']">
                    Project Type
                  </label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/40 border border-gray-600 rounded-xl text-white focus:border-[#FFC107] focus:outline-none focus:ring-2 focus:ring-[#FFC107]/20 transition-all font-['Inter']"
                  >
                    <option value="">Select project type</option>
                    <option value="portrait">Portrait Photography</option>
                    <option value="wedding">Wedding Photography</option>
                    <option value="event">Event Photography</option>
                    <option value="commercial">Commercial Photography</option>
                    <option value="fashion">Fashion Photography</option>
                    <option value="fine-art">Fine Art Photography</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white mb-2 font-['Inter']">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black/40 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-[#FFC107] focus:outline-none focus:ring-2 focus:ring-[#FFC107]/20 transition-all resize-none font-['Inter']"
                    placeholder="Tell me about your vision, timeline, and any specific requirements..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-[#FFC107] to-[#FFD54F] text-black py-4 rounded-xl text-lg font-['Inter'] relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                >
                  {/* Morphing animation background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#FFD54F] to-[#FFC107]"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: isLoading ? "-100%" : "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  <span className="relative z-10">
                    {isLoading ? (
                      <motion.div
                        className="flex items-center justify-center gap-2"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <motion.div
                          className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Sending your vision...
                      </motion.div>
                    ) : (
                      'Start Our Collaboration'
                    )}
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Contact Details */}
            <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-lg border border-[#FFC107]/20 rounded-3xl p-8">
              <h3 className="text-2xl text-[#FFC107] mb-6 font-['Playfair_Display'] italic">
                Let's Connect
              </h3>
              
              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "marcus@sterlingvisuals.com" },
                  { icon: Phone, label: "Phone", value: "+1 (555) 123-LENS" },
                  { icon: MapPin, label: "Studio", value: "New York, NY" }
                ].map((contact, index) => (
                  <motion.div
                    key={contact.label}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FFC107] to-[#FFD54F] rounded-xl flex items-center justify-center">
                      <contact.icon className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <p className="text-white font-['Inter']">{contact.label}</p>
                      <p className="text-gray-400 font-['Inter']">{contact.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Social Media */}
            <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-lg border border-[#FFC107]/20 rounded-3xl p-8">
              <h3 className="text-2xl text-[#FFC107] mb-6 font-['Playfair_Display'] italic">
                Follow the Journey
              </h3>
              
              <div className="flex gap-4">
                {[
                  { icon: Instagram, href: "#", label: "@marcussterling" },
                  { icon: Linkedin, href: "#", label: "Marcus Sterling" },
                  { icon: Camera, href: "#", label: "Portfolio" }
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-14 h-14 bg-gray-700/50 rounded-xl flex items-center justify-center text-gray-400 hover:bg-[#FFC107] hover:text-black transition-all duration-300 group"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
              
              <p className="text-gray-400 text-sm mt-4 font-['Inter']">
                Follow for behind-the-scenes content and latest work
              </p>
            </div>
            
            {/* Studio Hours */}
            <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-lg border border-[#FFC107]/20 rounded-3xl p-8">
              <h3 className="text-2xl text-[#FFC107] mb-6 font-['Playfair_Display'] italic">
                Studio Hours
              </h3>
              
              <div className="space-y-2 text-gray-300 font-['Inter']">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>By Appointment</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Minimalist Footer */}
        <motion.footer
          className="mt-20 pt-12 border-t border-[#FFC107]/20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 font-['Inter'] mb-4">
            © 2024 Marcus Sterling Photography. All rights reserved.
          </p>
          <p className="text-[#FFC107] text-sm font-['Playfair_Display'] italic">
            "Capturing moments, creating memories, crafting art."
          </p>
        </motion.footer>
      </div>
      
      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          className="fixed bottom-8 right-8 w-12 h-12 bg-[#FFC107] text-black rounded-full flex items-center justify-center shadow-lg hover:shadow-xl z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </section>
  );
}