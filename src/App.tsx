/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import {useState} from 'react';
import HeroSection from './components/HeroSection';
import MessageSection from './components/MessageSection';
import CounterSection from './components/CounterSection';
import FooterSection from './components/FooterSection';
import TributeSection from './components/TributeSection';
import MusicPlayer from './components/MusicPlayer';

export default function App() {
  const [started, setStarted] = useState(false);
  const [songUrl, setSongUrl] = useState<string | null>("https://sowjithsong.edgeone.app/Amma%20Navvu%20Balama.mp3");

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {!started && <HeroSection onStart={() => setStarted(true)} />}
      {started && (
        <main>
          <TributeSection />
          <MessageSection />
          <CounterSection />
          <FooterSection />
        </main>
      )}
      <MusicPlayer src={songUrl} />
    </div>
  );
}
