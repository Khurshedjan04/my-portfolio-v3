import About from "./components/About";
import CV from "./components/CV";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 md:gap-7 lg:gap-12 text-secondary">
      <About/>
      <Skills/>
      <Projects/>
      <CV/>
    </div>
  );
}
