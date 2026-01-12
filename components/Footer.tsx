import React from 'react';
import { Coffee, Instagram, Twitter, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-coffee-dark text-paper/80 py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-4 text-white">
                <Coffee size={24} className="text-accent" />
                <span className="text-xl font-bold font-serif tracking-widest">喫茶 涼月</span>
             </div>
             <p className="text-sm leading-relaxed">
               代表: 谷住一夫<br/>
               心静かな時間を、あなたに。
             </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Sitemap</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => document.getElementById('home')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-accent transition-colors">Home</button></li>
              <li><button onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-accent transition-colors">About Us</button></li>
              <li><button onClick={() => document.getElementById('menu')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-accent transition-colors">Menu</button></li>
              <li><button onClick={() => document.getElementById('access')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-accent transition-colors">Access</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="break-all">cafe-rituki@outlook.jp</li>
              <li>岡山県岡山市北区<br/>下伊福上町3-1</li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold mb-4">Follow Us</h4>
             <div className="flex gap-4">
                <a href="#" className="hover:text-accent transition-colors"><Instagram size={20} /></a>
                <a href="#" className="hover:text-accent transition-colors"><Twitter size={20} /></a>
                <a href="#" className="hover:text-accent transition-colors"><Facebook size={20} /></a>
             </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Kissaten Ryotsuki. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};