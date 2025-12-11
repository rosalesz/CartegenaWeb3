import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { ProjectProps } from '../types';
import { ArrowUpRight } from 'lucide-react';

const projects: ProjectProps[] = [
  {
    title: "CaribeDAO",
    category: "DeFi / Gobernanza",
    description: "Una organización autónoma descentralizada financiando proyectos de turismo regenerativo a lo largo de la costa.",
    imageUrl: "https://picsum.photos/800/600?random=1"
  },
  {
    title: "LogisChain",
    category: "Cadena de Suministro",
    description: "Seguimiento basado en blockchain para logística marítima conectando el Puerto de Cartagena con el mundo.",
    imageUrl: "https://picsum.photos/800/600?random=2"
  },
  {
    title: "ArteNat",
    category: "Mercado NFT",
    description: "Empoderando artesanos locales tokenizando artesanías tradicionales colombianas para coleccionistas globales.",
    imageUrl: "https://picsum.photos/800/600?random=3"
  }
];

export const Portfolio: React.FC = () => {
  return (
    <SectionWrapper id="portfolio">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Construido en Cartagena
          </h2>
          <p className="text-lg text-slate-500 max-w-xl">
            Descubre las startups pioneras que llaman hogar a nuestro ecosistema.
          </p>
        </div>
        <a href="#" className="hidden md:flex items-center text-brand-600 font-medium hover:text-brand-700 mt-4 md:mt-0">
          Ver todos los proyectos <ArrowUpRight size={18} className="ml-1" />
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl mb-6 bg-slate-100 aspect-[4/3]">
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors z-10" />
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-slate-900 z-20">
                {project.category}
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
              {project.title}
            </h3>
            <p className="text-slate-500 line-clamp-2">
              {project.description}
            </p>
          </div>
        ))}
      </div>
      
      <div className="mt-8 md:hidden">
        <a href="#" className="flex items-center text-brand-600 font-medium hover:text-brand-700">
          Ver todos los proyectos <ArrowUpRight size={18} className="ml-1" />
        </a>
      </div>
    </SectionWrapper>
  );
};