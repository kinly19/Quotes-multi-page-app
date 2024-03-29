import { Fragment, useEffect } from "react";
import { useParams, Outlet } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

// ======================================= Notes =======================================
// useRouteMatch () - hook attempts to match the current URL in the same way that a <Route> would
// find() – search through all the child elements only.
// filter() – search through all the elements.
//======================================================================================

const QuoteDetails = () => {

  const params = useParams();
  // const quote = props.quoteData.find(quote => quote.id === params.quoteId);
  const { quoteId } = params;
  const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  },[sendRequest, quoteId]);

  if(status === 'pending') { 
    return <div className='centered'>
      <LoadingSpinner />
    </div>
  };

  if(error){
    return <p className='centered'>{error}</p>
  };
  
  if(!loadedQuote.text){
    return <p>No Quote Found</p>
  };

  return (
    <Fragment>
      <HighlightedQuote author={loadedQuote.author} text={loadedQuote.text}/>
      <Outlet />
    </Fragment>
  );
};

export default QuoteDetails;
