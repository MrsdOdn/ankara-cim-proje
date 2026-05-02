import React from 'react';
import { Play, Image as ImageIcon } from 'lucide-react';
import { projects } from '../data/projects'; // Veriyi buradan çekiyoruz

const Portfolio = () => {
  return (
    <section id="galeri" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Neler Başardık?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ankara'nın dört bir yanında güzelleştirdiğimiz bahçelerden bazı kareler.
          </p>
          <div className="w-24 h-1 bg-green-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="relative group overflow-hidden rounded-2xl bg-white shadow-lg h-72 cursor-pointer"
            >
              {/* Görsel/Video Önizleme */}
              <img 
                src={project.url} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Üzerine Gelince Çıkan Katman */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-6">
                {project.type === 'video' ? (
                  <div className="bg-green-600 p-3 rounded-full mb-3">
                    <Play fill="white" />
                  </div>
                ) : (
                  <div className="bg-white/20 p-3 rounded-full mb-3">
                    <ImageIcon />
                  </div>
                )}
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm text-gray-300 mt-2 text-center">{project.description}</p>
                <span className="mt-4 text-xs font-bold uppercase tracking-widest bg-green-600 px-3 py-1 rounded">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;