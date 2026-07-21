'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, User, ChevronRight } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  organizer: string;
  coverImage: string | null;
  status: 'UPCOMING' | 'ONGOING' | 'PAST';
}

export function EventCard() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        // Mock data
        const mockEvents = [
          {
            id: '1',
            title: 'বইমেলা ২০২৬',
            date: '১৫ মার্চ ২০২৬',
            time: 'সকাল ১০টা - রাত ৮টা',
            location: 'লাইব্রেরি প্রাঙ্গণ',
            organizer: 'লাইব্রেরি কর্তৃপক্ষ',
            coverImage: null,
            status: 'UPCOMING' as const,
          },
          {
            id: '2',
            title: 'স্মারক বক্তৃতা সিরিজ',
            date: '২০ মার্চ ২০২৬',
            time: 'বিকাল ৪টা',
            location: 'অডিটোরিয়াম',
            organizer: 'সাংস্কৃতিক পরিষদ',
            coverImage: null,
            status: 'UPCOMING' as const,
          },
          {
            id: '3',
            title: 'পাঠাগার দিবস উদযাপন',
            date: '২৫ মার্চ ২০২৬',
            time: 'সকাল ৯টা',
            location: 'লাইব্রেরি মাঠ',
            organizer: 'লাইব্রেরি কমিটি',
            coverImage: null,
            status: 'UPCOMING' as const,
          },
        ];
        setEvents(mockEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  if (loading) {
    return (
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl md:text-3xl font-bold gradient-text">📅 আসন্ন ইভেন্ট</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="glass p-5 rounded-2xl animate-pulse">
              <div className="bg-gray-200 dark:bg-gray-700 h-32 rounded-xl" />
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mt-3 w-3/4" />
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded mt-2 w-1/2" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl md:text-3xl font-bold gradient-text flex items-center gap-2">
          📅 আসন্ন ইভেন্ট
        </h2>
        <Link href="/events" className="btn btn-ghost btn-sm">
          সব দেখুন →
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass p-5 rounded-2xl card-hover"
          >
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 h-32 rounded-xl flex items-center justify-center text-5xl">
              🎭
            </div>
            <h3 className="font-bold mt-3">{event.title}</h3>
            <div className="space-y-1 mt-2 text-sm opacity-70">
              <p className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> {event.date}
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> {event.time}
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> {event.location}
              </p>
            </div>
            <div className="flex items-center justify-between mt-3">
              <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded-full">
                {event.status === 'UPCOMING' ? 'আসন্ন' : event.status === 'ONGOING' ? 'চলমান' : 'সমাপ্ত'}
              </span>
              <Link href={`/events/${event.id}`} className="btn btn-primary btn-xs">
                বিস্তারিত <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
