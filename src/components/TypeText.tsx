import { useState, useEffect } from 'react';

interface TypeTextProps {
  text: string;
  className?: string;
  typingSpeed?: number;
  startDelay?: number;
  showCursor?: boolean;
  cursorClassName?: string;
}

export default function TypeText({
  text,
  className = '',
  typingSpeed = 60,
  startDelay = 200,
  showCursor = true,
  cursorClassName = 'text-rouge-500',
}: TypeTextProps) {
  const [displayedCount, setDisplayedCount] = useState(0);
  const [typingDone, setTypingDone] = useState(false);

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

  return (
    <div className={`relative mx-auto flex max-w-fit flex-row items-center justify-center cursor-default ${className}`}>
      {/* Invisible placeholder to lock the container width */}
      <span className="invisible select-none whitespace-pre-wrap" aria-hidden="true">{text}</span>

      {/* Visible typed portion, overlaid absolutely */}
      <span className="absolute inset-0 inline-block whitespace-pre-wrap">
        {text.slice(0, displayedCount)}
        {showCursor && !typingDone && (
          <span className={`cursor-blink not-italic ${cursorClassName}`}>|</span>
        )}
      </span>
    </div>
  );
}
