import {motion} from 'motion/react';

export default function GallerySection() {
  return (
    <section className="py-20 bg-zinc-900 border-t border-amber-900/30">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-serif text-amber-200 text-center mb-16">Cherished Moments</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((i) => (
            <motion.div
              key={i}
              whileHover={{scale: 1.05}}
              className="bg-zinc-800 h-64 rounded-2xl overflow-hidden glassmorphism"
            >
              <div className="w-full h-full bg-zinc-700/50 flex items-center justify-center text-zinc-500">Photo {i}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
