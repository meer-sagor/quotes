import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import AllQuotes from "./Pages/AllQuotes";
import NewQuote from "./Pages/NewQuote";
import NotFound from "./Pages/NotFound";
import QuoteDetails from "./Pages/QuoteDetails";

const App = () => {
  return (
    <Layout>
      <Routes>
      <Route path="/" element={<Navigate to="/quotes" />} />

      <Route path="/quotes" element={<AllQuotes />} />
      <Route path="/quotes/:quoteId/*" element={<QuoteDetails />} />
      <Route path="/new-quote" element={<NewQuote />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
    </Layout>
  );
};

export default App;
