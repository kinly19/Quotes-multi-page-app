import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

const QuoteDetails = (props) => {

  const params = useParams();

  //find() – search through all the child elements only.
  //filter() – search through all the elements.
  const quote = props.quoteData.find(quote => quote.id === params.quoteId);
  
  if(!quote){
    return <p>No Quote Found</p>
  };

  console.log(quote);

  return (
    <Fragment>
      <HighlightedQuote author={quote.author} text={quote.text}/>
      <Route path="/quotes/:quoteId/comments">
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetails;
