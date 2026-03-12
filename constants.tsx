
import { Project, Service, Testimonial } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Vertex HQ Tower',
    location: 'Dubai, UAE',
    category: 'Commercial Developments',
    imageUrl: '/images/commercial_mixed_use_01.png'
  },
  {
    id: '3',
    title: 'Sunset Infinity Residences',
    location: 'Mumbai, India',
    category: 'Luxury Residential',
    imageUrl: '/images/large_scale_residential_01.png'
  },
  {
    id: '4',
    title: 'Mediterranean Hillside Resort',
    location: 'Côte d\'Azur, France',
    category: 'Hospitality Architecture',
    imageUrl: '/images/luxury_resort_pool_01.png'
  },
  {
    id: '5',
    title: 'Villa Serrata',
    location: 'Ibiza, Spain',
    category: 'Luxury Residential',
    imageUrl: '/images/luxury_villa_exterior_01.png'
  },
  {
    id: '7',
    title: 'Curated Living Space',
    location: 'Copenhagen, Denmark',
    category: 'Interior Visualization',
    imageUrl: '/images/livingroom_interior_01.png'
  },
  {
    id: '8',
    title: 'Zen Master Suite',
    location: 'Tokyo, Japan',
    category: 'Interior Visualization',
    imageUrl: '/images/bedroom_interior_01.png'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'architectural-exterior',
    title: 'Architectural Exterior',
    description: 'Photorealistic exterior renders showing buildings in their real-world environments, ideal for project launch marketing.',
    imageUrl: '/images/commercial_mixed_use_01.png'
  },
  {
    id: 'interior-visualization',
    title: 'Interior Visualization',
    description: 'Cinematic interior scenes focusing on material realism, lighting, and spatial atmosphere.',
    imageUrl: '/images/kitchen_interior_01.png'
  },
  {
    id: 'hospitality',
    title: 'Hospitality Visualization',
    description: 'Atmospheric storytelling for resorts and leisure developments with strong landscape integration.',
    imageUrl: '/images/luxury_resort_pool_01.png'
  },
  {
    id: 'luxury-residential',
    title: 'Luxury Residential',
    description: 'High-end residential presentation focusing on lifestyle and architectural aesthetics.',
    imageUrl: '/images/luxury_villa_exterior_01.png'
  }
];

export const CONTACT_INFO = {
  email: 'archintera0@gmail.com',
  phones: ['9390926869', '9177528229'],
  locations: ['Hyderabad', 'Bangalore']
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'ArchinTera’s visuals helped us communicate our project instantly. The quality and speed were exceptional.',
    author: 'Elena Rossi',
    role: 'Principal Architect, Rossi & Partners'
  }
];
