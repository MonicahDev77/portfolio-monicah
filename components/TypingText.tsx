"use client";

import { useState, useEffect } from "react";

const roles = [
  "Software Developer",
  "Full Stack Developer",
  "Mobile App Developer",
  "Problem Solver",
];

export default function TypingText() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[index];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (text.length < currentRole.length) {
            setText(currentRole.slice(0, text.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (text.length > 0) {
            setText(currentRole.slice(0, text.length - 1));
          } else {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <span className="gradient-text">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}