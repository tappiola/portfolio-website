
import ondat1 from "./screenshots/ondat1.png";
import ondat2 from "./screenshots/ondat2.png";
import ondat3 from "./screenshots/ondat3.png";
import ondat4 from "./screenshots/ondat4.png";
import ondat5 from "./screenshots/ondat5.png";
import ondat01 from "./screenshots/ondat01.png";
import shop0 from "./screenshots/shop0.png";
import wordle5 from "./screenshots/wordle5.png";
import realEstate00 from './screenshots/realEstate00.png';
import realEstate0 from './screenshots/realEstate0.png';
import realEstate1 from './screenshots/real-estate1.png';
import realEstate2 from './screenshots/real-estate2.png';
import realEstate3 from './screenshots/realEstate3.png';
import stocks0 from './screenshots/stocks0.png';
import {ProjectCard} from "./ProjectCard";
import codenames1 from './screenshots/codenames1.png';

const PROJECTS = [
    {
        title: 'Real estate agency website',
        description: ['Web app allowing to search for real estate properties, filter them and view on interactive map.',
            'Selected features: user authentication, animations, responsive design, dynamic list loading, react lazy loading, custom carousel, notification stack, images gallery, skeleton loaders.'],
        pills: ['React', 'React Router v6', 'redux-toolkit', 'SASS', 'TypeScript', 'react-transition-library', 'Express', 'GraphQL', 'sequelize', 'JWT', 'Docker', 'docker-compose'],
        screenshots: [realEstate00]
    },
    {
        title: 'Portal for Kubernetes clusters monitoring',
        description: ['Portal for monitoring and configuring Kubernetes clusters.'],
        pills: ['React', 'React hooks', 'React Router v6', 'react-query', 'react-hook-form', 'styled-components', 'carbon-components', 'Typescript', 'GraphQL', 'Jest', 'React Testing Library', 'Frontegg', 'plop', 'Storybook', 'Growthbook', 'Github Actions', 'dependabot', 'Nest.js', 'Prisma', 'Kubernetes', 'Docker', 'Pub / Sub', 'Redis', 'PostgreSQL', 'JWT'],
        screenshots: [ondat01, ondat1, ondat2, ondat3, ondat4, ondat5]
    },
    {
        title: 'Online game',
        description: ['Multiplayer game for guessing words by making associations to a keyword.', 'Features: pseudo-random game fields generation, complex game progress and winner detection logic, webSockets, multiple languages, mobile devices support.'],
        pills: ['React', 'React Router', 'React Hooks', 'React Context', 'Firestore', 'clsx'],
        screenshots: [codenames1]
    },
    {
        title: 'Online shop',
        description: ['Multiplayer game for guessing words by making associations to a keyword.', 'Features: pseudo-random game fields generation, complex game progress and winner detection logic, webSockets, multiple languages, mobile devices support.'],
        pills: ['React', 'React Router', 'React Hooks', 'React Context', 'Firestore', 'clsx'],
        screenshots: [shop0]
    },
    {
        title: 'Wordle',
        description: ['Multiplayer game for guessing words by making associations to a keyword.', 'Features: pseudo-random game fields generation, complex game progress and winner detection logic, webSockets, multiple languages, mobile devices support.'],
        pills: ['React', 'React Router', 'React Hooks', 'React Context', 'Firestore', 'clsx'],
        screenshots: [wordle5]
    },
    {
        title: 'Stocks',
        description: ['Multiplayer game for guessing words by making associations to a keyword.', 'Features: pseudo-random game fields generation, complex game progress and winner detection logic, webSockets, multiple languages, mobile devices support.'],
        pills: ['React', 'React Router', 'React Hooks', 'React Context', 'Firestore', 'clsx'],
        screenshots: [stocks0]
    },
];

export const Projects = () => {
    return (
        <div id='projects'>
            {PROJECTS.map(project => <ProjectCard project={project} />)}
        </div>
    )
}

