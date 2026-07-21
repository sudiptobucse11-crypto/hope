import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      role: string;
    } & DefaultSession['user'];
  }

  interface User {
    role: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role?: string;
    id?: string;
  }
}

export interface Book {
  id: string;
  title: string;
  titleBn: string;
  author: string;
  authorBn: string;
  publisher: string;
  publisherBn: string;
  isbn: string;
  category: string;
  categoryBn: string;
  edition: string;
  language: string;
  pages: number;
  shelfNumber: string;
  available: boolean;
  description?: string;
  coverImage?: string;
  pdfUrl?: string;
  featured: boolean;
  popular: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Event {
  id: string;
  title: string;
  titleBn: string;
  description: string;
  descriptionBn: string;
  date: Date;
  time: string;
  location: string;
  locationBn: string;
  organizer: string;
  organizerBn: string;
  coverImage?: string;
  status: 'UPCOMING' | 'ONGOING' | 'PAST' | 'CANCELLED';
  featured: boolean;
  photos: EventPhoto[];
  videos: EventVideo[];
}

export interface EventPhoto {
  id: string;
  url: string;
  caption?: string;
  eventId: string;
}

export interface EventVideo {
  id: string;
  url: string;
  title?: string;
  eventId: string;
}

export interface Gallery {
  id: string;
  title: string;
  titleBn: string;
  description?: string;
  category: string;
  categoryBn: string;
  imageUrl: string;
  featured: boolean;
}

export interface News {
  id: string;
  title: string;
  titleBn: string;
  content: string;
  contentBn: string;
  category: string;
  categoryBn: string;
  imageUrl?: string;
  featured: boolean;
  publishedAt: Date;
}

export interface Notice {
  id: string;
  title: string;
  titleBn: string;
  content: string;
  contentBn: string;
  category: string;
  categoryBn: string;
  pdfUrl?: string;
  important: boolean;
  publishedAt: Date;
}

export interface Testimonial {
  id: string;
  name: string;
  nameBn: string;
  content: string;
  contentBn: string;
  rating: number;
  imageUrl?: string;
  position?: string;
  featured: boolean;
}
