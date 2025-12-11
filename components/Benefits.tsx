import React from 'react';
import { LayoutGrid, Network, Sun, ShieldCheck, Zap, Globe2 } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';
import { BenefitProps } from '../types';

const benefits: BenefitProps[] = [
  {
    title: "Ubicación Estratégica",
    description: "Ubicado en el corazón de Cartagena, patrimonio de la UNESCO, uniendo Norte y Suramérica con vuelos directos a los principales hubs.",
    icon: Globe2
  },
  {
    title: "Sandbox Web3",
    description: "Accede a un sandbox regulatorio especializado diseñado para pilotos blockchain, innovación DeFi y proyectos de tokenización.",
    icon: LayoutGrid
  },
  {
    title: "Red Global",
    description: "Conexión directa con firmas de VC, aceleradoras y socios tecnológicos en Silicon Valley, Europa y LATAM.",
    icon: Network
  },
  {
    title: "Estilo de Vida Tropical",
    description: "Trabaja donde otros vacacionan. Conectividad de fibra de alta velocidad junto a playas caribeñas y una rica cultura.",
    icon: Sun
  },
  {
    title: "Marco Legal",
    description: "Constitución de empresas simplificada y soporte legal especializado para negocios de activos digitales.",
    icon: ShieldCheck
  },
  {
    title: "Energía Verde",
    description: "Comprometidos con la sostenibilidad con infraestructura de energía 100% renovable alimentando nuestros centros de datos.",
    icon: Zap
  }
];

export const Benefits: React.FC = () => {
  return (
    <SectionWrapper id="benefits" background="gray">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        <div className="lg:col-span-3 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            ¿Por qué Cartagena Tech Park?
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl">
            Proporcionamos la infraestructura, comunidad y claridad legal necesaria para que las empresas tecnológicas de próxima generación prosperen.
          </p>
        </div>
        
        {benefits.map((benefit, index) => (
          <div key={index} className="group p-8 bg-white rounded-2xl border border-slate-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300">
            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 mb-6 group-hover:bg-brand-500 group-hover:text-white transition-colors">
              <benefit.icon size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">{benefit.title}</h3>
            <p className="text-slate-500 leading-relaxed">{benefit.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};