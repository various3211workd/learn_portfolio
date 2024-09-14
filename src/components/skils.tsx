import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faShieldHalved } from '@fortawesome/free-solid-svg-icons'
import { faRust, faPython, faPhp } from '@fortawesome/free-brands-svg-icons';

import { mainSkillData, subSkillData } from './skilldata.js';

const Skills = () => {
    return (
      <section id="skills">
        <div className="text-center pt-20">
            <p className="text-5xl pb-10 text-center underline decoration-[#A04747]">スキル</p>

            <p className="text-xl my-5">業務・趣味で成果物を作ったことがある</p>
            {mainSkillData && mainSkillData.map((skill) => (
              <div className="flex justify-center items-left">
                <div className="mx-72">
                  {skill.skill.map((s) => (
                    <span className="inline-block bg-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      <p>{s}</p>
                    </span>
                  ))
                  }
                </div>
              </div>
            ))
            }

            <p className="text-xl my-5">触ったことがある</p>
            {subSkillData && subSkillData.map((skill) => (
              <div>
              <span className="inline-block bg-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {skill.skill}
              </span>
              </div>
            ))
            }
          </div>
        </section>
    )
  }
  
  export default Skills;