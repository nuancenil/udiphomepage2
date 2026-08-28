
export type Language = 'zh' | 'en';

export interface BlogPost {
  id: string;
  title: {
    zh: string;
    en: string;
  };
  date: string;
  excerpt: {
    zh: string;
    en: string;
  };
  content: {
    zh: string;
    en: string;
  }; // Markdown-like string or HTML string
  tags: string[];
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface ValueItem {
  title: string;
  enTitle: string; // Added for the 3 pillars bilingual display
  description: string;
}

export interface LocalizedContent {
  nav: {
    home: string;
    services: string;
    ipDecisionLab: string;
    ptaxial: string;
    training: string;
    about: string;
    blog: string;
    podcast: string;
    contact: string;
  };
  home: {
    heroTag: string;
    heroTitle: string;
    heroSubtitle: string;
    heroDesc: string;
    ctaButton: string;
    sections: {
      services: string;
      ptaxial: string;
      decisionLab: string;
      insights: string;
      trackRecord: string;
    };
    caseNotes: {
      eyebrow: string;
      title: string;
      subtitle: string;
      readMore: string;
      allLink: string;
      items: {
        tag: string;
        title: string;
        situation: string;
        reading: string;
        postId: string;
      }[];
    };
    trackRecord: {
      title: string;
      subtitle: string;
      desc: string;
      points?: string[];
      stat: string;
      statLabel: string;
    };
  };
  services: {
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  about: {
    title: string;
    subtitle: string;
    intro: string[];
    valuesTitle: string;
    values: ValueItem[];
    founderTitle: string;
    founderContent: string[];
  };
  contact: {
    title: string;
    desc: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
    }
  };
  ptaxial: {
    title: string;
    subtitle: string;
    desc: string[];
    features: { title: string; description: string }[];
    claim?: string;
    claimEn?: string;
  };
  training: {
    title: string;
    subtitle: string;
    intro: string[];
    scheduleNote: string;
    coursesLabel: string;
    courses: {
      title: string;
      format: string;
      audience: string;
      body: string[];
      fit: string;
    }[];
    recordTitle: string;
    recordDesc: string;
    ctaTitle: string;
    ctaDesc: string;
    ctaButton: string;
  };
  decisionLab: {
    title: string;
    subtitle: string;
    desc: string[];
    button: string;
    features: { title: string; description: string }[];
  };
  footer: {
    social: string;
    linkedinCompany: string;
    linkedinShowcase: string;
    slogan: string; // Added slogan to footer
  };
}
