import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';

import { projectData } from './projectdata.js';


const Projects = () => {
  return (
    <section id="project">
      <div className="pt-20 mx-10">
        <p className="text-5xl pb-10 text-center underline decoration-[#D8A25E]">
          プロジェクト紹介
        </p>
        <div className="projects-grid">
            {projectData && projectData.map((project) => (
              <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8"> 
                  <div>
                    <i className="folder-icon text-gray-400 text-4xl">
                      <FontAwesomeIcon icon={faListCheck} />
                    </i>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="text-gray-900 font-bold text-xl mb-2">{project.title}</div>
                    <span className="text-right pr-5 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      test
                    </span>
                  </div>
                  <p className="text-gray-700 text-base">{project.description}</p>
                </div>
                                
                <div className="px-6 pt-4 pb-2">
                  { project.tec.map((tec) => (
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {tec}
                    </span>
                  )) }
                </div>

                <a href={project.gitHubLink} className='text-right'>
                  <FontAwesomeIcon icon={faGithub} className="text-gray-900 text-4xl"/>
                </a>

              </div>
            ))
            }
        </div>
      </div>
    </section>
  )
}

export default Projects;