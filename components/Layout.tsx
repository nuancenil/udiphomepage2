import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data';
import { Globe, Menu, X, Linkedin, Mail, Mic } from 'lucide-react';
import { LogoHorizontal, LogoVertical, LogoMobileHeader } from './BrandLogo';
import { BrandCurveLine } from './BrandGraphics';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { lang, setLang } = useLanguage();
  const t = content[lang].nav;
  const f = content[lang].footer;
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Close mobile menu when navigating
  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleLang = () => {
    setLang(lang === 'zh' ? 'en' : 'zh');
  };

  const navLinks = [
    { to: '/', label: t.home, type: 'internal' },
    { to: '/services', label: t.services, type: 'internal' },
    { to: '/ptaxial', label: t.ptaxial, type: 'internal' },
    { to: '/blog', label: t.blog, type: 'internal' },
    { to: '/about', label: t.about, type: 'internal' },
    { to: '/contact', label: t.contact, type: 'internal' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-light text-brand-dark transition-colors duration-500">
      
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-brand-light/95 backdrop-blur-sm border-b border-brand-warm/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-24">
            
            <div className="flex-shrink-0 flex items-center">
              <NavLink to="/" className="group hover:opacity-80 transition-opacity">
                <LogoHorizontal lang={lang} theme="light" />
              </NavLink>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
              {navLinks.map((link) => {
                if (link.type === 'external') {
                  return (
                    <a
                      key={link.to}
                      href={link.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] tracking-widest uppercase transition-all duration-300 relative group py-2 font-medium text-brand-dark hover:text-brand-orange hover:scale-105"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-orange transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
                    </a>
                  );
                }
                return (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `text-[13px] tracking-widest uppercase transition-all duration-300 relative group py-2 font-medium hover:scale-105 ${
                        isActive 
                          ? 'text-brand-orange' 
                          : 'text-brand-dark hover:text-brand-orange'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.label}
                        <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-brand-orange transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                      </>
                    )}
                  </NavLink>
                )
              })}
              
              <button
                onClick={toggleLang}
                className="flex items-center space-x-1 px-4 py-1.5 ml-4 rounded-full border border-brand-warm/50 hover:border-brand-orange text-xs font-bold text-brand-warm hover:text-brand-orange transition-all hover:scale-105"
              >
                <Globe size={14} />
                <span>{lang === 'zh' ? 'EN' : '中'}</span>
              </button>
            </div>

            {/* Mobile Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="text-brand-dark hover:text-brand-orange focus:outline-none transition-colors p-2"
                aria-label="Open Menu"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[100] bg-brand-light flex flex-col animate-fade-in">
          <div className="flex justify-between items-center p-6 border-b border-brand-warm/10">
            <LogoMobileHeader lang={lang} theme="light" />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-brand-dark hover:text-brand-orange focus:outline-none p-2"
              aria-label="Close Menu"
            >
              <X size={32} />
            </button>
          </div>

          <div className="px-8 py-8 space-y-4 flex-1 overflow-y-auto">
            {navLinks.map((link) => {
              const baseStyles = "block text-2xl font-serif font-bold transition-colors py-4";
              if (link.type === 'external') {
                return (
                  <a
                    key={link.to}
                    href={link.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${baseStyles} text-brand-dark hover:text-brand-orange border-b border-brand-warm/5`}
                  >
                    {link.label}
                  </a>
                );
              }
              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `${baseStyles} border-b border-brand-warm/5 ${
                      isActive 
                        ? 'text-brand-orange' 
                        : 'text-brand-dark hover:text-brand-orange'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )
            })}
            
            <div className="pt-10">
               <button
                onClick={() => {
                  toggleLang();
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-3 text-lg text-brand-dark font-medium hover:text-brand-orange bg-brand-primary/20 px-6 py-4 rounded-xl transition-all"
              >
                <Globe size={20} className="text-brand-orange" />
                {lang === 'zh' ? 'Switch to English' : '切換至中文'}
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-brand-light pt-24 pb-12 relative overflow-hidden">
        
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-10">
           <BrandCurveLine className="w-full h-full object-cover translate-x-[10%]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 relative z-10">
          <div className="md:col-span-1">
            <div className="mb-10 flex justify-center md:justify-start">
              <LogoVertical lang={lang} theme="dark" />
            </div>
            <p className="text-brand-warm text-sm leading-relaxed font-light md:pl-2 text-center md:text-left max-w-xs mx-auto md:mx-0">
              {f.slogan}
            </p>
          </div>
          
          <div className="text-center md:text-left">
            <h4 className="font-sans font-bold mb-8 text-brand-primary text-[11px] uppercase tracking-[0.25em]">
              {lang === 'zh' ? '專業服務' : 'Services'}
            </h4>
            <ul className="space-y-4 text-[14px] text-brand-light/60 font-light">
              <li><NavLink to="/services" className="hover:text-brand-white transition-colors">Patent Strategy</NavLink></li>
              <li><NavLink to="/services" className="hover:text-brand-white transition-colors">Trademark</NavLink></li>
              <li><NavLink to="/ptaxial" className="hover:text-brand-white transition-colors">PTAxial® Tool</NavLink></li>
              <li><NavLink to="/decision-lab" className="hover:text-brand-white transition-colors">IP Decision Lab™</NavLink></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-sans font-bold mb-8 text-brand-primary text-[11px] uppercase tracking-[0.25em]">
              {content[lang].nav.contact}
            </h4>
            <div className="space-y-5">
              <a href="mailto:genius@eudaimonia-ip.com" className="text-brand-light/60 hover:text-brand-white transition-colors text-[14px] flex items-center justify-center md:justify-start gap-3 group">
                <Mail size={16} className="text-brand-orange" /> 
                genius@eudaimonia-ip.com
              </a>
              <div className="text-brand-light/60 text-[14px] flex items-center justify-center md:justify-start gap-3">
                <div className="w-4 flex justify-center"><div className="w-1 h-1 bg-brand-orange rounded-full"></div></div>
                Taipei, Taiwan
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-sans font-bold mb-8 text-brand-primary text-[11px] uppercase tracking-[0.25em]">
              {f.social}
            </h4>
            <div className="flex flex-col space-y-4">
              <a href="https://www.linkedin.com/company/eudaimonia-ip/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-3 text-brand-light/60 hover:text-brand-white transition-colors text-[14px] group">
                <Linkedin size={18} className="text-brand-orange" /> {f.linkedinCompany}
              </a>
              <a href="https://www.linkedin.com/showcase/eudaimonia-ip-consulting-showcase/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-3 text-brand-light/60 hover:text-brand-white transition-colors text-[14px] group">
                <Linkedin size={18} className="text-brand-orange" /> {f.linkedinShowcase}
              </a>
              <a href="https://podcasts.apple.com/tw/podcast/wisdom-ip-strategy/id1862406264" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-3 text-brand-light/60 hover:text-brand-white transition-colors text-[14px] group">
                <Mic size={18} className="text-brand-orange" /> Podcast Channel
              </a>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-24 pt-8 border-t border-brand-warm/10 flex flex-col md:flex-row justify-between items-center text-[11px] text-brand-warm/60 font-light tracking-widest uppercase">
          <p>© {new Date().getFullYear()} Eudaimonia IP. All rights reserved.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <NavLink to="/privacy-policy" className="cursor-pointer hover:text-brand-light transition-colors">
              {lang === 'zh' ? '隱私權政策' : 'Privacy Policy'}
            </NavLink>
            <NavLink to="/terms-of-service" className="cursor-pointer hover:text-brand-light transition-colors">
              {lang === 'zh' ? '服務條款' : 'Terms of Service'}
            </NavLink>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;