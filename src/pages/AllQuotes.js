import { Fragment, useEffect } from 'react';
import QuoteList from '../components/quotes/QuoteList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../lib/api';

const AllQuotes = () => {

  //custom hook
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  //sideEffect (runs returned function inside custom hook)
  useEffect (() => {
    sendRequest();
  },[sendRequest]);

  //checks, return content
  if(status === 'pending') {
    return <div className='centered'>
      <LoadingSpinner />
    </div>
  };

  if (error) {
    return <p className='centered focused'>{error}</p>
  };

  if(status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)){
    return <NoQuotesFound />
  };

  return (
    <Fragment>
      <QuoteList quotes={loadedQuotes} />
    </Fragment>
  );
};

export default AllQuotes;