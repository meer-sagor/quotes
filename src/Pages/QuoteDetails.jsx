import React from "react";
import { useParams, Route, Routes } from "react-router-dom";
import Comments from "../Components/Comments/Comments";

const QuoteDetails = () => {
  const { quoteId } = useParams();



  return (
    <div>
      Quote detail
      <h1>quote id: {quoteId}</h1>
      <Routes>
        <Route path={`comments`} element={<Comments />} />
      </Routes>
    </div>
  );
};

export default QuoteDetails;
