import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const TermsOfService: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <div className="animate-fade-in bg-brand-light min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-brand-dark mb-4">
          {lang === 'zh' ? '服務條款' : 'Terms of Service'}
        </h1>
        <p className="text-brand-warm mb-12 text-sm font-mono uppercase tracking-widest">
          {lang === 'zh' ? '最後更新日期：2025年1月1日' : 'Last Updated: January 1, 2025'}
        </p>

        <div className="prose prose-lg max-w-none text-brand-dark/80 font-light leading-relaxed">
          {lang === 'zh' ? (
            <>
              <p>歡迎來到 Eudaimonia IP 網站。訪問或使用本網站，即表示您同意遵守以下條款。</p>

              <h3 className="text-xl font-serif font-bold mt-10 mb-4 text-brand-dark">1. 網站使用</h3>
              <p>本網站提供的內容僅供一般資訊參考，不構成正式的法律建議或專業諮詢意見。在根據本網站資訊採取任何行動之前，建議您諮詢合格的專業顧問。</p>

              <h3 className="text-xl font-serif font-bold mt-10 mb-4 text-brand-dark">2. 智慧財產權</h3>
              <p>本網站上的所有內容，包括文字、圖像、標誌、設計和軟體，均為 Eudaimonia IP 或其授權人的財產，受著作權法和商標法保護。未經我們事先書面同意，不得擅自複製、分發或使用。</p>

              <h3 className="text-xl font-serif font-bold mt-10 mb-4 text-brand-dark">3. 免責聲明</h3>
              <p>我們努力確保本網站資訊的準確性，但不對其完整性、準確性或即時性提供任何明示或暗示的保證。Eudaimonia IP 不對因使用本網站資訊而產生的任何直接或間接損失負責。</p>

              <h3 className="text-xl font-serif font-bold mt-10 mb-4 text-brand-dark">4. 服務範圍</h3>
              <p>透過本網站介紹的服務（如專利策略、PTAxial®、IP Decision Lab™）受個別服務協議的約束。本網站內容不應被視為服務要約的具體承諾。</p>

              <h3 className="text-xl font-serif font-bold mt-10 mb-4 text-brand-dark">5. 準據法</h3>
              <p>本服務條款受中華民國（台灣）法律管轄。任何因本條款引起的爭議，應以台灣台北地方法院為第一審管轄法院。</p>

              <h3 className="text-xl font-serif font-bold mt-10 mb-4 text-brand-dark">6. 條款修改</h3>
              <p>我們保留隨時修改這些條款的權利。修改後的條款一經發布即生效。</p>
            </>
          ) : (
            <>
              <p>Welcome to the Eudaimonia IP website. By accessing or using this website, you agree to be bound by the following terms.</p>

              <h3 className="text-xl font-serif font-bold mt-10 mb-4 text-brand-dark">1. Use of Website</h3>
              <p>The content provided on this website is for general informational purposes only and does not constitute formal legal advice or professional consulting opinion. We recommend consulting with a qualified professional before taking any action based on the information provided here.</p>

              <h3 className="text-xl font-serif font-bold mt-10 mb-4 text-brand-dark">2. Intellectual Property</h3>
              <p>All content on this website, including text, graphics, logos, designs, and software, is the property of Eudaimonia IP or its licensors and is protected by copyright and trademark laws. Unauthorized reproduction, distribution, or use without our prior written consent is prohibited.</p>

              <h3 className="text-xl font-serif font-bold mt-10 mb-4 text-brand-dark">3. Disclaimer</h3>
              <p>While we strive to ensure the accuracy of the information on this website, we make no warranties, express or implied, regarding its completeness, accuracy, or timeliness. Eudaimonia IP shall not be liable for any direct or indirect damages arising from the use of information on this website.</p>

              <h3 className="text-xl font-serif font-bold mt-10 mb-4 text-brand-dark">4. Scope of Services</h3>
              <p>The services introduced on this website (e.g., Patent Strategy, PTAxial®, IP Decision Lab™) are subject to individual service agreements. Nothing on this website should be construed as a binding offer of service.</p>

              <h3 className="text-xl font-serif font-bold mt-10 mb-4 text-brand-dark">5. Governing Law</h3>
              <p>These Terms of Service shall be governed by and construed in accordance with the laws of the Republic of China (Taiwan). Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the Taipei District Court in Taiwan.</p>

              <h3 className="text-xl font-serif font-bold mt-10 mb-4 text-brand-dark">6. Changes to Terms</h3>
              <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting.</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
