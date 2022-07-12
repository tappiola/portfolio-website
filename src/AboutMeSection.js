import { ReactComponent as CheckMark} from './CheckMark.svg';

export const AboutMeSection = ({title, features}) => {
    return <div className="bg-stone-700 rounded-2xl p-10 w-1/2 my-5">
            <h2 className="text-indigo-400 mb-5 text-2xl">{title}</h2>
            <ul style={{fontFamily: "Ubuntu-Regular"}}>
                {features.map((feature, i) => <li key={i} className="flex my-5 items-start"><CheckMark/>{feature}</li>)}
            </ul>
        </div>
    }