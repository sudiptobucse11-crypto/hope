'use client';

import { motion } from 'framer-motion';
import { Search, BookOpen, Library } from 'lucide-react';

export function HeroBanner() {
  return (
    <section className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 text-white">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 px-6 py-16 md:px-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            স্পিকার আঃ জব্বার খান<br />
            <span className="text-2xl md:text-3xl">স্মৃতি পাবলিক লাইব্রেরি</span>
          </h1>
          <p className="text-xl md:text-2xl mt-4 font-light opacity-90">
            "জ্ঞানই শক্তি — বই হোক সকলের বন্ধু"
          </p>
          
          {/* Search Bar */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-2xl">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="বই অনুসন্ধান..."
                className="w-full px-4 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 placeholder-white/70 text-white"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-70" />
            </div>
            <button className="px-6 py-3 bg-white text-blue-700 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg flex items-center gap-2 justify-center">
              <Search className="w-5 h-5" /> খুঁজুন
            </button>
          </div>

          {/* Quick Stats */}
          <div className="mt-8 flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              <span>১২,৫০০+ বই</span>
            </div>
            <div className="flex items-center gap-2">
              <Library className="w-5 h-5" />
              <span>৩,২০০+ ই-বুক</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>সদস্য: ৮৫০+</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
