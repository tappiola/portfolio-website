export const AboutMe = () => {
    return <div className="text-stone-200 px-10">
        <h2 className="text-indigo-400 my-5 text-2xl">How I work</h2>
        <ul>
            <li>Quick learner</li>
            <li>Always diving deep into project details and architecture</li>
            <li>Able to work in rapidly changing startup environments efficiently</li>
            <li>Comfortable working in small teams, not afraid to take responsibility and perform a broad scope of tasks</li>
            <li>Constantly suggest the ways to improve the project (from code quality to UX and processes)</li>
        </ul>

        <h2 className="text-indigo-400 my-5 text-2xl">Making it visually perfect</h2>
        <ul>
            <li>Websites I make match perfectly match Figma designs</li>
            <li>All websites are supporting responsive layout and developed using mobile-first approach</li>
            <li>I make the necessary adjustments for the applications to work properly in different browsers / on real mobile devices.</li>
            <li>Working with a broad range of CSS tooling (pure CSS, CSS modules, SASS, styled-components, Tailwind CSS, Material UI), know which tool to select for a particular case</li>
            <li>Have experience of creating complex animated UI components from scratch (e.g. carousel, swipe to delete, fullscreen image zoom, image gallery, notifications stack, tooltips)</li>
            <li>I follow accessibility guidelines</li>
        </ul>


        <h2 className="text-indigo-400 my-5 text-2xl"> React and other modern JS tooling</h2>
        <ul>
            <li>Have In-depth knowledge of both React class components and React Hooks</li>
            <li>I Know how to use React hooks and lifecycle methods to provide the best performance and minimise DOM rerenders</li>
            <li>I use lazy loading and code splitting to optimise applications performance</li>
            <li>I generate Lighthouse reports for my projects to make sure they follow the recommended guidelines.</li>
            <li>I bring centralised storage such as Redux or React Context to projects to avoid props drilling</li>
            <li>I efficiently connect FEs to backend using both Restful and GraphQL APIs, add proper error handling and loaders to UI and use React hooks and lifecycle methods to avoid unnecessary API calls.</li>
            <li>Comfortable working with BOM, DOM events and Vanilla JS.</li>
            <li>I can create FE application using Svelte as well.</li>
            <li>I allocate time to investigating new tooling and try to choose wisely between writing features on your own and bringing new packages to project.</li>
        </ul>

        <h2 className="text-indigo-400 my-5 text-2xl">I care about code quality</h2>
            <ul>
                <li>I can’t imagine development in a team without PRs and code reviews</li>
                <li>I use tools such as Eslint and StyleLint to bring code formatting to a single standard</li>
                <li>I use prop-types or Typescript with React to avoid typing errors.</li>
                <li>I use tools such as plop to standardise components naming and structure</li>
                <li>I try to use latest versions of libraries and upgrade versions when possible with help of tools such as dependabot</li>
                <li>I write unit tests for my code and check that tests coverage is sufficient</li>
                <li>I use mocks and Storybook for development/testing to ensure correct behaviour for edge cases</li>
                <li>I encourage usage of GitHub actions or similar tooling to execute basic checks on pull requests and ensure no broken code gets merged</li>
                <li>I execute basic e2e tests before making a PR</li>
            </ul>

        <h2 className="text-indigo-400 my-5 text-2xl">More than just a frontend developer</h2>
        <ul>
            <li>10+ years in IT give me very broad technical background.</li>
            <li>My previous career in QA influences my approach to development and results in better quality of the features and better code coverage. QA engineers who work with me admit that they find much less bugs when testing my tasks.</li>
            <li>As a former QA engineer on a big data project, I have good knowledge of both relational and non-relational databases.</li>
            <li>I have broad knowledge of automation testing tooling (Cypress, pytest, Selenium, JMeter) and best approaches to testing.</li>
            <li>I have enough skills to write not too complicated backends (i.e. create restful API / GraphQL schema and support for CRUD operations using database for persistent storage). I’ve been using ORMs such as Sequielize and Prisma and created backends using python (Django Rest Framework) and JavaScript (Express Server, Node.js, Nest.js).</li>
            <li>I work with Docker, docker-compose and know basics of Kubernetes.</li>
        </ul>
    </div>
}