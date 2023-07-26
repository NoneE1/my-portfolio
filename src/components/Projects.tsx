import { useState, useEffect } from "react";
import GitCard from "./GitCard";
import GetGithubColors from "../index.js";

const colors = await GetGithubColors();

const Projects = () => {
  const [myProjects, setProjects] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/NoneE1/repos")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex flex-col mt-36 h-screen text-center" id="projects">
      <div>
        <div className="flex justify-center pb-12 font-black text-6xl sm:text-8xl md:text-9xl bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text m-auto">
          <h1>Projects</h1>
        </div>
        <div className="flex flex-row justify-center my-8 px-5">
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-4 md:grid-cols-2 w-5/6">
            {myProjects.map((list, index) => (
              <GitCard
                key={index}
                full_name={list["full_name"]}
                url={list["svn_url"]}
                comment={list["description"]}
                language={list["language"] ? list["language"] : "No language"}
                stars={list["stargazers_count"]}
                forks={list["forks_count"]}
                color={
                  list["language"] ? colors[list["language"]]["color"] : "#000"
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
