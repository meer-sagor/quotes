import React from "react";
import QuoteItem from "./QuoteItem";

import classes from './QuoteList.module.css'
const QuoteList = (props) => {
  const { author, text, id } = props.quote;
  return (
    <ul className={classes.list}>
      <QuoteItem  author={author} text={text} id={id}/>
    </ul>
  );
};

export default QuoteList;
