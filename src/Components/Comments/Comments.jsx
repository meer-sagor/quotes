import React, { useState } from "react";

import NewCommentForm from "./NewCommentForm";
import classes from "./Comments.module.css";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const startAddCommentHandler = (e) => setIsAddingComment(true);
  return (
    <section className={classes.comments}>
      <h2>User Comment</h2>
      {!isAddingComment && (
        <button className={classes.btn} onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}

      {isAddingComment && <NewCommentForm />}
      <p>Comments...</p>
    </section>
  );
};

export default Comments;
