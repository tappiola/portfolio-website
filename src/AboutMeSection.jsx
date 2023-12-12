import { ReactComponent as CheckMark } from './images/CheckMark.svg';

export const SKILLS = {
  Personal: 'Personal',
  UX: 'UX',
  FE: 'FE',
  BE: 'BE',
  QA: 'QA',
};

export function AboutMeSection({
  id,
  title,
  features,
  img,
  index,
}) {
  const renderImages = () => {
    if (id === SKILLS.UX) {
      return (
        <>
          <img src={img[0]} className="grayscale-[30%] rounded relative xl:top-20 z-10 shadow-lg xl:w-3/4" alt="skill" loading="lazy" />
          <img
            src={img[1]}
            className="hidden xl:block grayscale-[30%] rounded relative -top-24 -right-40 shadow-lg w-3/4"
            alt="skill"
            loading="lazy"
          />
        </>
      );
    }

    if (id === SKILLS.FE) {
      return (
        <>
          <img src={img[0]} className="grayscale-[30%] rounded relative  shadow-lg xl:w-3/4" alt="skill" loading="lazy" />
          <img
            src={img[1]}
            className=" hidden xl:block grayscale-[30%] rounded relative -top-12 -right-40 shadow-lg w-3/4 z-10"
            alt="skill"
            loading="lazy"
          />
        </>
      );
    }

    if (id === SKILLS.BE) {
      return (
        <>
          <img src={img[0]} className="grayscale-[30%] rounded relative shadow-lg xl:w-3/4" alt="skill" />
          <img
            src={img[1]}
            className="hidden xl:block grayscale-[30%] rounded relative -top-14 -right-36 shadow-lg w-3/4 z-10"
            alt="skill"
            loading="lazy"
          />
        </>
      );
    }

    return <img src={img[0]} className="object-cover object-center-top opacity-70 grayscale-3 rounded" alt="skill" loading="lazy" />;
  };

  return (
    <div className="px-3 py-2 xl:p-10 my-5 mx-5 flex flex-wrap xl:flex-nowrap items-center xl:h-screen snap-center text-stone-200 md:px-10">
      <picture className={`basis-full xl:basis-2/5 shrink-0 ${index % 2 !== 0 ? 'xl:order-1' : ''}`}>
        {renderImages()}
      </picture>
      <div className="xl:mx-20">
        <h2 className="text-teal-600 my-5 text-2xl">{title}</h2>
        <ul className="text-stone-400">
          {features.map((feature, i) => (
            <li key={i} className="flex my-5 items-start">
              <CheckMark />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
