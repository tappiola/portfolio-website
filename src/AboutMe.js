import {AboutMeSection} from "./AboutMeSection";
import backend from './screenshots/back-end-developer.png';
import soft from './screenshots/soft.png';
import react from './screenshots/Drawing.png';
import css from './screenshots/img_1.png';
import React from "react";
import css2 from './screenshots/img_2.png';
import react2 from './screenshots/lighhouse.png';
import be2 from './screenshots/docker.png';
import cypress from './screenshots/cypress.png';

const ABOUT_ME = [
    {
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
        title: 'Making it visually perfect',
        features: [
            'Websites I make match perfectly match Figma designs',
            'All websites are supporting responsive layout and developed using mobile-first approach',
            'I make the necessary adjustments for the applications to work properly in different browsers / on real mobile devices',
            'I\'m working with a broad range of CSS tooling (pure CSS, CSS modules, SASS, styled-components, Tailwind CSS, Material UI), know which tool to select for a particular case',
            'Have experience of creating complex animated UI components from scratch (e.g. carousel, swipe to delete, fullscreen image zoom, image gallery, notifications stack, tooltips)',
            'I follow accessibility guidelines',
        ],
        image: [css, css2],
    },
    {
        title: 'React and other modern JS tooling',
        features: [
            'I use React and Svelte for building user interfaces',
            'Excellent knowledge of React hooks and lifecycle methods',
            'Lazy loading and code splitting to optimise applications performance',
            'I efficiently connect FEs to backend using both Restful and GraphQL APIs',
            'Lighthouse reports for  recommended guidelines compliance checks',
            'Centralised storage such as Redux or React Context instead of props drilling',
            'Good knowledge of BOM, DOM events and Vanilla JS',
            'I pay attention to edge cases and add loaders and proper error handling'
        ],
        image: [react, react2],
    },
    {
        title: 'I care about code quality',
        features: [
            'PRs and code reviews as a standard',
            'I use tools such as plop to standardise components naming and structure',
            'Tools such as Eslint and StyleLint for consistent code formatting',
            'Prop-types and Typescript to avoid typing errors',
            'I aim to use latest versions of libraries',
            'I write unit tests and check tests coverage',
            'Mocks and Storybook help me test edge cases',
            'I use GitHub actions for pull requests checks',
            'I execute basic e2e tests before making a PR',
        ],
        image: [cypress],
    },
    {
        title: 'More than just a frontend developer',
        features: [
            'Strong technical background',
            'QA experience helps me develop features of better quality',
            'Good knowledge of databases and big data project experience',
            'Broad knowledge of automation testing tooling',
            'I have enough skills to develop a backend with REST / GraphQL APIs and DB layer',
            'Docker, docker-compose and basic Kubernetes knowledge',
            'Basic app deployment skills using AWS, Firebase, Netlify'
        ],
        image: [backend, be2],
    },
];

export const AboutMe = React.forwardRef((props, ref)=> {
    return <>
        <div id='skills' ref={ref}/>
        {ABOUT_ME.map(({title, features, image}, index) => <AboutMeSection key={title} title={title} features={features} img={image} index={index}/> )}
    </>
});