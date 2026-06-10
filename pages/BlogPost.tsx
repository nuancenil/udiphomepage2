import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { posts } from '../data';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { lang } = useLanguage();
  const post = posts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col bg-brand-light">
        <h2 className="text-2xl font-serif text-brand-dark mb-4">Post not found</h2>
        <Link to="/blog" className="text-brand-primary hover:underline">Back to Blog</Link>
      </div>
    );
  }

  const renderContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      // Headers
      if (line.trim().startsWith('# ')) return <h1 key={index} className="text-3xl md:text-4xl font-serif font-bold mt-12 mb-6 text-brand-dark leading-tight">{line.replace('# ', '')}</h1>;
      if (line.trim().startsWith('## ')) return <h2 key={index} className="text-2xl md:text-3xl font-serif font-bold mt-10 mb-4 text-brand-dark/90 leading-snug">{line.replace('## ', '')}</h2>;
      if (line.trim().startsWith('### ')) return <h3 key={index} className="text-xl md:text-2xl font-serif font-bold mt-8 mb-3 text-brand-dark/80">{line.replace('### ', '')}</h3>;

      // Bullet Lists
      if (line.trim().startsWith('* ') || line.trim().startsWith('- ')) {
        return (
          <div key={index} className="flex gap-3 mb-3 ml-2">
             <span className="text-brand-primary text-xl leading-none">•</span>
             <p className="text-brand-dark/80 text-lg font-light leading-relaxed flex-1">
               {line.replace(/^[\*\-]\s/, '')}
             </p>
          </div>
        );
      }
      
      // Numbered Lists
      if (/^\d+\.\s/.test(line.trim())) {
        const [num, ...rest] = line.trim().split('.');
         return (
          <div key={index} className="flex gap-3 mb-3 ml-2">
            <span className="text-brand-primary font-bold text-lg min-w-[20px]">{num}.</span>
            <p className="text-brand-dark/80 text-lg font-light leading-relaxed flex-1">{rest.join('.').trim()}</p>
          </div>
         );
      }

      // Blockquotes
      if (line.trim().startsWith('> ')) {
        return (
            <blockquote key={index} className="border-l-4 border-brand-primary pl-6 py-2 my-8 italic text-xl text-brand-dark/70 font-serif">
                {line.replace('> ', '')}
            </blockquote>
        );
      }

      // Separator
      if (line.trim() === '---') {
        return <hr key={index} className="my-12 border-brand-warm/30" />;
      }

      // Empty lines
      if (line.trim() === '') return <div key={index} className="h-4"></div>;

      // Paragraphs with simple link parsing [Text](URL)
      const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/;
      const match = line.match(linkRegex);
      
      if (match) {
        const [full, text, url] = match;
        const parts = line.split(full);
        return (
            <p key={index} className="mb-6 text-brand-dark/80 leading-loose text-lg font-light">
                {parts[0]}
                <a href={url} target="_blank" rel="noopener noreferrer" className="text-brand-primary font-medium hover:underline decoration-1 underline-offset-4">{text}</a>
                {parts[1]}
            </p>
        )
      }

      return <p key={index} className="mb-6 text-brand-dark/80 leading-loose text-lg font-light">{line}</p>;
    });
  };

  return (
    <div className="animate-fade-in bg-brand-light min-h-screen pb-24">
      <div className="h-[45vh] bg-brand-dark relative overflow-hidden flex items-center justify-center">
         {/* Abstract background */}
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
         
         <div className="max-w-4xl mx-auto px-6 w-full relative z-10 self-start mt-24">
            <Link to="/blog" className="text-brand-light/70 hover:text-white flex items-center transition-colors text-xs uppercase tracking-[0.2em] font-bold">
              <ArrowLeft size={16} className="mr-3" /> Back to Insights
            </Link>
         </div>
      </div>

      <article className="max-w-3xl mx-auto px-8 -mt-40 relative z-20 bg-white p-10 md:p-16 rounded-t-3xl shadow-2xl shadow-black/10">
        <div className="flex items-center gap-6 text-xs text-brand-warm mb-10 border-b border-brand-light pb-8">
          <div className="flex items-center gap-2">
            <Calendar size={14} />
            {post.date}
          </div>
          <div className="flex items-center gap-2">
            <Tag size={14} />
            {post.tags.join(', ')}
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl font-serif font-bold text-brand-dark mb-12 leading-tight">
          {post.title[lang]}
        </h1>

        <div className="prose prose-lg max-w-none text-brand-dark/80">
          {renderContent(post.content[lang])}
        </div>

        <div className="mt-20 pt-10 border-t border-brand-light flex justify-between items-center">
          <div className="flex gap-4">
             <span className="text-xs text-brand-warm uppercase tracking-widest">Share this insight</span>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;