import { Fragment } from 'react';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

// =============================== notes ===============================
// useLocation() - returns the location object that represents the current URL,
//  think about it like a useState that returns a new location whenever the URL changes

// Query parameters are a defined set of parameters attached to the end of a url. 
//  More simply, they are key=value pairs we can attach to a url, 
//  used as one of many ways to pass data to an application
//======================================================================

const QuoteList = (props) => {
  const sortQuotes = (quotes, ascending) => {
    return quotes.sort((quoteA, quoteB) => {
      if (ascending) {
        return quoteA.id > quoteB.id ? 1 : -1;
      } else {
        return quoteA.id < quoteB.id ? 1 : -1;
      }
    });
  };

  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const isSortingAscending = queryParams.get('sort') === 'asc';
  const sortedQuoets = sortQuotes(props.quotes, isSortingAscending)
  return (
    <Fragment>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
