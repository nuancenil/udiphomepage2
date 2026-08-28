import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { posts } from '../data';
import { ArrowLeft, Calendar, Tag, Linkedin, Facebook, Twitter, Link2, Check } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { lang } = useLanguage();
  const [copied, setCopied] = useState(false);
  const post = posts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col bg-brand-light">
        <h2 className="text-2xl font-serif text-brand-dark mb-4">Post not found</h2>
        <Link to="/blog" className="text-brand-primary hover:underline">Back to Blog</Link>
      </div>
    );
  }

  // The shared link carries the language currently being read, so the recipient
  // lands on the same language version instead of the zh default.
  const shareUrl = typeof window !== 'undefined'
    ? `${window.location.origin}${window.location.pathname}?lang=${lang}`
    : '';
  const shareTitle = post.title[lang];

  // Each network's own share page is opened in the matching locale.
  const share = lang === 'zh'
    ? {
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&locale=zh_TW`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}&lang=zh-tw`,
      }
    : {
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&locale=en_US`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}&lang=en`,
      };

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  // Inline bold: renders **text** as <strong>, leaves everything else as plain text
  const renderBold = (text: string): React.ReactNode => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    if (parts.length === 1) return text;
    return parts.map((part, i) =>
      part.startsWith('**') && part.endsWith('**')
        ? <strong key={i} className="font-semibold text-brand-dark">{part.slice(2, -2)}</strong>
        : part
    );
  };

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
               {renderBold(line.trim().replace(/^[\*\-]\s/, ''))}
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
            <p className="text-brand-dark/80 text-lg font-light leading-relaxed flex-1">{renderBold(rest.join('.').trim())}</p>
          </div>
         );
      }

      // Blockquotes
      if (line.trim().startsWith('> ')) {
        return (
            <blockquote key={index} className="border-l-4 border-brand-primary pl-6 py-2 my-8 italic text-xl text-brand-dark/70 font-serif">
                {renderBold(line.replace('> ', ''))}
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
                {renderBold(parts[0])}
                <a href={url} target="_blank" rel="noopener noreferrer" className="text-brand-primary font-medium hover:underline decoration-1 underline-offset-4">{text}</a>
                {renderBold(parts[1])}
            </p>
        )
      }

      return <p key={index} className="mb-6 text-brand-dark/80 leading-loose text-lg font-light">{renderBold(line)}</p>;
    });
  };

  return (
    <div className="animate-fade-in bg-brand-light min-h-screen pb-24">
      <div className="h-[45vh] bg-brand-dark relative overflow-hidden flex items-center justify-center">
         {/* Abstract background */}
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>

         <div className="max-w-4xl mx-auto px-6 w-full relative z-10 self-start mt-24">
            <Link to="/blog" className="text-brand-light/70 hover:text-white flex items-center transition-colors text-xs uppercase tracking-[0.2em] font-bold">
              <ArrowLeft size={16} className="mr-3" /> {lang === 'zh' ? '回實戰洞見' : 'Back to Insights'}
            </Link>
         </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 md:px-8 -mt-40 relative z-20 bg-white p-8 md:p-16 rounded-t-3xl shadow-2xl shadow-black/10">
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

        <div className="mt-20 pt-10 border-t border-brand-light flex flex-col sm:flex-row sm:items-center gap-6">
          <span className="text-xs text-brand-warm uppercase tracking-widest">{lang === 'zh' ? '分享這篇洞見' : 'Share this insight'}</span>
          <div className="flex items-center gap-3">
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on LinkedIn"
              className="p-2.5 rounded-full border border-brand-warm/40 text-brand-dark/60 hover:text-brand-primary hover:border-brand-primary transition-colors"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Facebook"
              className="p-2.5 rounded-full border border-brand-warm/40 text-brand-dark/60 hover:text-brand-primary hover:border-brand-primary transition-colors"
            >
              <Facebook size={16} />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on X"
              className="p-2.5 rounded-full border border-brand-warm/40 text-brand-dark/60 hover:text-brand-primary hover:border-brand-primary transition-colors"
            >
              <Twitter size={16} />
            </a>
            <button
              onClick={handleCopyLink}
              aria-label="Copy link"
              className="p-2.5 rounded-full border border-brand-warm/40 text-brand-dark/60 hover:text-brand-primary hover:border-brand-primary transition-colors"
            >
              {copied ? <Check size={16} /> : <Link2 size={16} />}
            </button>
            {copied && <span className="text-xs text-brand-primary tracking-widest uppercase">{lang === 'zh' ? '已複製連結' : 'Link copied'}</span>}
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
