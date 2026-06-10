import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data';
import { LineChart, Table, Grid } from 'lucide-react';

const PTAxial: React.FC = () => {
  const { lang } = useLanguage();
  const t = content[lang].ptaxial;

  const icons = [LineChart, Table, Grid];

  return (
    <div className="animate-fade-in bg-brand-light">
      {/* Header Section */}
      <div className="bg-brand-dark text-brand-light py-24 relative overflow-hidden">
        <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 text-brand-secondary text-xs font-bold tracking-[0.2em] mb-8 uppercase">
            Strategic Tool
          </span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-white">{t.title}</h1>
          <p className="text-2xl text-brand-warm font-light mb-10">{t.subtitle}</p>
          <a href="https://ptaxial.eudaimonia-ip.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-brand-primary text-brand-dark px-10 py-4 rounded-full hover:bg-white hover:text-brand-primary transition-all font-bold shadow-lg shadow-black/20">
            Launch Tool
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="prose prose-lg mx-auto text-brand-dark/70 mb-20 text-center leading-relaxed">
          {t.desc.map((p, i) => (
            <p key={i} className="mb-4">{p}</p>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {t.features.map((feature, i) => {
            const Icon = icons[i] || Grid;
            return (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 mx-auto bg-white rounded-2xl flex items-center justify-center text-brand-dark mb-8 shadow-sm border border-brand-warm/10 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={36} strokeWidth={1.5} className="text-brand-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold text-brand-dark mb-4">{feature.title}</h3>
                <p className="text-brand-warm text-sm leading-relaxed px-4">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PTAxial;