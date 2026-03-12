
import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-32 pb-16">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-32">
          <div className="space-y-8 col-span-1 lg:col-span-2">
            <h2 className="text-4xl font-black tracking-tighter uppercase italic">ARCHINTERA</h2>
            <p className="text-gray-500 text-lg font-light leading-relaxed max-w-md">
              A boutique architectural visualization studio delivering photorealistic 3D renders, cinematic animations, and high-precision product detailing visuals.
            </p>
            <div className="flex gap-12 pt-4">
              {CONTACT_INFO.locations.map(loc => (
                <div key={loc}>
                  <p className="text-white font-black text-xs uppercase tracking-widest mb-2">{loc}</p>
                  <p className="text-gray-600 text-[10px] uppercase font-bold tracking-widest">Operational</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            <h4 className="text-[#d4ff00] font-black text-xs uppercase tracking-[0.3em]">Navigation</h4>
            <ul className="space-y-4 text-gray-500 font-bold text-[11px] uppercase tracking-[0.2em]">
              <li><Link to="/about" className="hover:text-white transition-colors">The Studio</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Expertise</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">Selected Work</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Inquiries</Link></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-[#d4ff00] font-black text-xs uppercase tracking-[0.3em]">Direct</h4>
            <div className="space-y-4 text-gray-400 font-light text-lg">
              <p className="hover:text-white cursor-pointer transition-colors">{CONTACT_INFO.email}</p>
              {CONTACT_INFO.phones.map(phone => (
                <p key={phone} className="hover:text-white cursor-pointer transition-colors">+{phone}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 text-[9px] text-gray-600 font-black tracking-[0.4em] uppercase">
          <p>© 2025 ARCHINTERA STUDIO. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-12 mt-8 md:mt-0">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-[#d4ff00]">Behance</a>
            <a href="#" className="hover:text-[#d4ff00]">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
