import { useEffect, useState } from "react";

// Cycles through `words`, typing and deleting each one.
// Honors prefers-reduced-motion by showing the first word statically.
export function useTypewriter(words, { typeSpeed = 90, deleteSpeed = 45, pause = 1400 } = {}) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0); // which word
  const [deleting, setDeleting] = useState(false);

  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (reduceMotion) {
      setText(words[0] || "");
      return;
    }

    const word = words[index % words.length];
    let timer;

    if (!deleting && text === word) {
      // finished typing -> pause, then start deleting
      timer = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      // finished deleting -> next word
      setDeleting(false);
      setIndex((p) => (p + 1) % words.length);
    } else {
      // type or delete one character
      timer = setTimeout(
        () => {
          const next = deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1);
          setText(next);
        },
        deleting ? deleteSpeed : typeSpeed
      );
    }

    return () => clearTimeout(timer);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause, reduceMotion]);

  return text;
}