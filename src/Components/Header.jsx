import { MdFavorite, MdHomeFilled } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-4 border-b-2 border-gray-200">
      <div className="container flex flex-row items-center justify-between gap-4  max-w-[1300px] mx-auto">
        <h1 className="text-xl font-bold">JokesWeb</h1>
        <div className="flex flex-row items-center gap-4">
          <Link
            to={"/"}
            className="flex flex-row items-center gap-2 text-base font-medium cursor-pointer"
          >
            <MdHomeFilled className="text-blue-400" />
            <span>Home</span>
          </Link>
          <Link
            to={"/fav"}
            className="flex flex-row items-center gap-2 text-base font-medium cursor-pointer"
          >
            <MdFavorite className="text-pink-400" />
            <span>Favourite</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
