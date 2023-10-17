import { NavLink } from "react-router-dom";
import { useData } from "../store/MainContext";

function Sidebar() {
  const { test } = useData;

  return (
    <nav className="col-span-1 min-h-screen 	  w-[96px]	  px-[38px] py-[36px] rounded-[20px] flex flex-col gap-6 items-center justify-between bg-mainDarkBlue">
      <div className="flex flex-col gap-[2.2rem] justify-center items-center">
        <NavLink to="/">
          <img
            className="mb-6 cursor-pointer transition hover:scale-150"
            src="/public/assets/imgs/logo.svg"
            alt="logo"
          />
        </NavLink>

        <NavLink to="/">
          <img
            className="transition hover:scale-125"
            src="/public/assets/imgs/icon-nav-home.svg"
            alt="home-icon"
          />
        </NavLink>

        <NavLink to="/movies">
          <img
            className="transition hover:scale-125"
            src="/public/assets/imgs/icon-nav-movies.svg"
            alt="movies-icon"
          />
        </NavLink>

        <NavLink to="/tvseries">
          <img
            className="transition hover:scale-125"
            src="/public/assets/imgs/icon-nav-tv-series.svg"
            alt="series-icon"
          />
        </NavLink>

        <NavLink to="/bookmarked">
          <img
            className="transition hover:scale-125"
            src="/public/assets/imgs/icon-nav-bookmark.svg"
            alt="bookmark-icon"
          />
        </NavLink>
      </div>

      <img
        className="min-h-[40px] min-w-[40px] rounded-full border-2 transition hover:scale-125"
        src="/public/assets/imgs/image-avatar.png"
        alt="avatar"
      />
    </nav>
  );
}

export default Sidebar;
