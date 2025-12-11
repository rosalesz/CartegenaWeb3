import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Button } from './Button';

export const CTA: React.FC = () => {
  return (
    <SectionWrapper id="contact">
      <div className="bg-brand-500 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-900 opacity-10 rounded-full -translate-x-1/2 translate-y-1/2" />
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            ¿Listo para escalar tu visión?
          </h2>
          <p className="text-lg md:text-xl text-brand-50 mb-10 leading-relaxed">
            Aplica ahora para nuestra próxima cohorte de incubación o agenda un recorrido por el campus. 
            Cupos limitados para el Q3 2024.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-brand-900 hover:bg-brand-50 focus:ring-white">
              Aplicar a Incubación
            </Button>
            <Button size="lg" variant="outline" className="border-brand-200 text-white hover:bg-brand-600 hover:border-brand-600 focus:ring-brand-200">
              Agendar Visita
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};