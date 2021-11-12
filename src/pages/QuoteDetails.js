import { Fragment } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

// ======================================= Notes =======================================
// useRouteMatch () - hook attempts to match the current URL in the same way that a <Route> would
// find() – search through all the child elements only.
// filter() – search through all the elements.
//======================================================================================

const QuoteDetails = (props) => {
  
  const match = useRouteMatch();
  const params = useParams();
  const quote = props.quoteData.find(quote => quote.id === params.quoteId);
  
  if(!quote){
    return <p>No Quote Found</p>
  };

  console.log(quote);

  return (
    <Fragment>
      <HighlightedQuote author={quote.author} text={quote.text}/>
      <div className='centered'>
        {/* without useRouteMatch hook */}
        {/* <Route path={`/quotes/${params.quoteId}`} exact> */}
        <Route path={match.path} exact> {/* only if this path matches we render Link */}
          <Link className='btn--flat' to={`${match.url}/comments`}>Load Comments</Link> {/* match the url then append /comments */}
        </Route>
      </div>
      <Route path={`${match.path}/comments`}> {/* when we hit this route, render comments component */}
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetails;
