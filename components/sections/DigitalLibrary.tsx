'use client';

import { motion } from 'framer-motion';
import { BookOpen, Download, Bookmark, History, TrendingUp } from 'lucide-react';

const features = [
  { icon: BookOpen, label: 'পিডিএফ পড়ুন', desc: 'অনলাইনে যেকোনো বই পড়ুন' },
  { icon: Download, label: 'ডাউনলোড', desc: 'ই-বুক ডাউনলোড করুন' },
  { icon: Bookmark, label: 'বুকমার্ক', desc: 'পড়া চিহ্নিত রাখুন' },
  { icon: History, label: 'পড়ার ইতিহাস', desc: 'আপনার পড়া বইয়ের তালিকা' },
];

export function DigitalLibrary() {
  return (
    <section className="glass p-6 md:p-12 rounded-3xl">
      <div className="flex items-center gap-3 mb-6">
        <TrendingUp className="w-8 h-8 text-blue-600" />
        <h2 className="text-2xl md:text-3xl font-bold gradient-text">ডিজিটাল লাইব্রেরি</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <motion.div
            key={feature.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/10 dark:bg-white/5 p-4 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer group"
          >
            <feature.icon className="w-8 h-8 text-blue-500 mb-2 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-sm">{feature.label}</h3>
            <p className="text-xs opacity-70">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <Link href="/digital-library" className="btn btn-primary rounded-full">
          ডিজিটাল লাইব্রেরিতে যান
        </Link>
      </div>
    </section>
  );
}
