import { ReactComponent as CheckMark} from './CheckMark.svg';

export const AboutMeSection = ({title, features, img}) => {
    return <div className="basis-1/3">
        <div className="bg-stone-700 rounded-2xl p-10 my-5 mx-5">
        <img src={img} className="opacity-70 grayscale-30 object-cover aspect-video object-center-top"/>
            <h2 className="text-indigo-400 my-5 text-2xl">{title}</h2>
            <ul style={{fontFamily: "Ubuntu-Regular"}} className="text-stone-400">
                {features.map((feature, i) => <li key={i} className="flex my-5 items-start"><CheckMark/>{feature}</li>)}
            </ul>
        </div>
    </div>
    }