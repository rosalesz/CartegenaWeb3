import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { TestimonialProps } from '../types';

const testimonials: TestimonialProps[] = [
  {
    quote: "Mudar nuestra sede al Cartagena Tech Park fue la mejor decisión. La mezcla de estilo de vida y talento técnico es inigualable en LATAM.",
    author: "Elena Rodriguez",
    role: "CEO",
    company: "FinTech Soluciones",
    avatarUrl: "https://picsum.photos/100/100?random=10"
  },
  {
    quote: "El sandbox regulatorio nos permitió pilotar nuestra plataforma de tokenización meses antes de lo previsto. El apoyo aquí es real.",
    author: "David Chen",
    role: "Co-Founder",
    company: "BlockEstate",
    avatarUrl: "https://picsum.photos/100/100?random=11"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <SectionWrapper id="testimonials" background="gray">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
            Voces del Ecosistema
          </h2>
          <p className="text-lg text-slate-500 mb-8 max-w-md">
            Únete a una comunidad de +50 startups y +200 fundadores redefiniendo el futuro de la tecnología desde el Caribe.
          </p>
          
          <div className="flex -space-x-4">
            {[1,2,3,4].map(i => (
              <img 
                key={i} 
                src={`https://picsum.photos/100/100?random=${20+i}`} 
                alt="Member" 
                className="w-12 h-12 rounded-full border-2 border-slate-50"
              />
            ))}
            <div className="w-12 h-12 rounded-full border-2 border-slate-50 bg-brand-100 flex items-center justify-center text-brand-700 font-semibold text-xs">
              +200
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-slate-700 text-lg mb-6 leading-relaxed">"{item.quote}"</p>
              <div className="flex items-center">
                <img src={item.avatarUrl} alt={item.author} className="w-10 h-10 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{item.author}</h4>
                  <p className="text-slate-400 text-xs uppercase tracking-wide">{item.role}, {item.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};