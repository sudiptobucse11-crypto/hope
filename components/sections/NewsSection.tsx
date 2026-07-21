'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Newspaper, ChevronRight, Clock, Tag } from 'lucide-react';

interface News {
  id: string;
  title: string;
  category: string;
  publishedAt: string;
  featured: boolean;
}

export function NewsSection() {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const mockNews = [
          { id: '1', title: 'নতুন বই সংগ্রহ: ২০০+ বই যুক্ত হয়েছে', category: 'সংগ্রহ', publishedAt: '২০২৬-০২-২৮', featured: true },
          { id: '2', title: 'আগামীকাল লাইব্রেরি বন্ধ থাকবে', category: 'ঘোষণা', publishedAt: '২০২৬-০২-২৭', featured: false },
          { id: '3', title: 'স্মারক লেকচার সিরিজ শুরু', category: 'ইভেন্ট', publishedAt: '২০২৬-০২-২৬', featured: false },
          { id: '4', title: 'ডিজিটাল লাইব্রেরি চালু', category: 'প্রযুক্তি', publishedAt: '২০২৬-০২-২৫', featured: false },
        ];
        setNews(mockNews);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  return (
    <section className="glass p-6 rounded-3xl">
      <div className="flex items-center gap-2 mb-4">
        <Newspaper className="w-6 h-6 text-blue-600" />
        <h3 className="text-xl font-bold">সর্বশেষ সংবাদ</h3>
      </div>
      {loading ? (
        <div className="space-y-3">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mt-1" />
            </div>
          ))}
        </div>
      ) : (
        <ul className="space-y-3">
          {news.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`border-b border-white/10 pb-3 last:border-0 ${
                item.featured ? 'bg-blue-50 dark:bg-blue-900/20 -mx-3 px-3 py-2 rounded-lg' : ''
              }`}
            >
              <Link href={`/news/${item.id}`} className="hover:text-blue-600 transition-colors">
                <p className="font-medium text-sm">{item.title}</p>
                <div className="flex items-center gap-3 mt-1 text-xs opacity-60">
                  <span className="flex items-center gap-1">
                    <Tag className="w-3 h-3" /> {item.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {item.publishedAt}
                  </span>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      )}
      <Link href="/news" className="btn btn-ghost btn-sm w-full mt-3">
        সব সংবাদ দেখুন <ChevronRight className="w-4 h-4" />
      </Link>
    </section>
  );
}
