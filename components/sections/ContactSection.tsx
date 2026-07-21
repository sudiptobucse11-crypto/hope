'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="glass p-6 md:p-10 rounded-3xl">
      <h2 className="text-2xl md:text-3xl font-bold gradient-text text-center mb-6">
        📞 যোগাযোগ
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-blue-500 mt-0.5" />
              <div>
                <p className="font-semibold">ঠিকানা</p>
                <p className="text-sm opacity-70">
                  গ্রাম: ভূতেরদিয়া<br />
                  উপজেলা: বাবুগঞ্জ<br />
                  জেলা: বরিশাল
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-blue-500 mt-0.5" />
              <div>
                <p className="font-semibold">ইমেইল</p>
                <p className="text-sm opacity-70">sajkspla@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-blue-500 mt-0.5" />
              <div>
                <p className="font-semibold">ফোন</p>
                <p className="text-sm opacity-70">+৮৮০ ১৭১২-৩৪৫৬৭৮</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-blue-500 mt-0.5" />
              <div>
                <p className="font-semibold">অফিস সময়</p>
                <p className="text-sm opacity-70">সকাল ৯টা – রাত ৮টা</p>
                <p className="text-xs opacity-50">শুক্রবার বন্ধ</p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex gap-3">
            <button className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 transition-colors">
              📘
            </button>
            <button className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 transition-colors">
              🐦
            </button>
            <button className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 transition-colors">
              📸
            </button>
            <button className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 transition-colors">
              ▶️
            </button>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="আপনার নাম"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          />
          <input
            type="email"
            placeholder="ইমেইল"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          />
          <input
            type="tel"
            placeholder="ফোন নম্বর"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <textarea
            placeholder="আপনার বার্তা"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
            required
          />
          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {submitting ? (
              'পাঠানো হচ্ছে...'
            ) : submitted ? (
              '✅ পাঠানো হয়েছে'
            ) : (
              <>
                <Send className="w-4 h-4" /> বার্তা পাঠান
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
