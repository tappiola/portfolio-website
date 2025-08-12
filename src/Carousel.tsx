import { ReactNode, useEffect, useState } from 'react';

export function Carousel({
  children,
  className,
}: {
  children: ReactNode | ReactNode[];
  className?: string;
}) {
  const slides = Array.isArray(children) ? children : [children];
  const length = slides.length;
  const [index, setIndex] = useState(1);
  const [paused, setPaused] = useState(false);
  const [transition, setTransition] = useState(true);

  const prev = () => setIndex((i) => i - 1);
  const next = () => setIndex((i) => i + 1);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => i + 1);
    }, 5000);
    return () => clearInterval(id);
  }, [paused]);

  const handleTransitionEnd = () => {
    if (index === 0) {
      setTransition(false);
      setIndex(length);
    } else if (index === length + 1) {
      setTransition(false);
      setIndex(1);
    }
  };

  useEffect(() => {
    if (!transition) {
      // re-enable transition after the index has been reset
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setTransition(true)),
      );
    }
  }, [transition]);

  const extended = [slides[length - 1], ...slides, slides[0]];

  return (
    <div
      className={`relative overflow-hidden ${className || ''}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className={`flex ${
          transition ? 'transition-transform duration-500 ease-in-out' : ''
        }`}
        style={{ transform: `translateX(-${index * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extended.map((child, i) => (
          <div key={i} className="w-full flex-shrink-0">
            {child}
          </div>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-1/2 left-1/12 -translate-y-1/2 p-2 text-stone-300 hover:text-stone-50 cursor-pointer"
        onClick={prev}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        type="button"
        className="absolute top-1/2 right-1/12 -translate-y-1/2 p-2 text-stone-300 hover:text-stone-50 cursor-pointer"
        onClick={next}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
}
