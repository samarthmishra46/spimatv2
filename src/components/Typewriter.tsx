import React, { useEffect, useState } from 'react';

type TypewriterProps = {
  lines: string[];
  className?: string;
  cursor?: string;
  typingSpeed?: number; // ms per char
  pauseBetweenLines?: number; // ms pause after completing a line
  backspaceSpeed?: number; // ms per char when deleting
  loop?: boolean; // whether to loop through lines
};

export default function Typewriter({
  lines,
  className = '',
  cursor = '|',
  typingSpeed = 40,
  pauseBetweenLines = 800,
  backspaceSpeed = 30,
  loop = false,
}: TypewriterProps) {
  const [text, setText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor(v => !v), 500);
    return () => clearInterval(blink);
  }, []);

  useEffect(() => {
    if (!loop) {
      // Original non-looping behavior
      if (lineIndex >= lines.length) return;

      if (charIndex <= lines[lineIndex].length) {
        const t = setTimeout(() => {
          setText(prev => prev + lines[lineIndex].charAt(charIndex));
          setCharIndex(ci => ci + 1);
        }, typingSpeed);
        return () => clearTimeout(t);
      }

      // finished current line, add a line break and pause then move to next
      const after = setTimeout(() => {
        // add a newline only if it's not the last line
        if (lineIndex < lines.length - 1) {
          setText(prev => prev + '\n');
        }
        setLineIndex(li => li + 1);
        setCharIndex(0);
      }, pauseBetweenLines);

      return () => clearTimeout(after);
    } else {
      // Looping behavior with backspace
      const currentLine = lines[lineIndex];
      
      if (!isDeleting && charIndex <= currentLine.length) {
        // Typing forward
        const t = setTimeout(() => {
          setText(currentLine.substring(0, charIndex));
          setCharIndex(ci => ci + 1);
        }, typingSpeed);
        return () => clearTimeout(t);
      } else if (!isDeleting && charIndex > currentLine.length) {
        // Finished typing, pause then start deleting
        const pause = setTimeout(() => {
          setIsDeleting(true);
        }, pauseBetweenLines);
        return () => clearTimeout(pause);
      } else if (isDeleting && charIndex > 0) {
        // Deleting
        const t = setTimeout(() => {
          setText(currentLine.substring(0, charIndex - 1));
          setCharIndex(ci => ci - 1);
        }, backspaceSpeed);
        return () => clearTimeout(t);
      } else if (isDeleting && charIndex === 0) {
        // Finished deleting, move to next line
        setIsDeleting(false);
        setLineIndex((prev) => (prev + 1) % lines.length);
        setCharIndex(0);
      }
    }
  }, [charIndex, lineIndex, isDeleting, lines, typingSpeed, pauseBetweenLines, backspaceSpeed, loop]);

  // If we've finished all lines (non-loop mode), stop and show full joined text
  useEffect(() => {
    if (!loop && lineIndex >= lines.length) {
      setText(lines.join('\n'));
    }
  }, [lineIndex, lines, loop]);

  // Render newlines as <br /> and preserve spacing (for non-loop mode)
  if (!loop) {
    const parts = text.split('\n');
    return (
      <h1 className={className} aria-live="polite">
        {parts.map((p, i) => (
          <React.Fragment key={i}>
            {p}
            {i < parts.length - 1 ? <br /> : null}
          </React.Fragment>
        ))}
        <span className="ml-1" aria-hidden>
          {showCursor ? cursor : ' '}
        </span>
      </h1>
    );
  }

  // Loop mode - single line display
  return (
    <h1 className={className} aria-live="polite">
      {text}
      <span className="ml-1" aria-hidden>
        {showCursor ? cursor : ' '}
      </span>
    </h1>
  );
}
