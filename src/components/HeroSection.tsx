import {motion} from 'motion/react';
import {useState} from 'react';
import {Play, Heart} from 'lucide-react';

export default function HeroSection({onStart}: {onStart: () => void}) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Floating Elements (Visual placeholder) */}
      <motion.div
        animate={{y: [0, -20, 0], opacity: [0.5, 1, 0.5]}}
        transition={{duration: 5, repeat: Infinity, ease: "easeInOut"}}
        className="absolute top-10 right-10 text-pink-300"
      >
        <Heart size={64} fill="currentColor" />
      </motion.div>

      <div className="text-center z-10 space-y-6">
        <motion.h1
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
          className="font-serif text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]"
        >
          Happy Anniversary<br/>Mom & Dad
        </motion.h1>
        <motion.p
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 0.5, duration: 0.8}}
          className="text-2xl text-amber-100 font-sans tracking-widest"
        >
          Forever Together
        </motion.p>
        <motion.button
          whileHover={{scale: 1.05}}
          whileTap={{scale: 0.95}}
          onClick={onStart}
          className="mt-8 flex items-center gap-2 mx-auto px-8 py-3 rounded-full bg-amber-500 text-white font-serif text-lg shadow-[0_0_20px_rgba(245,158,11,0.4)]"
        >
          <Play size={20} fill="currentColor" /> Begin Our Story
        </motion.button>
      </div>
    </section>
  );
}
