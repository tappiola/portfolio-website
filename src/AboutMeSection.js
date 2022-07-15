import { ReactComponent as CheckMark} from './CheckMark.svg';
import {Fade} from 'react-reveal';

export const AboutMeSection = ({title, features, img, index}) => {
    const renderImages = () => {
        if (index === 1){
            return <>
                <img src={img[0]} className='grayscale-[30%] rounded relative top-20 z-10 shadow-lg w-3/4' alt="skill"/>
                <img src={img[1]} className='grayscale-[30%] rounded relative -top-24 -right-40 shadow-lg w-3/4'
                     alt="skill"/>
            </>
        }

        if (index === 2){
            return <>
                <img src={img[0]} className='grayscale-[30%] rounded relative  shadow-lg w-3/4' alt="skill"/>
                <img src={img[1]} className='grayscale-[30%] rounded relative -top-12 -right-40 shadow-lg w-3/4 z-10'
                     alt="skill"/>
            </>
        }

        if (index === 4){
            return <>
                <img src={img[0]} className='grayscale-[30%] rounded relative shadow-lg w-3/4' alt="skill"/>
                <img src={img[1]} className='grayscale-[30%] rounded relative -top-14 -right-36 shadow-lg w-3/4 z-10'
                     alt="skill"/>
            </>
        }

        return <img src={img[0]} className='object-cover object-center-top opacity-70 grayscale-3 rounded' alt="skill"/>;
    }

                return <Fade><div className="p-10 my-5 mx-5 flex items-center h-screen snap-center text-stone-200 px-10">
                <picture className={`basis-2/5 shrink-0 ${index % 2 !== 0 ? 'order-1': ''}`}>
                    {renderImages()}
                     </picture>
                <div className="mx-20">
                    <h2 className="text-teal-600 my-5 text-2xl">{title}</h2>
                    <ul className="text-stone-400">
                        {features.map((feature, i) => <li key={i} className="flex my-5 items-start"><CheckMark/>{feature}</li>)}
                    </ul>
                </div>
            </div>
            </Fade>

                }