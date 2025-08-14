import { createFileRoute } from '@tanstack/react-router';
import { useRef, useState } from 'react';
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

  const onScroll = () => {
    const windowScroll = windowRef.current?.scrollTop ?? 0;
    const testimonialsStart = testimonialsRef.current?.offsetTop ?? 0;
    const careerStart = careerRef.current?.offsetTop ?? 0;
    const skillsStart = skillsRef.current?.offsetTop ?? 0;
    const projectsStart = projectsRef.current?.offsetTop ?? 0;

    if (testimonialsStart <= windowScroll) {
      setActiveMenuItem(MENU.Testimonials);
    } else if (careerStart <= windowScroll) {
      setActiveMenuItem(MENU.Career);
    } else if (projectsStart <= windowScroll) {
      setActiveMenuItem(MENU.Projects);
    } else if (skillsStart <= windowScroll) {
      setActiveMenuItem(MENU.Skills);
    } else if (activeMenuItem) {
      setActiveMenuItem(null);
    }
  };

  const debounce = <T extends (...args: unknown[]) => void>(
    func: T,
    timeout = 50,
  ) => {
    let timer: number | undefined;
    return (...args: Parameters<T>) => {
      clearTimeout(timer);
      timer = window.setTimeout(() => {
        func(...args);
      }, timeout);
    };
  };

  const processScroll = debounce(onScroll);

  return (
    <div className="bg-stone-900">
      <Header activeMenuItem={activeMenuItem} windowRef={windowRef} />
      <div
        className="h-screen xl:snap-y xl:snap-mandatory overflow-y-auto"
        onScroll={processScroll}
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
