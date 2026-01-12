import React from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/431/1920/1080" 
          alt="Coffee Shop Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-coffee-dark/70 via-coffee-dark/50 to-coffee-dark/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 animate-fade-in-up">
        <p className="text-accent tracking-[0.3em] text-sm md:text-base mb-4 font-sans font-bold uppercase">Est. 2025.05.01</p>
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
          月明かりのように、<br />
          心静かな時間を。
        </h1>
        <p className="font-sans text-stone-200 max-w-lg mx-auto leading-relaxed mb-10 text-sm md:text-base">
          岡山の地で紡ぐ、安らぎのひととき。<br />
          モーニングからランチまで、<br className="md:hidden" />こだわりの珈琲と共にお待ちしております。
        </p>
        
        <button 
          onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-accent text-coffee-dark px-8 py-3 rounded-full font-bold hover:bg-white transition-colors duration-300 shadow-lg"
        >
          お品書きを見る
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce text-white/50">
        <ChevronDown size={32} />
      </div>
    </div>
  );
};