import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFolder, faLink } from '@fortawesome/free-solid-svg-icons';

import { projectData } from './projectdata.js';

const Projects = () => {
  const getIcon = (linkType: string) => {
    switch (linkType) {
      case 'github':
        return faGithub;
      case 'link':
        return faLink;
      default:
        return faLink;
    }
  };

  return (
    <section id="project">
      <div className="pt-20 mx-10">
        <p className="text-4xl pb-10 text-center font-semibold whitespace-nowrap underline decoration-[#A04747]">
          <FontAwesomeIcon icon={faFolder} className="pr-2" />
          Project
        </p>
        <div className="flex justify-center grid grid-cols-1 md:grid-cols-2 gap-2">
          {projectData &&
            projectData.map((project, key) => (
              <div
                className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between border-4 border-white duration-300 hover:border-[#A04747]"
                key={key}
              >
                <div className="mb-8">
                  <div className="grid md:grid-cols-3">
                    <div className="text-gray-900 font-bold text-auto md:text-xl mb-2 col-span-2">
                      {project.title}
                    </div>
                    <span className="md:col-start-3 col-start-1 col-span-3 md:grid">
                      <p className="text-white text-sm font-semibold bg-[#D8A25E] inline-block md:text-center rounded-md px-3 py-1 mr-2 mb-2">
                        {project.dist}
                      </p>
                    </span>
                  </div>
                  <p className="text-gray-700 text-base">
                    {project.description}
                  </p>
                </div>

                <div className="grid grid-cols-11">
                  <div className="col-span-10">
                    {project.tec.map((tec) => (
                      <span
                        className="inline-block bg-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                        key=""
                      >
                        {tec}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    className="flex justify-end items-end "
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={getIcon(project.linkType)}
                      className="text-gray-900 text-4xl"
                    />
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
