
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Expertise', path: '/services' },
    { name: 'Work', path: '/portfolio' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[1500] transition-all duration-1000 px-6 md:px-16 ${
        scrolled ? 'py-6' : 'py-12'
      }`}
    >
      <div className={`max-w-[1600px] mx-auto flex justify-between items-center transition-all duration-1000 p-6 ${
        scrolled ? 'bg-[#050505]/80 backdrop-blur-2xl border border-white/5 rounded-full shadow-2xl' : 'bg-transparent'
      }`}>
        <Link 
          to="/" 
          className="group flex items-center gap-6"
        >
          <div className="w-10 h-10 bg-[#d4ff00] rounded-full flex items-center justify-center text-black text-xl font-black transition-transform duration-700 group-hover:rotate-[360deg]">
            A
          </div>
          <span className="text-xl md:text-2xl font-black tracking-[-0.08em] text-white uppercase italic">
            ARCHINTERA
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-[10px] uppercase tracking-[0.5em] font-black transition-all duration-500 hover:text-[#d4ff00] relative group ${
                isActive(link.path) ? 'text-[#d4ff00]' : 'text-white/40'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 h-[1px] bg-[#d4ff00] transition-all duration-500 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="px-10 py-3 bg-[#d4ff00] text-black text-[9px] font-black uppercase tracking-[0.4em] transition-all hover:bg-white"
          >
            Start
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white hover:text-[#d4ff00] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Fullscreen Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-[#050505] z-[1600] flex flex-col items-center justify-center transition-transform duration-[1200ms] cubic-bezier(0.85, 0, 0.15, 1) ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-12 right-12 text-white hover:text-[#d4ff00] transition-colors"
        >
          <X size={48} strokeWidth={1} />
        </button>

        <div className="text-center space-y-12">
          {navLinks.map((link, idx) => (
            <div key={link.name} className="overflow-hidden">
              <Link
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-6xl md:text-8xl font-black tracking-tighter hover:text-[#d4ff00] transition-colors uppercase italic"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {link.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
