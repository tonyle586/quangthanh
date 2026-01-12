import React from 'react';
import { useApp } from '../context';
import { TRANSLATIONS } from '../constants';
import { Mic2, Camera, Aperture, Video, CheckCircle } from 'lucide-react';

export const Services: React.FC = () => {
  const { language, setCurrentPage } = useApp();
  const t = TRANSLATIONS[language].services;

  const ServiceSection = ({ title, desc, img, icon: Icon, reversed = false }: any) => (
    <div className={`flex flex-col lg:flex-row ${reversed ? 'lg:flex-row-reverse' : ''} gap-12 items-center mb-24`}>
      <div className="w-full lg:w-1/2">
        <div className="relative overflow-hidden rounded-lg shadow-2xl group">
            <img src={img} alt={title} className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center text-white shadow-lg">
                <Icon className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-neutral-900 dark:text-white">{title}</h2>
        </div>
        <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-8">
            {desc}
        </p>
        <ul className="space-y-3 mb-8">
            {[1, 2, 3].map(i => (
                <li key={i} className="flex items-center text-neutral-700 dark:text-neutral-400">
                    <CheckCircle className="w-5 h-5 text-gold-500 mr-3" />
                    <span>
                      {language === 'vi' 
                        ? 'Chất lượng tiêu chuẩn quốc tế' 
                        : 'International quality standards'}
                    </span>
                </li>
            ))}
        </ul>
        <button 
            onClick={() => setCurrentPage('contact')}
            className="text-gold-600 dark:text-gold-400 font-bold uppercase tracking-wider hover:text-gold-500 transition-colors border-b-2 border-gold-500 pb-1"
        >
            {TRANSLATIONS[language].nav.bookNow}
        </button>
      </div>
    </div>
  );

  return (
    <div className="pt-24 pb-20 animate-fade-in bg-neutral-50 dark:bg-charcoal-900 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 dark:text-gold-500 mb-6">
            {t.title}
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg">
             {language === 'vi' 
               ? 'Khám phá các giải pháp sáng tạo toàn diện của chúng tôi.' 
               : 'Explore our comprehensive creative solutions.'}
          </p>
        </div>

        <ServiceSection 
            title={t.musicTitle} 
            desc={t.musicDesc} 
            img="https://picsum.photos/800/600?random=301" 
            icon={Mic2} 
        />
        <ServiceSection 
            title={t.weddingTitle} 
            desc={t.weddingDesc} 
            img="https://picsum.photos/800/600?random=302" 
            icon={Camera} 
            reversed 
        />
        <ServiceSection 
            title={t.eventTitle} 
            desc={t.eventDesc} 
            img="https://picsum.photos/800/600?random=303" 
            icon={Video} 
        />
      </div>
    </div>
  );
};