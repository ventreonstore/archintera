
export interface Project {
  id: string;
  title: string;
  location: string;
  category: 'Commercial Developments' | 'Luxury Residential' | 'Hospitality Architecture' | 'Interior Visualization';
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}
