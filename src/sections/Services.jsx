import React from 'react';
import { Scissors, Clock, CheckCircle2, Sparkles } from 'lucide-react';

const services = [
  {
    title: "Planlı Kesim",
    description: "Bahçenizin yapısına göre en uygun kesim yüksekliğini belirliyor ve randevu saatinizde kapınızda oluyoruz.",
    icon: <Clock className="w-10 h-10 text-green-600"/>,
  },
  {
    title: "Kusursuz Biçim",
    description: "Keskin bıçaklı profesyonel makinelerimizle çimleri ezmeden, sağlıklı ve eşit bir şekilde kısaltıyoruz.",
    icon: <Scissors className="w-10 h-10 text-green-600"/>,
  },
  {
    title: "Hassas Kenarlar",
    description: "Duvar dipleri ve ağaç kenarları gibi zor noktaları detaylıca temizleyerek kusursuz bir görünüm sunuyoruz.",
    icon: <Sparkles className="w-10 h-10 text-green-600"/>,
  },
  {
    title: "Tertemiz Teslim",
    description: "İşlem sonrası tüm atıkları topluyor, bahçenizi pırıl pırıl ve kullanıma hazır şekilde teslim ediyoruz.",
    icon: <CheckCircle2 className="w-10 h-10 text-green-600"/>,
  },
];

const Services = () => {
  return (
    <section id="hizmetler" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Bahçeniz İçin <span className="text-green-600">Adım Adım</span> Mükemmellik
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ankara'nın en bakımlı bahçeleri için tek odağımız olan çim biçme hizmetinde disiplinli bir süreç uyguluyoruz.
          </p>
          <div className="w-24 h-1.5 bg-green-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-8 bg-gray-50 rounded-3xl hover:bg-white transition-all duration-300 group border border-transparent hover:border-green-100 hover:shadow-2xl shadow-sm"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;