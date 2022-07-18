import { Fade } from 'react-reveal';
import { ReactComponent as CheckMark } from './images/CheckMark.svg';

export function AboutMeSection({
  title, features, img, index,
}) {
  const renderImages = () => {
    if (index === 1) {
      return (
        <>
          <img src={img[0]} className="grayscale-[30%] rounded relative xl:top-20 z-10 shadow-lg xl:w-3/4" alt="skill" />
          <img
            src={img[1]}
            className="hidden xl:block grayscale-[30%] rounded relative -top-24 -right-40 shadow-lg w-3/4"
            alt="skill"
          />
        </>
      );
    }

    if (index === 2) {
      return (
        <>
          <img src={img[0]} className="grayscale-[30%] rounded relative  shadow-lg xl:w-3/4" alt="skill" />
          <img
            src={img[1]}
            className=" hidden xl:block grayscale-[30%] rounded relative -top-12 -right-40 shadow-lg w-3/4 z-10"
            alt="skill"
          />
        </>
      );
    }

    if (index === 4) {
      return (
        <>
          <img src={img[0]} className="grayscale-[30%] rounded relative shadow-lg xl:w-3/4" alt="skill" />
          <img
            src={img[1]}
            className="hidden xl:block grayscale-[30%] rounded relative -top-14 -right-36 shadow-lg w-3/4 z-10"
            alt="skill"
          />
        </>
      );
    }

    return <img src={img[0]} className="object-cover object-center-top opacity-70 grayscale-3 rounded" alt="skill" />;
  };

  return (
    <Fade>
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
    </Fade>
  );
}
