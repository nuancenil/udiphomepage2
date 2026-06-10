import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data';
import { Send, MapPin, Phone, Mail, Copy, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const { lang } = useLanguage();
  const t = content[lang].contact;
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [copied, setCopied] = useState(false);

  // ---------------------------------------------------------
  // CONFIGURATION: Change your email here
  // 修改此處的 Email，表單發送對象與畫面顯示將會同步更新
  // ---------------------------------------------------------
  const CONTACT_EMAIL = 'genius@eudaimonia-ip.com'; 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Convert FormData to JSON object
    const data = Object.fromEntries(formData.entries());

    // Add FormSubmit.co specific configurations
    const payload = {
      ...data,
      _subject: "New Inquiry from Eudaimonia Website", // Email subject
      _template: "table", // Makes the email look professional
      _captcha: "false"   // Disable captcha redirect for smoother UX
    };

    try {
      // Using the AJAX endpoint for FormSubmit.co
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json' 
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error("Form submission error:", errorData);
        setStatus('error');
      }
    } catch (error) {
      console.error("Network error:", error);
      setStatus('error');
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="animate-fade-in bg-brand-light min-h-screen py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-brand-dark mb-4">{t.title}</h1>
          <p className="text-xl text-brand-warm max-w-2xl mx-auto font-light">{t.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Contact Info - Brand Dark */}
          <div className="bg-brand-dark text-brand-light p-12 rounded-[2rem] shadow-xl flex flex-col justify-between relative overflow-hidden min-h-[500px]">
            {/* Decorative organic shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full -mr-16 -mt-16 blur-2xl z-0"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-secondary/10 rounded-full -ml-20 -mb-20 blur-3xl z-0"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-serif font-medium mb-12">Get in Touch</h3>
              
              <div className="space-y-10">
                <div className="flex items-start gap-6 group">
                  <div className="bg-white/5 p-4 rounded-xl group-hover:bg-brand-primary transition-colors duration-300">
                    <Mail className="text-brand-primary group-hover:text-brand-dark transition-colors" size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-brand-warm/60 uppercase tracking-widest mb-1">Email</p>
                    <div className="flex items-center gap-3">
                      <a href={`mailto:${CONTACT_EMAIL}`} className="text-xl font-medium hover:text-brand-primary transition-colors font-sans select-all text-white break-all">
                        {CONTACT_EMAIL}
                      </a>
                      <button 
                        onClick={copyEmail} 
                        className="p-2 bg-white/5 hover:bg-white/20 rounded-lg transition-colors text-brand-warm hover:text-white flex items-center justify-center w-8 h-8 flex-shrink-0"
                      >
                        {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                   <div className="bg-white/5 p-4 rounded-xl group-hover:bg-brand-primary transition-colors duration-300">
                    <Phone className="text-brand-primary group-hover:text-brand-dark transition-colors" size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-brand-warm/60 uppercase tracking-widest mb-1">Phone</p>
                    <p className="text-xl font-medium font-sans select-all text-white">+886 963 553 187</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                   <div className="bg-white/5 p-4 rounded-xl group-hover:bg-brand-primary transition-colors duration-300">
                    <MapPin className="text-brand-primary group-hover:text-brand-dark transition-colors" size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-brand-warm/60 uppercase tracking-widest mb-1">Office</p>
                    <p className="text-xl font-medium font-sans text-white">Taipei, Taiwan</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 relative z-10 pt-8 border-t border-white/10">
              <p className="text-sm text-brand-warm/60 font-light">
                We typically reply within 1 business day.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-12 rounded-[2rem] shadow-lg border border-brand-warm/10">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-8">
                  <Send size={32} />
                </div>
                <h3 className="text-3xl font-serif text-brand-dark mb-4">Message Sent!</h3>
                <p className="text-brand-dark/60 mb-8">Thank you for contacting us. We will get back to you shortly.</p>
                <button onClick={() => setStatus('idle')} className="text-brand-primary font-medium hover:underline tracking-wide text-sm uppercase">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 h-full flex flex-col justify-center">
                 
                 {status === 'error' && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm text-center">
                       Oops! Something went wrong. Please try again.
                    </div>
                 )}

                <div className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-brand-warm uppercase tracking-wider mb-2">{t.form.name}</label>
                    <input name="name" type="text" id="name" required className="w-full px-0 py-3 bg-transparent border-b border-brand-warm/30 text-brand-dark focus:border-brand-primary outline-none transition-all placeholder-brand-warm/30 text-lg" placeholder="Your Name" />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-brand-warm uppercase tracking-wider mb-2">{t.form.email}</label>
                    <input name="email" type="email" id="email" required className="w-full px-0 py-3 bg-transparent border-b border-brand-warm/30 text-brand-dark focus:border-brand-primary outline-none transition-all placeholder-brand-warm/30 text-lg" placeholder="jane@example.com" />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-brand-warm uppercase tracking-wider mb-2">{t.form.message}</label>
                    <textarea name="message" id="message" rows={4} required className="w-full px-0 py-3 bg-transparent border-b border-brand-warm/30 text-brand-dark focus:border-brand-primary outline-none transition-all resize-none placeholder-brand-warm/30 text-lg" placeholder="How can we help you?"></textarea>
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full bg-brand-primary text-brand-dark py-4 rounded-xl font-medium text-lg hover:bg-brand-dark hover:text-white transition-colors shadow-lg shadow-brand-primary/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-auto"
                >
                  {status === 'submitting' ? 'Sending...' : t.form.submit}
                  {status !== 'submitting' && <Send size={18} />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;