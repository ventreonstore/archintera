
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS, SERVICES, CONTACT_INFO } from '../constants';
import ProjectCard from '../components/ProjectCard';
import { ArrowUpRight, MoveDown, CheckCircle2, Play } from 'lucide-react';

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [revealHero, setRevealHero] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Initial reveal sequence
    const loaderTimer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setRevealHero(true), 800);
    }, 2000);

    const handleScroll = () => {
      const progress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(loaderTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative bg-[#050505] selection:bg-[#d4ff00] selection:text-black">
      {/* LUXURY LOADER: Cinematic Intro */}
      <div 
        className={`fixed inset-0 z-[2000] bg-[#050505] flex flex-col items-center justify-center transition-all duration-[1500ms] cubic-bezier(0.87, 0, 0.13, 1) ${
          !loading ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
        }`}
      >
        <div className="relative text-center flex flex-col items-center justify-center">
          <span className="text-[#d4ff00] text-xs md:text-sm font-black uppercase tracking-[1em] mb-6 animate-pulse">
            INTRO
          </span>
          <span className="text-white text-4xl md:text-7xl font-black uppercase tracking-[0.4em]">
            ARCHINTERA
          </span>
        </div>
        <div className="mt-12 h-[1px] w-64 bg-white/10 mx-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-[#d4ff00] origin-left animate-[loading-bar_2s_ease-in-out_infinite]" />
        </div>
      </div>

      {/* HERO: Cinematic Atmospheric Layering */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
        {/* Background Visual */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="/images/hero_vertex_hq.jpg" 
            className={`w-full h-full object-cover transition-all duration-[12s] ease-out ${
              revealHero ? 'scale-100 grayscale-0 brightness-75' : 'scale-125 grayscale brightness-50'
            }`}
            alt="Vertex HQ - Modern Mixed-Use Commercial Development"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-16 text-center">
          <div className="overflow-hidden mb-8">
            <p className={`text-[#d4ff00] text-xs md:text-sm font-black uppercase tracking-[0.8em] transition-all duration-1000 delay-500 ${revealHero ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
              Cinematic Architectural Visualization
            </p>
          </div>

          <h1 className="text-6xl md:text-[12vw] lg:text-[10vw] font-black leading-[0.85] tracking-tighter uppercase italic text-white mb-16">
            <div className="overflow-hidden">
              <span className={`block transition-transform duration-[1.5s] cubic-bezier(0.19, 1, 0.22, 1) delay-700 ${revealHero ? 'translate-y-0' : 'translate-y-full'}`}>
                Architecting
              </span>
            </div>
            <div className="overflow-hidden">
              <span className={`block text-outline transition-transform duration-[1.5s] cubic-bezier(0.19, 1, 0.22, 1) delay-900 ${revealHero ? 'translate-y-0' : 'translate-y-full'}`}>
                Visual Logic
              </span>
            </div>
          </h1>

          <div className={`flex flex-col md:flex-row justify-center items-center gap-12 transition-all duration-1000 delay-[1.2s] ${revealHero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <p className="text-gray-400 text-lg md:text-xl max-w-xl font-medium leading-relaxed uppercase tracking-wide">
              We translate architectural concepts into emotionally resonant, marketing-ready visual presentations.
            </p>
            <Link 
              to="/portfolio" 
              className="group bg-[#d4ff00] text-black px-12 py-7 font-black uppercase tracking-[0.4em] text-sm overflow-hidden relative"
            >
              <span className="relative z-10 flex items-center gap-4">
                Explore Work <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
            </Link>
          </div>
        </div>

        {/* Side Progress Bar Indicator */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 h-64 w-[1px] bg-white/10 hidden lg:block">
          <div 
            className="w-full bg-[#d4ff00] transition-all duration-100" 
            style={{ height: `${scrollProgress * 100}%` }} 
          />
        </div>

        {/* Scroll Hint */}
        <div className={`absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 transition-all duration-1000 delay-[2s] ${revealHero ? 'opacity-50' : 'opacity-0'}`}>
           <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white">Scroll</span>
           <div className="w-[1px] h-16 bg-gradient-to-b from-[#d4ff00] to-transparent animate-bounce" />
        </div>
      </section>

      {/* MISSION & VISION: SPLIT SECTION */}
      <section className="py-64 px-6 md:px-16 bg-[#080808]">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-5 space-y-16">
            <div className="space-y-6">
              <span className="text-[#d4ff00] font-black text-xs uppercase tracking-[0.6em] block">Our Mission</span>
              <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.9]">
                Clarity <br /> Through <br /> <span className="text-outline">Detail</span>
              </h2>
            </div>
            <p className="text-2xl text-gray-400 font-light leading-relaxed">
              ARCHINTERA is a boutique visual communications studio. We partner with architects and real estate developers to produce high-end immersive imagery that sells projects before construction begins.
            </p>
            <div className="space-y-4">
              {["Cinematic Lighting", "Environmental Storytelling", "Premium Realism"].map((m, i) => (
                <div key={i} className="flex items-center gap-6 group">
                   <CheckCircle2 className="text-[#d4ff00] group-hover:scale-125 transition-transform" size={24} />
                   <span className="text-lg font-black uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">{m}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[80vh] group">
            <div className="relative h-[60vh] lg:h-auto overflow-hidden">
              <img 
                src="/images/dining_interior_01.png" 
                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[2s]" alt="High-end moody interior rendering" />
              <div className="absolute inset-0 bg-black/40 p-12 flex flex-col justify-end">
                <span className="text-[#d4ff00] font-black text-xs uppercase mb-4 tracking-widest">01 // Interior</span>
                <h3 className="text-3xl font-black uppercase tracking-tighter italic">Moody Spaces</h3>
              </div>
            </div>
            <div className="relative aspect-[4/5] bg-white/5 overflow-hidden group mt-12 md:mt-24">
              <img src="/images/luxury_resort_aerial_02.png" className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[2s]" alt="architectural visualization of large scale residential development" />
              <div className="absolute inset-0 bg-black/40 p-12 flex flex-col justify-end">
                <span className="text-[#d4ff00] font-black text-xs uppercase mb-4 tracking-widest">02 // Exterior</span>
                <h3 className="text-3xl font-black uppercase tracking-tighter italic">Structural Logic</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES: INTERACTIVE GRID */}
      <section className="py-64 bg-[#050505] border-y border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 md:px-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-32 border-b border-white/10 pb-16">
            <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter italic">Expertise</h2>
            <p className="text-gray-500 max-w-sm text-sm uppercase font-bold tracking-[0.4em] leading-loose text-right">
              Cinematic visual storytelling formats.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {SERVICES.map((s, idx) => (
              <div key={s.id} className="group relative border border-white/5 p-12 hover:bg-[#d4ff00] transition-all duration-700 overflow-hidden">
                <div className="relative z-10 flex flex-col h-full min-h-[400px]">
                   <span className="text-5xl font-black text-white/5 group-hover:text-black/10 transition-colors">0{idx+1}</span>
                   <div className="mt-auto">
                     <h4 className="text-4xl font-black uppercase tracking-tight italic mb-8 group-hover:text-black transition-colors">{s.title}</h4>
                     <p className="text-gray-500 group-hover:text-black/80 transition-colors text-lg font-light leading-relaxed">
                       {s.description}
                     </p>
                   </div>
                </div>
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity translate-x-12 group-hover:translate-x-0 duration-500">
                  <Play size={48} className="text-black fill-current" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS: VERTICAL SCROLL EXPERIENCE */}
      <section className="py-64 bg-[#050505]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-16">
          <h2 className="text-5xl md:text-[10vw] font-black uppercase tracking-tighter italic mb-48 text-center text-outline">Workflow</h2>
          
          <div className="space-y-32">
            {[
              { id: '01', title: 'Architectural Vision', d: 'CAD drawings review and conceptual aesthetic understanding to establish the visual language.' },
              { id: '02', title: 'Spatial Construction', d: 'High-precision modeling and strategic camera framing to maximize architectural impact.' },
              { id: '03', title: 'Cinematic Mood', d: 'Applying advanced lighting logic and environmental storytelling to create emotional resonance.' },
              { id: '04', title: 'Master Presentation', d: 'Final marketing-ready visual assets delivered to propel real estate or design communication.' }
            ].map((step, idx) => (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center group">
                <div className="lg:col-span-2 text-7xl font-black text-white/5 group-hover:text-[#d4ff00] transition-colors duration-700">{step.id}</div>
                <div className="lg:col-span-4">
                  <h4 className="text-4xl font-black uppercase italic tracking-tighter">{step.title}</h4>
                </div>
                <div className="lg:col-span-6">
                  <p className="text-xl text-gray-500 group-hover:text-white transition-colors duration-700 leading-relaxed font-light">
                    {step.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA: CINEMATIC MARQUEE */}
      <section className="py-80 bg-black flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="w-full flex whitespace-nowrap overflow-hidden mb-12 select-none pointer-events-none opacity-20">
          <div className="animate-marquee inline-block text-[15vw] font-black uppercase tracking-tighter text-outline">
            ARCHINTERA STUDIO VISUALIZATION MASTERCLASS ARCHINTERA STUDIO —&nbsp;
          </div>
          <div className="animate-marquee inline-block text-[15vw] font-black uppercase tracking-tighter text-outline">
            ARCHINTERA STUDIO VISUALIZATION MASTERCLASS ARCHINTERA STUDIO —&nbsp;
          </div>
        </div>
        
        <div className="relative group">
           <Link to="/contact" className="text-7xl md:text-[8rem] font-black uppercase tracking-tighter italic text-white hover:text-[#d4ff00] transition-all duration-700">
             Start Project
           </Link>
           <div className="h-[2px] w-0 bg-[#d4ff00] group-hover:w-full transition-all duration-700 mx-auto mt-4" />
        </div>
      </section>

      <style>{`
        @keyframes loading-bar {
          0% { transform: scaleX(0); transform-origin: left; }
          45% { transform: scaleX(1); transform-origin: left; }
          50% { transform: scaleX(1); transform-origin: right; }
          100% { transform: scaleX(0); transform-origin: right; }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 40s linear infinite;
        }
        .text-outline {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.15);
          color: transparent;
        }
      `}</style>
    </div>
  );
};

export default Home;
