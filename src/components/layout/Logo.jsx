import { Link } from "react-router-dom";
import { RiMovie2Fill } from "react-icons/ri";

export default function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-3 group"
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 via-red-700 to-black flex items-center justify-center shadow-lg shadow-red-600/40 transition duration-300 group-hover:rotate-12 group-hover:scale-110">
        <RiMovie2Fill className="text-white text-3xl" />
      </div>

      <div>
        <h1 className="text-2xl font-black tracking-[5px] text-white">
          BANGER
        </h1>

        <p className="text-xs text-gray-400 tracking-[3px]">
          MOVIE UNIVERSE
        </p>
      </div>
    </Link>
  );
}