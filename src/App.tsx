import "./App.css";

import { Footer } from "./layout/footer/Footer";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/section/main/Main";
import { Projects } from "./layout/section/projects/Projects";
import { SectionSkills } from "./layout/section/sectionSkills/SectionSkills";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <SectionSkills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
