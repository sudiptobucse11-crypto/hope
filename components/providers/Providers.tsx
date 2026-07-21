'use client';

import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <AnimatePresence mode="wait">
          {children}
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(12px)',
                borderRadius: '12px',
                padding: '16px',
              },
            }}
          />
        </AnimatePresence>
      </ThemeProvider>
    </SessionProvider>
  );
}
