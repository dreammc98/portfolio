import "./App.css";
import { Footer } from "./layout/footer/Footer";
import { Header } from "./layout/header/Header";
import { About } from "./layout/section/about/About";
import { Main } from "./layout/section/main/Main";
import { Projects } from "./layout/section/projects/Projects";
import { SectionSkills } from "./layout/section/sectionSkills/SectionSkilsl";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <SectionSkills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
