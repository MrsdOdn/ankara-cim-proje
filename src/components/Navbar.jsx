import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Menü linkine tıklandığında menüyü kapatmak için
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm fixed w-full z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Kısmı */}
          <div className="flex-shrink-0 flex items-center">
            <img src={logo} alt="Ankara Çim Biçme Logo" className="w-13 h-13 object-contain mr-2" />
            <span className="text-xl font-black text-gray-800 tracking-tighter">
              ANKARA <span className="text-green-600">ÇİM BİÇME</span>
            </span>
          </div>

          {/* Masaüstü Menü */}
          <div className="hidden md:flex items-center space-x-10 text-sm font-semibold uppercase tracking-widest text-gray-600">
            <a href="#hizmetler" className="hover:text-green-600 transition">Hizmetler</a>
            <a href="#galeri" className="hover:text-green-600 transition">Galeri</a>
            <a href="#bolgeler" className="hover:text-green-600 transition">Bölgeler</a>
            <a 
              href="tel:+905435498706" 
              className="flex items-center bg-green-600 text-white px-5 py-2.5 rounded-full hover:bg-green-700 transition shadow-lg shadow-green-200"
            >
              <Phone size={18} className="mr-2" />
              HEMEN ARA
            </a>
          </div>

          {/* Mobil Menü Butonu */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Telefonlarda Açılan Menü */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-4">
          <a href="#hizmetler" onClick={closeMenu} className="block text-gray-700 font-bold py-2">Hizmetler</a>
          <a href="#galeri" onClick={closeMenu} className="block text-gray-700 font-bold py-2">Galeri</a>
          <a href="#bolgeler" onClick={closeMenu} className="block text-gray-700 font-bold py-2">Bölgeler</a>
          
          {/* Mobil "Hemen Ara" Butonu Düzenlendi */}
          <a 
            href="tel:+905435498706"
            className="flex items-center justify-center w-full bg-green-600 text-white py-3 rounded-xl font-bold shadow-md active:bg-green-700 transition"
          >
            <Phone size={20} className="mr-2" />
            HEMEN ARA
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;