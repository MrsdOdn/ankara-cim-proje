import React from 'react';
import logo from '../assets/tamlogo.png'; // Logonu buradan çekiyoruz

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white pt-16 pb-8 border-t border-green-900/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
          {/* 3. Sütun: Sosyal Medya (Renkli ve Modern) */}
          <div id="sosyal-medya">
            <h5 className="text-green-500 font-bold uppercase tracking-widest text-sm mb-6">📱 SOSYAL MEDYA</h5>
            <div className="flex flex-col space-y-4">

              {/* Instagram */}
              <a href="https://www.instagram.com/ankaracimbicici?igsh=MWlsZDF1MzVhdXlsZA==" target="_blank" rel="noreferrer" className="group flex items-center">
                <div className="w-10 h-10 flex items-center justify-center bg-[#E4405F] rounded-lg mr-3 group-hover:scale-110 transition-transform shadow-lg">
                  <svg role="img" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors font-medium">Instagram</span>
              </a>

              {/* YouTube */}
              <a href="https://www.youtube.com/@FatihErdogan-fk4te" target="_blank" rel="noreferrer" className="group flex items-center">
                <div className="w-10 h-10 flex items-center justify-center bg-[#FF0000] rounded-lg mr-3 group-hover:scale-110 transition-transform shadow-lg">
                  <svg role="img" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors font-medium">YouTube</span>
              </a>

              {/* Facebook */}
              <a href="https://www.facebook.com/share/1AAH98mPp2/" target="_blank" rel="noreferrer" className="group flex items-center">
                <div className="w-10 h-10 flex items-center justify-center bg-[#1877F2] rounded-lg mr-3 group-hover:scale-110 transition-transform shadow-lg">
                  <svg role="img" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors font-medium">Facebook</span>
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/905435498706?text=Merhaba,%20bahçe%20bakımı%20hakkında%20bilgi%20alabilir%20miyim?"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-[#25D366] rounded-lg mr-3 group-hover:scale-110 transition-transform shadow-lg">
                  <svg role="img" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors font-medium">WhatsApp</span>
              </a>

            </div>
          </div>

          {/* 1. Sütun: Adres */}
          <div>
            <h5 className="text-green-500 font-bold uppercase tracking-widest text-sm mb-6">📍 ADRESİMİZ</h5>
            <p className="text-gray-400 leading-relaxed text-lg">
              Altındağ<br />
              Ankara, Türkiye
            </p>
          </div>

          {/* 2. Sütun: İletişim */}
          <div>
            <h5 className="text-green-500 font-bold uppercase tracking-widest text-sm mb-6">📞 İLETİŞİM</h5>
            <a
              href="tel:+905435498706"
              className="text-2xl font-semibold hover:text-green-400 transition-colors"
            >
              +90 543 549 87 06
            </a>
            <p className="text-gray-500 mt-2 text-sm">Haftanın her günü hizmetinizdeyiz.</p>
          </div>

          {/* 4. Sütun: Logo */}
          <div className="flex flex-col items-center md:items-end">
            <img
              src={logo}
              alt="Ankara Çim Biçme Logo"
              className="h-32 w-auto object-contain drop-shadow-[0_0_15px_rgba(34,197,94,0.3)]"
            />
          </div>

        </div>

        {/* Alt Bilgi */}
        <div className="mt-16 pt-8 border-t border-gray-900 text-center text-gray-500">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} <span className="text-green-600 font-medium">Ankara Çim Biçme Hizmeti</span>. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;