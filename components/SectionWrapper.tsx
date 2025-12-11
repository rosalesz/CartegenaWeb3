import React from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray';
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
  children, 
  className = '', 
  id,
  background = 'white'
}) => {
  return (
    <section 
      id={id} 
      className={`py-20 md:py-32 ${background === 'gray' ? 'bg-slate-50' : 'bg-white'} ${className}`}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};