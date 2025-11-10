import { faCode, faDatabase, faServer, faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const skillsData = [
  {
    icon: faCode,
    title: "Frontend Development",
    skills: ["React", "JavaScript", "HTML/CSS", "Tailwind CSS"],
    level: "Advanced"
  },
  {
    icon: faServer,
    title: "Backend Development", 
    skills: ["Python", "Django", "Flask", "REST APIs"],
    level: "Intermediate"
  },
  {
    icon: faDatabase,
    title: "Database Management",
    skills: ["PostgreSQL", "SQLite", "Database Design"],
    level: "Intermediate"
  },
  {
    icon: faMobile,
    title: "Tools & Deployment",
    skills: ["Git", "GitHub", "Render", "VS Code"],
    level: "Advanced"
  }
];

const Skills = () => {
  return (
    <div className="content px-4">
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title">Skills & Expertise</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here are the key technologies and skills I bring to every project.
          </p>
        </div>
      </div>
      
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-2 md:grid-cols-2 gap-8 max-w-4xl">
          {skillsData.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-picto-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <FontAwesomeIcon icon={skill.icon} className="text-picto-primary text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{skill.title}</h3>
                  <span className="text-sm text-picto-primary font-medium">{skill.level}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.skills.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;