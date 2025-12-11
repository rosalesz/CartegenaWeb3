import React from 'react';
import { Twitter, Linkedin, MessageCircle, MapPin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center text-white">
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">Cartagena<span className="text-brand-500">Tech</span></span>
            </div>
            <p className="max-w-sm mb-6">
              Empoderando la próxima generación de innovación Web3. Uniendo tecnología y el estilo de vida caribeño.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><MessageCircle size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Plataforma</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Espacios de Coworking</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Sandbox Legal</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Eventos</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Mentoría</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 shrink-0" />
                <span>Zona Norte, Km 12<br />Cartagena, Colombia</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 shrink-0" />
                <span>hello@cartagenatech.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Cartagena Tech Park. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Política de Privacidad</a>
            <a href="#" className="hover:text-white">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};