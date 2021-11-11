import { Fragment } from 'react';
import QuoteList from '../components/quotes/QuoteList';

const AllQuotes = (props) => {

  // replace with redux
  // const DummyQuotes = [
  //   {
  //     id: "p1",
  //     author: "Sarah",
  //     text: "Learn React With React",
  //   },
  //   {
  //     id: 'p2',
  //     author: 'Emily',
  //     text: 'Learn With Udemy'
  //   }
  // ];

  return (
    <Fragment>
      <QuoteList quotes={props.dummyData} />
    </Fragment>
  );
};

export default AllQuotes;