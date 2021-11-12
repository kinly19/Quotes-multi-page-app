import { useRef, useState, Fragment } from 'react';
import { Prompt } from 'react-router';
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

// ================================ Notes ================================
// https://v5.reactrouter.com/core/api/Prompt
// <Prompt> - Used to prompt the user before navigating away from a page
//  requires two props, when: bool & message: string
// =======================================================================

const QuoteForm = (props) => {

  const [isFocus, setIsFocus] = useState(false);
  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
    // passed down via prop inside addQuotes
  }

  const formFocusHandler = () => {
    setIsFocus(true);
  };

  const formUnfocusHandler = () => {
    setIsFocus(false);
  };

  return (
    <Fragment>
      <Prompt
        when={isFocus}
        message={
          'Are you sure you want to leave? All your entered data will be lost'
        }
      />
      <Card>
        <form
          onFocus={formFocusHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor='author'>Author</label>
            <input type='text' id='author' ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='text'>Text</label>
            <textarea id='text' rows='5' ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={formUnfocusHandler} className='btn'>Add Quote</button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
