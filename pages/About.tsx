
import React from 'react';
import { ArrowRight, Target, Eye, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 bg-[#050505] text-white min-h-screen">
      {/* Hero */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto py-24">
        <div className="mb-12 overflow-hidden">
          <span className="text-[#d4ff00] text-sm font-black uppercase tracking-[0.5em]">The Studio Biography</span>
        </div>
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none uppercase mb-16 italic">
          Boutique <br />
          <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>Visualization</span> <br />
          Solutions
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
          <div className="space-y-8">
            <p className="text-3xl text-gray-400 font-light leading-relaxed italic">
              "We help design professionals communicate their ideas clearly through powerful visualizations that enhance presentations, approvals, and project understanding."
            </p>
            <div className="w-24 h-[2px] bg-[#d4ff00]" />
          </div>
          <div className="space-y-12">
            <div className="bg-white/5 p-12 border border-white/5 hover:border-[#d4ff00]/30 transition-all">
              <Eye className="text-[#d4ff00] mb-6" size={40} />
              <p className="text-[#d4ff00] font-bold text-xs uppercase tracking-[0.3em] mb-4">Vision</p>
              <p className="text-xl text-gray-300 font-light leading-relaxed">To become a globally trusted architectural visualization studio that helps design professionals present their ideas clearly and effectively through high-quality digital visuals.</p>
            </div>
            <div className="bg-white/5 p-12 border border-white/5 hover:border-[#d4ff00]/30 transition-all">
              <Target className="text-[#d4ff00] mb-6" size={40} />
              <p className="text-[#d4ff00] font-bold text-xs uppercase tracking-[0.3em] mb-4">Mission</p>
              <ul className="space-y-6 text-lg text-gray-300 font-light">
                <li className="flex gap-4"><span>•</span> Deliver high-quality, realistic architectural visuals</li>
                <li className="flex gap-4"><span>•</span> Provide fast and reliable project turnaround</li>
                <li className="flex gap-4"><span>•</span> Maintain strong attention to detail and accuracy</li>
                <li className="flex gap-4"><span>•</span> Build long-term partnerships remembering client requirements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Who We Work With */}
      <section className="py-32 px-6 md:px-12 bg-[#080808]">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[#d4ff00] font-bold text-xs uppercase tracking-[0.3em] mb-12">Who We Work With</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Architects",
              "Interior Designers",
              "Builders & Developers",
              "Product Manufacturers"
            ].map((client, idx) => (
              <div key={idx} className="border border-white/10 p-10 group hover:bg-[#d4ff00] transition-all">
                <h4 className="text-2xl font-black uppercase tracking-tight group-hover:text-black transition-colors">{client}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ArchinTera */}
      <section className="py-64 px-6 md:px-12 max-w-[1400px] mx-auto">
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-32 uppercase italic">Why Choose <br /> ArchinTera</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {[
            { title: "Photorealism", desc: "Studio-quality photorealistic visuals delivered with cinematic finesse." },
            { title: "Accuracy", desc: "Strong architectural accuracy ensuring designs are translated perfectly." },
            { title: "Speed", desc: "Fast and reliable turnaround that respects your tight deadlines." },
            { title: "Pricing", desc: "Transparent pricing with no hidden costs and 50% advance confirmation." },
            { title: "Workflow", desc: "Professional studio workflow from briefing to high-resolution delivery." },
            { title: "Collaboration", desc: "A long-term collaboration approach built on remembering client requirements." },
          ].map((item, idx) => (
            <div key={idx} className="space-y-6 group">
              <span className="text-sm font-black text-[#d4ff00]">/ 0{idx + 1}</span>
              <h4 className="text-3xl font-black uppercase tracking-tight">{item.title}</h4>
              <p className="text-gray-500 text-lg leading-relaxed font-light group-hover:text-white transition-colors">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
