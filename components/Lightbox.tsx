
import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxItem {
  src: string;
  title: string;
  category: string;
}

interface LightboxProps {
  items: LightboxItem[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const Lightbox: React.FC<LightboxProps> = ({ items, currentIndex, onClose, onNavigate }) => {
  const current = items[currentIndex];
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < items.length - 1;

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft' && hasPrev) onNavigate(currentIndex - 1);
    if (e.key === 'ArrowRight' && hasNext) onNavigate(currentIndex + 1);
  }, [onClose, onNavigate, currentIndex, hasPrev, hasNext]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  if (!current) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-sm animate-lb-fade-in"
        onClick={onClose}
      />

      {/* Close Button */}
      <button 
        className="absolute top-8 right-8 z-[2100] text-white/60 hover:text-[#d4ff00] transition-colors duration-300 group"
        onClick={onClose}
      >
        <div className="w-14 h-14 border border-white/10 group-hover:border-[#d4ff00]/40 rounded-full flex items-center justify-center transition-all duration-300">
          <X size={24} strokeWidth={1.5} />
        </div>
      </button>

      {/* Counter */}
      <div className="absolute top-10 left-8 z-[2100] text-white/30 font-black text-xs tracking-[0.5em] uppercase">
        <span className="text-[#d4ff00]">{String(currentIndex + 1).padStart(2, '0')}</span>
        <span className="mx-3">/</span>
        <span>{String(items.length).padStart(2, '0')}</span>
      </div>

      {/* Navigation Arrows */}
      {hasPrev && (
        <button 
          className="absolute left-6 top-1/2 -translate-y-1/2 z-[2100] text-white/40 hover:text-[#d4ff00] transition-all duration-300 group"
          onClick={(e) => { e.stopPropagation(); onNavigate(currentIndex - 1); }}
        >
          <div className="w-16 h-16 border border-white/10 group-hover:border-[#d4ff00]/40 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
            <ChevronLeft size={28} strokeWidth={1.5} />
          </div>
        </button>
      )}
      {hasNext && (
        <button 
          className="absolute right-6 top-1/2 -translate-y-1/2 z-[2100] text-white/40 hover:text-[#d4ff00] transition-all duration-300 group"
          onClick={(e) => { e.stopPropagation(); onNavigate(currentIndex + 1); }}
        >
          <div className="w-16 h-16 border border-white/10 group-hover:border-[#d4ff00]/40 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
            <ChevronRight size={28} strokeWidth={1.5} />
          </div>
        </button>
      )}

      {/* Image */}
      <div className="relative z-[2050] w-[90vw] h-[85vh] flex items-center justify-center animate-lb-zoom-in">
        <img 
          src={current.src} 
          className="max-w-full max-h-full object-contain drop-shadow-2xl" 
          alt={current.title}
        />
      </div>

      {/* Caption */}
      <div className="absolute bottom-8 left-8 right-8 z-[2100] flex justify-between items-end animate-lb-slide-up">
        <div>
          <span className="text-[#d4ff00] font-black text-[10px] uppercase tracking-[0.8em] mb-3 block">
            {current.category}
          </span>
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter text-white leading-none">
            {current.title}
          </h2>
        </div>
        <span className="text-white/20 text-xs font-black uppercase tracking-[0.4em] hidden md:block">
          ESC to close · ← → to navigate
        </span>
      </div>

      <style>{`
        @keyframes lb-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes lb-zoom-in {
          from { transform: scale(0.92); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes lb-slide-up {
          from { transform: translateY(24px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-lb-fade-in {
          animation: lb-fade-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-lb-zoom-in {
          animation: lb-zoom-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-lb-slide-up {
          animation: lb-slide-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Lightbox;
