'use client';

import { motion } from 'framer-motion';
import { Users, Heart, Award, BookOpen } from 'lucide-react';

export function FounderSection() {
  return (
    <section className="glass p-6 md:p-10 rounded-3xl">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-6xl text-white shadow-2xl">
            👤
          </div>
          <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-1.5">
            <Award className="w-5 h-5 text-white" />
          </div>
        </motion.div>
        <div className="flex-1 text-center md:text-right">
          <h3 className="text-2xl font-bold">প্রতিষ্ঠাতা: স্পিকার আঃ জব্বার খান</h3>
          <p className="mt-2 opacity-80 max-w-2xl">
            "জ্ঞানই শক্তি — বই হোক সকলের বন্ধু" এই স্লোগানকে ধারণ করে প্রতিষ্ঠিত 
            এই লাইব্রেরি জ্ঞানের আলো ছড়িয়ে দিচ্ছে। শিক্ষা, সংস্কৃতি ও উন্নয়নে 
            অসামান্য অবদানের স্বীকৃতিস্বরূপ এই লাইব্রেরি প্রতিষ্ঠা করা হয়েছে।
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
            <div className="flex items-center gap-2 text-sm bg-white/10 px-3 py-1.5 rounded-full">
              <BookOpen className="w-4 h-4" /> ১২,৫০০+ বই
            </div>
            <div className="flex items-center gap-2 text-sm bg-white/10 px-3 py-1.5 rounded-full">
              <Users className="w-4 h-4" /> ৮৫০+ সদস্য
            </div>
            <div className="flex items-center gap-2 text-sm bg-white/10 px-3 py-1.5 rounded-full">
              <Heart className="w-4 h-4 text-red-400" /> ১০০+ স্বেচ্ছাসেবক
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
