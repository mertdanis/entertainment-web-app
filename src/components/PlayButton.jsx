import React from "react";

function PlayButton() {
  return (
    <>
      <div className="text-mainWhite bg-[#ffffff40] cursor-pointer items-center gap-4  flex h-[48px] w-[117px] rounded-[28px] p-[9px]     border-none">
        <img src="/public/assets/imgs/icon-play.svg" alt="play icon" />
        <p className="font-medium text-headingXS">Play</p>
      </div>
    </>
  );
}

export default PlayButton;
