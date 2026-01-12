import React from 'react';
import { MenuItem } from '../types';

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
}

export const MenuSection: React.FC<MenuSectionProps> = ({ title, items }) => {
  return (
    <div className="animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <div key={item.id} className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-coffee-dark/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex gap-2">
                  {item.tags?.map(tag => (
                    <span key={tag} className="text-xs bg-accent/90 text-coffee-dark px-2 py-1 rounded-full font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6 relative">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-bold font-serif text-coffee-dark">{item.name}</h3>
                <span className="font-serif text-lg text-accent font-bold">¥{item.price}</span>
              </div>
              <p className="text-coffee-light text-sm leading-relaxed mb-4 min-h-[40px]">
                {item.description}
              </p>
              <div className="w-full h-[1px] bg-coffee-light/10 group-hover:bg-accent/50 transition-colors"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};