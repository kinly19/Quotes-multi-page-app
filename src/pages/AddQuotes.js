import { Fragment, useEffect} from 'react';
import { useNavigate } from 'react-router';
import QuoteForm from '../components/quotes/QuoteForm';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';

// ===================================== Notes =====================================
// The useHistory hook gives you access to the history instance 
// react router V6 useNavigate replaces useHistory
//  that you may use to navigate. .push will add a new page .replace is like a redirect
// ================================================================================= 

const AddQuotes = () => {

  const {sendRequest, status } = useHttp(addQuote);

  const navigate  = useNavigate();

  useEffect(()=> {
    if(status === 'completed'){
      navigate ('/quotes');
    }
  },[status, navigate]);

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
