'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  content: string;
  rating: number;
  position?: string;
  imageUrl?: string;
}

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      setLoading(true);
      try {
        const mockTestimonials = [
          {
            id: '1',
            name: 'মো. রহিমুল ইসলাম',
            content: 'এই লাইব্রেরি আমার জীবনে অনেক পরিবর্তন এনেছে। এখানে আমি নতুন জ্ঞান অর্জন করেছি এবং নিজেকে উন্নত করতে পেরেছি।',
            rating: 5,
            position: 'নিয়মিত পাঠক',
          },
          {
            id: '2',
            name: 'ড. ফাতেমা বেগম',
            content: 'লাইব্রেরিটির ডিজিটাল সংগ্রহ অসাধারণ। আমি ঘরে বসেই গবেষণার জন্য প্রয়োজনীয় বই পেয়ে যাই।',
            rating: 5,
            position: 'গবেষক',
          },
          {
            id: '3',
            name: 'মো. হাসান আলী',
            content: 'বইমেলা এবং সাংস্কৃতিক অনুষ্ঠানগুলো আমাদের কমিউনিটিকে একত্রিত করেছে। এটি একটি আদর্শ লাইব্রেরি।',
            rating: 4,
            position: 'স্থানীয় বাসিন্দা',
          },
        ];
        setTestimonials(mockTestimonials);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  return (
    <section className="glass p-6 md:p-10 rounded-3xl">
      <h2 className="text-2xl md:text-3xl font-bold gradient-text text-center mb-6 flex items-center justify-center gap-2">
        <Quote className="w-6 h-6" /> পাঠকের মতামত
      </h2>
      {loading ? (
        <div className="grid md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-gray-200 dark:bg-gray-700 h-24 rounded-lg" />
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mt-3 w-1/2" />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 dark:bg-white/5 p-5 rounded-2xl"
            >
              <div className="flex gap-1 text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < testimonial.rating ? 'fill-current' : 'opacity-30'}`}
                  />
                ))}
              </div>
              <p className="text-sm opacity-80">"{testimonial.content}"</p>
              <div className="mt-3">
                <p className="font-semibold text-sm">{testimonial.name}</p>
                {testimonial.position && (
                  <p className="text-xs opacity-60">{testimonial.position}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
