import {motion} from 'motion/react';
import {useEffect, useState} from 'react';

export default function MessageSection() {
  const text = "N A N N A & AMMA, Your love is the heart of our home. Your smiles, strength, and endless support mean everything. Thank you for building such a beautiful life together. Happy Anniversary 💛";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 bg-amber-950/20 text-center">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        className="max-w-2xl mx-auto"
      >
        <p className="font-serif text-2xl text-amber-100 leading-relaxed italic">
          {displayedText}
        </p>
      </motion.div>
    </section>
  );
}
