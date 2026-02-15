import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    title: "Избавление от хронической боли",
    subtitle: "Без таблеток и операций"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    title: "Глубокая проработка мышц",
    subtitle: "Устранение триггерных точек"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80",
    title: "Восстановление подвижности",
    subtitle: "Верните радость движения"
  }
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative h-[80vh] w-full overflow-hidden mt-20">
      <AnimatePresence mode='wait'>
        <motion.div
          key={slides[currentSlide].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/40 to-slate-900/20 backdrop-brightness-75" />
          
          {/* Text Content */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl border border-white/20"
            >
              <h1 className="text-3xl md:text-5xl font-bold text-teal-800 mb-4 tracking-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 font-light">
                {slides[currentSlide].subtitle}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Progress Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
