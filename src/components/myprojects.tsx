import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { projectData } from './projectdata.js';


const Projects = () => {
  return (
    <section id="project">
      <div className="pt-20 mx-10">
        <p className="text-5xl pb-10 text-center underline decoration-[#A04747]">
          プロジェクト紹介
        </p>
        <div className="projects-grid">
            {projectData && projectData.map((project) => (
              <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between border-4 border-white duration-300 hover:border-[#A04747]">
                <div className="mb-8">
                  <div className="grid grid-cols-3">
                    <div className="text-gray-900 font-bold text-xl mb-2 col-span-2">{project.title}</div>
                    <span className="col-start-3 inline-block text-center text-white bg-[#D8A25E] rounded-md px-3 py-1 text-sm font-semibold mr-2 mb-2">
                      {project.dist}
                    </span>
                  </div>
                  <p className="text-gray-700 text-base">{project.description}</p>
                </div>

                <div className="grid grid-cols-4">
                  <div className="col-span-3">
                    { project.tec.map((tec) => (
                      <span className="inline-block bg-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {tec}
                      </span>
                    )) }
                  </div>

                  <a href={project.gitHubLink} className='text-right'>
                    <FontAwesomeIcon icon={faGithub} className="text-gray-900 text-4xl"/>
                  </a>
                  </div>

                </div>
            ))
            }
        </div>
      </div>
    </section>
  )
}

export default Projects;