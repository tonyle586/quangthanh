import React from 'react';
import { useApp } from '../context';
import { TRANSLATIONS } from '../constants';
import { Facebook, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language } = useApp();
  const t = TRANSLATIONS[language];

  return (
    <footer className="bg-neutral-100 dark:bg-charcoal-950 pt-16 pb-8 border-t border-neutral-200 dark:border-charcoal-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-3xl font-serif font-bold text-neutral-900 dark:text-gold-500">
              QUANG THANH
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {language === 'vi' 
                ? 'Nâng tầm hình ảnh và âm thanh của bạn với chất lượng nghệ thuật đỉnh cao.' 
                : 'Elevating your visual and audio identity with supreme artistic quality.'}
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-charcoal-800 flex items-center justify-center text-neutral-700 dark:text-gold-500 hover:bg-gold-500 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-charcoal-800 flex items-center justify-center text-neutral-700 dark:text-gold-500 hover:bg-gold-500 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-charcoal-800 flex items-center justify-center text-neutral-700 dark:text-gold-500 hover:bg-gold-500 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-4">
              {t.contact.title}
            </h3>
            <div className="flex items-start space-x-3 text-neutral-600 dark:text-neutral-400">
              <MapPin className="w-5 h-5 mt-1 shrink-0 text-gold-500" />
              <div>
                <p className="font-semibold text-neutral-800 dark:text-neutral-200">{t.contact.vungTau}</p>
                <p className="text-sm">123 Le Hong Phong, Ward 7</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 text-neutral-600 dark:text-neutral-400">
              <MapPin className="w-5 h-5 mt-1 shrink-0 text-gold-500" />
              <div>
                <p className="font-semibold text-neutral-800 dark:text-neutral-200">{t.contact.hcmc}</p>
                <p className="text-sm">456 Nguyen Hue, District 1</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-neutral-600 dark:text-neutral-400 pt-2">
              <Phone className="w-5 h-5 text-gold-500" />
              <p>+84 90 123 4567</p>
            </div>
            <div className="flex items-center space-x-3 text-neutral-600 dark:text-neutral-400">
              <Mail className="w-5 h-5 text-gold-500" />
              <p>booking@quangthanhstudio.com</p>
            </div>
          </div>

          {/* Quick Links (Simplified) */}
          <div>
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-4">
              Instagram Feed
            </h3>
             <div className="grid grid-cols-3 gap-2">
               {[1,2,3,4,5,6].map(i => (
                 <div key={i} className="aspect-square bg-neutral-300 dark:bg-neutral-800 overflow-hidden rounded-md">
                   <img src={`https://picsum.photos/150/150?random=${i+20}`} alt="Instagram" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                 </div>
               ))}
             </div>
          </div>
        </div>

        <div className="border-t border-neutral-200 dark:border-charcoal-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500 dark:text-neutral-500">
          <p>{t.footer.rights}</p>
          <div className="mt-2 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-gold-500">Privacy Policy</a>
            <a href="#" className="hover:text-gold-500">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};