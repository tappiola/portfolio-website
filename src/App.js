import Header from "./Header";
import {Introduction} from "./Introduction";
import {Testimonials} from "./Testimonials";
import {Projects} from "./Projects";
import {Career} from "./Career";
import {AboutMe} from "./AboutMe";

function App() {
  return (
      <div className="bg-stone-900">
          <Header/>
          <Introduction/>
          <AboutMe/>
          <Projects/>
          <Career/>
          <Testimonials/>
      </div>
  );
}

export default App;
