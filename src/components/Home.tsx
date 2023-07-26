import Skills from "./Skills";
import { BsXDiamond } from "react-icons/bs";

const Home = () => {
  return (
    <div
      className="flex flex-col pt-24 sm:pt-32 justify-start text-center"
      id="about"
    >
      <div className="text-6xl sm:text-8xl md:text-9xl font-[inter] font-bold justify-center text-center">
        <h1 className="bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text mx-12">
          Full Stack Web Developer
        </h1>
      </div>
      <div className="mt-8 text-black font-semibold text-xl mx-8">
        <p>Hello, I'm None, A new full stack web developer</p>
        <p>Hope you enjoy my website.</p>
      </div>
      <div className="flex flex-col sm:flex-row mt-10 justify-center w-1/2 m-auto min-w-fit">
        <a
          href="#projects"
          className="group flex flex-row items-center text-black rounded-3xl text-xl font-bold px-14 sm:px-20 md:px-28 py-2.5 mr-2 mb-2 border border-button bg-transparent cursor-pointer shadow-2xl hover:bg-button hover:text-white duration-300 active:bg-button active:text-white"
        >
          <BsXDiamond
            className="mr-8 group-hover:rotate-45 duration-300"
            size={28}
          />
          Projects
        </a>
      </div>
      <Skills />
    </div>
  );
};

export default Home;
