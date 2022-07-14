import { ReactComponent as CheckMark} from './CheckMark.svg';

export const AboutMeSection = ({title, features, img, index}) => {
    return<div className="p-10 my-5 mx-5 flex items-center">
        <picture className={`basis-2/5 shrink-0 ${index % 2 !== 0 ? 'order-1': ''}`}>
        <img src={img} className='opacity-70 grayscale-30 object-cover aspect-video object-center-top' alt="skill"/>
        </picture>
            <div className="mx-20">
        <h2 className="text-indigo-400 my-5 text-2xl">{title}</h2>
            <ul className="text-stone-400">
                {features.map((feature, i) => <li key={i} className="flex my-5 items-start"><CheckMark/>{feature}</li>)}
            </ul>
        </div>
    </div>
    }