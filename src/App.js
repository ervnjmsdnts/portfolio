import Experiences from "./components/Experiences";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="md:mx-80 mx-8">
      <Navbar />
      <div className="flex flex-col gap-8">
        <Hero />
        <Projects />
        <Experiences />
      </div>
    </div>
  );
};

export default App;
