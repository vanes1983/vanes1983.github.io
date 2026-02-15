import { useEffect, useState, useRef } from 'react';

// Hook for scroll animation
function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

// Header Component
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#9cb8a9] to-[#7a9a8b] flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <span className="font-serif text-xl font-semibold text-[#4a5c52]">Миопрессура</span>
        </div>
        
        <nav className="flex items-center gap-8">
          <a href="#about" className="text-sm font-medium text-[#5a6a60] hover:text-[#4a5c52] transition-colors">
            О миопрессуре
          </a>
          <a href="#contacts" className="text-sm font-medium text-[#5a6a60] hover:text-[#4a5c52] transition-colors">
            Контакты и цены
          </a>
          <a 
            href="https://t.me/myopressure" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[#e8f4f0] rounded-full text-sm font-medium text-[#4a5c52] hover:bg-[#c5e0d8] transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.442-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.015 3.333-1.386 4.025-1.627 4.477-1.635.099-.002.321.023.465.141.121.1.154.234.169.328.015.093.034.306.019.472z"/>
            </svg>
            Telegram
          </a>
        </nav>
      </div>
    </header>
  );
}

// Hero Section with animated slides
function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const slides = [
    {
      title: 'Миопрессура',
      subtitle: 'Избавление от хронической боли без лекарств',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&q=80'
    },
    {
      title: 'Научный подход',
      subtitle: 'Метод, основанный на исследованиях триггерных точек',
      image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1920&q=80'
    },
    {
      title: 'Ваше здоровье',
      subtitle: 'Профессиональная помощь в уютной атмосфере',
      image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1920&q=80'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAnimating(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/50 to-transparent" />
        </div>
      ))}
      
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div
            className={`transition-all duration-700 ${
              isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h1 className="font-serif text-6xl md:text-7xl font-semibold text-[#3a4a40] mb-4">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl text-[#5a6a60] font-light max-w-xl">
              {slides[currentSlide].subtitle}
            </p>
            <a
              href="#about"
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-[#9cb8a9] text-white rounded-full font-medium hover:bg-[#7a9a8b] transition-colors"
            >
              Узнать больше
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? 'bg-[#9cb8a9] w-8' : 'bg-[#c5e0d8]'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

// About Myopressure Section
function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 bg-white">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 fade-in-section ${isVisible ? 'visible' : ''}`}
      >
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm uppercase tracking-wider text-[#9cb8a9] font-medium">О методе</span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#3a4a40] mt-4 mb-6">
              Что такое миопрессура?
            </h2>
            <p className="text-[#5a6a60] leading-relaxed mb-6">
              Миопрессура — это специализированный метод мануальной терапии, направленный на устранение 
              миофасциальных триггерных точек. Эти точки представляют собой локальные участки 
              мышечного напряжения, которые являются причиной хронических болей в спине, шее, 
              плечах и других частях тела.
            </p>
            <p className="text-[#5a6a60] leading-relaxed mb-6">
              Метод позволяет эффективно справляться с болевым синдромом без применения медикаментов, 
              воздействуя непосредственно на источник проблемы. Результат ощущается уже после первого сеанса.
            </p>
            <ul className="space-y-3">
              {['Устранение хронических болей', 'Восстановление подвижности', 'Улучшение осанки', 'Снятие мышечного напряжения'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#5a6a60]">
                  <svg className="w-5 h-5 text-[#9cb8a9]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=800&q=80"
              alt="Массаж"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#e8f4f0] rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

// Research Section
function ResearchSection() {
  const { ref, isVisible } = useScrollAnimation();

  const researchers = [
    {
      name: 'Джанет Тревелл',
      role: 'Пионер исследований триггерных точек',
      description: 'Автор фундаментального двухтомника о миофасциальных болях и дисфункциях',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80'
    },
    {
      name: 'Дэвид Саймонс',
      role: 'Соавтор исследований',
      description: 'Внёс огромный вклад в понимание механизмов триггерных точек',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&q=80'
    },
    {
      name: 'Современные исследования',
      role: 'Научное обоснование',
      description: 'Метод подтверждён многочисленными клиническими исследованиями по всему миру',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&q=80'
    }
  ];

  return (
    <section className="py-24 bg-[#faf9f7]">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 fade-in-section ${isVisible ? 'visible' : ''}`}
      >
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-[#9cb8a9] font-medium">Научная база</span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#3a4a40] mt-4">
            На чьи исследования мы опираемся
          </h2>
          <p className="text-[#5a6a60] mt-4 max-w-2xl mx-auto">
            Миопрессура основана на десятилетиях научных исследований в области 
            миофасциальных болевых синдромов
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {researchers.map((researcher, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <img
                src={researcher.image}
                alt={researcher.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-[#3a4a40]">{researcher.name}</h3>
                <p className="text-[#9cb8a9] text-sm font-medium mt-1">{researcher.role}</p>
                <p className="text-[#5a6a60] text-sm mt-3">{researcher.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Cabinet Section
function CabinetSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contacts" className="py-24 bg-white">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 fade-in-section ${isVisible ? 'visible' : ''}`}
      >
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-[#9cb8a9] font-medium">Наш кабинет</span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#3a4a40] mt-4">
            Уютная атмосфера для вашего комфорта
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80"
            alt="Кабинет миопрессуры"
            className="rounded-2xl shadow-lg w-full h-80 object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80"
            alt="Интерьер кабинета"
            className="rounded-2xl shadow-lg w-full h-80 object-cover"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-8 bg-[#e8f4f0] rounded-2xl">
            <svg className="w-10 h-10 text-[#9cb8a9] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <h3 className="font-serif text-xl font-semibold text-[#3a4a40] mb-2">Адрес</h3>
            <p className="text-[#5a6a60]">г. Калининград</p>
            <p className="text-[#5a6a60]">ул. Профессора Баранова, 34</p>
          </div>

          <div className="p-8 bg-[#e6eef5] rounded-2xl">
            <svg className="w-10 h-10 text-[#8fa8c4] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="font-serif text-xl font-semibold text-[#3a4a40] mb-2">Длительность</h3>
            <p className="text-[#5a6a60]">Сеанс 1 час</p>
            <p className="text-[#5a6a60]">По предварительной записи</p>
          </div>

          <div className="p-8 bg-[#f5f0e8] rounded-2xl">
            <svg className="w-10 h-10 text-[#c4a88f] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="font-serif text-xl font-semibold text-[#3a4a40] mb-2">Стоимость</h3>
            <p className="text-[#5a6a60] text-2xl font-semibold">3 000 ₽</p>
            <p className="text-[#5a6a60]">за 1 час</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// More Info Section
function MoreInfoSection() {
  const { ref, isVisible } = useScrollAnimation();

  const cards = [
    {
      title: 'О миопрессуре',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80',
      link: 'https://ru.wikipedia.org/wiki/Миофасциальный_болевой_синдром'
    },
    {
      title: 'Почему это помогает',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
      link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4508225/'
    },
    {
      title: 'Какие противопоказания',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80',
      link: 'https://www.mayoclinic.org/diseases-conditions/myofascial-pain-syndrome'
    }
  ];

  return (
    <section className="py-24 bg-[#faf9f7]">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 fade-in-section ${isVisible ? 'visible' : ''}`}
      >
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-[#9cb8a9] font-medium">Полезная информация</span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#3a4a40] mt-4">
            Подробнее о миопрессуре
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <a
              key={index}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3a4a40]/90 via-[#3a4a40]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-2xl font-semibold text-white flex items-center gap-2">
                  {card.title}
                  <svg className="w-5 h-5 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-[#3a4a40] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
            У вас резкая боль внизу спины, в шее,<br />между лопатками, в пояснице?
          </h2>
          <p className="text-[#c5e0d8] text-xl">
            Напишите нам и мы сможем вам помочь
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-xl font-semibold mb-4">Контакты</h3>
            <div className="space-y-3">
              <a 
                href="https://t.me/myopressure" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-3 text-[#c5e0d8] hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.442-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.015 3.333-1.386 4.025-1.627 4.477-1.635.099-.002.321.023.465.141.121.1.154.234.169.328.015.093.034.306.019.472z"/>
                </svg>
                @myopressure
              </a>
              <a 
                href="tel:+79001234567"
                className="flex items-center justify-center md:justify-start gap-3 text-[#c5e0d8] hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +7 (900) 123-45-67
              </a>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#9cb8a9] flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span className="font-serif text-2xl font-semibold">Миопрессура</span>
            </div>
            <p className="text-[#9cb8a9] text-sm">
              Профессиональная помощь при<br />миофасциальных болевых синдромах
            </p>
          </div>

          <div className="text-center md:text-right">
            <h3 className="font-serif text-xl font-semibold mb-4">Галерея</h3>
            <div className="flex justify-center md:justify-end gap-3">
              <img
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=200&q=80"
                alt="Фото 1"
                className="w-20 h-20 rounded-lg object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=200&q=80"
                alt="Фото 2"
                className="w-20 h-20 rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-[#4a5c52] pt-8 text-center text-[#9cb8a9] text-sm">
          <p>© 2024 Миопрессура. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}

// Main App Component
export function App() {
  return (
    <div className="min-h-screen bg-[#faf9f7]">
      <Header />
      <HeroSection />
      <AboutSection />
      <ResearchSection />
      <CabinetSection />
      <MoreInfoSection />
      <Footer />
    </div>
  );
}
