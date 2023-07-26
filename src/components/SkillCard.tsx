interface Skill {
  skill_name: string;
  skill_image: string;
}

const SkillCard = ({ skill_name, skill_image }: Skill) => {
  return (
    <div className="sm:p-2 hover:scale-110 duration-300 cursor-default flex flex-row">
      <img
        draggable="false"
        alt={skill_name}
        loading="lazy"
        src={skill_image}
        width="70"
        height="70"
      />
      <p className="font-bold text-xl m-auto">{skill_name}</p>
    </div>
  );
};

export default SkillCard;
