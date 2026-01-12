import React from 'react';
import { Coffee, Armchair, Utensils } from 'lucide-react';

export const Specialty: React.FC = () => {
  const specialties = [
    {
      id: 1,
      icon: <Coffee size={32} strokeWidth={1.5} />,
      title: "至福の一杯",
      description: "厳選された豆を使用し、注文を受けてから豆を挽き、丁寧にハンドドリップで抽出します。香り立つ湯気とともに、心安らぐ至福の時間をお届けします。",
      image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      icon: <Armchair size={32} strokeWidth={1.5} />,
      title: "静寂の空間",
      description: "木の温もりを感じるアンティーク家具と、窓から差し込む柔らかな光。BGMは控えめに、読書や物思いに耽るのに最適な空間づくりを心がけています。",
      image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      icon: <Utensils size={32} strokeWidth={1.5} />,
      title: "地元の恵み",
      description: "岡山の新鮮な卵や野菜を使用したモーニングとランチ。シンプルだからこそ、素材の味が引き立つ、毎日食べても飽きない料理をご提供します。",
      image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-accent tracking-widest uppercase text-sm font-bold">Our Specialty</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-coffee-dark">涼月のこだわり</h2>
        <div className="w-16 h-1 bg-accent mx-auto mt-6"></div>
      </div>

      <div className="space-y-24">
        {specialties.map((item, index) => (
          <div key={item.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}>
            
            <div className="w-full md:w-1/2 relative group">
              <div className={`absolute -inset-4 border-2 border-coffee-light/20 rounded-lg transform ${index % 2 === 1 ? '-translate-x-2' : 'translate-x-2'} translate-y-2 z-0 transition-transform duration-500`}></div>
              <div className="relative overflow-hidden rounded-lg shadow-lg aspect-[4/3]">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
              <div className={`flex items-center gap-3 justify-center ${index % 2 === 1 ? 'md:justify-end' : 'md:justify-start'} text-accent mb-2`}>
                {item.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-coffee-dark">
                {item.title}
              </h3>
              <p className="text-coffee-med leading-loose font-sans">
                {item.description}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};