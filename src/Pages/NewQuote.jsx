import React from "react";
import QuoteForm from "../Components/Quotes/QuoteForm";

const NewQuote = () => {
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
  };
  return (
    <>
      New Quote
      <QuoteForm onAddQuote={addQuoteHandler} />
    </>
  );
};

export default NewQuote;
