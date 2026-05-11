import {motion} from 'motion/react';

export default function CounterSection() {
  const stats = [
    {label: "Y / M / D", value: "15 / 0 / 0"},
    {label: "Months & Days", value: "180 / 0"},
    {label: "Weeks & Days", value: "782 / 5"},
    {label: "Total Days", value: "5479"}
  ];

  return (
    <section className="py-20 bg-zinc-950 text-center">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 px-6 max-w-6xl mx-auto">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{opacity: 0, scale: 0.8}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 0.6, delay: i * 0.2}}
            className="p-6 bg-zinc-900 border border-amber-800 rounded-2xl shadow-[0_0_15px_rgba(251,191,36,0.1)]"
          >
            <div className="text-3xl md:text-4xl font-serif text-amber-300 mb-2">{stat.value}</div>
            <div className="text-xs text-zinc-400 uppercase tracking-widest">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
