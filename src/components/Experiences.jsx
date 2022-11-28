const Experience = ({ dateRange, title, tasks, company }) => {
  return (
    <li className="mb-8 ml-4">
      <div className="absolute w-3 h-3 bg-blue-700 rounded-full -left-[6px] border border-white"></div>
      <p className="mb-1 text-sm font-normal leading-none text-gray-400">
        {dateRange}
      </p>
      <h3 className="text-lg font-semibold">{title}</h3>
      <h4 className="text-gray-600">{company}</h4>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="text-gray-500 list-disc ml-4">
            {task}
          </li>
        ))}
      </ul>
    </li>
  );
};

const Experiences = () => {
  return (
    <div>
      <h3 className="text-3xl font-bold">Experiences</h3>
      <div className="mt-4">
        <ol className="relative border-l border-gray-400">
          <Experience
            dateRange="October 2019 - November 2019"
            title="Software Developer Trainee"
            company="Innospire Corporation"
            tasks={[
              "Developed websites for clients using PHP and MySQL.",
              "Created high quality designs (logos, slogans, etc.) using Adobe Photoshop.",
            ]}
          />
          <Experience
            dateRange="February 2021 - May 2021"
            title="Full Stack Developer Intern"
            company="Quadrologix"
            tasks={[
              "Worked on developing a scalable API for a Flutter application using Django together with a team of 5.",
              "Developed the UI using Flutter with an MVC approach.",
              "Developed high quality websites for clients using React.",
            ]}
          />
          <Experience
            dateRange="May 2022 - Present"
            title="Junior Full Stack Developer Intern"
            company="Offshorly"
            tasks={[
              "Was the lead full-stack developer of a leaderboard application specifically for the -Le games (Nerdle, Wordle, Quordle, etc.). The technologies that we used were ReactJS, NodeJS, React Native, AWS, DynamoDB.",
              "Helped with the development of a procurement application for a UK company. The technologies that we used were ReactJS, NodeJS, AWS, DynamoDB",
            ]}
          />
        </ol>
      </div>
    </div>
  );
};

export default Experiences;
