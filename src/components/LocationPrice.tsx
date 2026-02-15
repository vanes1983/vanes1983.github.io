import { MapPin, Clock } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';

export const LocationPrice = () => {
  return (
    <section id="contacts" className="py-24 bg-teal-50/50">
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Контакты и цены</h2>
            <p className="mt-4 text-xl text-slate-600">Мы ждем вас в нашем уютном кабинете</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            
            {/* Photos */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img 
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Кабинет 1" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow translate-y-8">
                  <img 
                    src="https://images.unsplash.com/photo-1519824145371-296894a0daa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Кабинет 2" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-teal-100 space-y-8">
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-teal-100 rounded-full text-teal-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Адрес</h3>
                  <p className="text-slate-600 text-lg">г. Калининград, ул. Ленина, д. 1, каб. 101</p>
                  <a href="https://yandex.ru/maps" target="_blank" className="text-teal-500 hover:text-teal-600 text-sm mt-2 inline-block">
                    Показать на карте
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-teal-100 rounded-full text-teal-600">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Стоимость</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-teal-600">2500 ₽</span>
                    <span className="text-slate-500">/ 1 час</span>
                  </div>
                  <p className="text-slate-500 text-sm mt-2">
                    В стоимость входит консультация и полный сеанс миопрессуры.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <a 
                  href="https://t.me/yourtelegram" 
                  className="block w-full text-center bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-teal-200 transform hover:-translate-y-1"
                >
                  Записаться на сеанс
                </a>
              </div>

            </div>

          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};
