import { mainSkillData, subSkillData } from './skilldata.js';

const Skills = () => {
  return (
    <section id="skills">
      <div className="text-center pt-20">
        <p className="text-4xl pb-10 text-center font-semibold whitespace-nowrap underline decoration-[#A04747]">
          Skill
        </p>

        <p className="text-xl my-5">業務・趣味で成果物を作ったことがある</p>
        {mainSkillData &&
          mainSkillData.map((skill) => (
            <div className="flex justify-center items-left">
              <div className="md:w-full lg:mx-72">
                {skill.skill.map((s) => (
                  <span className="inline-block rounded-full px-3 py-1 mr-2 mb-2 font-medium border bg-white dark:bg-gray-800 border-gray-300">
                    <p>{s}</p>
                  </span>
                ))}
              </div>
            </div>
          ))}

        <p className="text-xl my-5">触ったことがある</p>
        {subSkillData &&
          subSkillData.map((skill) => (
            <div className="flex justify-center items-left">
              <div className="md:w-full lg:mx-72">
                <span className="inline-block rounded-full px-3 py-1 mr-2 mb-2 font-medium border bg-white dark:bg-gray-800 border-gray-300">
                  <p>{skill.skill}</p>
                </span>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Skills;
