import React from "react";

function PlayButton() {
  return (
    <>
      <div className="text-mainWhite cursor-pointer items-center gap-4 w-fit flex  rounded-[28px] py-3 px-5  bg-red-500 ">
        <img src="/public/assets/imgs/icon-play.svg" alt="play icon" />
        <p className="font-medium text-headingXS">Play</p>
      </div>
    </>
  );
}

export default PlayButton;
