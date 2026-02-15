import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';

const details = [
  {
    id: 'about',
    title: 'О миопрессуре',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Узнайте больше о методе и его особенностях.',
    content: 'Миопрессура — это метод глубокого воздействия на мышцы, направленный на устранение триггерных точек. В отличие от обычного массажа, здесь работа идет с причиной боли, а не просто расслаблением. Это терапевтическая процедура, которая требует высокой квалификации специалиста.'
  },
  {
    id: 'why',
    title: 'Почему это помогает',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Механизм действия на организм.',
    content: 'Боль часто вызвана спазмированными участками мышц (триггерами), которые укорачивают мышцу и сдавливают нервные окончания. Миопрессура разрушает эти уплотнения, восстанавливая нормальное кровообращение и эластичность мышц, что приводит к исчезновению боли.'
  },
  {
    id: 'contraindications',
    title: 'Противопоказания',
    image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Когда процедуру делать нельзя.',
    content: 'К противопоказаниям относятся: острые воспалительные процессы, высокая температура, онкологические заболевания, тромбоз, кожные заболевания в зоне воздействия, беременность (с ограничениями).'
  }
];

export const Details = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <section className="py-24 bg-slate-50">
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Подробнее о миопрессуре</h2>
            <p className="mt-4 text-xl text-slate-600">Нажмите на карточку, чтобы узнать детали</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {details.map((item) => (
              <motion.div
                layoutId={`card-${item.id}`}
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer group"
                whileHover={{ y: -5 }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-teal-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600">{item.description}</p>
                  <div className="mt-4 flex items-center text-teal-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Подробнее <ChevronRight size={16} className="ml-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {selectedId && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                <motion.div
                  layoutId={`card-${selectedId}`}
                  className="bg-white w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button 
                    className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-slate-100 transition-colors z-10"
                    onClick={() => setSelectedId(null)}
                  >
                    <X size={24} />
                  </button>
                  
                  {details.find(d => d.id === selectedId) && (
                    <>
                      <div className="h-64 relative">
                        <img 
                          src={details.find(d => d.id === selectedId)!.image}
                          alt={details.find(d => d.id === selectedId)!.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <h3 className="absolute bottom-6 left-6 text-3xl font-bold text-white">
                          {details.find(d => d.id === selectedId)!.title}
                        </h3>
                      </div>
                      <div className="p-8">
                        <p className="text-lg text-slate-700 leading-relaxed">
                          {details.find(d => d.id === selectedId)!.content}
                        </p>
                        <button 
                          className="mt-8 px-6 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors font-medium"
                          onClick={() => setSelectedId(null)}
                        >
                          Закрыть
                        </button>
                      </div>
                    </>
                  )}
                </motion.div>
                <div className="absolute inset-0 -z-10" onClick={() => setSelectedId(null)} />
              </div>
            )}
          </AnimatePresence>
        </div>
      </SectionWrapper>
    </section>
  );
};
