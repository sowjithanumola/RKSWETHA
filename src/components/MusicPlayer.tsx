import {useState, useRef, useEffect} from 'react';
import {Play, Pause, Volume2, Music} from 'lucide-react';

export default function MusicPlayer({src}: {src: string | null}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current && src) {
      audioRef.current.src = src;
    }
  }, [src]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  if (!src) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 glassmorphism p-4 rounded-full bg-zinc-900/80 border border-amber-800/50 flex items-center gap-4 text-amber-100">
      <Music size={20} />
      <button onClick={togglePlay} className="text-amber-500 hover:text-amber-300">
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </button>
      <Volume2 size={16} />
      <audio ref={audioRef} loop />
    </div>
  );
}
