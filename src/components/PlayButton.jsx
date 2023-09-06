import React from "react";

function PlayButton() {
  return (
    <>
      <div className="text-mainWhite cursor-pointer items-center gap-4  flex  rounded-[28px] py-3 px-5     border-2">
        <img src="/public/assets/imgs/icon-play.svg" alt="play icon" />
        <p className="font-medium text-headingXS">Play</p>
      </div>
    </>
  );
}

export default PlayButton;
