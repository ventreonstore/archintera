
import React from 'react';
import { Project } from '../types';
import { ArrowUpRight, Maximize2 } from 'lucide-react';

interface Props {
  project: Project;
  className?: string;
  onClick?: () => void;
}

const ProjectCard: React.FC<Props> = ({ project, className = "", onClick }) => {
  return (
    <div 
      className={`relative group overflow-hidden bg-[#0a0a0a] transition-all duration-700 cursor-pointer ${className}`}
      onClick={onClick}
    >
      {/* Visual */}
      <div className="w-full h-full overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover object-center grayscale brightness-50 transition-all duration-[2s] cubic-bezier(0.16, 1, 0.3, 1) group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
        />
      </div>
      
      {/* Content Overlay */}
      <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity">
        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-out">
          <p className="text-[#d4ff00] text-[10px] font-black uppercase tracking-[0.5em] mb-4">
            {project.category} // {project.location}
          </p>
          
          <div className="flex items-center justify-between gap-6">
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tighter text-white uppercase italic leading-none">
              {project.title}
            </h3>
            
            <div className="w-14 h-14 md:w-16 md:h-16 bg-[#d4ff00] text-black flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-12 group-hover:translate-x-0 flex-shrink-0">
              <Maximize2 size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Frame Border on Hover */}
      <div className="absolute inset-0 border border-[#d4ff00]/0 group-hover:border-[#d4ff00]/20 transition-all duration-700 m-6 pointer-events-none" />
    </div>
  );
};

export default ProjectCard;
