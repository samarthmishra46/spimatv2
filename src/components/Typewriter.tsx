import React, { useEffect, useState } from 'react';

type TypewriterProps = {
  lines: string[];
  className?: string;
  cursor?: string;
  typingSpeed?: number; // ms per char
  pauseBetweenLines?: number; // ms pause after completing a line
};

export default function Typewriter({
  lines,
  className = '',
  cursor = '|',
  typingSpeed = 40,
  pauseBetweenLines = 800,
}: TypewriterProps) {
  const [text, setText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor(v => !v), 500);
    return () => clearInterval(blink);
  }, []);

  useEffect(() => {
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
  }, [charIndex, lineIndex, lines, typingSpeed, pauseBetweenLines]);

  // If we've finished all lines, stop and show full joined text
  useEffect(() => {
    if (lineIndex >= lines.length) {
      setText(lines.join('\n'));
    }
  }, [lineIndex, lines]);

  // Render newlines as <br /> and preserve spacing
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
