import { BsRobot } from "react-icons/bs";

export default function Logo() {
  return (
    <div className="flex items-center justify-start md:justify-center space-x-2 p-2 w-full">
      <BsRobot size={32} className="text-sky-700" />
      <span className="text-sky-700 font-[600] text-xl">Anime</span>
    </div>
  );
}
