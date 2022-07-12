import {AboutMeSection} from "./AboutMeSection";
const ABOUT_ME = [
    {
        title: 'How I work',
        features: [
            'Quick learner',
            'Always diving deep into project details and architecture',
            'Able to work in rapidly changing startup environments efficiently',
            'Comfortable working in small teams, not afraid to take responsibility and perform a broad scope of tasks',
            'Constantly suggest the ways to improve the project (from code quality to UX and processes)'],
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
    },
    {
        title: 'I work with React and other modern JS tooling',
        features: [
            'Have In-depth knowledge of both React class components and React Hooks',
            'I Know how to use React hooks and lifecycle methods to provide the best performance and minimise DOM rerenders',
            'I use lazy loading and code splitting to optimise applications performance',
            'I generate Lighthouse reports for my projects to make sure they follow the recommended guidelines.',
            'I bring centralised storage such as Redux or React Context to projects to avoid props drilling',
            'I efficiently connect FEs to backend using both Restful and GraphQL APIs, add proper error handling and loaders to UI and use React hooks and lifecycle methods to avoid unnecessary API calls.',
            'Comfortable working with BOM, DOM events and Vanilla JS.',
            'I can create FE application using Svelte as well.',
            'I allocate time to investigating new tooling and try to choose wisely between writing features on your own and bringing new packages to project.',
        ],
    },
    {
        title: 'I care about code quality',
        features: [
            'I can’t imagine development in a team without PRs and code reviews',
            'I use tools such as Eslint and StyleLint to bring code formatting to a single standard',
            'I use prop-types or Typescript with React to avoid typing errors.',
            'I use tools such as plop to standardise components naming and structure',
            'I try to use latest versions of libraries and upgrade versions when possible with help of tools such as dependabot',
            'I write unit tests for my code and check that tests coverage is sufficient',
            'I use mocks and Storybook for development/testing to ensure correct behaviour for edge cases',
            'I encourage usage of GitHub actions or similar tooling to execute basic checks on pull requests and ensure no broken code gets merged',
            'I execute basic e2e tests before making a PR',
        ],
    },
    {
        title: 'More than just a frontend developer',
        features: [
            '10+ years in IT give me very broad technical background.',
            'My previous career in QA influences my approach to development and results in better quality of the features and better code coverage. QA engineers who work with me admit that they find much less bugs when testing my tasks.',
            'As a former QA engineer on a big data project, I have good knowledge of both relational and non-relational databases.',
            'I have broad knowledge of automation testing tooling (Cypress, pytest, Selenium, JMeter) and best approaches to testing.',
            'I have enough skills to write not too complicated backends (i.e. create restful API / GraphQL schema and support for CRUD operations using database for persistent storage). I’ve been using ORMs such as Sequielize and Prisma and created backends using python (Django Rest Framework) and JavaScript (Express Server, Node.js, Nest.js).',
            'I work with Docker, docker-compose and know basics of Kubernetes.',
        ],
    },
];

export const AboutMe = () => {
    return <div className="text-stone-200 px-10">
        {ABOUT_ME.map(({title, features}) => <AboutMeSection key={title} title={title} features={features}/> )}
    </div>
}