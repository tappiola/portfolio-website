import { AboutMeSection, SKILLS } from './AboutMeSection';
import backend from './images/back-end-developer.webp';
import soft from './images/soft.png';
import react from './images/drawing.webp';
import css from './images/css_1.webp';
import css2 from './images/css_2.webp';
import react2 from './images/lighthouse.webp';
import docker from './images/docker.webp';
import type { RefObject } from 'react';

interface AboutMeItem {
  id: string;
  title: string;
  features: string[];
  image: string[];
}

const ABOUT_ME: AboutMeItem[] = [
  {
    id: SKILLS.Personal,
    title: 'Me as a team member',
    features: [
      'Quick to learn and adapt to new tools, domains, and challenges',
      'Dive deep into project details and architecture to make well-informed technical decisions',
      'Proven track record of spinning up new projects and delivering independently',
      'Thrive in rapidly changing startup environments and work comfortably in small, collaborative teams',
      'Efficiently handle cross-functional tasks, taking ownership and responsibility when needed',
      'Proactive in suggesting improvements to code quality, user experience, and development processes',
    ],
    image: [soft],
  },
  {
    id: SKILLS.UX,
    title: 'Quality and visual perfection as a standard',
    features: [
      'Experience in following accessibility quidelines and making applications compliant to EAA (European Accessibility Act)',
      'Mastery of modern testing frameworks and tools (vitest, Storybook, Cypress), with high quality as the standard',
      'Strong attention to design and user experience, capability of producing high-quality designs and UX independently when needed',
      'Skilled in orchestration and observability, setting up monitoring with tools like Datadog and effectively investigating and resolving errors to maintain system reliability',
      'Thorough validation of responsive behaviour anf cross-browser compatibility',
    ],
    image: [css, css2],
  },
  {
    id: SKILLS.FE,
    title: 'Confident knowledge of modern JS tooling',
    features: [
      'Proficiency with React and Svelte',
      'Confident command of Static-side generation (SSG), Server side rendering (SSR) and server components (Next JS, TanStack Start)',
      'Experience with complex data visualisations (D3, Plotly.js, Mapbox GL, Google Charts, Highcharts) and document generation (React PDF)',
      'Mastery of effective routing (Tanstack Router, React Router) and data fetching technics (Apollo Client, TanStack Query)',
    ],
    image: [react, react2],
  },
  {
    id: SKILLS.BE,
    title: 'Full-Stack and Cross-Disciplinary Expertise',
    features: [
      '8+ years of commercial experience as a QA engineer, broad knowledge of automation and performance testing tooling',
      'Expertise in building backends with REST / GraphQL APIs (NestJS, FastAPI) and usage of ORMs (Prisma, SQLAlchemy)',
      'Extensive practical experience with modern cloud and CI/CD tooling (AWS, GitHub Actions, Docker, Terraform)',
      'Experienced with machine learning and large language models (LLMs), building chatbots and implementing retrieval-augmented generation (RAG) using LangChain',
      'Skilled in working with big data and writing complex SQL',
    ],
    image: [backend, docker],
  },
];

export const AboutMe = ({ ref }: { ref: RefObject<HTMLDivElement | null> }) => (
  <section id="skills" ref={ref} className="pt-20 -mt-20">
    {ABOUT_ME.map(({ id, title, features, image }, index) => (
      <AboutMeSection
        key={id}
        title={title}
        features={features}
        img={image}
        index={index}
        id={id}
      />
    ))}
  </section>
);
