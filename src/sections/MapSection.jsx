import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { regions } from '../data/regions'; // Senin koordinat verilerin
import L from 'leaflet';

// Harita ikonlarının doğru görünmesi için küçük bir ayar
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapSection = () => {
  const center = [39.9334, 32.8597]; // Ankara Merkez koordinatı

  return (
    <section id="bolgeler" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Hizmet Bölgelerimiz</h2>
          <p className="text-gray-600">Ankara'nın tüm bu noktalarına ekipmanlarımızla geliyoruz.</p>
          <div className="w-24 h-1 bg-green-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
          <MapContainer center={center} zoom={10} scrollWheelZoom={false} className="h-full w-full">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {regions.map((region, index) => (
              <Marker key={index} position={[region.lat, region.lng]}>
                <Popup>
                  <div className="font-bold text-green-700">{region.name}</div>
                  <div>Hızlı ve kaliteli çim biçme hizmeti.</div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default MapSection;