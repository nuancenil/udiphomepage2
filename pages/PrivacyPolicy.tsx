import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const PrivacyPolicy: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <div className="animate-fade-in bg-brand-light min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-brand-dark mb-4">
          {lang === 'zh' ? '隱私權政策' : 'Privacy Policy'}
        </h1>
        <p className="text-brand-warm mb-12 text-sm font-mono uppercase tracking-widest">
          {lang === 'zh' ? '最後更新日期：2025年1月1日' : 'Last Updated: January 1, 2025'}
        </p>

        <div className="prose prose-lg max-w-none text-brand-dark/80 font-light leading-relaxed">
          {lang === 'zh' ? (
            <>
              <p>Eudaimonia IP（以下簡稱「我們」）非常重視您的隱私。本隱私權政策說明我們如何收集、使用、披露和保護您的資訊。</p>

              <h3 className="text-xl font-serif font-bold mt-10 mb-4 text-brand-dark">1. 資訊收集</h3>
              <p>我們可能會收集您透過本網站（例如透過聯絡表單）自願提供的個人資訊，包括但不限於：</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>姓名</li>
                <li>電子郵件地址</li>
                <li>電話號碼</li>
                <li>您在留言中提供的任何其他資訊</li>
              </ul>
              <p>此外，當您訪問我們的網站時，我們可能會自動收集某些技術資訊，例如您的 IP 地址、瀏覽器類型、操作系統以及您瀏覽的頁面。</p>

              <h3 className="text-xl font-serif font-bold mt-10 mb-4 text-brand-dark">2. 資訊使用</h3>
              <p>我們收集的資訊主要用於以下目的：</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>回覆您的諮詢與提供智權顧問服務。</li>
                <li>改善我們的網站體驗與服務內容。</li>
                <li>發送您可能感興趣的產業洞見或服務更新（若您已訂閱）。</li>
                <li>遵守法律義務或維護我們的合法權益。</li>
              </ul>

              <h3 className="text-xl font-serif font-bold mt-10 mb-4 text-brand-dark">3. 資訊保護</h3>
              <p>我們採取適當的技術與組織措施來保護您的個人資訊，防止未經授權的訪問、披露、修改或破壞。然而，請注意網際網路傳輸無法保證 100% 安全。</p>

              <h3 className="text-xl font-serif font-bold mt-10 mb-4 text-brand-dark">4. 第三方連結</h3>
              <p>本網站可能包含通往第三方網站（如 LinkedIn, Podcast 平台）的連結。我們對這些第三方網站的內容或隱私權慣例不負責任。</p>

              <h3 className="text-xl font-serif font-bold mt-10 mb-4 text-brand-dark">5. 聯絡我們</h3>
              <p>如果您對本隱私權政策有任何疑問，請透過以下方式聯絡我們：</p>
              <p className="mt-4 font-medium">Email: genius@eudaimonia-ip.com</p>
            </>
          ) : (
            <>
              <p>Eudaimonia IP ("we", "us", or "our") values your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your information when you visit our website.</p>

              <h3 className="text-xl font-serif font-bold mt-10 mb-4 text-brand-dark">1. Information Collection</h3>
              <p>We may collect personal information that you voluntarily provide to us via our website (e.g., through contact forms), including but not limited to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Any other information you choose to provide in your messages</li>
              </ul>
              <p>Additionally, we may automatically collect certain technical information when you visit our site, such as your IP address, browser type, operating system, and browsing behavior.</p>

              <h3 className="text-xl font-serif font-bold mt-10 mb-4 text-brand-dark">2. Use of Information</h3>
              <p>The information we collect is primarily used for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>To respond to your inquiries and provide intellectual property consulting services.</li>
                <li>To improve our website experience and service offerings.</li>
                <li>To send you industry insights or service updates (if you have opted in).</li>
                <li>To comply with legal obligations or protect our legal rights.</li>
              </ul>

              <h3 className="text-xl font-serif font-bold mt-10 mb-4 text-brand-dark">3. Data Protection</h3>
              <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, disclosure, alteration, or destruction. However, please note that no method of transmission over the internet is 100% secure.</p>

              <h3 className="text-xl font-serif font-bold mt-10 mb-4 text-brand-dark">4. Third-Party Links</h3>
              <p>This website may contain links to third-party websites (e.g., LinkedIn, Podcast platforms). We are not responsible for the content or privacy practices of these third-party sites.</p>

              <h3 className="text-xl font-serif font-bold mt-10 mb-4 text-brand-dark">5. Contact Us</h3>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <p className="mt-4 font-medium">Email: genius@eudaimonia-ip.com</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
