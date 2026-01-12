import React from 'react';
import { useApp } from '../context';
import { TRANSLATIONS } from '../constants';
import { Users, Award, Clock } from 'lucide-react';

export const About: React.FC = () => {
  const { language } = useApp();
  const t = TRANSLATIONS[language].about;

  return (
    <div className="pt-24 pb-20 animate-fade-in bg-white dark:bg-charcoal-900 min-h-screen">
      {/* Header */}
      <div className="container mx-auto px-6 mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 dark:text-gold-500 mb-6">
          {t.title}
        </h1>
        <div className="w-full h-[1px] bg-neutral-200 dark:bg-neutral-800"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
             <div className="absolute top-4 -left-4 w-full h-full border-2 border-gold-500 rounded-sm z-0 hidden md:block"></div>
             <img 
               src="https://picsum.photos/800/600?random=100" 
               alt="Studio Team" 
               className="relative z-10 w-full h-auto rounded-sm shadow-2xl"
             />
          </div>
          <div>
            <h2 className="text-3xl font-serif font-bold text-neutral-800 dark:text-white mb-6">
              {t.storyTitle}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-8 text-lg mb-8">
              {t.storyText}
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-neutral-200 dark:border-neutral-800">
               <div className="text-center">
                 <div className="text-3xl font-bold text-gold-500 mb-1">500+</div>
                 <div className="text-xs uppercase tracking-wider text-neutral-500">{t.statClients}</div>
               </div>
               <div className="text-center">
                 <div className="text-3xl font-bold text-gold-500 mb-1">10+</div>
                 <div className="text-xs uppercase tracking-wider text-neutral-500">{t.statYears}</div>
               </div>
               <div className="text-center">
                 <div className="text-3xl font-bold text-gold-500 mb-1">1k+</div>
                 <div className="text-xs uppercase tracking-wider text-neutral-500">{t.statProjects}</div>
               </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-neutral-50 dark:bg-charcoal-800 rounded-xl p-10 md:p-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-3xl font-serif font-bold text-neutral-800 dark:text-white mb-6">
              {t.teamTitle}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300">
              {t.teamText}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
             {[1, 2, 3].map((member) => (
                <div key={member} className="text-center group">
                  <div className="w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full border-4 border-white dark:border-charcoal-700 shadow-lg">
                    <img 
                      src={`https://picsum.photos/300/300?random=${member+200}`} 
                      alt="Team Member" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                    {member === 1 ? 'Nguyen Van A' : member === 2 ? 'Tran Thi B' : 'Le Van C'}
                  </h3>
                  <p className="text-gold-500 text-sm font-medium uppercase tracking-wider mt-1">
                    {member === 1 ? 'Creative Director' : member === 2 ? 'Senior Photographer' : 'Sound Engineer'}
                  </p>
                </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};