import { Send, Phone } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                У вас резкая боль внизу спины, в шее, между лопатками, в пояснице?
              </h3>
              <p className="text-lg mb-8 text-slate-400">
                Напишите нам и мы сможем вам помочь. Не терпите боль, вернитесь к полноценной жизни уже сегодня.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://t.me/yourtelegram" 
                  target="_blank" 
                  className="flex items-center justify-center gap-3 bg-teal-600 hover:bg-teal-500 text-white font-bold py-3 px-8 rounded-full transition-colors"
                >
                  <Send size={20} />
                  Написать в Telegram
                </a>
                <a 
                  href="tel:+79990000000" 
                  className="flex items-center justify-center gap-3 border border-slate-700 hover:border-slate-500 hover:text-white font-bold py-3 px-8 rounded-full transition-colors"
                >
                  <Phone size={20} />
                  +7 (999) 000-00-00
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Массаж" 
                className="rounded-xl w-full h-48 object-cover opacity-80 hover:opacity-100 transition-opacity"
              />
              <img 
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Процедура" 
                className="rounded-xl w-full h-48 object-cover opacity-80 hover:opacity-100 transition-opacity translate-y-4"
              />
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Центр Миопрессуры. Все права защищены.</p>
            <p className="mt-2 md:mt-0">Калининград</p>
          </div>

        </div>
      </SectionWrapper>
    </footer>
  );
};
