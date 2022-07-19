import { useCallback } from 'react';
import { useScrollDirection } from './useScrollEffect';

export const MENU = {
  Skills: 'Skills',
  Projects: 'Projects',
  Career: 'Career',
  Testimonials: 'Testimonials',
};

const headerLinks = [
  { name: MENU.Skills, anchor: '#skills' },
  { name: MENU.Projects, anchor: '#projects' },
  { name: MENU.Career, anchor: '#career' },
  { name: MENU.Testimonials, anchor: '#testimonials' },
];

export default function Header({ activeMenuItem, windowRef }) {
  const scrollDirection = useScrollDirection();

  const scrollTop = useCallback(() => {
    windowRef.current.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <header className={`w-screen px-4 sm:px-6 backdrop-blur z-40 shadow-lg py-5 fixed ${scrollDirection === 'down' ? '-top-20' : 'top-0'}`}>
      <div className="flex justify-between items-center md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <div role="button" className="text-teal-500 text-lg" onClick={scrollTop} onKeyDown={scrollTop} tabIndex={0}>
            TAPPIOLA
          </div>
        </div>
        <nav>
          {headerLinks.map(({ name, anchor }) => (
            <a
              key={name}
              href={anchor}
              className={`text-base font-light lg:inline-block ${name === activeMenuItem ? 'text-teal-500 inline-block' : 'text-stone-300 hidden'} hover:text-teal-500 lg:px-10`}
            >
              {name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
