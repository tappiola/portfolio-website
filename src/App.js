import Header, {MENU} from "./Header";
import {Introduction} from "./Introduction";
import {Testimonials} from "./Testimonials";
import {Projects} from "./Projects";
import {Career} from "./Career";
import {AboutMe} from "./AboutMe";
import {useRef, useState} from "react";

const App= () => {
    const windowRef = useRef();
    const testimonialsRef = useRef();
    const careerRef = useRef();
    const skillsRef = useRef();
    const projectsRef = useRef();

    const [activeMenuItem, setActiveMenuItem] = useState(null);

    const onScroll = () => {
        const windowScroll = windowRef.current.scrollTop;
        const testimonialsStart = testimonialsRef.current.offsetTop;
        const careerStart = careerRef.current.offsetTop;
        const skillsStart = skillsRef.current.offsetTop;
        const projectsStart = projectsRef.current.offsetTop;
        console.log({skills: skillsStart - windowScroll, pr: projectsStart - windowScroll, careerStart: careerStart - windowScroll, testimonialsStart: testimonialsStart - windowScroll, windowScroll});


        if (testimonialsStart <= windowScroll){
            setActiveMenuItem(MENU.Testimonials);
        } else if (careerStart <= windowScroll) {
            setActiveMenuItem(MENU.Career);
        } else if (projectsStart <= windowScroll) {
            setActiveMenuItem(MENU.Projects);
        } else if (skillsStart <= windowScroll) {
            setActiveMenuItem(MENU.Skills);
        } else if (activeMenuItem){
            setActiveMenuItem(null);
        }
    }

    function debounce(func, timeout = 50){
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };
    }

    const processScroll = debounce(onScroll);

  return (
      <div className="bg-stone-900" >
          <Header activeMenuItem={activeMenuItem}/>
          <div className="h-screen snap-y snap-mandatory overflow-y-auto" onScroll={processScroll} ref={windowRef}>
              <Introduction/>
              <AboutMe ref={skillsRef}/>
              <Projects ref={projectsRef}/>
              <Career ref={careerRef}/>
              <Testimonials ref={testimonialsRef}/>
          </div>
      </div>
  );
}

export default App;
