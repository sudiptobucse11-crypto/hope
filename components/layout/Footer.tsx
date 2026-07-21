'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Clock 
} from 'lucide-react';

const footerLinks = {
  quick: [
    { label: 'হোম', href: '/' },
    { label: 'বই', href: '/books' },
    { label: 'ডিজিটাল লাইব্রেরি', href: '/digital-library' },
    { label: 'গ্যালারি', href: '/gallery' },
    { label: 'ইভেন্ট', href: '/events' },
    { label: 'সংবাদ', href: '/news' },
    { label: 'নোটিশ', href: '/notices' },
    { label: 'যোগাযোগ', href: '/contact' },
  ],
  resources: [
    { label: 'সদস্য ফর্ম', href: '/downloads/membership-form' },
    { label: 'বার্ষিক প্রতিবেদন', href: '/downloads/annual-report' },
    { label: 'লাইব্রেরি নীতিমালা', href: '/downloads/library-rules' },
    { label: 'ম্যাগাজিন', href: '/downloads/magazine' },
    { label: 'নিউজলেটার', href: '/downloads/newsletter' },
    { label: 'সার্কুলার', href: '/downloads/circular' },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              স্পিকার আঃ জব্বার খান<br />
              <span className="text-sm font-normal">স্মৃতি পাবলিক লাইব্রেরি</span>
            </h3>
            <p className="text-sm mb-4">
              জ্ঞানই শক্তি — বই হোক সকলের বন্ধু
            </p>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> গ্রাম: ভূতেরদিয়া, উপজেলা: বাবুগঞ্জ, জেলা: বরিশাল
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> sajkspla@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> +৮৮০ ১৭১২-৩৪৫৬৭৮
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> সকাল ৯টা – রাত ৮টা (শুক্রবার বন্ধ)
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">দ্রুত লিংক</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.quick.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">ডাউনলোড</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">সামাজিক যোগাযোগ</h4>
            <div className="flex gap-3 mb-6">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-sky-500 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </motion.a>
            </div>
            <div>
              <p className="text-sm mb-2">নিউজলেটার সাবস্ক্রাইব করুন</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="আপনার ইমেইল"
                  className="flex-1 px-3 py-2 rounded-l-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 text-sm"
                />
                <button className="px-4 py-2 bg-blue-600 rounded-r-lg hover:bg-blue-700 transition-colors text-sm">
                  সাবস্ক্রাইব
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>© {currentYear} স্পিকার আঃ জব্বার খান স্মৃতি পাবলিক লাইব্রেরি</p>
          <p className="text-gray-500 mt-1">সর্বস্বত্ব সংরক্ষিত</p>
        </div>
      </div>
    </footer>
  );
}
