'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Image as ImageIcon, Grid3x3 } from 'lucide-react';

const categories = [
  { name: 'লাইব্রেরি ভবন', icon: '🏛️' },
  { name: 'রিডিং রুম', icon: '📚' },
  { name: 'ইভেন্ট', icon: '🎭' },
  { name: 'বইমেলা', icon: '📖' },
  { name: 'সাংস্কৃতিক অনুষ্ঠান', icon: '🎵' },
  { name: 'স্বাধীনতা দিবস', icon: '🇧🇩' },
];

export function GalleryPreview() {
  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl md:text-3xl font-bold gradient-text flex items-center gap-2">
          <ImageIcon className="w-6 h-6" /> গ্যালারি
        </h2>
        <Link href="/gallery" className="btn btn-ghost btn-sm">
          সব দেখুন →
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {categories.map((cat, index) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/20 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-transform"
          >
            <span className="text-4xl mb-1">{cat.icon}</span>
            <span className="text-xs font-medium text-center px-1">{cat.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
