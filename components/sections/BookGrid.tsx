'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Book, Eye, Download, Heart } from 'lucide-react';

interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  category: string;
  coverImage: string | null;
  available: boolean;
  featured: boolean;
}

interface BookGridProps {
  title: string;
  type: 'popular' | 'featured' | 'latest';
}

export function BookGrid({ title, type }: BookGridProps) {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching books
    const fetchBooks = async () => {
      setLoading(true);
      try {
        // Replace with actual API call
        const mockBooks = Array(4).fill(null).map((_, i) => ({
          id: `book-${i}`,
          title: ['বাংলা সাহিত্যের ইতিহাস', 'বিজ্ঞান ও প্রযুক্তি', 'গণিতের মজা', 'কবিতা সংগ্রহ'][i],
          author: ['ড. মুহম্মদ শহীদুল্লাহ', 'প্রফেসর মো. জামিল', 'ড. আব্দুল করিম', 'রবীন্দ্রনাথ ঠাকুর'][i],
          isbn: `978-984-123-456-${i}`,
          category: ['সাহিত্য', 'বিজ্ঞান', 'গণিত', 'কবিতা'][i],
          coverImage: null,
          available: i % 2 === 0,
          featured: i === 0,
        }));
        setBooks(mockBooks);
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="glass p-4 rounded-2xl animate-pulse">
            <div className="bg-gray-200 dark:bg-gray-700 h-48 rounded-xl" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mt-3 w-3/4" />
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded mt-2 w-1/2" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold gradient-text">{title}</h2>
        <Link href="/books" className="btn btn-ghost btn-sm">
          সব দেখুন →
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {books.map((book, index) => (
          <motion.div
            key={book.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass p-4 rounded-2xl card-hover group"
          >
            <div className="relative bg-blue-50 dark:bg-blue-900/20 h-48 rounded-xl flex items-center justify-center overflow-hidden">
              {book.coverImage ? (
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <Book className="w-16 h-16 text-blue-400" />
              )}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <Link
                  href={`/books/${book.id}`}
                  className="p-2 bg-white rounded-full hover:bg-blue-100 transition-colors"
                >
                  <Eye className="w-5 h-5 text-gray-800" />
                </Link>
                <button className="p-2 bg-white rounded-full hover:bg-blue-100 transition-colors">
                  <Heart className="w-5 h-5 text-gray-800" />
                </button>
              </div>
            </div>
            <h3 className="font-bold mt-3 line-clamp-1">{book.title}</h3>
            <p className="text-sm opacity-70">{book.author}</p>
            <p className="text-xs opacity-50 mt-1">ISBN: {book.isbn}</p>
            <div className="flex justify-between items-center mt-2">
              <span className="text-xs bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded-full">
                {book.category}
              </span>
              <span className={`text-xs font-medium ${book.available ? 'text-green-600' : 'text-red-600'}`}>
                {book.available ? '✅ উপলব্ধ' : '❌ অনুপলব্ধ'}
              </span>
            </div>
            <div className="flex gap-2 mt-3">
              <Link href={`/books/${book.id}`} className="btn btn-primary btn-xs flex-1">
                পড়ুন
              </Link>
              <button className="btn btn-outline btn-xs flex-1">
                <Download className="w-3 h-3" /> PDF
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
