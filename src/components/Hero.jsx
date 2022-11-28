import Picture from "../assets/images/pic.jpg";
import CV from "../assets/files/Earvin-James-Dantes-Resume.pdf";

const Divider = () => {
  return <div className="w-8 h-px bg-gray-300" />;
};

const Hero = () => {
  return (
    <div className="flex justify-center items-center gap-16 h-[40vh]">
      <img src={Picture} alt="logo" className="w-72 rounded-full" />
      <div>
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl">
            My name is <span className="font-bold">Earvin James Dantes</span>
          </h2>
          <h3 className="text-2xl">
            I am a <span className="text-blue-700">Full Stack Developer</span>
          </h3>
        </div>
        <a
          href={CV}
          download="EarvinJamesDantesCV.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <button className="p-2 mt-4 px-4 text-blue-700 border border-blue-700 text-lg rounded-md hover:bg-blue-700 hover:text-white">
            Download CV
          </button>
        </a>
        <div className="flex items-center gap-2 mt-8 text-gray-400">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/earvin-james-dantes/"
            className="hover:text-gray-500"
          >
            LinkedIn
          </a>
          <Divider />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ervnjmsdnts"
            className="hover:text-gray-500"
          >
            Github
          </a>
          <Divider />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/earvinjames.dantes/"
            className="hover:text-gray-500"
          >
            Facebook
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
