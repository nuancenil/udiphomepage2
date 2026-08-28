import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data';
import { ArrowRight, Clock, Users } from 'lucide-react';
import { TechGrid } from '../components/BrandGraphics';

const Training: React.FC = () => {
  const { lang } = useLanguage();
  const t = content[lang].training;

  return (
    <div className="animate-fade-in bg-brand-light">

      {/* Header */}
      <div className="bg-brand-dark text-brand-light py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <TechGrid />
        </div>
        <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 text-brand-secondary text-xs font-bold tracking-[0.2em] mb-8 uppercase">
            Training
          </span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-white">{t.title}</h1>
          <p className="text-xl md:text-2xl text-brand-warm font-light">{t.subtitle}</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-24">

        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-6">
          {t.intro.map((p, i) => (
            <p key={i} className="text-lg text-brand-dark/70 leading-relaxed mb-4">{p}</p>
          ))}
        </div>
        <p className="text-center text-sm font-mono tracking-wide text-brand-orange mb-20">
          {t.scheduleNote}
        </p>

        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-[11px] font-mono font-bold tracking-[0.25em] uppercase text-brand-warm whitespace-nowrap">
            {t.coursesLabel}
          </span>
          <span className="h-[1px] flex-grow bg-brand-warm/20"></span>
        </div>

        {/* Courses */}
        <div className="space-y-8">
          {t.courses.map((c, i) => (
            <article
              key={i}
              className="bg-white border border-brand-warm/10 rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <h2 className="text-2xl md:text-[28px] font-serif font-bold text-brand-dark mb-5 leading-snug">
                {c.title}
              </h2>

              <div className="flex flex-wrap gap-x-6 gap-y-2 mb-7 pb-7 border-b border-brand-warm/10">
                <span className="inline-flex items-center gap-2 text-xs font-mono tracking-wide uppercase text-brand-primary">
                  <Clock size={14} strokeWidth={2} />
                  {c.format}
                </span>
                <span className="inline-flex items-center gap-2 text-xs font-mono tracking-wide text-brand-warm">
                  <Users size={14} strokeWidth={2} />
                  {c.audience}
                </span>
              </div>

              {c.body.map((p, j) => (
                <p key={j} className="text-brand-dark/75 leading-relaxed mb-4">{p}</p>
              ))}

              <p className="text-sm text-brand-warm italic border-l-2 border-brand-orange/40 pl-5 mt-6">
                {c.fit}
              </p>
            </article>
          ))}
        </div>

        {/* Teaching record */}
        <div className="mt-20 pt-12 border-t border-brand-warm/20 text-center">
          <h3 className="text-[11px] font-mono font-bold tracking-[0.25em] uppercase text-brand-warm mb-4">
            {t.recordTitle}
          </h3>
          <p className="text-xl font-serif text-brand-dark">{t.recordDesc}</p>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-brand-dark rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <TechGrid />
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl font-serif font-bold text-white mb-4">{t.ctaTitle}</h3>
            <p className="text-brand-light/70 leading-relaxed max-w-xl mx-auto mb-10">{t.ctaDesc}</p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-4 px-10 py-5 bg-brand-orange text-white rounded-full hover:bg-white hover:text-brand-dark transition-all duration-500 shadow-lg"
            >
              <span className="text-[13px] font-bold tracking-widest uppercase font-mono">{t.ctaButton}</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Training;
