import React from "react";
import CustomerComment from "./CustomerComment";

function Comment(props) {
  return (
    <div className="flex flex-col p-3 ">
      <div className="grid grid-cols-2 gap-4">
        <CustomerComment />
        <CustomerComment />
        <CustomerComment />
        <CustomerComment />
        <CustomerComment />
      </div>
    </div>
  );
}

export default Comment;
