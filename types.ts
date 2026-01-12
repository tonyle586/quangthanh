import { ReactNode } from 'react';

export type Language = 'vi' | 'en';
export type Theme = 'light' | 'dark';
export type PageView = 'home' | 'about' | 'services' | 'gallery' | 'contact';

export interface AppContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
  currentPage: PageView;
  setCurrentPage: (page: PageView) => void;
}

export interface TranslationStructure {
  nav: {
    home: string;
    about: string;
    services: string;
    gallery: string;
    contact: string;
    bookNow: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    cta: string;
    featuredService: string;
  };
  about: {
    title: string;
    storyTitle: string;
    storyText: string;
    teamTitle: string;
    teamText: string;
    statClients: string;
    statYears: string;
    statProjects: string;
  };
  services: {
    title: string;
    musicTitle: string;
    musicDesc: string;
    weddingTitle: string;
    weddingDesc: string;
    eventTitle: string;
    eventDesc: string;
    learnMore: string;
  };
  gallery: {
    title: string;
    categoryAll: string;
    categoryMusic: string;
    categoryWedding: string;
    categoryEvent: string;
  };
  contact: {
    title: string;
    formTitle: string;
    name: string;
    email: string;
    phone: string;
    serviceType: string;
    message: string;
    submit: string;
    locations: string;
    vungTau: string;
    hcmc: string;
    socials: string;
  };
  footer: {
    rights: string;
  };
}