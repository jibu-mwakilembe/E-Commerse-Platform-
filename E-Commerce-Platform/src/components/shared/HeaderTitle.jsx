import React from "react";

function HeaderTitle({ title }) {
  return (
    <div>
      <div className="flex gap-3">
        <div className="h-7 w-3 bg-black rounded-md"></div>
        <h1 className="font-inter font-extrabold text-base">{title}</h1>
      </div>
    </div>
  );
}

export default HeaderTitle;
