import {ProjectCard} from "./ProjectCard";
import ondat from "./screenshots/ondat.png";
import shop from "./screenshots/shop.png";
import wordle from "./screenshots/wordle.png";
import realEstate from './screenshots/real_estate.png';
import stocks from './screenshots/stocks.png';
import tasks from './screenshots/tasks.png';
import scandipwa from './screenshots/scandipwa.png';
import codenames from './screenshots/codenames.png';
import {SectionTitle} from "./SectionTitle";

const PROJECTS = [
    {
        title: 'Real estate agency website',
        description: ['Web app allowing to search for real estate properties, filter them and view on interactive map.',
            'Selected features: user authentication, animations, responsive design, dynamic list loading, react lazy loading, custom carousel, notification stack, images gallery, skeleton loaders.'],
        pillsFe: ['React', 'React Router v6', 'redux-toolkit', 'SASS', 'react-transition-library', 'TypeScript'],
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
        siteUrl: 'https://portal.ondat.io/',
        githubUrl: '',
    },
    {
        title: 'E-commerce website',
        description: ['Easily customizable template for creating e-commerce stores (ScandiPWA Core).', 'Complex UI components with custom animation logic written from scratch (e.g., carousel, swipe to delete, fullscreen image zoom, image gallery). Has responsive layout.'],
        pillsFe: ['React', 'React Router', 'react-datepicker', 'React Lazy Loading', 'Redux', 'SASS', 'GraphQL', 'PWA', 'Rtl support', 'i18n', 'Figma'],
        pillsBe: ['Magento'],
        screenshot: scandipwa,
        siteUrl: 'https://tech-demo.scandipwa.com/ ',
        githubUrl: 'https://github.com/scandipwa/scandipwa',
    },
    {
        title: 'Tasks management app',
        description: ['Web app designed to add and organize your todo lists.', 'Tasks completion, editing, removal and moving them between folders is supported.'],
        pillsFe: ['React', 'React Router v5', 'React Hooks', 'Redux', 'Jest', 'Enzyme', 'prop-types'],
        pillsBe: ['Firestore', 'Firebase Auth'],
        screenshot: tasks,
        siteUrl: 'https://todos.tappiola.com',
        githubUrl: 'https://github.com/tappiola/todos_react',
    },
    {
        title: 'Online game',
        description: ['Multiplayer game for guessing words by making associations to a keyword.', 'Features: pseudo-random game fields generation, complex game progress and winner detection logic, webSockets, multiple languages, mobile devices support.'],
        pillsFe: ['React', 'React Router', 'React Hooks', 'React Context', 'clsx'],
        pillsBe: ['Firestore', 'Firebase'],
        screenshot: codenames,
        siteUrl: 'https://codenames.tappiola.com',
        githubUrl: 'https://github.com/tappiola/codenames',
    },
    {
        title: 'Online shop',
        description: ['E-commerce website with support of products search, catalogue, cart and checkout.', 'Products stock management is implemented on BE.'],
        pillsFe: ['React', 'React Router', 'Redux', 'axios'],
        pillsBe: ['Django Rest Framework', 'PostgreSQL'],
        screenshot: shop,
        siteUrl: 'https://tappiola-shop-web.herokuapp.com',
        githubUrl: 'https://github.com/tappiola/tappiola_shop',
    },
    {
        title: 'Word Game',
        description: ['Analogue of a famous Wordle game.', 'Aim of the game is to guess a word by info on presence of letters in a word and their positions.\n'],
        pillsFe: ['Svelte', 'Svelte Subscriptions', 'Svelte Stores', 'Svelte Transition'],
        pillsBe: [],
        screenshot: wordle,
        siteUrl: 'https://wordle.tappiola.com/ ',
        githubUrl: 'https://github.com/tappiola/guess-the-word',
    },
    {
        title: 'Stocks',
        description: ['App for viewing statistics on the shares of your choice for the last trading day.', 'Stocks data is fetched using Alpha Vantage API.'],
        pillsFe: ['Svelte', 'axios', 'chart.js'],
        pillsBe: [],
        screenshot: stocks,
        siteUrl: 'https://stocks.tappiola.com/',
        githubUrl: 'https://github.com/tappiola/live-stocks',
    },
];

export const Projects = () => {
    return (<>
            <SectionTitle>Selected projects</SectionTitle>
            <div id='projects'>
                {PROJECTS.map(project => <ProjectCard key={project.title} project={project} />)}
            </div>
        </>
    )
}
