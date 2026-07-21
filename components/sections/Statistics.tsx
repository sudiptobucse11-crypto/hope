'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Book, Users, Calendar, FileText } from 'lucide-react';

const stats = [
  { label: 'বই', value: '১২,৫০০+', icon: Book },
  { label: 'সদস্য', value: '৮৫০+', icon: Users },
  { label: 'ইভেন্ট', value: '২৪০+', icon: Calendar },
  { label: 'ই-বুক', value: '৩,২০০+', icon: FileText },
];

export function Statistics() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: index * 0.1 }}
          className="glass p-6 rounded-2xl text-center card-hover"
        >
          <stat.icon className="w-8 h-8 text-blue-500 mx-auto mb-2" />
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: index * 0.1 + 0.2 }}
            className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400"
          >
            {stat.value}
          </motion.div>
          <p className="text-sm opacity-70 mt-1">{stat.label}</p>
        </motion.div>
      ))}
    </section>
  );
}
