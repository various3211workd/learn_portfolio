import { SkillData } from './skilldata.js';
import SkillTag from './skilltag';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  return (
    <section id="skills">
      <div className="text-center pt-20">
        <p className="text-4xl pb-10 text-center font-semibold whitespace-nowrap underline decoration-[#A04747]">
          <FontAwesomeIcon icon={faWrench} className="pr-2" />
          Skill
        </p>

        <p className="text-xl my-5">業務・趣味で複数回使用したことがある</p>
        <SkillTag skilldata={SkillData.mainSkillData} />

        <p className="text-xl my-5">業務・趣味で成果物を作ったことがある</p>
        <SkillTag skilldata={SkillData.seccondSkillData} />

        <p className="text-xl my-5">触ったことがある</p>
        <SkillTag skilldata={SkillData.thirdSkillData} />
      </div>
    </section>
  );
};

export default Skills;
