import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroBg from '../assets/hero.jpeg'; // 1. Arka plan resmi için değişken tanımlıyoruz

const Hero = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Arka Plan Resmi */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} // 2. Değişken olarak buraya yerleştiriyoruz
          alt="Ankara Çim Biçme Hizmeti" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* İçerik Yazıları */}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
          🌿 Bahçeniz Bizimle <span className="text-green-400">Nefes</span> Alsın!
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-200 mb-10 font-medium max-w-3xl mx-auto italic">
          "Siz Hayal Edin, Biz Biçelim! Çimleriniz kısa, kaliteniz uzun olsun."
        </p>

        <p className="text-md md:text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
          Altındağ merkezli profesyonel ekibimizle Ankara’nın dört bir yanında bahçenize değer katıyoruz.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a 
            href="#hizmetler" 
            className="bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-700 transition flex items-center justify-center shadow-2xl shadow-green-900/20"
          >
            Hizmetlerimizi Gör <ArrowRight className="ml-2" />
          </a>
          <a 
            href="https://wa.me/905435498706?text=Merhaba%2C%20bah%C3%A7e%20bak%C4%B1m%C4%B1%20hizmetinizle%20ilgileniyorum." 
            target="_blank"
            rel="noreferrer"
            className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-2xl"
          >
            WhatsApp'tan Yaz
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;