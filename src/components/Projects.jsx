import { AiFillGithub } from 'react-icons/ai';
import { FiGlobe } from 'react-icons/fi';

const projects = [
  {
    name: 'Inventory Management',
    description:
      'An inventory management system featuring seamless QR code scanning for item tracking.',
    github: 'https://github.com/ervnjmsdnts/inventory-scanner/',
  },
  {
    name: 'Attendance Management',
    description:
      'An attendance tracking dashboard tailored for educational institutions.',
    github: 'https://github.com/ervnjmsdnts/attendance-web',
  },
  {
    name: 'TravelTrio',
    description:
      'A tourist-centric website dedicated to showcasing the top vacation spots in Batangas.',
    github: 'https://github.com/ervnjmsdnts/resort',
    website: 'https://traveltrio.vercel.app/',
  },
];

const Project = ({ githubHref, name, description, websiteHref }) => {
  return (
    <div className='border border-black rounded-md p-2'>
      <div className='flex justify-between'>
        <h4 className='text-xl'>{name}</h4>
      </div>
      <p className='text-gray-400'>{description}</p>
      <div className='flex items-center justify-end pt-2 text-2xl gap-2'>
        <a
          target='_blank'
          href={githubHref}
          rel='noreferrer'
          className='hover:text-green-500'>
          <AiFillGithub />
        </a>
        {websiteHref && (
          <a
            target='_blank'
            href={websiteHref}
            rel='noreferrer'
            className='hover:text-blue-700'>
            <FiGlobe />
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div>
      <h3 className='text-3xl font-bold'>Projects</h3>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-4'>
        {projects.map((project) => (
          <Project
            name={project.name}
            description={project.description}
            githubHref={project.github}
            key={project.name}
            websiteHref={project?.website}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
