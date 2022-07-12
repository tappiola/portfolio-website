import Header from "./Header";
import {Introduction} from "./Introduction";
import {Testimonials} from "./Testimonials";
import {Projects} from "./Projects";
import {Career} from "./Career";
import {AboutMe} from "./AboutMe";

function App() {
  return (
      <div className="py-12 bg-stone-900">
          <Header/>
          <Introduction/>
          <AboutMe/>
          <p className="text-3xl text-indigo-100 font-mono my-12 mx-auto">"Give me the designs, I'll get the rest done"</p>
          <Projects/>
          <Career/>
          <Testimonials/>
      </div>
  );
}

export default App;
