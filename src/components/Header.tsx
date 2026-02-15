import { Send, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo / Icon */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
              </svg>
            </div>
            <span className="font-semibold text-lg text-slate-800 tracking-wide">МИОПРЕССУРА</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-slate-600 hover:text-teal-600 font-medium transition-colors"
            >
              О миопрессуре
            </button>
            <button 
              onClick={() => scrollToSection('contacts')} 
              className="text-slate-600 hover:text-teal-600 font-medium transition-colors"
            >
              Контакты и цены
            </button>
            <a 
              href="https://t.me/yourtelegram" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-teal-600 border border-teal-200 bg-teal-50 hover:bg-teal-100 px-4 py-2 rounded-full transition-colors"
            >
              <Send size={18} />
              <span>Telegram</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-left text-slate-600 hover:text-teal-600 font-medium py-2"
              >
                О миопрессуре
              </button>
              <button 
                onClick={() => scrollToSection('contacts')} 
                className="text-left text-slate-600 hover:text-teal-600 font-medium py-2"
              >
                Контакты и цены
              </button>
              <a 
                href="https://t.me/yourtelegram" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-teal-600 font-medium py-2"
              >
                <Send size={18} />
                <span>Написать в Telegram</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
