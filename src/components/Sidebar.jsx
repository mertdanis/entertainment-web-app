function Sidebar() {
  return (
    <div className="col-span-1 row-span-full	w-fit  p-6 rounded-2xl flex flex-col gap-6 items-center justify-between bg-mainDarkBlue">
      <div className="flex flex-col gap-6">
        <img className="mb-6" src="/public/assets/imgs/logo.svg" alt="logo" />

        <img src="/public/assets/imgs/icon-nav-home.svg" alt="home-icon" />
        <img src="/public/assets/imgs/icon-nav-movies.svg" alt="movies-icon" />
        <img
          src="/public/assets/imgs/icon-nav-tv-series.svg"
          alt="series-icon"
        />
        <img
          src="/public/assets/imgs/icon-nav-bookmark.svg"
          alt="bookmark-icon"
        />
      </div>

      <img
        className="h-12 w-12 rounded-full border-2"
        src="/public/assets/imgs/image-avatar.png"
        alt="avatar"
      />
    </div>
  );
}

export default Sidebar;
