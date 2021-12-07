import React from "react";
import QuoteList from "../Components/Quotes/QuoteList";

const DUMMY_DATA = [
  {
    id: "q1",
    author: "meer sagor",
    text: "this is quote text",
  },
  {
    id: "q2",
    author: "sagor",
    text: "this is quote text",
  },
  {
    id: "q3",
    author: "meer",
    text: "this is quote text",
  },
];

const AllQuotes = () => {
  return (
    <>
      All Quotes
      {DUMMY_DATA.map((quote) => (
        <QuoteList key={quote.id} quote={quote} />
      ))}
    </>
  );
};

export default AllQuotes;
