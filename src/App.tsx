import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InfoSection } from './components/InfoSection';
import { Details } from './components/Details';
import { LocationPrice } from './components/LocationPrice';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      <Header />
      
      <main>
        <Hero />
        
        <InfoSection 
          id="about"
          title="Что такое миопрессура?"
          imageSrc="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          imageAlt="Массаж спины"
        >
          <p>
            Миопрессура — это не просто массаж. Это специализированная методика лечения хронической боли, основанная на глубоком воздействии на мышцы. Мы не просто снимаем симптомы, мы работаем с первопричиной — триггерными точками.
          </p>
          <p>
            Триггерные точки — это участки локального мышечного спазма, которые могут вызывать боль не только в месте возникновения, но и отдавать в другие части тела. Миопрессура позволяет механически разбить эти уплотнения, восстановить нормальную длину мышцы и кровообращение.
          </p>
        </InfoSection>

        <InfoSection 
          title="Научная база"
          imageSrc="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          imageAlt="Анатомия"
          reversed={true}
        >
          <p>
            Наш метод опирается на фундаментальные исследования докторов Джанет Трэвелл и Дэвида Симонса. Их труд "Миофасциальная боль и дисфункция" является настольной книгой для специалистов по лечению боли во всем мире.
          </p>
          <p>
            Мы используем научно доказанные карты отраженной боли. Это значит, что если у вас болит голова, причина может быть в мышцах шеи. Если болит колено — проблема может быть в бедре. Мы знаем эти взаимосвязи и лечим именно источник боли.
          </p>
        </InfoSection>

        <LocationPrice />
        
        <Details />
      </main>

      <Footer />
    </div>
  );
}
