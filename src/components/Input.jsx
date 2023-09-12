function Input({ onChange, placeHolder }) {
  return (
    <div className="flex items-center  justify-center gap-6 col-start-1 col-end-6">
      <img src="/public/assets/imgs/icon-search.svg" alt="search-icon" />
      <input
        onChange={onChange}
        className=" text-headingM focus:pb-[14px] border-mainLightBlue caret-mainRed font-light p-3  focus:border-b-[1px] border-0 outline-0  w-full  bg-transparent text-white opacity-50"
        type="text"
        placeholder={placeHolder}
      />
    </div>
  );
}

export default Input;
