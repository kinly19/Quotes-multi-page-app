import { Fragment, useEffect} from 'react';
import { useHistory } from 'react-router';
import QuoteForm from '../components/quotes/QuoteForm';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';

// ===================================== Notes =====================================
// The useHistory hook gives you access to the history instance 
//  that you may use to navigate. .push will add a new page .replace is like a redirect
// ================================================================================= 

const AddQuotes = () => {

  const {sendRequest, status } = useHttp(addQuote);

  const history = useHistory();

  useEffect(()=> {
    if(status === 'completed'){
      history.push('/quotes');
    }
  },[status, history]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };

  return (
    <Fragment>
      <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler}/>
    </Fragment>
  );
};

export default AddQuotes;
