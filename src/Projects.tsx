import { type Project, ProjectCard } from './ProjectCard';
import ondat from './images/projects/ondat.webp';
import shop from './images/projects/shop.webp';
import wordle from './images/projects/wordle.webp';
import realEstate from './images/projects/real_estate.webp';
import stocks from './images/projects/stocks.webp';
import tasks from './images/projects/tasks.webp';
import scandipwa from './images/projects/scandipwa.webp';
import codenames from './images/projects/codenames.webp';
import util from './images/projects/util.webp';
import nytta from './images/projects/nytta.png';
import santander from './images/projects/santander.png';
import calendar from './images/projects/calendar.png';
import chooser from './images/projects/chooser.png';
import type { RefObject } from 'react';

const PROJECTS: Project[] = [
  {
    title: 'Santander Vehicle Leasing Platform',
    description: [
      'Multi-tenant platform supporting the end-to-end lifecycle of vehicle leasing - from vehicle selection to contract management.',
    ],
    pillsFe: [
      'react',
      'typescript',
      'react-router',
      'react-hook-form',
      'tanstack query',
      'tanstack table',
      'tailwind',
      'Headless UI',
      'i18next',
      'turborepo',
      'zod',
      'vite',
      'vitest',
      'storybook',
      'launchdarkly',
    ],
    pillsBe: ['datadog', 'AWS', 'Github Actions', 'GraphQL'],
    screenshot: santander,
  },
  {
    title: 'Solution for Measuring ESG Impact',
    description: [
      'AI driven application focused on evaluating the ESG impact of  companies through the lens of the UN SDGs',
    ],
    pillsFe: [
      'React',
      'Typescript',
      'React Router',
      'react-hook-form',
      'redux',
      'Apollo Client',
      'Storybook',
      'Chromatic',
      'Github Actions',
      'Auth0',
      'd3',
      'plotly',
      'Cypress',
      'react-pdf',
      'Webpack',
      'react-table',
      'react-tooltip',
      'react-select',
      'react-spring',
      'react-hot-toast',
      'react-papaparse',
      'eslint',
      'launchdarkly',
      'plop',
      'prettier',
      'GA',
      'zod',
      'SASS',
      'Renovate',
    ],
    screenshot: util,
  },
  {
    title: 'Data-centric C2B Solution',
    description: [
      'Portal allowing to submit information on the amenities missing in the local area.',
      'Demand data helps entrepreneurs open the right business in right location, while local people benefit from getting the amenities they need.',
    ],
    pillsFe: [
      'React',
      'TypeScript',
      'NextJS',
      'Tailwind CSS',
      'primereact',
      'Mapbox GL',
      'lodash',
    ],
    pillsBe: ['Prisma', 'PostgreSQL'],
    screenshot: nytta,
    siteUrl: 'https://nytta.tappiola.co.uk',
    githubUrl: 'https://github.com/tappiola/nytta',
  },
  {
    title: 'Portal for Kubernetes clusters monitoring',
    description: ['Portal for monitoring and configuring Kubernetes clusters.'],
    pillsFe: [
      'React',
      'React hooks',
      'React Router v6',
      'Tanstack query',
      'react-hook-form',
      'styled-components',
      'carbon-components',
      'Typescript',
      'GraphQL',
      'Jest',
      'React Testing Library',
      'Frontegg',
      'plop',
      'Storybook',
      'Growthbook',
      'Github Actions',
      'dependabot',
    ],
    pillsBe: [
      'Nest.js',
      'Prisma',
      'Kubernetes',
      'Docker',
      'Pub / Sub',
      'Redis',
      'PostgreSQL',
      'JWT',
    ],
    screenshot: ondat,
  },
  {
    title: 'E-commerce website',
    description: [
      'Easily customizable template for creating e-commerce stores (ScandiPWA Core).',
      'Complex UI components with custom animation logic written from scratch (e.g., carousel, swipe to delete, fullscreen image zoom, image gallery). Has responsive layout.',
    ],
    pillsFe: [
      'React',
      'React Router',
      'react-datepicker',
      'React Lazy Loading',
      'Redux',
      'SASS',
      'GraphQL',
      'PWA',
      'Rtl support',
      'i18n',
      'Figma',
    ],
    pillsBe: ['Magento'],
    screenshot: scandipwa,
    siteUrl: 'https://tech-demo.scandipwa.com/',
    githubUrl: 'https://github.com/scandipwa/scandipwa',
  },
  {
    title: 'Real estate agency website',
    description: [
      'Web app allowing to search for real estate properties, filter them and view on interactive map.',
      'Selected features: user authentication, animations, responsive design, dynamic list loading, react lazy loading, custom carousel, notification stack, images gallery, skeleton loaders.',
    ],
    pillsFe: [
      'React',
      'React Router v6',
      'redux-toolkit',
      'SASS',
      'react-transition-library',
      'TypeScript',
    ],
    pillsBe: [
      'Express',
      'GraphQL',
      'sequelize',
      'JWT',
      'Docker',
      'docker-compose',
      'Github Actions',
      'Terraform',
    ],
    screenshot: realEstate,
    siteUrl: 'https://real-estate.tappiola.co.uk',
    githubUrl: 'https://github.com/tappiola/real-estate-agency-app',
  },
  {
    title: 'Event planner',
    description: [
      'Simple web app allowing to view bank holidays and add custom events to calendar.',
      'Same logic implemented using Next JS and TanStack Start for comparability.',
    ],
    pillsFe: [
      'React',
      'TypeScript',
      'Next JS',
      'App Router',
      'TanStack Start',
      'TanStack Router',
      'vite',
      'tailwind',
      'zod',
    ],
    pillsBe: ['Prisma'],
    screenshot: calendar,
    siteUrl: [
      'https://calendar.tappiola.co.uk',
      'https://planner.tappiola.co.uk',
    ],
    githubUrl: [
      'https://github.com/tappiola/tanstack-start-calendar',
      'https://github.com/tappiola/next-js-calendar',
    ],
  },
  {
    title: 'Chooser app',
    description: [
      'A multi-theme chooser app for selecting first player in games.',
      'Built with turborepo. Supports PWA and offline mode.',
    ],
    pillsFe: [
      'React',
      'Typescript',
      'turborepo',
      'vite',
      'vitest',
      'Github Actions',
      'PWA',
    ],
    screenshot: chooser,
    siteUrl: [
      'https://chooser.tappiola.co.uk',
      'https://pokemon-chooser.co.uk',
    ],
    githubUrl: 'https://github.com/tappiola/chooser',
  },
  {
    title: 'Tasks management app',
    description: [
      'Web app designed to add and organize your todo lists.',
      'Tasks completion, editing, removal and moving them between folders is supported.',
    ],
    pillsFe: [
      'React',
      'React Router v5',
      'React Hooks',
      'Redux',
      'Jest',
      'Enzyme',
      'prop-types',
    ],
    pillsBe: ['Firestore', 'Firebase Auth'],
    screenshot: tasks,
    siteUrl: 'https://todos.tappiola.co.uk',
    githubUrl: 'https://github.com/tappiola/todos_react',
  },
  {
    title: 'Online game',
    description: [
      'Multiplayer game for guessing words by making associations to a keyword.',
      'Features: pseudo-random game fields generation, complex game progress and winner detection logic, webSockets, multiple languages, mobile devices support.',
    ],
    pillsFe: ['React', 'React Router', 'React Hooks', 'React Context', 'clsx'],
    pillsBe: ['Firestore', 'Firebase'],
    screenshot: codenames,
    siteUrl: 'https://codenames.tappiola.co.uk',
    githubUrl: 'https://github.com/tappiola/codenames',
  },
  {
    title: 'Online shop',
    description: [
      'E-commerce website with support of products search, catalogue, cart and checkout.',
      'Products stock management is implemented on BE.',
    ],
    pillsFe: ['React', 'React Router', 'Redux', 'axios'],
    pillsBe: ['Django Rest Framework', 'PostgreSQL'],
    screenshot: shop,
    // siteUrl: 'https://tappiola-shop-web.herokuapp.com',
    githubUrl: 'https://github.com/tappiola/tappiola_shop',
  },
  {
    title: 'Word Game',
    description: [
      'Analogue of a famous Wordle game.',
      'Aim of the game is to guess a word by info on presence of letters in a word and their positions.\n',
    ],
    pillsFe: [
      'Svelte',
      'Svelte Subscriptions',
      'Svelte Stores',
      'Svelte Transition',
    ],
    pillsBe: [],
    screenshot: wordle,
    siteUrl: 'https://wordle.tappiola.co.uk/',
    githubUrl: 'https://github.com/tappiola/guess-the-word',
  },
  {
    title: 'Stocks',
    description: [
      'App for viewing statistics on the shares of your choice for the last trading day.',
      'Stocks data is fetched using Alpha Vantage API.',
    ],
    pillsFe: ['Svelte', 'axios', 'chart.js'],
    pillsBe: [],
    screenshot: stocks,
    siteUrl: 'https://stocks.tappiola.co.uk/',
    githubUrl: 'https://github.com/tappiola/live-stocks',
  },
];

export const Projects = ({
  ref,
}: {
  ref: RefObject<HTMLDivElement | null>;
}) => (
  <>
    <div id="projects" ref={ref} />
    {PROJECTS.map((project) => (
      <ProjectCard key={project.title} project={project} />
    ))}
  </>
);
