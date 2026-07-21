'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Book, Users, Calendar, Image, Newspaper, Bell, 
  FileText, Settings, TrendingUp, Eye, Download 
} from 'lucide-react';
import { StatsCard } from '@/components/admin/StatsCard';

const statsData = [
  { label: 'মোট বই', value: '১২,৫৪০', icon: Book, color: 'from-blue-500 to-blue-600' },
  { label: 'সদস্য', value: '৮৭২', icon: Users, color: 'from-green-500 to-green-600' },
  { label: 'ইভেন্ট', value: '২৪৬', icon: Calendar, color: 'from-purple-500 to-purple-600' },
  { label: 'গ্যালারি', value: '১,২৩৪', icon: Image, color: 'from-pink-500 to-pink-600' },
  { label: 'সংবাদ', value: '৪৫৬', icon: Newspaper, color: 'from-orange-500 to-orange-600' },
  { label: 'নোটিশ', value: '৮৯', icon: Bell, color: 'from-red-500 to-red-600' },
  { label: 'ডাউনলোড', value: '২,৩৪৫', icon: Download, color: 'from-teal-500 to-teal-600' },
  { label: 'ভিজিটর', value: '১২,৩৪৫', icon: Eye, color: 'from-indigo-500 to-indigo-600' },
];

export default function AdminDashboard() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" />
      </div>
    );
  }

  if (status !== 'authenticated' || session?.user?.role !== 'ADMIN') {
    redirect('/auth/login');
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold gradient-text">📊 ড্যাশবোর্ড</h1>
          <p className="text-sm opacity-70">স্বাগতম, {session.user?.name}</p>
        </div>
        <div className="flex gap-3">
          <button className="btn btn-primary btn-sm rounded-full">
            <TrendingUp className="w-4 h-4" /> রিপোর্ট
          </button>
          <button className="btn btn-outline btn-sm rounded-full">
            <Settings className="w-4 h-4" /> সেটিংস
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statsData.map((stat, index) => (
          <StatsCard key={stat.label} {...stat} delay={index * 0.05} />
        ))}
      </div>

      {/* Quick Actions */}
      <div className="glass p-6 rounded-3xl">
        <h2 className="text-xl font-bold mb-4">দ্রুত কর্ম</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: 'বই যোগ করুন', icon: Book, href: '/admin/books/add' },
            { label: 'ইভেন্ট তৈরি', icon: Calendar, href: '/admin/events/add' },
            { label: 'গ্যালারি আপলোড', icon: Image, href: '/admin/gallery/upload' },
            { label: 'নোটিশ প্রকাশ', icon: Bell, href: '/admin/notices/add' },
          ].map((action) => (
            <motion.a
              key={action.label}
              href={action.href}
              whileHover={{ scale: 1.02 }}
              className="p-4 bg-white/10 dark:bg-white/5 rounded-xl text-center hover:bg-white/20 transition-colors"
            >
              <action.icon className="w-6 h-6 mx-auto mb-2 text-blue-500" />
              <span className="text-sm font-medium">{action.label}</span>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass p-6 rounded-3xl">
          <h3 className="font-bold mb-3">সাম্প্রতিক বই</h3>
          <ul className="space-y-2">
            {['বাংলা সাহিত্যের ইতিহাস', 'বিজ্ঞান ও প্রযুক্তি', 'গণিতের মজা'].map((book, i) => (
              <li key={i} className="flex justify-between items-center p-2 rounded-lg hover:bg-white/10">
                <span>{book}</span>
                <span className="text-xs bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full">নতুন</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="glass p-6 rounded-3xl">
          <h3 className="font-bold mb-3">সাম্প্রতিক সদস্য</h3>
          <ul className="space-y-2">
            {['মো. রহিম', 'সুমাইয়া আক্তার', 'মো. হাসান'].map((name, i) => (
              <li key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/10">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm">
                  {name[0]}
                </div>
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
