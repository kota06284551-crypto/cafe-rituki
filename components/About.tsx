import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="relative group">
        <div className="absolute -inset-4 border-2 border-coffee-light/30 rounded-lg transform translate-x-2 translate-y-2 z-0 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500"></div>
        <img 
          src="https://picsum.photos/id/225/600/800" 
          alt="Pouring Coffee" 
          className="relative z-10 rounded shadow-lg w-full h-[400px] md:h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
        />
      </div>
      
      <div className="space-y-6">
        <span className="text-accent font-bold tracking-widest text-sm uppercase">About Us</span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-coffee-dark leading-tight">
          涼やかな月夜のような<br />
          静寂と寛ぎを。
        </h2>
        <div className="w-12 h-1 bg-accent"></div>
        <p className="text-coffee-med leading-loose font-sans">
          2025年5月、岡山県岡山市北区下伊福上町にオープン。<br/>
          「喫茶 涼月」は、日常の喧騒を忘れ、月を見上げる時のように<br/>
          心を落ち着かせられる場所でありたいと願っています。
        </p>
        <p className="text-coffee-med leading-loose font-sans">
          香り高い珈琲はもちろん、一日の始まりを彩るモーニング、<br/>
          そして心もお腹も満たすランチをご用意しております。<br/>
          代表 谷住一夫が心を込めて、皆様をお迎えいたします。
        </p>
        
        <div className="pt-4 flex gap-4">
           <div className="flex flex-col items-center bg-white p-4 rounded shadow-sm min-w-[100px]">
             <span className="text-sm text-coffee-light mb-1">Open</span>
             <span className="text-xl font-serif text-coffee-dark font-bold">2025</span>
             <span className="text-xs text-coffee-light mt-1">May 1st</span>
           </div>
           <div className="flex flex-col items-center bg-white p-4 rounded shadow-sm min-w-[100px]">
             <span className="text-sm text-coffee-light mb-1">Location</span>
             <span className="text-lg font-serif text-coffee-dark font-bold">Okayama</span>
           </div>
        </div>
      </div>
    </div>
  );
};