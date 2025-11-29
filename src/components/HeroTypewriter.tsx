import React, { useEffect, useState } from 'react';

type HeroTypewriterProps = {
  staticLines: string[];
  loopingLines: string[];
  className?: string;
  cursor?: string;
  typingSpeed?: number;
  pauseBetweenLines?: number;
  backspaceSpeed?: number;
};

export default function HeroTypewriter({
  staticLines,
  loopingLines,
  className = '',
  cursor = '|',
  typingSpeed = 50,
  pauseBetweenLines = 2000,
  backspaceSpeed = 30,
}: HeroTypewriterProps) {
  const [staticText, setStaticText] = useState('');
  const [staticLineIndex, setStaticLineIndex] = useState(0);
  const [staticCharIndex, setStaticCharIndex] = useState(0);
  const [staticComplete, setStaticComplete] = useState(false);

  const [loopingText, setLoopingText] = useState('');
  const [loopingLineIndex, setLoopingLineIndex] = useState(0);
  const [loopingCharIndex, setLoopingCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const [showCursor, setShowCursor] = useState(true);

  // Cursor blink
  useEffect(() => {
    const blink = setInterval(() => setShowCursor(v => !v), 500);
    return () => clearInterval(blink);
  }, []);

  // Type static lines first (one time only)
  useEffect(() => {
    if (staticComplete) return;
    if (staticLineIndex >= staticLines.length) {
      setStaticComplete(true);
      return;
    }

    if (staticCharIndex <= staticLines[staticLineIndex].length) {
      const t = setTimeout(() => {
        setStaticText(prev => prev + staticLines[staticLineIndex].charAt(staticCharIndex));
        setStaticCharIndex(ci => ci + 1);
      }, typingSpeed);
      return () => clearTimeout(t);
    }

    // Finished current static line, add line break and move to next
    const after = setTimeout(() => {
      if (staticLineIndex < staticLines.length - 1) {
        setStaticText(prev => prev + '\n');
      }
      setStaticLineIndex(li => li + 1);
      setStaticCharIndex(0);
    }, pauseBetweenLines);

    return () => clearTimeout(after);
  }, [staticCharIndex, staticLineIndex, staticLines, typingSpeed, pauseBetweenLines, staticComplete]);

  // After static lines are done, loop through looping lines with backspace
  useEffect(() => {
    if (!staticComplete) return;

    const currentLine = loopingLines[loopingLineIndex];
    
    if (!isDeleting && loopingCharIndex <= currentLine.length) {
      // Typing forward
      const t = setTimeout(() => {
        setLoopingText(currentLine.substring(0, loopingCharIndex));
        setLoopingCharIndex(ci => ci + 1);
      }, typingSpeed);
      return () => clearTimeout(t);
    } else if (!isDeleting && loopingCharIndex > currentLine.length) {
      // Finished typing, pause then start deleting
      const pause = setTimeout(() => {
        setIsDeleting(true);
      }, pauseBetweenLines);
      return () => clearTimeout(pause);
    } else if (isDeleting && loopingCharIndex > 0) {
      // Deleting
      const t = setTimeout(() => {
        setLoopingText(currentLine.substring(0, loopingCharIndex - 1));
        setLoopingCharIndex(ci => ci - 1);
      }, backspaceSpeed);
      return () => clearTimeout(t);
    } else if (isDeleting && loopingCharIndex === 0) {
      // Finished deleting, move to next line
      setIsDeleting(false);
      setLoopingLineIndex((prev) => (prev + 1) % loopingLines.length);
      setLoopingCharIndex(0);
    }
  }, [loopingCharIndex, loopingLineIndex, isDeleting, loopingLines, typingSpeed, pauseBetweenLines, backspaceSpeed, staticComplete]);

  // Render static lines as separate lines
  const staticParts = staticText.split('\n');

  return (
    <h1 className={className} aria-live="polite">
      {staticParts.map((p, i) => (
        <React.Fragment key={i}>
          {p}
          {i < staticParts.length - 1 ? <br /> : null}
        </React.Fragment>
      ))}
      {staticComplete && (
        <>
          <br />
          {loopingText}
        </>
      )}
      <span className="ml-1" aria-hidden>
        {showCursor ? cursor : ' '}
      </span>
    </h1>
  );
}
