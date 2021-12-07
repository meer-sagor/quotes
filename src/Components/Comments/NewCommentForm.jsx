import React, { useRef } from "react";
import classes from "./NewCommentForm.module.css";
const NewCommentForm = () => {
  const commentTextRef = useRef();
  

  const formSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <div className={classes.control}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5"></textarea>
      </div>
      <div className={classes.actions}>
        <button className={classes.btn}>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
