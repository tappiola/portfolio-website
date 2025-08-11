import React, { useCallback, useEffect, useRef, useState } from 'react';

export function Carousel({ children, className = '' }) {
  const slides = React.Children.toArray(children);
  const [index, setIndex] = useState(0);
  const intervalRef = useRef();

  const next = useCallback(
    () => setIndex((i) => (i + 1) % slides.length),
    [slides.length],
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + slides.length) % slides.length),
    [slides.length],
  );

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const start = useCallback(() => {
    stop();
    intervalRef.current = setInterval(next, 5000);
  }, [next]);

  useEffect(() => {
    start();
    return stop;
  }, [start]);

  const handleMouseEnter = () => stop();
  const handleMouseLeave = () => start();

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {slides.map((slide, i) => (
        <div key={i} className={i === index ? 'block' : 'hidden'}>
          {slide}
        </div>
      ))}
      <button
        type="button"
        className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-stone-300 hover:text-white"
        onClick={prev}
      >
        &#10094;
      </button>
      <button
        type="button"
        className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-stone-300 hover:text-white"
        onClick={next}
      >
        &#10095;
      </button>
    </div>
  );
}
