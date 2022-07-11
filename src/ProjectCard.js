import {Carousel} from "./Carousel";
import {Pills} from "./Pills";

export const ProjectCard = ({project, project: {screenshots, title, description, pills}}) => {
    console.log({project});

    return <div className="p-10 m-10 bg-stone-700 rounded-2xl flex">
        {/*<h1 className=" text-stone-300 text-4xl my-3 ">Real estate agency website</h1>*/}
        {/*<div>*/}
        {/*<Carousel images={screenshots}/>*/}
            <img
                src={screenshots[0]}
                className="block w-2/5"
                alt="Wild Landscape"
                style={{aspectRatio: "16/9"}}
            />
        {/*</div>*/}
        <div className="pl-20">
            <h1 className="text-stone-300 text-4xl my-3">{title}</h1>
            {description.map(p => <p className="text-stone-300">{p}</p>)}
            <Pills pills={pills}/>
        </div>
    </div>
}

