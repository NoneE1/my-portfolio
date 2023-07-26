export async function GetGithubColors() {
  const response = await fetch(
    "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json"
  );
  const data = await response.json();
  return data;
}

export default GetGithubColors;

export const Skill = [
  {
    skill_name: "HTML",
    skill_image: "./html.svg",
  },
  {
    skill_name: "CSS",
    skill_image: "./css.svg",
  },
  {
    skill_name: "JavaScript",
    skill_image: "./js.svg",
  },
  {
    skill_name: "React",
    skill_image: "./react.svg",
  },
  {
    skill_name: "Python",
    skill_image: "./python.svg",
  },
  {
    skill_name: "NodeJS",
    skill_image: "./nodejs.svg",
  },
  {
    skill_name: "Django",
    skill_image: "./django.svg",
  },
];
