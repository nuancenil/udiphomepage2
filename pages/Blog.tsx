import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { posts, content } from '../data';
import { Search, Mic, ArrowRight } from 'lucide-react';
import GeometricPattern from '../components/GeometricPattern';

const Blog: React.FC = () => {
  const { lang } = useLanguage();
  const [filter, setFilter] = useState('');

  const filteredPosts = posts.filter(post => 
    post.title[lang].toLowerCase().includes(filter.toLowerCase()) || 
    post.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()))
  );

  return (
    <div className="animate-fade-in py-24 bg-brand-light min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        {/* Header with Search */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-brand-warm/20 pb-8">
          <div>
            <span className="text-brand-primary text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                Journal
            </span>
            <h1 className="text-4xl font-serif font-medium text-brand-dark">{content[lang].nav.blog}</h1>
          </div>
          <div className="relative w-full md:w-64 mt-6 md:mt-0">
            <input 
              type="text" 
              placeholder="Search..." 
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full pl-0 pr-8 py-2 border-b border-brand-warm/30 focus:outline-none focus:border-brand-primary bg-transparent placeholder-brand-warm/50 text-brand-dark transition-colors font-mono text-sm"
            />
            <Search className="absolute right-0 top-2.5 text-brand-warm" size={18} />
          </div>
        </div>

        {/* Podcast Promo Card */}
        <div className="mb-16 bg-brand-dark rounded-xl p-8 md:p-10 relative overflow-hidden group shadow-lg border border-white/10">
           {/* Background Pattern as Cover Art Simulation */}
           <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
              <GeometricPattern seed="podcast-blog" className="w-full h-full" />
           </div>
           <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-orange/30 transition-colors duration-700"></div>
           
           <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                 {/* Cover Art Thumbnail Simulation */}
                 <div className="w-28 h-28 rounded-lg overflow-hidden shadow-2xl border border-white/20 flex-shrink-0 hidden md:flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300 rotate-3 hover:rotate-0 transition-transform duration-500 relative">
                    <div className="absolute inset-0 opacity-40">
                       <GeometricPattern seed="podcast-thumb" className="w-full h-full" />
                    </div>
                    <Mic size={32} className="text-brand-dark relative z-10" />
                 </div>
                 
                 <div>
                    <div className="flex items-center gap-3 mb-3">
                       <span className="text-brand-orange text-[10px] font-mono font-bold tracking-[0.2em] uppercase bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/20">Podcast Channel</span>
                    </div>
                    <h2 className="text-3xl font-serif text-white mb-2">Wisdom & IP Strategy</h2>
                    <p className="text-brand-warm/60 font-mono text-[10px] tracking-widest uppercase mb-4">
                       By Eudaimonia IP
                    </p>
                    <p className="text-brand-light/80 font-light max-w-md leading-relaxed text-sm">
                      {lang === 'zh' ? '用聽的，掌握最新的智財策略與產業洞見。' : 'Listen to the latest IP strategies and industry insights on the go.'}
                    </p>
                 </div>
              </div>
              
              <a href="https://podcasts.apple.com/tw/podcast/wisdom-ip-strategy/id1862406264" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 flex items-center gap-3 bg-white text-brand-dark px-8 py-4 rounded-full font-bold text-xs tracking-widest uppercase hover:bg-brand-orange hover:text-white transition-all shadow-xl hover:-translate-y-1 group">
                 {lang === 'zh' ? '前往收聽' : 'Listen Now'} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
           </div>
        </div>

        {/* Blog Posts List */}
        <div className="space-y-16">
          {filteredPosts.map(post => (
            <article key={post.id} className="group flex flex-col md:flex-row gap-10 items-start">
              <div className="md:w-5/12 w-full aspect-[4/3] bg-white overflow-hidden rounded-lg shadow-sm border border-brand-warm/10 relative">
                 <GeometricPattern seed={post.id} className="w-full h-full opacity-70 group-hover:scale-105 transition-transform duration-1000" />
              </div>
              <div className="md:w-7/12 flex flex-col h-full py-2">
                <div className="flex gap-3 mb-4">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold text-brand-primary uppercase tracking-widest border border-brand-primary/20 px-2 py-1 rounded-full font-mono">{tag}</span>
                  ))}
                </div>
                <h2 className="text-2xl font-serif font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors leading-tight">
                  <Link to={`/blog/${post.id}`}>{post.title[lang]}</Link>
                </h2>
                <p className="text-brand-dark/70 mb-3 line-clamp-3 font-light leading-relaxed">
                  {post.excerpt[lang]}
                </p>
                
                {/* distinct Read More link appended after excerpt */}
                <Link 
                  to={`/blog/${post.id}`} 
                  className="inline-block mb-6 text-brand-primary font-bold text-sm tracking-wide border-b-2 border-brand-primary/30 hover:border-brand-primary transition-all pb-0.5 font-mono"
                >
                  Read More...
                </Link>

                <div className="flex justify-between items-center mt-auto pt-4 border-t border-brand-warm/10 w-full">
                  <span className="text-xs text-brand-warm font-mono">{post.date}</span>
                </div>
              </div>
            </article>
          ))}
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-20 text-brand-warm font-light">
              No articles found matching your criteria.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;