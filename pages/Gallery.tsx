
import React, { useState } from 'react';
import { ArrowUpRight, Play, Maximize2 } from 'lucide-react';
import Lightbox from '../components/Lightbox';

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: string;
  span: string; // Tailwind grid span classes for hierarchical layout
  isVideo?: boolean;
}

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Commercial Developments', 'Luxury Residential', 'Hospitality Architecture', 'Interior Visualization'];

  // Data representing the 9 UNIQUE architectural visualization images (no overlap with Works)
  const items: GalleryItem[] = [
    // === ROW 1: Interior Focus ===
    { 
      id: 1, 
      src: '/images/kitchen_interior_01.png', 
      title: 'Monolith Kitchen — Bespoke Culinary Space', 
      category: 'Interior Visualization',
      span: 'md:col-span-8 md:row-span-2' // HERO — largest item
    },
    { 
      id: 2, 
      src: '/images/dining_interior_01.png', 
      title: 'Amber Dining Atelier', 
      category: 'Interior Visualization',
      span: 'md:col-span-4 md:row-span-1'
    },
    { 
      id: 3, 
      src: '/images/luxury_villa_dusk_01.png', 
      title: 'Dusk Pavilion Residence', 
      category: 'Luxury Residential',
      span: 'md:col-span-4 md:row-span-1'
    },

    // === ROW 2: Hospitality & Commercial ===
    { 
      id: 4, 
      src: '/images/luxury_resort_aerial_01.png', 
      title: 'Elysian Heights — Skyline Villas', 
      category: 'Hospitality Architecture',
      span: 'md:col-span-6 md:row-span-1'
    },
    { 
      id: 5, 
      src: '/images/luxury_resort_aerial_02.png', 
      title: 'Canopy Crest — Aerial Masterplan', 
      category: 'Commercial Developments',
      span: 'md:col-span-6 md:row-span-1'
    },

    // === ROW 3: Balcony & Masterplan ===
    { 
      id: 6, 
      src: '/images/luxury_balcony_view_01.png', 
      title: 'Horizon Terrace — Private Balcony Suite', 
      category: 'Interior Visualization',
      span: 'md:col-span-4 md:row-span-2' // TALL vertical accent
    },
    { 
      id: 7, 
      src: '/images/large_scale_residential_02.png', 
      title: 'Parkview Grand — Urban Masterplan', 
      category: 'Commercial Developments',
      span: 'md:col-span-8 md:row-span-2' // HERO — second large item
    },
    
    // === ROW 4: Commercial & Hospitality Finishes ===
    { 
      id: 8, 
      src: '/images/hero_vertex_hq.jpg', 
      title: 'Vertex HQ — Twilight Perspective', 
      category: 'Commercial Developments',
      span: 'md:col-span-6 md:row-span-1'
    },
    { 
      id: 9, 
      src: '/images/luxury_resort_bar_01.png', 
      title: 'The Onyx Lounge — Sky Bar', 
      category: 'Hospitality Architecture',
      span: 'md:col-span-6 md:row-span-1'
    }
  ];

  const filteredItems = activeFilter === 'All' 
    ? items 
    : items.filter(i => i.category === activeFilter);

  return (
    <div className="pt-48 bg-[#050505] min-h-screen text-white pb-32">
      <section className="max-w-[1600px] mx-auto px-6 md:px-16">
        <div className="mb-24">
          <div className="overflow-hidden mb-4">
            <span className="text-[#d4ff00] font-black text-xs uppercase tracking-[0.8em] block animate-slide-up">
              Visual Archive
            </span>
          </div>
          <h1 className="text-7xl md:text-[10vw] font-black uppercase italic tracking-tighter leading-none mb-12">
            The <span className="text-outline">Gallery</span>
          </h1>
          
          {/* Navigation Category Filter */}
          <div className="flex flex-wrap gap-x-12 gap-y-6 pt-12 border-t border-white/5">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveFilter(c)}
                className={`text-[11px] uppercase font-black tracking-[0.4em] transition-all duration-700 relative group ${
                  activeFilter === c ? 'text-[#d4ff00]' : 'text-white/20 hover:text-white'
                }`}
              >
                {c}
                <span className={`absolute -bottom-3 left-0 h-[2px] bg-[#d4ff00] transition-all duration-700 ${activeFilter === c ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Hierarchical Mosaic Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 auto-rows-[300px] md:auto-rows-[450px]">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`relative overflow-hidden group cursor-pointer bg-[#0a0a0a] border border-white/5 transition-all duration-1000 hover:border-[#d4ff00]/30 animate-slide-up ${item.span}`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setLightboxIndex(index)}
            >
              <img 
                src={item.src} 
                className="w-full h-full object-cover object-center grayscale brightness-[0.4] transition-all duration-[2s] cubic-bezier(0.16, 1, 0.3, 1) group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-[1.03]"
                alt={item.title}
                loading="lazy"
              />
              
              {/* Image Information Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-8 md:p-12">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                  <span className="text-[#d4ff00] font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">
                    {item.category} // ARCHINTERA
                  </span>
                  <div className="flex justify-between items-end gap-6">
                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-black uppercase italic tracking-tighter leading-none">
                      {item.title}
                    </h3>
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-[#d4ff00] rounded-full flex items-center justify-center text-black transform group-hover:scale-110 transition-transform flex-shrink-0">
                      {item.isVideo ? <Play fill="currentColor" size={24} /> : <Maximize2 size={20} />}
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Borders */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#d4ff00]/0 group-hover:border-[#d4ff00]/40 transition-all duration-700 m-6 md:m-8 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#d4ff00]/0 group-hover:border-[#d4ff00]/40 transition-all duration-700 m-6 md:m-8 pointer-events-none" />
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="py-24 text-center border-t border-white/5 mt-12">
            <p className="text-gray-500 text-xl font-syne uppercase tracking-widest">No visual entries found for this category.</p>
          </div>
        )}
      </section>

      {/* Shared Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox 
          items={filteredItems}
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

export default Gallery;
