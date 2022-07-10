import Example from "./Example";
import Header from "./Header";
import ondat1 from './screenshots/ondat1.png';
import {Introduction} from "./Introduction";
import {ProjectCard} from "./ProjectCard";
import {Testimonials} from "./Testimonials";

function App() {
  return (
      <div className="py-12 bg-stone-900">
          <Header/>
        {/*<Example/>*/}
          <Introduction/>
          <p className="text-3xl text-indigo-100 font-mono my-12 mx-auto">"Give me the designs, I'll get the rest done"</p>
          <figure className="rounded-xl p-8">
              <img className="w-360 h-240 mx-auto" src={ondat1} alt="" width="500" height="512"/>
                  <div className="pt-6 space-y-4">
                      <blockquote>
                          <p className="text-lg font-medium">
                              “Tailwind CSS is the only framework that I've seen scale
                              on large teams. It’s easy to customize, adapts to any design,
                              and the build size is tiny.”
                          </p>
                      </blockquote>
                      <figcaption className="font-medium">
                      </figcaption>
                  </div>
          </figure>
<ProjectCard/>
          <Testimonials/>

      </div>
  );
}

export default App;
