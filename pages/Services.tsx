
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="pt-32">
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto py-24">
        <p className="text-[#d4ff00] font-bold text-xs uppercase tracking-[0.3em] mb-6">Expertise</p>
        <h1 className="text-6xl md:text-9xl font-extrabold tracking-tighter leading-none uppercase mb-24">
          Services That <br /> Elevate Your <br /> Presentation
        </h1>

        <div className="space-y-48">
          {SERVICES.map((service, idx) => (
            <div key={service.id} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-24 items-center`}>
              <div className="flex-1 relative aspect-[4/3] w-full group overflow-hidden">
                <img 
                  src={service.imageUrl} 
                  className="w-full h-full object-cover object-center grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" 
                  alt={service.title} 
                />
              </div>
              <div className="flex-1 space-y-8">
                <span className="text-4xl font-extrabold opacity-10 font-mono">0{idx + 1}</span>
                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">{service.title}</h2>
                <p className="text-xl text-gray-400 leading-relaxed font-light">{service.description}</p>
                <div className="pt-8">
                  <ul className="grid grid-cols-2 gap-4 text-sm font-bold uppercase tracking-widest text-[#d4ff00]">
                    <li>• Photorealism</li>
                    <li>• Dynamic Lighting</li>
                    <li>• Context Mapping</li>
                    <li>• 8K Resolution</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA section integrated in bottom */}
      <section className="bg-[#111] py-32 px-6">
        <div className="max-w-[1400px] mx-auto text-center space-y-12">
          <h2 className="text-5xl font-extrabold tracking-tighter italic">Ready to see your project in full light?</h2>
          <button className="bg-white text-black px-12 py-6 font-extrabold uppercase tracking-[0.2em] hover:bg-[#d4ff00] transition-colors">
            Request a Quote
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
