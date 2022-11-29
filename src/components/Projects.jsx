import { BiLinkExternal } from "react-icons/bi";

const Project = ({ githubHref, name, description }) => {
  return (
    <div className="border border-black rounded-md p-2">
      <div className="flex justify-between">
        <h4 className="text-xl">{name}</h4>
        <a
          href={githubHref}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center hover:text-blue-700"
        >
          <BiLinkExternal className="text-xl" />
        </a>
      </div>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const Projects = () => {
  return (
    <div>
      <h3 className="text-3xl font-bold">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        <Project
          name="Inventory Management"
          description="An inventory management system that allows the scanning of items using QR codes."
          githubHref="https://github.com/ervnjmsdnts/inventory-scanner/"
        />
        <Project
          name="Todo List CLI"
          description="A CLI tool that generates a backend API using NodeJS ExpressJS and MongoDB."
          githubHref="https://github.com/ervnjmsdnts/todolist-cli"
        />
        <Project
          name="Mazi"
          description="A dating application that aims to provide blind dates to users."
          githubHref="https://github.com/ervnjmsdnts/mazi"
        />
      </div>
    </div>
  );
};

export default Projects;
