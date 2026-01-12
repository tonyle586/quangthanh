import React, { useState } from 'react';
import { useApp } from '../context';
import { TRANSLATIONS } from '../constants';

type Category = 'all' | 'music' | 'wedding' | 'event';

export const Gallery: React.FC = () => {
  const { language } = useApp();
  const t = TRANSLATIONS[language].gallery;
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  // Mock data generator
  const images = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    src: `https://picsum.photos/600/${i % 2 === 0 ? 800 : 600}?random=${i + 400}`,
    category: i % 3 === 0 ? 'music' : i % 3 === 1 ? 'wedding' : 'event',
    title: `Project ${i + 1}`
  }));

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const tabs = [
    { id: 'all', label: t.categoryAll },
    { id: 'music', label: t.categoryMusic },
    { id: 'wedding', label: t.categoryWedding },
    { id: 'event', label: t.categoryEvent },
  ] as const;

  return (
    <div className="pt-24 pb-20 animate-fade-in bg-white dark:bg-charcoal-900 min-h-screen">
       <div className="container mx-auto px-6">
         <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                 <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 dark:text-gold-500 mb-2">
                    {t.title}
                </h1>
                <p className="text-neutral-500 dark:text-neutral-400">
                    {language === 'vi' ? 'Những khoảnh khắc đáng nhớ' : 'Unforgettable moments captured'}
                </p>
            </div>
            
            {/* Filter Tabs */}
            <div className="flex space-x-2 mt-6 md:mt-0 overflow-x-auto pb-2 md:pb-0">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveCategory(tab.id as Category)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                            activeCategory === tab.id
                                ? 'bg-gold-500 text-white shadow-md'
                                : 'bg-neutral-100 dark:bg-charcoal-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-charcoal-700'
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
         </div>

         {/* Masonry Grid */}
         <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredImages.map((img) => (
                <div key={img.id} className="break-inside-avoid relative group overflow-hidden rounded-lg shadow-lg bg-neutral-200 dark:bg-charcoal-800">
                    <img 
                        src={img.src} 
                        alt={img.title}
                        className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                             <h3 className="text-white font-serif text-xl font-bold">{img.title}</h3>
                             <p className="text-gold-400 text-sm uppercase tracking-wider mt-1">{img.category}</p>
                        </div>
                    </div>
                </div>
            ))}
         </div>
       </div>
    </div>
  );
};