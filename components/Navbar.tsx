import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Ecosistema', href: '#benefits' },
  { label: 'Portafolio', href: '#portfolio' },
  { label: 'Comunidad', href: '#testimonials' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-100 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center text-white">
            <Globe size={20} />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900">Cartagena<span className="text-brand-500">Tech</span></span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-brand-500 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact"
            className="group flex items-center space-x-2 bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors"
          >
            <span>Unirse a la Red</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              {navItems.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href}
                  className="text-lg font-medium text-slate-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="#contact"
                className="inline-flex justify-center items-center space-x-2 bg-brand-500 text-white px-5 py-3 rounded-xl font-medium"
                onClick={() => setIsOpen(false)}
              >
                <span>Unirse a la Red</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};