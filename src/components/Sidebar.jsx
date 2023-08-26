import { NavLink } from "react-router-dom";
import { useData } from "../store/MainContext";

function Sidebar() {
  const { test } = useData;

  return (
    <nav className="col-span-1 row-span-full	w-fit   p-6 rounded-2xl flex flex-col gap-6 items-center justify-between bg-mainDarkBlue">
      <div className="flex flex-col gap-6 justify-center items-center">
        <NavLink to="/">
          <img
            className="mb-6 cursor-pointer"
            src="/public/assets/imgs/logo.svg"
            alt="logo"
          />
        </NavLink>

        <NavLink to="/">
          <img
            className="cursor-pointer"
            src="/public/assets/imgs/icon-nav-home.svg"
            alt="home-icon"
          />
        </NavLink>

        <NavLink to="/movies">
          <img
            src="/public/assets/imgs/icon-nav-movies.svg"
            alt="movies-icon"
          />
        </NavLink>

        <NavLink to="/tvseries">
          <img
            src="/public/assets/imgs/icon-nav-tv-series.svg"
            alt="series-icon"
          />
        </NavLink>

        <NavLink to="/bookmarked">
          <img
            src="/public/assets/imgs/icon-nav-bookmark.svg"
            alt="bookmark-icon"
          />
        </NavLink>
      </div>

      <img
        className="h-12 w-12 rounded-full border-2"
        src="/public/assets/imgs/image-avatar.png"
        alt="avatar"
      />
    </nav>
  );
}

export default Sidebar;
