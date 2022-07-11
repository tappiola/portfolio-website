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
        pills: ['React', 'React Router v6', 'redux-toolkit', 'SASS', 'TypeScript', 'react-transition-library', 'Express', 'GraphQL', 'sequelize', 'JWT', 'Docker', 'docker-compose'],
        screenshot: realEstate
    },
    {
        title: 'Portal for Kubernetes clusters monitoring',
        description: ['Portal for monitoring and configuring Kubernetes clusters.'],
        pills: ['React', 'React hooks', 'React Router v6', 'react-query', 'react-hook-form', 'styled-components', 'carbon-components', 'Typescript', 'GraphQL', 'Jest', 'React Testing Library', 'Frontegg', 'plop', 'Storybook', 'Growthbook', 'Github Actions', 'dependabot', 'Nest.js', 'Prisma', 'Kubernetes', 'Docker', 'Pub / Sub', 'Redis', 'PostgreSQL', 'JWT'],
        screenshot: ondat
    },
    {
        title: 'E-commerce website',
        description: ['Multiplayer game for guessing words by making associations to a keyword.', 'Features: pseudo-random game fields generation, complex game progress and winner detection logic, webSockets, multiple languages, mobile devices support.'],
        pills: ['React', 'React Router', 'React Hooks', 'React Context', 'Firestore', 'clsx'],
        screenshot: scandipwa
    },
    {
        title: 'Tasks management app',
        description: ['Multiplayer game for guessing words by making associations to a keyword.', 'Features: pseudo-random game fields generation, complex game progress and winner detection logic, webSockets, multiple languages, mobile devices support.'],
        pills: ['React', 'React Router', 'React Hooks', 'React Context', 'Firestore', 'clsx'],
        screenshot: tasks
    },
    {
        title: 'Online game',
        description: ['Multiplayer game for guessing words by making associations to a keyword.', 'Features: pseudo-random game fields generation, complex game progress and winner detection logic, webSockets, multiple languages, mobile devices support.'],
        pills: ['React', 'React Router', 'React Hooks', 'React Context', 'Firestore', 'clsx'],
        screenshot: codenames
    },
    {
        title: 'Online shop',
        description: ['Multiplayer game for guessing words by making associations to a keyword.', 'Features: pseudo-random game fields generation, complex game progress and winner detection logic, webSockets, multiple languages, mobile devices support.'],
        pills: ['React', 'React Router', 'React Hooks', 'React Context', 'Firestore', 'clsx'],
        screenshot: shop
    },
    {
        title: 'Wordle',
        description: ['Multiplayer game for guessing words by making associations to a keyword.', 'Features: pseudo-random game fields generation, complex game progress and winner detection logic, webSockets, multiple languages, mobile devices support.'],
        pills: ['React', 'React Router', 'React Hooks', 'React Context', 'Firestore', 'clsx'],
        screenshot: wordle
    },
    {
        title: 'Stocks',
        description: ['Multiplayer game for guessing words by making associations to a keyword.', 'Features: pseudo-random game fields generation, complex game progress and winner detection logic, webSockets, multiple languages, mobile devices support.'],
        pills: ['React', 'React Router', 'React Hooks', 'React Context', 'Firestore', 'clsx'],
        screenshot: stocks
    },
];

export const Projects = () => {
    return (
        <div id='projects'>
            {PROJECTS.map(project => <ProjectCard project={project} />)}
        </div>
    )
}

