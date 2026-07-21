'use client';

import { motion } from 'framer-motion';
import { HeroBanner } from '@/components/sections/HeroBanner';
import { Statistics } from '@/components/sections/Statistics';
import { BookGrid } from '@/components/sections/BookGrid';
import { DigitalLibrary } from '@/components/sections/DigitalLibrary';
import { GalleryPreview } from '@/components/sections/GalleryPreview';
import { EventCard } from '@/components/sections/EventCard';
import { NewsSection } from '@/components/sections/NewsSection';
import { NoticeBoard } from '@/components/sections/NoticeBoard';
import { FounderSection } from '@/components/sections/FounderSection';
import { Testimonials } from '@/components/sections/Testimonials';
import { ContactSection } from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-12 pb-12"
    >
      <HeroBanner />
      <Statistics />
      <BookGrid title="জনপ্রিয় বই" type="popular" />
      <DigitalLibrary />
      <GalleryPreview />
      <EventCard />
      <div className="grid md:grid-cols-2 gap-6">
        <NewsSection />
        <NoticeBoard />
      </div>
      <FounderSection />
      <Testimonials />
      <ContactSection />
    </motion.div>
  );
}
