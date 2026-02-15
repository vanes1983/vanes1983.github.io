import { SectionWrapper } from './SectionWrapper';

interface InfoSectionProps {
  title: string;
  children: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
  id?: string;
}

export const InfoSection = ({ title, children, imageSrc, imageAlt, reversed = false, id = '' }: InfoSectionProps) => {
  return (
    <section id={id} className="py-20 bg-white">
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex flex-col md:flex-row items-center gap-12 ${reversed ? 'md:flex-row-reverse' : ''}`}>
            
            {/* Image */}
            <div className="w-full md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video md:aspect-square">
                <img 
                  src={imageSrc} 
                  alt={imageAlt} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 border-l-4 border-teal-500 pl-4">
                {title}
              </h2>
              <div className="text-lg text-slate-600 leading-relaxed space-y-4">
                {children}
              </div>
            </div>

          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};
