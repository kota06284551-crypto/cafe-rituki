import React, { useState, useEffect } from 'react';
import { Coffee, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-coffee-dark/95 shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between text-white">
        {/* Logo */}
        <div 
          onClick={() => scrollToSection('home')} 
          className="flex items-center gap-2 cursor-pointer font-serif"
        >
          <div className="p-2 bg-accent rounded-full text-coffee-dark">
            <Coffee size={24} />
          </div>
          <span className="text-xl md:text-2xl font-bold tracking-widest">喫茶 涼月</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm tracking-widest font-medium">
          <button onClick={() => scrollToSection('about')} className="hover:text-accent transition-colors">当店について</button>
          <button onClick={() => scrollToSection('specialty')} className="hover:text-accent transition-colors">こだわり</button>
          <button onClick={() => scrollToSection('menu')} className="hover:text-accent transition-colors">お品書き</button>
          <button onClick={() => scrollToSection('access')} className="hover:text-accent transition-colors">店舗情報</button>
          <button 
            onClick={() => scrollToSection('access')} 
            className="border border-accent text-accent px-4 py-2 rounded hover:bg-accent hover:text-coffee-dark transition-all"
          >
            お問い合わせ
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-coffee-dark/95 border-t border-white/10 overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col items-center gap-6 py-8 text-white font-serif">
          <button onClick={() => scrollToSection('about')} className="text-lg hover:text-accent">当店について</button>
          <button onClick={() => scrollToSection('specialty')} className="text-lg hover:text-accent">こだわり</button>
          <button onClick={() => scrollToSection('menu')} className="text-lg hover:text-accent">お品書き</button>
          <button onClick={() => scrollToSection('access')} className="text-lg hover:text-accent">店舗情報</button>
        </div>
      </div>
    </nav>
  );
};