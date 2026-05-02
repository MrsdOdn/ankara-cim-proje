import React from 'react';
import { Award, Zap, ShieldCheck } from 'lucide-react';

const reasons = [
  {
    title: "Uzman İşçilik",
    description: "Deneyimli ekibimizle her bahçeye kendi mülkümüz gibi özen gösteriyoruz.",
    icon: <Award className="w-8 h-8" />
  },
  {
    title: "Hızlı Randevu",
    description: "Ankara trafiğinde ve yoğunluğunda sizi bekletmiyor, takvimimize sadık kalıyoruz.",
    icon: <Zap className="w-8 h-8" />
  },
  {
    title: "Temiz İşçilik",
    description: "Modern ekipmanlarımızla sadece biçmiyoruz, bahçenizi tertemiz teslim ediyoruz.",
    icon: <ShieldCheck className="w-8 h-8" />
  }
];

const Features = () => {
  return (
    <section id="neden-biz" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-green-900 rounded-[3rem] p-12 md:p-20 text-white flex flex-col lg:flex-row items-center gap-12 shadow-2xl">
          <div className="lg:w-1/3 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Neden Biz?</h2>
            <p className="text-green-100 text-lg">
              Ankara Altındağ merkezli ekibimizle fark yaratıyoruz.
            </p>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="flex flex-col items-center lg:items-start text-center lg:text-left group">
                <div className="text-green-400 mb-4 group-hover:scale-110 transition-transform">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                <p className="text-green-100/70 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;