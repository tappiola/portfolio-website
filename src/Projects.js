import {ProjectCard} from "./ProjectCard";
import ondat from "./screenshots/ondat.png";
import shop from "./screenshots/shop.png";
import wordle from "./screenshots/wordle.png";
import realEstate from './screenshots/real_estate.png';
import stocks from './screenshots/stocks.png';
import tasks from './screenshots/tasks.png';
import scandipwa from './screenshots/scandipwa.png';
import codenames from './screenshots/codenames.png';

const PROJECTS = [
    {
        title: 'Real estate agency website',
        description: ['Web app allowing to search for real estate properties, filter them and view on interactive map.',
            'Selected features: user authentication, animations, responsive design, dynamic list loading, react lazy loading, custom carousel, notification stack, images gallery, skeleton loaders.'],
        pillsFe: ['React', 'React Router v6', 'redux-toolkit', 'SASS', 'TypeScript', 'react-transition-library'],
        pillsBe: ['Express', 'GraphQL', 'sequelize', 'JWT', 'Docker', 'docker-compose'],
        screenshot: realEstate,
        siteUrl: 'https://real-estate.tappiola.com',
        githubUrl: 'https://github.com/tappiola/real-estate-agency-app',
    },
    {
        title: 'Portal for Kubernetes clusters monitoring',
        description: ['Portal for monitoring and configuring Kubernetes clusters.'],
        pillsFe: ['React', 'React hooks', 'React Router v6', 'react-query', 'react-hook-form', 'styled-components', 'carbon-components', 'Typescript', 'GraphQL', 'Jest', 'React Testing Library', 'Frontegg', 'plop', 'Storybook', 'Growthbook', 'Github Actions', 'dependabot'],
        pillsBe: ['Nest.js', 'Prisma', 'Kubernetes', 'Docker', 'Pub / Sub', 'Redis', 'PostgreSQL', 'JWT'],
        screenshot: ondat,
        siteUrl: 'https://real-estate.tappiola.com',
        githubUrl: 'https://github.com/tappiola/real-estate-agency-app',
    },
    {
        title: 'E-commerce website',
        description: ['Multiplayer game for guessing words by making associations to a keyword.', 'Features: pseudo-random game fields generation, complex game progress and winner detection logic, webSockets, multiple languages, mobile devices support.'],
        pillsFe: ['React', 'React Router', 'React Hooks', 'React Context', 'Firestore', 'clsx'],
        pillsBe: [],
        screenshot: scandipwa,
        siteUrl: 'https://real-estate.tappiola.com',
        githubUrl: 'https://github.com/tappiola/real-estate-agency-app',
    },
    {
        title: 'Tasks management app',
        description: ['Multiplayer game for guessing words by making associations to a keyword.', 'Features: pseudo-random game fields generation, complex game progress and winner detection logic, webSockets, multiple languages, mobile devices support.'],
        pillsFe: ['React', 'React Router', 'React Hooks', 'React Context', 'Firestore', 'clsx'],
        pillsBe: [],
        screenshot: tasks,
        siteUrl: 'https://real-estate.tappiola.com',
        githubUrl: 'https://github.com/tappiola/real-estate-agency-app',
    },
    {
        title: 'Online game',
        description: ['Multiplayer game for guessing words by making associations to a keyword.', 'Features: pseudo-random game fields generation, complex game progress and winner detection logic, webSockets, multiple languages, mobile devices support.'],
        pillsFe: ['React', 'React Router', 'React Hooks', 'React Context', 'Firestore', 'clsx'],
        pillsBe: ['React', 'React Router', 'React Hooks', 'React Context', 'Firestore', 'clsx'],
        screenshot: codenames,
        siteUrl: 'https://real-estate.tappiola.com',
        githubUrl: 'https://github.com/tappiola/real-estate-agency-app',
    },
    {
        title: 'Online shop',
        description: ['Multiplayer game for guessing words by making associations to a keyword.', 'Features: pseudo-random game fields generation, complex game progress and winner detection logic, webSockets, multiple languages, mobile devices support.'],
        pillsFe: ['React', 'React Router', 'React Hooks', 'React Context', 'Firestore', 'clsx'],
        pillsBe: [],
        screenshot: shop,
        siteUrl: 'https://real-estate.tappiola.com',
        githubUrl: 'https://github.com/tappiola/real-estate-agency-app',
    },
    {
        title: 'Wordle',
        description: ['Multiplayer game for guessing words by making associations to a keyword.', 'Features: pseudo-random game fields generation, complex game progress and winner detection logic, webSockets, multiple languages, mobile devices support.'],
        pillsFe: ['React', 'React Router', 'React Hooks', 'React Context', 'Firestore', 'clsx'],
        pillsBe: [],
        screenshot: wordle,
        siteUrl: 'https://real-estate.tappiola.com',
        githubUrl: 'https://github.com/tappiola/real-estate-agency-app',
    },
    {
        title: 'Stocks',
        description: ['Multiplayer game for guessing words by making associations to a keyword.', 'Features: pseudo-random game fields generation, complex game progress and winner detection logic, webSockets, multiple languages, mobile devices support.'],
        pillsFe: ['React', 'React Router', 'React Hooks', 'React Context', 'Firestore', 'clsx'],
        pillsBe: [],
        screenshot: stocks,
        siteUrl: 'https://real-estate.tappiola.com',
        githubUrl: 'https://github.com/tappiola/real-estate-agency-app',
    },
];

export const Projects = () => {
    return (
        <div id='projects'>
            {PROJECTS.map(project => <ProjectCard project={project} />)}
        </div>
    )
}

