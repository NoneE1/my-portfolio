import SkillCard from "./SkillCard";
import { Skill } from "../index.js";

const Skills = () => {
  return (
    <div className="flex flex-col">
      <div className="mt-10 text-center text-black mb-8">
        <p className="text-5xl cursor-default animate-bounce">↓</p>
        <h1 className="text-xl tracking-widest">Check out my skills!</h1>
      </div>

      <div className="flex flex-row justify-center mt-8 px-5">
        <div className="grid grid-cols-2 gap-4 grid-rows-1 md:grid-cols-4 sm:grid-cols-3">
          {Skill.map((skill, key) => (
            <SkillCard
              key={key}
              skill_name={skill.skill_name}
              skill_image={skill.skill_image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
