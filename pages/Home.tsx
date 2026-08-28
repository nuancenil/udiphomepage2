import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { content, posts } from '../data';
import { ArrowRight, Cpu, ShieldCheck, Terminal, ChevronRight, Layout as LayoutIcon, BarChart3, Binary, ScanSearch, AlertTriangle, GitBranch } from 'lucide-react';
import GeometricPattern from '../components/GeometricPattern';
import { BrandCurveLine, TechGrid, SeedBackdrop } from '../components/BrandGraphics';

const Home: React.FC = () => {
  const { lang } = useLanguage();
  const t = content[lang].home;
  const t_pt = content[lang].ptaxial;
  const t_dl = content[lang].decisionLab;
  const recentPosts = posts.slice(0, 3);

  // Hero tracks. Rotates on its own; pauses while the pointer is over the hero,
  // and takes a short breather after a manual pick before resuming.
  const slides = t.heroSlides;
  const [slide, setSlide] = React.useState(0);
  const [hover, setHover] = React.useState(false);
  const [snooze, setSnooze] = React.useState(false);
  const snoozeRef = React.useRef<number | undefined>(undefined);
  const active = slides[slide];
  const paused = hover || snooze;

  const pick = (i: number) => {
    setSlide(i);
    setSnooze(true);
    window.clearTimeout(snoozeRef.current);
    snoozeRef.current = window.setTimeout(() => setSnooze(false), 15000);
  };

  React.useEffect(() => () => window.clearTimeout(snoozeRef.current), []);

  React.useEffect(() => {
    console.log('[Carousel] Effect running. paused:', paused, 'slides.length:', slides.length);
    if (paused || slides.length < 2) {
      console.log('[Carousel] Skipping: paused or slides.length < 2');
      return;
    }
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      console.log('[Carousel] Skipping: prefers-reduced-motion is enabled');
      return;
    }
    console.log('[Carousel] Starting 7000ms interval rotation');
    const id = window.setInterval(
      () => {
        console.log('[Carousel] Rotating to next slide');
        setSlide((i) => (i + 1) % slides.length);
      },
      7000
    );
    return () => window.clearInterval(id);
  }, [paused, slides.length]);

  return (
    <div className="animate-fade-in bg-brand-light">
      
      {/* 1. HERO - two positioning tracks, manually switchable */}
      <section
        className="relative min-h-[95vh] flex items-center overflow-hidden"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="absolute inset-0 z-0">
          <SeedBackdrop
            className="-right-40 top-1/2 -translate-y-1/2 w-[620px] h-[700px]"
            color="rgba(160,157,149,0.07)"
            rotate={-10}
          />
          <BrandCurveLine className="absolute inset-0 w-full h-full opacity-40" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-9">

              {/* Track switcher — both tracks always legible, no hidden second slide */}
              <div
                role="tablist"
                aria-label={lang === 'zh' ? '主軸切換' : 'Positioning tracks'}
                className="flex flex-wrap items-center gap-2 mb-10"
              >
                {slides.map((s, i) => (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={i === slide}
                    onClick={() => pick(i)}
                    className={`px-4 py-1.5 rounded-full border text-[10px] font-mono tracking-[0.2em] uppercase transition-colors duration-500 ${
                      i === slide
                        ? 'border-brand-dark/25 bg-white text-brand-dark shadow-sm'
                        : 'border-brand-dark/10 bg-white/40 text-brand-dark/45 hover:text-brand-dark/75'
                    }`}
                  >
                    {s.tag}
                  </button>
                ))}
              </div>

              <div key={slide} className="animate-fade-in">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-serif font-medium text-brand-dark mb-10 leading-[1.16] tracking-[0.02em] whitespace-pre-line max-w-[20ch]">
                  {active.title}
                </h1>

                <p className="text-xl md:text-2xl text-brand-warm font-light max-w-3xl mb-12 leading-relaxed">
                  {active.subtitle}
                  <span className="block text-lg md:text-xl mt-6 pt-6 border-t border-brand-warm/25 text-brand-dark/70 font-sans font-light leading-relaxed">
                    {active.desc}
                  </span>
                </p>

                <div className="flex flex-wrap gap-6">
                  <Link to={active.ctaTo} className="group flex items-center gap-6 px-12 py-6 bg-brand-dark text-white rounded-full hover:bg-brand-orange transition-colors duration-500 shadow-xl">
                    <span className="text-[13px] tracking-[0.2em] uppercase font-mono">{active.ctaLabel}</span>
                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-500" />
                  </Link>
                  <Link to={active.altTo} className="group flex items-center gap-4 px-10 py-6 text-brand-dark border border-brand-dark/10 rounded-full hover:bg-white transition-colors duration-500 tracking-[0.2em] uppercase text-xs">
                    {active.altLabel}
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 1.5. CASE NOTES - evidence, shown before claims */}
      <section className="py-28 bg-brand-dark text-white relative overflow-hidden border-b border-white/5">
        <SeedBackdrop className="-right-32 -top-24 w-[540px] h-[600px]" rotate={-12} />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

          <div className="max-w-3xl mb-16">
            <span className="block text-[10px] font-mono tracking-[0.28em] uppercase text-brand-primary mb-8">
              {t.caseNotes.eyebrow}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6 leading-tight text-white tracking-[0.04em]">
              {t.caseNotes.title}
            </h2>
            <p className="text-brand-light/55 leading-relaxed text-lg font-light">
              {t.caseNotes.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {t.caseNotes.items.map((c, i) => (
              <Link
                key={i}
                to={`/blog/${c.postId}`}
                className="group bg-white/[0.04] border border-white/10 rounded-lg p-10 hover:bg-white/[0.07] hover:border-white/25 transition-colors duration-500 flex flex-col"
              >
                <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-brand-primary mb-6">
                  {c.tag}
                </span>
                <h3 className="text-2xl font-serif font-medium text-white mb-8 leading-snug tracking-[0.03em]">
                  {c.title}
                </h3>

                <div className="flex-grow">
                  <p className="text-brand-light/55 leading-relaxed font-light text-[15px]">
                    {c.situation}
                  </p>
                  <p className="text-white/90 leading-relaxed font-light mt-5 pt-5 border-t border-white/10">
                    {c.reading}
                  </p>
                </div>

                <span className="mt-10 inline-flex items-center gap-3 text-[11px] font-mono tracking-[0.2em] uppercase text-white/50 group-hover:text-brand-orange transition-colors duration-500">
                  {t.caseNotes.readMore}
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform duration-500" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <Link to="/blog" className="inline-flex items-center gap-3 text-white/40 hover:text-white/70 transition-colors text-[11px] font-mono tracking-[0.2em] uppercase">
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