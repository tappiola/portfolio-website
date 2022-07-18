import React from 'react';
import { SectionTitle } from './SectionTitle';
import { PlaceOfWork } from './PlaceOfWork';

const WORKPLACES = [
  {
    dates: 'Jun 22 - Jul 22',
    company: 'Ondat',
    location: 'London, UK',
    title: 'Frontend Developer (React + Typescript)',
    description: ['Development of a portal for monitoring and configuring Kubernetes clusters.', 'Adding new features according to Figma designs, code refactoring, setting up communication with BE using GraphQL queries/mutations, adding responsiveness to the website.'],
  },
  {
    dates: 'Feb 21 – Jan 22',
    company: 'Scandiweb',
    location: 'Riga, Latvia',
    title: 'Frontend Developer (React)',
    description: ['Development of ScandiPWA Core – modern React-based e-commerce application.', 'Developing complex UI components with custom animation logic, bugfixing, improving coding standards.'],
  },
  {
    dates: 'Dec 18 – Aug 20',
    company: 'Easybrain',
    location: 'Minsk, Belarus',
    title: 'QA Engineer',
    description: ['Working a QA engineering on a big data application designed to accumulate and analyse marketing and financial statistics.', 'Testing of the reporting portal, ETL processes, Tableau reports, developing automated tests using python + pytest.'],
  },
  {
    dates: 'Nov 17 – Oct 18',
    company: 'Wargaming.net',
    location: 'Minsk, Belarus',
    title: 'QA Engineer',
    description: ['Testing of a React-based e-commerce app integrated into World of Tanks client (ingame shop).', 'Performing releases, test environments setup and support, tests automation (pytest).'],
  },
  {
    dates: 'Jul 12 - Oct 17',
    company: 'A1QA',
    location: 'Minsk, Belarus',
    title: 'QA Engineer',
    description: ['Working on multiple mobile and web projects as Manual and Automation QA Engineer.', 'Performing tests automation using python and Selenium WebDriver.'],
  },
];

export const Career = React.forwardRef((props, ref) => (
  <section id="career" ref={ref} className="pt-20 -mt-20 xl:h-full overflow-y-auto snap-start">
    <SectionTitle>My Career</SectionTitle>
    <ol className="border-l border-gray-300 m-10">
      {WORKPLACES.map((work) => <PlaceOfWork key={work.company} work={work} />)}
    </ol>
  </section>
));
