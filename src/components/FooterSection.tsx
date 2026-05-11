import {motion} from 'motion/react';
import {Heart} from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="py-10 text-center bg-zinc-950 border-t border-zinc-800">
      <p className="text-zinc-500 font-sans flex items-center justify-center gap-2">
        Made with Love <Heart size={16} className="text-amber-500" fill="currentColor" />
      </p>
    </footer>
  );
}
