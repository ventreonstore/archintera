
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';
import Lightbox from '../components/Lightbox';

// Define grid span patterns for hierarchical layout
const GRID_SPANS = [
  'md:col-span-8 md:row-span-2',  // 1: HERO — largest
  'md:col-span-4 md:row-span-1',  // 2: sidebar top
  'md:col-span-4 md:row-span-1',  // 3: sidebar bottom
  'md:col-span-6 md:row-span-1',  // 4: half
  'md:col-span-6 md:row-span-1',  // 5: half
  'md:col-span-4 md:row-span-1',  // 6: third
  'md:col-span-4 md:row-span-1',  // 7: third
  'md:col-span-4 md:row-span-1',  // 8: third
];

const ASPECT_RATIOS = [
  'aspect-[16/10]',  // hero wide
  'aspect-[4/3]',    // sidebar
  'aspect-[4/3]',    // sidebar
  'aspect-[16/10]',  // half
  'aspect-[16/10]',  // half
  'aspect-[4/5]',    // third tall
  'aspect-[4/5]',    // third tall
  'aspect-[4/5]',    // third tall
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  
  const categories = ['All', 'Commercial Developments', 'Luxury Residential', 'Hospitality Architecture', 'Interior Visualization'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const lightboxItems = filteredProjects.map(p => ({
    src: p.imageUrl,
    title: p.title,
    category: `${p.category} // ${p.location}`
  }));

  return (
    <div className="pt-48 bg-[#050505] min-h-screen text-white">
      <section className="max-w-[1600px] mx-auto px-6 md:px-16 py-24">
        <div className="mb-24">
           <span className="text-[#d4ff00] font-black text-xs uppercase tracking-[0.6em] mb-6 block">Case Studies</span>
           <h1 className="text-7xl md:text-[10vw] font-black uppercase italic tracking-tighter leading-none mb-12">
             Selected <br /> <span className="text-outline">Commissions</span>
           </h1>
           
           <div className="flex flex-wrap gap-12 pt-12 border-t border-white/5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-[9px] uppercase tracking-[0.4em] font-black transition-all duration-500 relative group ${
                  filter === cat ? 'text-[#d4ff00]' : 'text-white/30 hover:text-white'
                }`}
              >
                {cat}
                <span className={`absolute -bottom-2 left-0 h-[1px] bg-[#d4ff00] transition-all duration-500 ${filter === cat ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Hierarchical Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 auto-rows-auto pb-48">
          {filteredProjects.map((project, idx) => {
            const spanClass = GRID_SPANS[idx % GRID_SPANS.length];
            const aspectClass = ASPECT_RATIOS[idx % ASPECT_RATIOS.length];
            return (
              <div 
                key={project.id} 
                className={`${spanClass} animate-slide-up`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <ProjectCard 
                  project={project} 
                  className={`w-full h-full min-h-[300px] ${aspectClass}`} 
                  onClick={() => setLightboxIndex(idx)}
                />
              </div>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-48 text-center border-t border-white/5">
            <p className="text-gray-500 text-xl font-syne uppercase tracking-widest">Archive empty</p>
          </div>
        )}
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox 
          items={lightboxItems}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(i) => setLightboxIndex(i)}
        />
      )}

      <style>{`
        .text-outline {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
          color: transparent;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
