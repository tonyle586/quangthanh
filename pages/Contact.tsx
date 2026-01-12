import React, { useState } from 'react';
import { useApp } from '../context';
import { TRANSLATIONS } from '../constants';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const { language } = useApp();
  const t = TRANSLATIONS[language].contact;
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      service: 'music',
      message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Logic for form submission would go here
      alert(language === 'vi' ? 'Cảm ơn! Chúng tôi sẽ liên hệ sớm.' : 'Thank you! We will contact you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFormData({...formData, [e.target.name]: e.target.value});
  }

  return (
    <div className="pt-24 pb-20 animate-fade-in bg-neutral-50 dark:bg-charcoal-900 min-h-screen">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-center text-neutral-900 dark:text-gold-500 mb-16">
          {t.title}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white dark:bg-charcoal-800 p-8 rounded-xl shadow-xl">
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                    {t.formTitle}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">{t.name}</label>
                        <input 
                            required 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            type="text" 
                            className="w-full px-4 py-3 rounded-md bg-neutral-50 dark:bg-charcoal-700 border border-neutral-300 dark:border-charcoal-600 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors dark:text-white"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div>
                            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">{t.email}</label>
                            <input 
                                required 
                                name="email"
                                type="email" 
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-md bg-neutral-50 dark:bg-charcoal-700 border border-neutral-300 dark:border-charcoal-600 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors dark:text-white"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">{t.phone}</label>
                            <input 
                                required 
                                name="phone"
                                type="tel" 
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-md bg-neutral-50 dark:bg-charcoal-700 border border-neutral-300 dark:border-charcoal-600 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors dark:text-white"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">{t.serviceType}</label>
                        <select 
                            name="service"
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-md bg-neutral-50 dark:bg-charcoal-700 border border-neutral-300 dark:border-charcoal-600 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors dark:text-white"
                        >
                            <option value="music">Music Production</option>
                            <option value="wedding">Wedding Photography</option>
                            <option value="event">Corporate Event</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">{t.message}</label>
                        <textarea 
                            rows={4} 
                            name="message"
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-md bg-neutral-50 dark:bg-charcoal-700 border border-neutral-300 dark:border-charcoal-600 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors dark:text-white"
                        ></textarea>
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-gold-500 hover:bg-gold-600 text-white font-bold py-4 rounded-md transition-colors flex items-center justify-center uppercase tracking-widest"
                    >
                        {t.submit} <Send className="ml-2 w-4 h-4" />
                    </button>
                </form>
            </div>

            {/* Info and Maps */}
            <div className="space-y-8">
                 <div className="bg-white dark:bg-charcoal-800 p-8 rounded-xl shadow-lg border-l-4 border-gold-500">
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4 flex items-center">
                        <MapPin className="text-gold-500 mr-2" /> {t.vungTau}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                        123 Le Hong Phong Street, Ward 7, Vung Tau City.
                    </p>
                    {/* Placeholder Map */}
                    <div className="w-full h-48 bg-neutral-200 dark:bg-charcoal-700 rounded-md overflow-hidden relative">
                        <img src="https://picsum.photos/600/300?grayscale&blur=2" alt="Vung Tau Map" className="w-full h-full object-cover opacity-50"/>
                         <div className="absolute inset-0 flex items-center justify-center text-neutral-500 font-bold">Google Maps Placeholder</div>
                    </div>
                 </div>

                 <div className="bg-white dark:bg-charcoal-800 p-8 rounded-xl shadow-lg border-l-4 border-gold-500">
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4 flex items-center">
                        <MapPin className="text-gold-500 mr-2" /> {t.hcmc}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                         456 Nguyen Hue, District 1, Ho Chi Minh City.
                    </p>
                    {/* Placeholder Map */}
                    <div className="w-full h-48 bg-neutral-200 dark:bg-charcoal-700 rounded-md overflow-hidden relative">
                        <img src="https://picsum.photos/600/300?grayscale&blur=2" alt="HCMC Map" className="w-full h-full object-cover opacity-50"/>
                        <div className="absolute inset-0 flex items-center justify-center text-neutral-500 font-bold">Google Maps Placeholder</div>
                    </div>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};