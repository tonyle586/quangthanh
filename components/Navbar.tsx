import React, { useState, useEffect } from 'react';
import { useApp } from '../context';
import { TRANSLATIONS } from '../constants';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, setLanguage, theme, toggleTheme, currentPage, setCurrentPage } = useApp();
  const t = TRANSLATIONS[language].nav;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: t.home },
    { id: 'about', label: t.about },
    { id: 'services', label: t.services },
    { id: 'gallery', label: t.gallery },
    { id: 'contact', label: t.contact },
  ] as const;

  const handleNavClick = (page: any) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-charcoal-900/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
            className="text-2xl font-serif font-bold text-neutral-900 dark:text-gold-500 cursor-pointer"
            onClick={() => handleNavClick('home')}
        >
          QUANG THANH
          <span className="block text-xs font-sans font-light tracking-widest text-neutral-600 dark:text-neutral-300">STUDIO</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-sm font-medium tracking-wide transition-colors ${
                currentPage === link.id
                  ? 'text-gold-600 dark:text-gold-500'
                  : 'text-neutral-700 dark:text-neutral-300 hover:text-gold-600 dark:hover:text-gold-400'
              }`}
            >
              {link.label}
            </button>
          ))}
          
          <button 
            onClick={() => handleNavClick('contact')}
            className="bg-gold-500 hover:bg-gold-600 text-white text-xs font-bold py-2 px-4 rounded-sm transition-all shadow-md"
          >
            {t.bookNow}
          </button>

          <div className="flex items-center space-x-4 border-l border-neutral-300 dark:border-neutral-700 pl-4">
             {/* Lang Switch */}
             <button
              onClick={() => setLanguage(language === 'vi' ? 'en' : 'vi')}
              className="flex items-center text-neutral-700 dark:text-neutral-300 hover:text-gold-500 transition-colors"
            >
              <Globe className="w-4 h-4 mr-1" />
              <span className="text-xs font-bold">{language.toUpperCase()}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="text-neutral-700 dark:text-neutral-300 hover:text-gold-500 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
           <button
              onClick={toggleTheme}
              className="text-neutral-700 dark:text-neutral-100"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-neutral-900 dark:text-white" />
            ) : (
              <Menu className="w-6 h-6 text-neutral-900 dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-charcoal-900 shadow-xl border-t border-neutral-200 dark:border-neutral-800">
          <div className="flex flex-col py-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="py-3 px-6 text-left text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 font-medium"
              >
                {link.label}
              </button>
            ))}
             <div className="flex items-center justify-between px-6 py-4 border-t border-neutral-200 dark:border-neutral-800">
                <span className="text-sm text-neutral-500">Language</span>
                <button
                  onClick={() => {
                      setLanguage(language === 'vi' ? 'en' : 'vi');
                      setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center text-gold-600 dark:text-gold-400 font-bold"
                >
                  <Globe className="w-4 h-4 mr-1" />
                  {language.toUpperCase()}
                </button>
             </div>
          </div>
        </div>
      )}
    </nav>
  );
};