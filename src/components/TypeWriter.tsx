"use client";

import { TypeAnimation } from "react-type-animation";

export function TypeWriter() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "HTML",
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        "CSS",
        2000,
        "JavaScript",
        2000,
        "React",
        2000,
        "Tailwind",
        2000,
        "PHP",
        2000,
      ]}
      className=" font-mono text-center justify-center p-10 text-gray-600 "
      wrapper="span"
      speed={50}
      style={{ fontSize: "40px", display: "inline-block" }}
      repeat={Infinity}
    />
  );
}
