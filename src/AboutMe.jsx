import React from 'react';
import { AboutMeSection, SKILLS } from './AboutMeSection';
import backend from './images/back-end-developer.png';
import soft from './images/soft.png';
import react from './images/drawing.png';
import css from './images/css_1.png';
import css2 from './images/css_2.png';
import react2 from './images/lighhouse.png';
import docker from './images/docker.png';
import cypress from './images/cypress.png';

const ABOUT_ME = [
  {
    id: SKILLS.Personal,
    title: 'How I work',
    features: [
      'Quick learner',
      'Always diving deep into project details and architecture',
      'Able to work in rapidly changing startup environments efficiently',
      'Comfortable working in small teams, not afraid to take responsibility and perform a broad scope of tasks',
      'Constantly suggest the ways to improve the project (from code quality to UX and processes)'],
    image: [soft],
  },
  {
    id: SKILLS.UX,
    title: 'Making it visually perfect',
    features: [
      'Websites I make perfectly match Figma designs',
      'All websites are supporting responsive layout and developed using mobile-first approach',
      'Necessary adjustments for cross-browser compatibility and proper work on mobile devices',
      'Confident knowledge of a broad range of CSS tooling (pure CSS, CSS modules, SASS, styled-components, Tailwind CSS, Material UI), know which tool to select for a particular case',
      'Experience in creating complex animated UI components from scratch (e.g. carousel, swipe to delete, fullscreen image zoom, image gallery, notifications stack, tooltips)',
      'I follow accessibility guidelines',
    ],
    image: [css, css2],
  },
  {
    id: SKILLS.FE,
    title: 'React and other modern JS tooling',
    features: [
      'React and Svelte for building user interfaces',
      'Excellent knowledge of React hooks and lifecycle methods',
      'Lazy loading and code splitting to optimise performance',
      'Working with both RESTful and GraphQL APIs',
      'Lighthouse reports for  recommended guidelines compliance checks',
      'Centralised storage such as Redux or React Context instead of props drilling',
      'Good knowledge of BOM, DOM events and Vanilla JS',
      'I pay attention to edge cases and add loaders and proper error handling',
    ],
    image: [react, react2],
  },
  {
    id: SKILLS.QA,
    title: 'I care about code quality',
    features: [
      'PRs and code reviews as a standard',
      'I use tools such as plop to standardise components naming and structure',
      'Tools such as ESlint and StyleLint for consistent code formatting',
      'PropTypes and TypeScript to avoid typing errors',
      'I aim to use latest versions of libraries',
      'I write unit tests and check tests coverage',
      'Mocks and Storybook help me test edge cases',
      'I use GitHub Actions for pull requests checks',
      'I execute basic e2e tests before making a PR',
    ],
    image: [cypress],
  },
  {
    id: SKILLS.BE,
    title: 'More than just a frontend developer',
    features: [
      'Strong technical background',
      'QA experience helps me develop features of better quality',
      'Good knowledge of databases and big data project experience',
      'Broad knowledge of automation testing tooling',
      'Enough skills to develop a backend with REST / GraphQL API and DB layer',
      'Knowledge of Docker, docker-compose and Kubernetes basics',
      'Basic experience with cloud and CI/CD tooling (AWS, Firebase, TeamCity)',
    ],
    image: [backend, docker],
  },
];

export const AboutMe = React.forwardRef((props, ref) => (
  <>
    <div id="skills" ref={ref} />
    {ABOUT_ME.map(({
      id, title, features, image,
    }, index) => (
      <AboutMeSection
        key={id}
        title={title}
        features={features}
        img={image}
        index={index}
        id={id}
      />
    ))}
  </>
));
