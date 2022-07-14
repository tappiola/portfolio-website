import {useScrollDirection} from "./useScrollEffect";

const headerLinks = [
    {name: 'Skills', anchor: '#skills'},
    {name: 'Projects', anchor: '#projects'},
    {name: 'Career', anchor: '#career'},
    {name: 'Testimonials', anchor: '#testimonials'},
]

export default function Header() {
    const scrollDirection = useScrollDirection();

    return (
        <header className={`w-screen px-4 sm:px-6 backdrop-blur z-10 shadow-lg py-5 fixed ${ scrollDirection === "down" ? "-top-20" : "top-0"}`}>
            <div className="flex justify-between items-center md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                    <a href="/" className="text-teal-500 text-lg">
                        TAPPIOLA
                    </a>
                </div>
                <nav>
                    {headerLinks.map(l => (
                        <a key={l.name} href={l.anchor} className="text-base font-medium text-stone-300 hover:text-teal-500 px-10">
                            {l.name}
                        </a>
                    ))}
                </nav>
            </div>
            {/*<button className="text-teal-500 border-2 border-teal-500 border w-fit py-3 px-4 rounded mt-12 ">Check out my CV!</button>*/}
        </header>
    )
}
