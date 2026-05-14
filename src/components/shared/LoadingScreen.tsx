import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 15);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
      className="fixed inset-0 z-[10000] bg-obsidian flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative flex flex-col items-center">
        {/* Brand Logo/Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8"
        >
          <h2 className="font-brand text-cream text-5xl sm:text-6xl tracking-[0.2em] uppercase font-bold">
            Wicht
          </h2>
        </motion.div>

        {/* Progress Bar Container */}
        <div className="w-48 h-[2px] bg-white/10 relative overflow-hidden rounded-full mb-4">
          <motion.div
            className="absolute top-0 left-0 h-full bg-amber-fire shadow-[0_0_15px_rgba(232,93,4,0.8)]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Progress Text */}
        <motion.span
          className="text-warm-gold font-display text-sm tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {progress}%
        </motion.span>
      </div>

      {/* Background Smoke particles */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-fire/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-fire/5 blur-[120px] animate-pulse delay-1000" />
      </div>
    </motion.div>
  );
}
