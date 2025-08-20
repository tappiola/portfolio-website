import { SectionTitle } from './SectionTitle';
import { Carousel } from './Carousel';
import type { RefObject } from 'react';

const EMAIL = 't.karamorina@gmail.com';

interface TestimonialData {
  company: string;
  name: string;
  text: string;
}

const TESTIMONIALS: TestimonialData[] = [
  {
    company: 'Santander',
    name: 'Joe Campion',
    text: 'Tatiana’s passion for UX and proactivity had a clear impact. She elevated our QA standards, and the whole team benefited from it.',
  },
  {
    company: 'Scandiweb',
    name: 'Zans Laksa',
    text: "When Tatiana is solving her tasks, she always tends to investigate the issue deeper and make sure she did everything to fix the issue and didn't just cover obvious cases. Tatiana has made a good job on SPWA redesign and proven she has great frontend skills.",
  },
  {
    company: 'Ondat',
    name: 'Mike Allanson',
    text: "Her previous career in QA means she thinks about quality through the whole process, resulting in a standard of work that you'd usually expect from people with far more experience. I'd be very happy to work with her again.",
  },
  {
    company: 'Scandiweb',
    name: 'Carina Dutra Esteves',
    text: 'Working with Tatiana in one team is a pleasure. She always keeps in touch if something changes. Offers help in some tasks if she has time. Also does very good job in both ways - quality and amount.',
  },
  {
    company: 'Ondat',
    name: 'Marco Visintin',
    text: 'In the time I worked with her Tatiana proved herself incredibly smart and a very quick study. She has been able to absorb vast amount of information on our fairly complex stack in a surprisingly short period of time.',
  },
  {
    company: 'Easybrain',
    name: 'Lolita Pecherkina',
    text: 'It was very pleasant for me to work with Tatiana, as she always did her job efficiently, quickly understood the details and asked the right questions. Tatiana did tasks with a future in mind, it often went beyond the scope of her direct duties, but greatly facilitated the work of the team.',
  },
  {
    company: 'Scandiweb',
    name: 'Alexandra Korolova',
    text: "She doesn't allow a lot of bugs in tasks which she does, writes good explanations in detail for tasks. Tatiana is very responsible, she always digs deep to solve the issue.",
  },
];

export function Testimonial({
  testimonial: { company, name, text },
}: {
  testimonial: TestimonialData;
}) {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="grow-0 shrink-0 basis-auto w-5/6 px-3">
        <h2 className="text-lg font-bold mb-3 text-stone-300 font-mono">
          {name}
        </h2>
        <p className="font-medium mb-4 text-stone-400">{company}</p>
        <p className="text-gray-400 mb-6">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="quote-left"
            className="w-6 pr-2 inline-block"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
            />
          </svg>
          {text}
        </p>
        <ul className="flex justify-center mb-0">
          {[...Array(5)].map((_, i) => (
            <li key={i}>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="star"
                className="w-4 text-yellow-500"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                />
              </svg>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export const Testimonials = ({
  ref,
}: {
  ref: RefObject<HTMLDivElement | null>;
}) => (
  <section
    ref={ref}
    id="testimonials"
    className="container my-24 px-6 mx-auto xl:h-full snap-center pt-20 -mt-20"
  >
    <section className="mb-32 text-gray-800 text-center">
      <SectionTitle>Testimonials</SectionTitle>

      <Carousel className="h-68 xl:h-56">
        {TESTIMONIALS.map((t, i) => (
          <Testimonial key={i} testimonial={t} />
        ))}
      </Carousel>
    </section>
    <div className="flex flex-col justify-between items-center lg:w-3/5 mx-auto mt-8">
      <a
        href="https://tappiola-cv.s3.eu-west-2.amazonaws.com/CV-Tatiana-Karamorina.pdf"
        download="CV - Tatiana Karamorina"
        className="text-base normal-case text-teal-500 border-2 border-teal-500 w-fit py-3 px-4 rounded mx-auto hover:bg-teal-700 hover:bg-opacity-10"
      >
        Check out my CV!
      </a>
      <p className="text-stone-400 text-center mt-20">
        Want to offer me a new opportunity, ask a question or just to say hi?
      </p>
      <p className="text-stone-400 mt-5">Don't hesitate to contact me!</p>
      <p className="text-stone-400">
        Email:{' '}
        <a
          href={`mailto:${EMAIL}`}
          className="normal-case text-base text-light underline"
        >
          {EMAIL}
        </a>
      </p>
    </div>
  </section>
);
