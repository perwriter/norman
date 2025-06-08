'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface PianoKeyProps {
  note: string;
  type: 'white' | 'black';
  className?: string;
  onClick: (note: string) => void;
  isPressed?: boolean;
}

const PianoKey: React.FC<PianoKeyProps> = ({ note, type, className, onClick, isPressed }) => {
  const keyStyles = {
    white: 'bg-background border border-muted-foreground h-48 w-12 md:w-16 relative text-foreground flex items-end justify-center pb-2 font-medium rounded-b-md shadow-sm',
    black: 'bg-foreground border border-muted-foreground h-32 w-7 md:w-9 absolute z-10 text-background flex items-end justify-center pb-1 text-xs font-medium rounded-b-sm shadow-md',
  };

  const pressedStyles = {
    white: 'bg-secondary transform scale-[0.98] shadow-inner',
    black: 'bg-secondary/70 transform scale-[0.98] shadow-inner',
  };

  return (
    <button
      onClick={() => onClick(note)}
      className={cn(
        keyStyles[type],
        className,
        isPressed && pressedStyles[type],
        'transition-all duration-50 ease-out focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1'
      )}
      aria-label={`Play note ${note}`}
    >
      <span className={cn(type === 'white' ? 'mt-auto' : 'mt-auto transform rotate-0')}>
        {note.replace(/[0-9]/g, '')}
      </span>
    </button>
  );
};


const pianoLayout = [
  { note: 'C4', type: 'white' as const }, { note: 'C#4', type: 'black' as const, offset: 'left-[2.1rem] md:left-[2.8rem]' },
  { note: 'D4', type: 'white' as const }, { note: 'D#4', type: 'black' as const, offset: 'left-[4.9rem] md:left-[6.5rem]' },
  { note: 'E4', type: 'white' as const },
  { note: 'F4', type: 'white' as const }, { note: 'F#4', type: 'black' as const, offset: 'left-[9.1rem] md:left-[12.2rem]' },
  { note: 'G4', type: 'white' as const }, { note: 'G#4', type: 'black' as const, offset: 'left-[11.8rem] md:left-[15.8rem]' },
  { note: 'A4', type: 'white' as const }, { note: 'A#4', type: 'black' as const, offset: 'left-[14.5rem] md:left-[19.4rem]' },
  { note: 'B4', type: 'white' as const },
  { note: 'C5', type: 'white' as const },
];

export default function InteractivePiano() {
  const [currentNote, setCurrentNote] = useState<string | null>(null);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [pressedKey, setPressedKey] = useState<string | null>(null);

  useEffect(() => {
    // Initialize AudioContext after user interaction (e.g. component mount on client)
    // to comply with browser autoplay policies.
    setAudioContext(new window.AudioContext());
    return () => {
      audioContext?.close();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const playNote = (note: string) => {
    if (!audioContext) return;

    setCurrentNote(note);
    setPressedKey(note);

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Simple frequency mapping (can be improved)
    const noteFrequencies: { [key: string]: number } = {
      'C4': 261.63, 'C#4': 277.18, 'D4': 293.66, 'D#4': 311.13, 'E4': 329.63,
      'F4': 349.23, 'F#4': 369.99, 'G4': 392.00, 'G#4': 415.30, 'A4': 440.00,
      'A#4': 466.16, 'B4': 493.88, 'C5': 523.25
    };

    oscillator.type = 'sine'; // More piano like: 'triangle' or 'square' with envelope
    oscillator.frequency.setValueAtTime(noteFrequencies[note] || 440, audioContext.currentTime);
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime); // Start with some volume
    gainNode.gain.exponentialRampToValueAtTime(0.00001, audioContext.currentTime + 0.75); // Decay

    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.75); // Stop after 0.75 seconds

    setTimeout(() => setPressedKey(null), 150); // Visual feedback duration
  };

  return (
    <div className="bg-card p-4 md:p-8 rounded-lg shadow-inner">
      <div className="flex justify-center items-start relative select-none w-fit mx-auto">
        {pianoLayout.filter(key => key.type === 'white').map((key) => (
          <PianoKey key={key.note} note={key.note} type="white" onClick={playNote} isPressed={pressedKey === key.note} />
        ))}
        {pianoLayout.filter(key => key.type === 'black').map((key) => (
          <PianoKey key={key.note} note={key.note} type="black" className={key.offset} onClick={playNote} isPressed={pressedKey === key.note} />
        ))}
      </div>
      {currentNote && (
        <p className="mt-6 text-center text-2xl font-semibold text-accent animate-fade-in">
          Note: {currentNote.replace(/[0-9]/g, '')}
        </p>
      )}
      {!audioContext && typeof window !== 'undefined' && (
         <p className="mt-4 text-center text-sm text-muted-foreground">
           Click anywhere to enable audio.
         </p>
      )}
    </div>
  );
}
