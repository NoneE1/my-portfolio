import { BsGithub } from "react-icons/bs";
import { RiStarSLine } from "react-icons/ri";
import { TbGitFork } from "react-icons/tb";

interface GitCardProps {
  full_name: string;
  url: string;
  comment: string;
  language: string;
  stars: number;
  forks: number;
  color: string;
}

const GitCard = ({
  full_name,
  url,
  comment,
  language,
  stars,
  forks,
  color,
}: GitCardProps) => {
  return (
    <div className="border-gray-300 rounded-md border p-3 flex flex-col justify-between overflow-scroll no-scrollbar w-96">
      <div className="flex justify-start gap-2 text-xl items-center font-semibold break-normal">
        <BsGithub className="min-h-[24px] min-w-[24px]" />
        <a href={url} className="text-blue-700" target="_blank">
          {full_name}
        </a>
      </div>
      <p className="text-start py-4">{comment}</p>
      <div className="flex gap-1 items-center">
        <span
          className="my-2 w-2.5 h-2.5 rounded-full justify-start"
          style={{ backgroundColor: color }}
        ></span>
        <p>{language}</p>
        <p className="flex items-center gap-1 ml-2">
          <RiStarSLine size={20} /> {stars}
        </p>
        <p className="flex items-center gap-1 ml-2">
          <TbGitFork size={20} /> {forks}
        </p>
      </div>
    </div>
  );
};

export default GitCard;
