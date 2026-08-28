import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { content, posts } from '../data';
import { ArrowRight, Cpu, ShieldCheck, Terminal, ChevronRight, Layout as LayoutIcon, BarChart3, Binary, ScanSearch, AlertTriangle, GitBranch } from 'lucide-react';
import GeometricPattern from '../components/GeometricPattern';
import { BrandCurveLine, TechGrid } from '../components/BrandGraphics';

const Home: React.FC = () => {
  const { lang } = useLanguage();
  const t = content[lang].home;
  const t_pt = content[lang].ptaxial;
  const t_dl = content[lang].decisionLab;
  const recentPosts = posts.slice(0, 3);

  return (
    <div className="animate-fade-in bg-brand-light">
      
      {/* 1. HERO - High Impact Landing */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <TechGrid className="opacity-25" />
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[150px] animate-pulse"></div>
          <BrandCurveLine className="absolute inset-0 w-full h-full opacity-40" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-9">
              <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 border border-brand-dark/10 rounded-full bg-white/60 backdrop-blur-sm shadow-sm">
                 <div className="w-1.5 h-1.5 bg-brand-orange rounded-full animate-pulse"></div>
                 <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-brand-dark/60">
                   {t.heroTag}
                 </span>
              </div>
              
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[100px] font-serif font-medium text-brand-dark mb-10 leading-[1] tracking-tight whitespace-pre-line">
                {t.heroTitle}
              </h1>
              
              <p className="text-xl md:text-2xl lg:text-3xl text-brand-warm font-light max-w-3xl mb-12 leading-relaxed">
                {t.heroSubtitle}
                <span className="block text-lg md:text-xl mt-6 text-brand-dark/70 font-sans border-l-2 border-brand-orange/40 pl-8 leading-relaxed italic">
                  {t.heroDesc}
                </span>
              </p>
              
              <div className="flex flex-wrap gap-6">
                <Link to="/contact" className="group flex items-center gap-6 px-12 py-6 bg-brand-dark text-white rounded-full hover:bg-brand-orange transition-all duration-500 shadow-2xl hover:-translate-y-1">
                  <span className="text-[14px] font-bold tracking-widest uppercase font-mono">{lang === 'zh' ? '預約檢測' : 'Book a Consultation'}</span>
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link to="/about" className="group flex items-center gap-4 px-10 py-6 text-brand-dark border border-brand-dark/10 rounded-full hover:bg-white transition-all font-bold tracking-widest uppercase text-xs">
                  {t.ctaButton}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1.5. CASE NOTES - evidence, shown before claims */}
      <section className="py-28 bg-brand-dark text-white relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-10">
          <TechGrid />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 border border-brand-orange/30 rounded-full bg-brand-orange/10">
              <span className="w-1.5 h-1.5 bg-brand-orange rounded-full animate-pulse"></span>
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-brand-orange">
                {t.caseNotes.eyebrow}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight text-white">
              {t.caseNotes.title}
            </h2>
            <p className="text-brand-light/60 leading-relaxed text-lg">
              {t.caseNotes.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {t.caseNotes.items.map((c, i) => (
              <Link
                key={i}
                to={`/blog/${c.postId}`}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 hover:bg-white/[0.07] hover:border-brand-orange/30 transition-all duration-500 flex flex-col"
              >
                <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-brand-primary mb-6">
                  {c.tag}
                </span>
                <h3 className="text-2xl font-serif font-bold text-white mb-8 leading-snug">
                  {c.title}
                </h3>

                <div className="space-y-6 flex-grow">
                  <p className="text-brand-light/70 leading-relaxed pl-5 border-l border-white/15">
                    {c.situation}
                  </p>
                  <p className="text-white/90 leading-relaxed pl-5 border-l-2 border-brand-orange">
                    {c.reading}
                  </p>
                </div>

                <span className="mt-10 inline-flex items-center gap-3 text-[11px] font-mono font-bold tracking-widest uppercase text-brand-orange">
                  {t.caseNotes.readMore}
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <Link to="/blog" className="inline-flex items-center gap-3 text-white/50 hover:text-brand-orange transition-colors text-xs font-mono tracking-widest uppercase">
              {t.caseNotes.allLink}
              <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </section>

      {/* 2. CORE SERVICES GRID */}
      <section className="py-32 bg-white relative z-10 border-y border-brand-warm/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20 text-center">
            <h2 className="text-sm font-mono font-bold tracking-[0.3em] uppercase text-brand-orange mb-4">Core Services</h2>
            <p className="text-4xl font-serif text-brand-dark">{t.sections.services}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content[lang].services.items.map((service, idx) => (
              <div key={idx} className="p-8 border border-brand-warm/10 rounded-2xl hover:bg-brand-light transition-all duration-300 group">
                <div className="w-12 h-12 bg-brand-dark text-white flex items-center justify-center rounded-xl mb-6 group-hover:bg-brand-orange transition-colors">
                  <Cpu size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif font-bold text-brand-dark mb-4">{service.title}</h3>
                <p className="text-brand-warm text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PTAxial® SHOWCASE - Integrated Visual Section */}
      <section className="py-32 bg-brand-light relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-[1px] bg-brand-primary"></div>
                <span className="text-brand-primary text-xs font-mono font-bold tracking-widest uppercase">Visual Intelligence</span>
              </div>
              <h2 className="text-5xl font-serif font-bold text-brand-dark mb-8">{t_pt.title}</h2>
              <p className="text-xl text-brand-warm font-light mb-10 leading-relaxed italic">{t_pt.subtitle}</p>
              
              <div className="space-y-8 mb-12">
                {t_pt.features.map((f, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="mt-1 w-10 h-10 bg-white shadow-sm rounded-lg flex items-center justify-center text-brand-primary flex-shrink-0">
                      {i === 0 ? <ScanSearch size={20} /> : i === 1 ? <AlertTriangle size={20} /> : <GitBranch size={20} />}
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark mb-1">{f.title}</h4>
                      <p className="text-brand-warm text-sm leading-relaxed">{f.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Link to="/ptaxial" className="inline-flex items-center gap-3 text-brand-dark font-bold tracking-widest uppercase text-xs border-b border-brand-dark/20 pb-1 hover:text-brand-orange hover:border-brand-orange transition-all group">
                Explore PTAxial® <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Visual Mockup/Graphic for PTAxial */}
            <div className="relative">
              <div className="aspect-square bg-white rounded-3xl shadow-2xl border border-brand-warm/10 p-8 overflow-hidden group">
                 <div className="flex flex-col h-full">
                   <div className="flex justify-between items-center mb-10 pb-4 border-b border-brand-light">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      <div className="text-[10px] font-mono text-brand-warm uppercase tracking-widest">Patent Timeline Interface</div>
                   </div>
                   <div className="flex-grow flex flex-col gap-6">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="h-10 w-full bg-brand-light rounded-md relative overflow-hidden">
                           <div 
                             className="absolute inset-y-0 bg-brand-primary opacity-40 rounded-md animate-pulse" 
                             style={{ left: `${20 + i * 10}%`, width: `${30 + (i % 3) * 15}%`, animationDelay: `${i * 0.2}s` }}
                           ></div>
                        </div>
                      ))}
                   </div>
                   <div className="mt-10 h-32 w-full bg-brand-dark/5 rounded-2xl flex items-center justify-center border-2 border-dashed border-brand-warm/20">
                      <span className="text-brand-warm/50 font-mono text-[10px] uppercase tracking-widest italic">Matrix.Analysis.Layer</span>
                   </div>
                 </div>
              </div>
              {/* Floating tech element */}
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-orange/10 rounded-full blur-3xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Decision Lab SHOWCASE - Dark Modern Section */}
      <section className="py-32 bg-brand-dark text-brand-light relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <TechGrid className="opacity-10 text-white" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
               <div className="aspect-video bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md p-8 flex flex-col justify-between overflow-hidden group">
                  <div className="flex items-center gap-4 mb-8">
                    <ShieldCheck className="text-brand-orange" size={40} />
                    <div className="h-0.5 flex-grow bg-white/10"></div>
                  </div>
                  <div className="space-y-4">
                     <div className="h-2 w-3/4 bg-brand-orange/40 rounded-full"></div>
                     <div className="h-2 w-1/2 bg-white/10 rounded-full"></div>
                     <div className="h-2 w-5/6 bg-white/5 rounded-full"></div>
                  </div>
                  <div className="mt-12 text-center">
                     <div className="inline-block px-6 py-3 border border-brand-orange/30 rounded-full text-brand-orange font-mono text-[10px] uppercase tracking-[0.3em]">
                        Scanning Risk Vectors...
                     </div>
                  </div>
               </div>
               <div className="absolute -top-12 -right-12 w-64 h-64 bg-brand-orange/20 rounded-full blur-[100px] pointer-events-none"></div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-[1px] bg-brand-orange"></div>
                <span className="text-brand-orange text-xs font-mono font-bold tracking-widest uppercase">AI Strategic Lab</span>
              </div>
              <h2 className="text-5xl font-serif font-bold text-white mb-8">{t_dl.title}</h2>
              <p className="text-xl text-brand-warm font-light mb-10 leading-relaxed italic">{t_dl.subtitle}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12">
                 {t_dl.features.slice(0, 2).map((f, i) => (
                    <div key={i}>
                       <h4 className="font-bold text-white mb-3 flex items-center gap-3">
                          <span className="w-1.5 h-1.5 bg-brand-orange rounded-full"></span>
                          {f.title}
                       </h4>
                       <p className="text-brand-warm text-sm leading-relaxed">{f.description}</p>
                    </div>
                 ))}
              </div>

              <Link to="/decision-lab" className="inline-flex items-center gap-4 bg-brand-orange text-brand-dark px-10 py-5 rounded-full font-bold tracking-widest uppercase text-xs hover:bg-white hover:text-brand-orange transition-all shadow-xl shadow-brand-orange/10">
                Launch {t_dl.title} <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. RECENT INSIGHTS */}
      <section className="py-32 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-brand-dark/10 pb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                 <Terminal size={16} className="text-brand-orange" />
                 <span className="text-brand-orange text-[11px] font-mono font-bold tracking-[0.3em] uppercase">/insights</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-medium text-brand-dark">{t.sections.insights}</h2>
            </div>
            <Link to="/blog" className="mt-8 md:mt-0 flex items-center text-brand-dark hover:text-brand-orange transition-colors text-[12px] font-bold tracking-widest uppercase group">
               View Journal <ChevronRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {recentPosts.map((post, idx) => (
              <Link key={post.id} to={`/blog/${post.id}`} className="group block">
                <div className="aspect-[4/3] bg-white overflow-hidden mb-8 border border-brand-dark/5 shadow-md group-hover:shadow-2xl transition-all duration-700 rounded-2xl">
                   <GeometricPattern seed={post.id} className="w-full h-full opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                </div>
                <div className="flex items-center gap-4 mb-5 text-[10px] font-mono font-bold text-brand-warm tracking-widest">
                  <span className="text-brand-orange">0{idx + 1}</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors leading-snug line-clamp-2">
                  {post.title[lang]}
                </h3>
                <p className="text-brand-dark/60 text-[15px] line-clamp-3 font-light leading-relaxed">
                  {post.excerpt[lang]}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* 6. CTA BOTTOM */}
      <section className="py-32 bg-white text-center">
         <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-serif text-brand-dark mb-10 leading-tight">
               {lang === 'zh' ? '別讓猶豫成為你最大的風險' : 'Ready to Optimize Your IP Portfolio?'}
            </h2>
            <Link to="/contact" className="inline-flex items-center gap-4 bg-brand-dark text-white px-12 py-6 rounded-full font-bold tracking-widest uppercase text-sm hover:bg-brand-orange transition-all duration-500 shadow-2xl">
               {lang === 'zh' ? '預約 15 分鐘檢測' : 'Contact Us Now'} <ArrowRight size={20} />
            </Link>
         </div>
      </section>
    </div>
  );
};

export default Home;