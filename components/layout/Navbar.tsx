'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useSession, signOut } from 'next-auth/react';
import { motion } from 'framer-motion';
import { 
  Menu, X, Home, Book, Library, Image, Calendar, Newspaper, 
  Bell, Phone, User, LogIn, LogOut, Sun, Moon, ChevronDown,
  Users, Settings, BarChart3
} from 'lucide-react';

const navItems = [
  { href: '/', label: 'হোম', icon: Home },
  { href: '/books', label: 'বই', icon: Book },
  { href: '/digital-library', label: 'ডিজিটাল লাইব্রেরি', icon: Library },
  { href: '/gallery', label: 'গ্যালারি', icon: Image },
  { href: '/events', label: 'ইভেন্ট', icon: Calendar },
  { href: '/news', label: 'সংবাদ', icon: Newspaper },
  { href: '/notices', label: 'নোটিশ', icon: Bell },
  { href: '/contact', label: 'যোগাযোগ', icon: Phone },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const { data: session, status } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
              সা
            </div>
            <div className="hidden md:block">
              <div className="text-sm font-bold leading-tight">
                স্পিকার আঃ জব্বার খান
              </div>
              <div className="text-xs opacity-70">স্মৃতি পাবলিক লাইব্রেরি</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-sm font-medium flex items-center gap-1.5"
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Auth */}
            {status === 'authenticated' ? (
              <div className="dropdown dropdown-end">
                <div tabIndex={0} className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-white/10">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm">
                    {session.user?.name?.[0] || 'U'}
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <ul className="dropdown-content menu p-2 shadow-lg bg-base-100 rounded-box w-52">
                  {session.user?.role === 'ADMIN' && (
                    <>
                      <li><Link href="/admin" className="flex items-center gap-2"><BarChart3 className="w-4 h-4" /> ড্যাশবোর্ড</Link></li>
                      <li><Link href="/admin/settings" className="flex items-center gap-2"><Settings className="w-4 h-4" /> সেটিংস</Link></li>
                    </>
                  )}
                  <li><Link href="/membership" className="flex items-center gap-2"><User className="w-4 h-4" /> প্রোফাইল</Link></li>
                  <li><button onClick={() => signOut()} className="flex items-center gap-2 text-red-500"><LogOut className="w-4 h-4" /> লগআউট</button></li>
                </ul>
              </div>
            ) : (
              <Link href="/auth/login" className="btn btn-primary btn-sm rounded-full">
                <LogIn className="w-4 h-4" /> লগইন
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-4 space-y-1 border-t border-white/10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </Link>
            ))}
            {status !== 'authenticated' && (
              <Link
                href="/auth/login"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors text-primary"
                onClick={() => setIsOpen(false)}
              >
                <LogIn className="w-5 h-5" />
                লগইন
              </Link>
            )}
            {status === 'authenticated' && session.user?.role === 'ADMIN' && (
              <Link
                href="/admin"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <BarChart3 className="w-5 h-5" />
                ড্যাশবোর্ড
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </nav>
  );
}
