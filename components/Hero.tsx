import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-brand-50 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-slate-50 rounded-full blur-3xl opacity-50 -z-10" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-50 text-brand-600 text-sm font-semibold mb-6 tracking-wide uppercase">
              El Hub de Innovación del Caribe
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
              Construye el futuro de <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-teal-400">Web3 en Cartagena.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 mb-10 max-w-2xl leading-relaxed">
              Un ecosistema físico y digital diseñado para startups, inversores y visionarios. 
              Conecta, crea y escala desde el corazón de las Américas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                <span>Empezar a Construir</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <PlayCircle className="mr-2 w-5 h-5 text-slate-400 group-hover:text-brand-500 transition-colors" />
                <span>Ver la Visión</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Abstract Grid Graphic */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] border border-slate-100 rounded-full opacity-20 pointer-events-none -z-10 md:block hidden">
        <div className="absolute inset-0 border border-slate-100 rounded-full scale-75" />
        <div className="absolute inset-0 border border-slate-100 rounded-full scale-50" />
      </div>
    </section>
  );
};