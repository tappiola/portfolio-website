import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useRef, useState } from 'react';
import Header, { MENU } from '../Header.tsx';
import { Introduction } from '../Introduction.tsx';
import { AboutMe } from '../AboutMe.tsx';
import { Projects } from '../Projects.tsx';
import { Career } from '../Career.tsx';
import { Testimonials } from '../Testimonials.tsx';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  const windowRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const careerRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);

  useEffect(() => {
    const root = windowRef.current;
    if (!root) return;

    const sections: Array<{ el: Element; menu: string }> = [
      { el: skillsRef.current!, menu: MENU.Skills },
      { el: projectsRef.current!, menu: MENU.Projects },
      { el: careerRef.current!, menu: MENU.Career },
      { el: testimonialsRef.current!, menu: MENU.Testimonials },
    ].filter((s) => s.el);

    const byEl = new Map<Element, string>(sections.map((s) => [s.el, s.menu]));
    const ratios = new Map<Element, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          ratios.set(e.target, e.isIntersecting ? e.intersectionRatio : 0);
        }

        let bestEl: Element | null = null;
        let bestRatio = 0;

        ratios.forEach((r, el) => {
          if (r > bestRatio) {
            bestRatio = r;
            bestEl = el;
          }
        });
        setActiveMenuItem(bestEl ? byEl.get(bestEl)! : null);
      },
      {
        root,
        rootMargin: '-45% 0px -55% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach(({ el }) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-stone-900">
      <Header activeMenuItem={activeMenuItem} windowRef={windowRef} />
      <div
        className="h-screen xl:snap-y xl:snap-mandatory overflow-y-auto"
        ref={windowRef}
      >
        <Introduction />
        <AboutMe ref={skillsRef} />
        <Projects ref={projectsRef} />
        <Career ref={careerRef} />
        <Testimonials ref={testimonialsRef} />
      </div>
    </div>
  );
}
