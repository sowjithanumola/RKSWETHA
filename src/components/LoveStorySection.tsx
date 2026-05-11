import {motion} from 'motion/react';

export default function LoveStorySection() {
  const events = [
    {year: "1995", title: "Their Journey Begins", desc: "The start of a beautiful partnership."},
    {year: "2000", title: "Building a Home", desc: "Growing together and creating cherished memories."},
    {year: "2025", title: "Years of Togetherness", desc: "Still stronger and deeply in love."}
  ];

  return (
    <section className="py-20 bg-zinc-900 border-t border-amber-900/30">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-serif text-amber-200 text-center mb-16">The Journey</h2>
        <div className="space-y-12">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{opacity: 0, x: -50}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 0.8, delay: index * 0.2}}
              className="flex gap-6 items-start"
            >
              <div className="font-serif text-3xl text-amber-500 font-bold w-24 shrink-0">{event.year}</div>
              <div className="border-l-2 border-amber-800 pl-6">
                <h3 className="text-2xl text-amber-100 mb-2">{event.title}</h3>
                <p className="text-zinc-400">{event.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
