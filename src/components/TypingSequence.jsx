import { motion } from "framer-motion";
import { useState, useEffect} from "react";

export default function TypingSequence({ lines, speed = 20, onComplete, cursorRef }) {
  const [currentLine, setCurrentLine] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    if (currentLine >= lines.length) {
      onComplete && onComplete();
      return;
    }

    setText("");
    let index = 0;

    const interval = setInterval(() => {
      setText(lines[currentLine].text.slice(0, index));
      index++;

      if (index > lines[currentLine].text.length) {
        clearInterval(interval);
        setTimeout(() => setCurrentLine((prev) => prev + 1), 300);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [currentLine,onComplete, lines, speed]);

  return (
    <div className="text-center space-y-2">
      {lines.map((line, i) => (
        <div key={i}>
          {i < currentLine && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={line.className}
            >
              {line.text}
            </motion.p>
          )}

          {i === currentLine && (
            <p className={line.className}>
              {text}

              {/* Cursor becomes the divider later */}
              <motion.span
                ref={cursorRef}
                id="typing-cursor"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-[3px] h-6 bg-blue-500 ml-1 rounded"
              ></motion.span>
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
