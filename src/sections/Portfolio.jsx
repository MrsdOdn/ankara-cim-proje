import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Image as ImageIcon } from 'lucide-react';
import { projects } from '../data/projects';

const PortfolioSlider = ({ title, data, isVideo }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const getEmbedUrl = (url) => {
    if (!url) return "";
    let videoId = "";
    if (url.includes('shorts/')) {
      videoId = url.split('shorts/')[1].split(/[?#&]/)[0];
    } else if (url.includes('v=')) {
      videoId = url.split('v=')[1].split(/[?#&]/)[0];
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1].split(/[?#&]/)[0];
    }
    return videoId 
      ? `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&enablejsapi=1&origin=${window.location.origin}` 
      : url;
  };

  const currentItem = data[currentIndex];

  return (
    <div className="w-full lg:w-1/2 flex flex-col mb-16 px-2">
      <div className="flex items-center gap-3 mb-6 px-2">
        <div className={`p-2.5 rounded-xl ${isVideo ? 'bg-red-600' : 'bg-green-600'} text-white shadow-lg`}>
          {isVideo ? <Play size={20} fill="white" /> : <ImageIcon size={20} />}
        </div>
        <h3 className="text-xl font-extrabold text-gray-800 uppercase tracking-tight italic">{title}</h3>
      </div>

      <div className="relative group bg-zinc-950 rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] aspect-[4/3] sm:aspect-square lg:aspect-[4/3]">
        <div className="w-full h-full">
          {isVideo ? (
            <iframe
              key={currentItem.url}
              className="w-full h-full border-0"
              src={getEmbedUrl(currentItem.url)}
              title={currentItem.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <div className="relative w-full h-full">
              <img 
                src={currentItem.url} 
                alt={currentItem.title} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                <h4 className="text-white text-xl font-bold uppercase italic">{currentItem.title}</h4>
                <p className="text-gray-300 text-xs mt-1 opacity-90">{currentItem.description}</p>
              </div>
            </div>
          )}
        </div>

        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all z-20 border border-white/10">
          <ChevronLeft size={20} />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all z-20 border border-white/10">
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="flex items-center justify-between mt-8 px-4">
        <div className="flex gap-2 flex-1 max-w-[200px]">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1 rounded-full transition-all duration-500 ease-out
                ${currentIndex === index 
                  ? (isVideo ? 'flex-[3] bg-red-600' : 'flex-[3] bg-green-600') 
                  : 'flex-1 bg-gray-200 hover:bg-gray-300'}`}
            />
          ))}
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest font-black text-gray-400">
            {isVideo ? 'Video' : 'Görsel'}
          </span>
          <span className="text-sm font-mono font-bold text-gray-800">
            {currentIndex + 1}<span className="text-gray-300 mx-1">/</span>{data.length}
          </span>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const videos = projects.filter(p => p.type === 'video');
  const photos = projects.filter(p => p.type === 'image');

  return (
    <section id="galeri" className="py-24 bg-[#fafafa]">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* ANA BAŞLIK - BOYUTU KÜÇÜLTÜLDÜ VE ORTALANDI */}
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter uppercase italic leading-tight">
            NELER <span className="text-green-600">BAŞARDIK?</span>
          </h2>
          <div className="h-1.5 w-24 bg-green-600 mt-4 rounded-full shadow-sm"></div>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-16 items-start">
          <PortfolioSlider title="Uygulama Videoları" data={videos} isVideo={true} />
          <PortfolioSlider title="Tamamlanan İşler" data={photos} isVideo={false} />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;