function Input() {
  return (
    <div className="flex items-center justify-center gap-6 col-start-1 col-end-6">
      <img src="/public/assets/imgs/icon-search.svg" alt="search-icon" />
      <input
        className="p-3 focus:border-b-2 outline-0 w-full border-0 bg-transparent text-white opacity-50"
        type="text"
        placeholder="Search for movies or TV series"
      />
    </div>
  );
}

export default Input;
