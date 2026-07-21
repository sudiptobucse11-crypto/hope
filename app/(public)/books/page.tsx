'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Grid3x3, List } from 'lucide-react';
import { BookGrid } from '@/components/sections/BookGrid';

export default function BooksPage() {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <h1 className="text-3xl font-bold gradient-text">📚 বইয়ের তালিকা</h1>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="flex-1 md:w-64 relative">
            <input
              type="text"
              placeholder="বই খুঁজুন..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2 rounded-full glass focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-50" />
          </div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-2 rounded-full glass focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">সব ক্যাটাগরি</option>
            <option value="সাহিত্য">সাহিত্য</option>
            <option value="বিজ্ঞান">বিজ্ঞান</option>
            <option value="গণিত">গণিত</option>
            <option value="ইতিহাস">ইতিহাস</option>
          </select>
          <div className="flex gap-1">
            <button
              onClick={() => setView('grid')}
              className={`p-2 rounded-lg ${view === 'grid' ? 'bg-blue-500 text-white' : 'glass'}`}
            >
              <Grid3x3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setView('list')}
              className={`p-2 rounded-lg ${view === 'list' ? 'bg-blue-500 text-white' : 'glass'}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <BookGrid title="সকল বই" type="popular" />
    </motion.div>
  );
}
