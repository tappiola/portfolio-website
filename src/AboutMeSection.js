import { ReactComponent as CheckMark} from './CheckMark.svg';
import {Fade} from 'react-reveal';

export const AboutMeSection = ({title, features, img, index}) => {
    return <Fade><div className="p-10 my-5 mx-5 flex items-center">
        <picture className={`basis-2/5 shrink-0 ${index % 2 !== 0 ? 'order-1': ''}`}>
        <img src={img} className='object-cover aspect-video object-center-top' alt="skill"/>
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