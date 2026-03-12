
import React from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Globe } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 bg-[#050505] text-white min-h-screen">
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto py-24">
        <h1 className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-tight uppercase mb-24 italic break-words">
          Start Your <br />
          <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>Visualization</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          {/* Form */}
          <div className="space-y-12">
            <p className="text-xl text-gray-400 font-light">"Helping design professionals present their ideas clearly and effectively through high-quality digital visuals."</p>
            <form className="space-y-12">
              <div className="space-y-8">
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-white/10 py-6 focus:border-[#d4ff00] transition-colors outline-none text-white text-xl" 
                  placeholder="Your Name"
                />
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-white/10 py-6 focus:border-[#d4ff00] transition-colors outline-none text-white text-xl" 
                  placeholder="Email Address"
                />
                <select className="w-full bg-transparent border-b border-white/10 py-6 focus:border-[#d4ff00] transition-colors outline-none text-white text-xl appearance-none cursor-pointer">
                  <option className="bg-black">Exterior & Interior Renders</option>
                  <option className="bg-black">Walkthrough Animations</option>
                  <option className="bg-black">Product Detailing Visuals</option>
                </select>
                <textarea 
                  rows={4}
                  className="w-full bg-transparent border-b border-white/10 py-6 focus:border-[#d4ff00] transition-colors outline-none text-white text-xl resize-none" 
                  placeholder="Project Details"
                />
              </div>
              <button 
                type="submit" 
                className="bg-[#d4ff00] text-black px-16 py-8 font-black uppercase tracking-[0.3em] hover:bg-white transition-all transform hover:-translate-y-2 flex items-center gap-4 group"
              >
                Send Inquiry
                <Send size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-center gap-4 text-[#d4ff00]">
                  <Mail size={20} />
                  <h4 className="text-sm font-black uppercase tracking-widest">Email</h4>
                </div>
                <p className="text-2xl font-light hover:text-[#d4ff00] transition-colors cursor-pointer break-all">{CONTACT_INFO.email}</p>
              </div>
              <div className="space-y-8">
                <div className="flex items-center gap-4 text-[#d4ff00]">
                  <Phone size={20} />
                  <h4 className="text-sm font-black uppercase tracking-widest">Phone</h4>
                </div>
                {CONTACT_INFO.phones.map(phone => (
                  <p key={phone} className="text-2xl font-light hover:text-[#d4ff00] transition-colors cursor-pointer">{phone}</p>
                ))}
              </div>
            </div>

            <div className="space-y-12">
              <div className="flex items-center gap-4 text-[#d4ff00]">
                <MapPin size={20} />
                <h4 className="text-sm font-black uppercase tracking-widest">Locations</h4>
              </div>
              <div className="flex flex-wrap gap-12">
                {CONTACT_INFO.locations.map(loc => (
                  <div key={loc} className="space-y-2">
                    <p className="text-3xl font-black uppercase italic tracking-tighter">{loc}</p>
                    <p className="text-gray-500 font-bold uppercase text-xs tracking-widest">Studio Office</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-12 flex gap-8">
              <a href="#" className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:border-[#d4ff00] hover:text-[#d4ff00] transition-all">
                <Instagram />
              </a>
              <a href="#" className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:border-[#d4ff00] hover:text-[#d4ff00] transition-all">
                <Linkedin />
              </a>
              <a href="#" className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:border-[#d4ff00] hover:text-[#d4ff00] transition-all">
                <Globe />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
