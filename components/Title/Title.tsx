import React, { useEffect, useState } from "react";

function Title({ text }: { text: string }) {
  const words = text.split(" ");
  const [current, setCurrent] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (current <= words.length - 1) setCurrent((p) => p + 1);
      else setCurrent(0);
    }, 3000);
    return () => clearInterval(interval);
  }, [current, words.length]);
  return (
    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-center max-w-[1000px]">
      {words.map((word, i) => {
        return (
          <span key={i} className="inline-flex mx-[6px] md:mx-[12px]">
            <span className={`${i === current && "word"} relative`}>
              {word + " "}
            </span>
          </span>
        );
      })}
    </h1>
  );
}

export default Title;
