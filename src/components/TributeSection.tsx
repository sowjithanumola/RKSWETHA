import {motion} from 'motion/react';

export default function TributeSection() {
  return (
    <section className="py-24 bg-zinc-950 flex flex-col items-center text-center">
      <motion.div
        initial={{opacity: 0, scale: 0.95}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{duration: 1.5}}
        className="max-w-3xl px-6"
      >
        <h2 className="font-serif text-5xl text-amber-200 mb-8 italic">Our Legacy of Love</h2>
        <p className="text-xl text-zinc-300 font-sans leading-relaxed tracking-wider">
          15 years, a tapestry woven with grace, laughter, and unbreakable devotion.
          You built the foundation upon which our dreams are realized, day by day, moment by moment.
        </p>
      </motion.div>
    </section>
  );
}
