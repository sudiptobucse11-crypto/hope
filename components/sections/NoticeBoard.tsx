'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bell, Download, Clock, AlertTriangle, ChevronRight } from 'lucide-react';

interface Notice {
  id: string;
  title: string;
  category: string;
  important: boolean;
  publishedAt: string;
  pdfUrl?: string;
}

export function NoticeBoard() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotices = async () => {
      setLoading(true);
      try {
        const mockNotices = [
          { id: '1', title: 'সদস্য ফর্ম ডাউনলোড করুন', category: 'ফর্ম', important: true, publishedAt: '২০২৬-০২-২৮', pdfUrl: '/forms/membership.pdf' },
          { id: '2', title: 'বার্ষিক প্রতিবেদন ২০২৫ প্রকাশিত', category: 'প্রতিবেদন', important: true, publishedAt: '২০২৬-০২-২৫', pdfUrl: '/reports/annual-2025.pdf' },
          { id: '3', title: 'লাইব্রেরি নীতিমালা সংস্করণ ৩.০', category: 'নীতিমালা', important: false, publishedAt: '২০২৬-০২-২০', pdfUrl: '/rules/library-rules.pdf' },
          { id: '4', title: 'ম্যাগাজিন: জানুয়ারি ২০২৬', category: 'ম্যাগাজিন', important: false, publishedAt: '২০২৬-০২-১৫' },
        ];
        setNotices(mockNotices);
      } catch (error) {
        console.error('Error fetching notices:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchNotices();
  }, []);

  return (
    <section className="glass p-6 rounded-3xl">
      <div className="flex items-center gap-2 mb-4">
        <Bell className="w-6 h-6 text-orange-500" />
        <h3 className="text-xl font-bold">নোটিশ বোর্ড</h3>
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
          {notices.map((notice, index) => (
            <motion.li
              key={notice.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`border-b border-white/10 pb-3 last:border-0 ${
                notice.important ? 'bg-red-50 dark:bg-red-900/20 -mx-3 px-3 py-2 rounded-lg' : ''
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <p className="font-medium text-sm flex items-center gap-1">
                    {notice.important && <AlertTriangle className="w-4 h-4 text-red-500" />}
                    {notice.title}
                  </p>
                  <div className="flex items-center gap-3 mt-1 text-xs opacity-60">
                    <span>{notice.category}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {notice.publishedAt}
                    </span>
                  </div>
                </div>
                {notice.pdfUrl && (
                  <Link
                    href={notice.pdfUrl}
                    className="btn btn-xs btn-ghost"
                    target="_blank"
                  >
                    <Download className="w-3 h-3" /> PDF
                  </Link>
                )}
              </div>
            </motion.li>
          ))}
        </ul>
      )}
      <Link href="/notices" className="btn btn-ghost btn-sm w-full mt-3">
        সব নোটিশ দেখুন <ChevronRight className="w-4 h-4" />
      </Link>
    </section>
  );
}
