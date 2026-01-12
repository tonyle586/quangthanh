import React from 'react';
import { useApp } from '../context';
import { TRANSLATIONS } from '../constants';
import { ArrowRight, Music, Camera, Video } from 'lucide-react';

export const Home: React.FC = () => {
  const { language, setCurrentPage } = useApp();
  const t = TRANSLATIONS[language];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?grayscale" 
            alt="Studio Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-charcoal-900"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 tracking-tight leading-tight">
            {t.home.heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-10 font-light">
            {t.home.heroSubtitle}
          </p>
          <button 
            onClick={() => setCurrentPage('services')}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-gold-500 font-sans tracking-widest uppercase hover:bg-gold-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500"
          >
            {t.home.cta}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-0.5 h-16 bg-gradient-to-b from-gold-500 to-transparent"></div>
        </div>
      </section>

      {/* Intro / Featured Services Preview */}
      <section className="py-20 bg-neutral-50 dark:bg-charcoal-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-neutral-900 dark:text-white mb-4">
              {t.home.featuredService}
            </h2>
            <div className="w-20 h-1 bg-gold-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1: Audio */}
            <div 
                className="group p-8 bg-white dark:bg-charcoal-800 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-transparent hover:border-gold-500 cursor-pointer"
                onClick={() => setCurrentPage('services')}
            >
              <div className="w-14 h-14 bg-neutral-100 dark:bg-charcoal-700 rounded-full flex items-center justify-center mb-6 text-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                <Music className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white">{t.services.musicTitle}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-4">
                {t.services.musicDesc.substring(0, 100)}...
              </p>
            </div>

             {/* Service 2: Wedding */}
             <div 
                className="group p-8 bg-white dark:bg-charcoal-800 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-transparent hover:border-gold-500 cursor-pointer"
                onClick={() => setCurrentPage('services')}
             >
              <div className="w-14 h-14 bg-neutral-100 dark:bg-charcoal-700 rounded-full flex items-center justify-center mb-6 text-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                <Camera className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white">{t.services.weddingTitle}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-4">
                {t.services.weddingDesc.substring(0, 100)}...
              </p>
            </div>

             {/* Service 3: Event */}
             <div 
                className="group p-8 bg-white dark:bg-charcoal-800 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-transparent hover:border-gold-500 cursor-pointer"
                onClick={() => setCurrentPage('services')}
             >
              <div className="w-14 h-14 bg-neutral-100 dark:bg-charcoal-700 rounded-full flex items-center justify-center mb-6 text-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                <Video className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white">{t.services.eventTitle}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-4">
                {t.services.eventDesc.substring(0, 100)}...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Gallery Strip */}
      <section className="grid grid-cols-2 md:grid-cols-4 h-64 md:h-80">
         {[1,2,3,4].map((i) => (
             <div key={i} className="relative group overflow-hidden h-full">
                 <img src={`https://picsum.photos/600/800?random=${i+50}`} alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-colors duration-300"></div>
             </div>
         ))}
      </section>
    </div>
  );
};