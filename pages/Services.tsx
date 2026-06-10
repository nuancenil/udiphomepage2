import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data';

const Services: React.FC = () => {
  const { lang } = useLanguage();
  const t = content[lang].services;

  return (
    <div className="animate-fade-in py-24 bg-brand-light min-h-screen">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24">
          <span className="text-brand-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
             Solutions
          </span>
          <h1 className="text-5xl font-serif font-medium text-brand-dark mb-6">{t.title}</h1>
          <p className="text-xl text-brand-warm max-w-2xl mx-auto font-light italic">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {t.items.map((service, index) => (
            <div key={index} className="group relative bg-white p-12 rounded-[2rem] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border border-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] overflow-hidden">
              
              {/* Decorative Brand Pebble Background */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br opacity-[0.05] group-hover:opacity-10 transition-opacity duration-700 rounded-[40%_60%_70%_30%] blur-3xl -mr-10 -mt-10 pointer-events-none ${index % 2 === 0 ? 'from-brand-primary to-transparent' : 'from-brand-secondary to-transparent'}`}></div>

              <div className="relative z-10">
                {/* Number */}
                <div className="text-5xl font-serif text-brand-light font-bold mb-8 group-hover:text-brand-warm/30 transition-colors select-none">
                  0{index + 1}
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-brand-dark mb-6 group-hover:text-brand-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-brand-dark/70 leading-relaxed mb-8 font-light text-lg">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] font-bold tracking-widest text-brand-warm uppercase border border-brand-warm/20 rounded-full px-3 py-1">Growth</span>
                  <span className="text-[10px] font-bold tracking-widest text-brand-warm uppercase border border-brand-warm/20 rounded-full px-3 py-1">Defense</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;