import {AboutMeSection} from "./AboutMeSection";
import backend from './screenshots/back-end-developer.png';
import soft from './screenshots/soft.png';
import react from './screenshots/Drawing.png';
import quality from './screenshots/quality2.png';
import css from './screenshots/photo_2022-07-14_12-06-22.jpg';

const ABOUT_ME = [
    {
        title: 'How I work',
        features: [
            'Quick learner',
            'Always diving deep into project details and architecture',
            'Able to work in rapidly changing startup environments efficiently',
            'Comfortable working in small teams, not afraid to take responsibility and perform a broad scope of tasks',
            'Constantly suggest the ways to improve the project (from code quality to UX and processes)'],
        image: soft,
    },
    {
        title: 'Making it visually perfect',
        features: [
            'Websites I make match perfectly match Figma designs',
            'All websites are supporting responsive layout and developed using mobile-first approach',
            'I make the necessary adjustments for the applications to work properly in different browsers / on real mobile devices.',
            'Working with a broad range of CSS tooling (pure CSS, CSS modules, SASS, styled-components, Tailwind CSS, Material UI), know which tool to select for a particular case',
            'Have experience of creating complex animated UI components from scratch (e.g. carousel, swipe to delete, fullscreen image zoom, image gallery, notifications stack, tooltips)',
            'I follow accessibility guidelines',
        ],
        image: css,
    },
    {
        title: 'React and other modern JS tooling',
        features: [
            'I use React and Svelte for building user interfaces',
            'Excellent knowledge of React hooks and lifecycle methods',
            'I care about applications performance',
            'I use centralised storage in applications when needed',
            'I connect FEs to both Restful and GraphQL APIs',
            'Good knowledge of BOM, DOM events and Vanilla JS',
            'I pay attention to edge cases and add proper error handling'
        ],
        image: react,
    },
    {
        title: 'I care about code quality',
        features: [
            'PRs and code reviews as a standard',
            'I use tools such as plop to standardise components naming and structure',
            'Tools such as Eslint and StyleLint for consistent code formatting',
            'Prop-types and Typescript to avoid typing errors.',
            'I aim to use latest versions of libraries',
            'I write unit tests and check tests coverage',
            'Mocks and Storybook help me test edge cases',
            'I use GitHub actions for pull requests checks',
            'I execute basic e2e tests before making a PR',
        ],
        image: quality,
    },
    {
        title: 'More than just a frontend developer',
        features: [
            'Very broad technical background',
            'QA experience helps me develop features of better quality',
            'Good knowledge of databases and big data project experience',
            'Broad knowledge of automation testing tooling',
            'I have enough skills to develop a backend with REST / GraphQL APIs and DB layer',
            'Docker, docker-compose and basic Kubernetes knowledge',
            'Apps deployment with AWS, Firebase, etc.'
        ],
        image: backend,
    },
];

export const AboutMe = () => {
    return <>
        <div id='skills'/>
        {ABOUT_ME.map(({title, features, image}, index) => <AboutMeSection key={title} title={title} features={features} img={image} index={index}/> )}
    </>
}