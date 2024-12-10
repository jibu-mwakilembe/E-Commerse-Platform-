import React, { useEffect } from "react";
import CustomerComment from "./CustomerComment";
import useCustomerStore from "../../store/customerStore";
import { useParams } from "react-router-dom";

function Comment(props) {
  const { id } = useParams();
  const { selectedComment, fetchCommentById, isLoading, error } =
    useCustomerStore();

  useEffect(() => {
    if (id) {
      fetchCommentById(id);
    }
  }, [id, fetchCommentById]);

  if (isLoading) {
    return <div>Loading comments...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col p-3 ">
      <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4">
        {selectedComment.length > 0 ? (
          selectedComment.map((comment) => (
            <CustomerComment key={comment.id} {...comment} />
          ))
        ) : (
          <div>No comment found for this customer .</div>
        )}
      </div>
    </div>
  );
}

export default Comment;
