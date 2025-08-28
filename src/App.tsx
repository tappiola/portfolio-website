import { useEffect, useRef, useState } from 'react';
import Header, { MENU } from './Header';
import { Introduction } from './Introduction';
import { Testimonials } from './Testimonials';
import { Projects } from './Projects';
import { Career } from './Career';
import { AboutMe } from './AboutMe';

function App() {
  const windowRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const careerRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);

  useEffect(() => {
    const root = windowRef.current;
    if (!root) return;

    const targets: Array<{ el: Element | null; menu: string }> = [
      { el: skillsRef.current, menu: MENU.Skills },
      { el: projectsRef.current, menu: MENU.Projects },
      { el: careerRef.current, menu: MENU.Career },
      { el: testimonialsRef.current, menu: MENU.Testimonials },
    ];

    const menuByEl = new Map<Element, string>();
    targets.forEach(({ el, menu }) => {
      if (el) menuByEl.set(el, menu);
    });

    const visibleSince = new Map<Element, number>();
    const visible = new Set<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible.add(entry.target);
            visibleSince.set(entry.target, performance.now());
          } else {
            visible.delete(entry.target);
            visibleSince.delete(entry.target);
          }
        });

        if (visible.size === 0) {
          setActiveMenuItem(null);
          return;
        }

        let chosen: Element | null = null;
        let ts = -Infinity;
        visible.forEach((el) => {
          const t = visibleSince.get(el) ?? 0;
          if (t > ts) {
            ts = t;
            chosen = el;
          }
        });

        if (chosen) {
          const menu = menuByEl.get(chosen);
          if (menu) setActiveMenuItem(menu);
        }
      },
      {
        root,
        // A narrow center band; a section is active when its
        // anchor/section crosses the middle of the viewport.
        rootMargin: '-45% 0px -55% 0px',
        threshold: 0,
      },
    );

    targets.forEach(({ el }) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [windowRef, skillsRef, projectsRef, careerRef, testimonialsRef]);

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

export default App;
