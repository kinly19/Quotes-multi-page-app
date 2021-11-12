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
