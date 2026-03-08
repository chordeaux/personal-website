import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useAnimationFrame, useTransform } from 'motion/react';

interface GradientTypeTextProps {
  text: string;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  direction?: 'horizontal' | 'vertical' | 'diagonal';
  pauseOnHover?: boolean;
  yoyo?: boolean;
  typingSpeed?: number;
  startDelay?: number;
  showCursor?: boolean;
}

export default function GradientTypeText({
  text,
  className = '',
  colors = ['#5227FF', '#FF9FFC', '#B19EEF'],
  animationSpeed = 8,
  direction = 'horizontal',
  pauseOnHover = false,
  yoyo = true,
  typingSpeed = 60,
  startDelay = 200,
  showCursor = true,
}: GradientTypeTextProps) {
  const [displayedCount, setDisplayedCount] = useState(0);
  const [typingDone, setTypingDone] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const progress = useMotionValue(0);
  const elapsedRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);
  const animationDuration = animationSpeed * 1000;

  // Typewriter effect
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setDisplayedCount(prev => {
          if (prev >= text.length) {
            clearInterval(interval);
            setTypingDone(true);
            return prev;
          }
          return prev + 1;
        });
      }, typingSpeed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, typingSpeed, startDelay]);

  // Gradient animation
  useAnimationFrame(time => {
    if (isPaused) {
      lastTimeRef.current = null;
      return;
    }
    if (lastTimeRef.current === null) {
      lastTimeRef.current = time;
      return;
    }
    const deltaTime = time - lastTimeRef.current;
    lastTimeRef.current = time;
    elapsedRef.current += deltaTime;

    if (yoyo) {
      const fullCycle = animationDuration * 2;
      const cycleTime = elapsedRef.current % fullCycle;
      progress.set(
        cycleTime < animationDuration
          ? (cycleTime / animationDuration) * 100
          : 100 - ((cycleTime - animationDuration) / animationDuration) * 100
      );
    } else {
      progress.set((elapsedRef.current / animationDuration) * 100);
    }
  });

  useEffect(() => {
    elapsedRef.current = 0;
    progress.set(0);
  }, [animationSpeed, yoyo]);

  const gradientAngle =
    direction === 'horizontal' ? 'to right' : direction === 'vertical' ? 'to bottom' : 'to bottom right';
  const gradientColors = [...colors, colors[0]].join(', ');

  const gradientStyle = {
    backgroundImage: `linear-gradient(${gradientAngle}, ${gradientColors})`,
    backgroundSize: direction === 'horizontal' ? '300% 100%' : direction === 'vertical' ? '100% 300%' : '300% 300%',
    backgroundRepeat: 'repeat' as const,
  };

  const backgroundPosition = useTransform(progress, p => {
    if (direction === 'horizontal') return `${p}% 50%`;
    if (direction === 'vertical') return `50% ${p}%`;
    return `${p}% 50%`;
  });

  return (
    <div
      className={`relative mx-auto flex max-w-fit flex-row items-center justify-center cursor-default ${className}`}
      onMouseEnter={() => { if (pauseOnHover) setIsPaused(true); }}
      onMouseLeave={() => { if (pauseOnHover) setIsPaused(false); }}
    >
      {/* Invisible placeholder to lock the container width */}
      <span className="invisible select-none whitespace-pre-wrap" aria-hidden="true">{text}</span>

      {/* Visible typed portion, overlaid absolutely */}
      <motion.span
        className="absolute inset-0 inline-block text-transparent bg-clip-text whitespace-pre-wrap"
        style={{ ...gradientStyle, backgroundPosition, WebkitBackgroundClip: 'text' }}
      >
        {text.slice(0, displayedCount)}
        {showCursor && !typingDone && (
          <span className="cursor-blink text-indigo-300 not-italic">|</span>
        )}
      </motion.span>
    </div>
  );
}
