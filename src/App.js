import { Route, Switch, Redirect } from 'react-router-dom';

import AllQuotes from './pages/AllQuotes';
import QuoteDetails from './pages/QuoteDetails';
import AddQuotes from './pages/AddQuotes';
import Layout from './components/layout/Layout';

//notes - dont forget / before the pathname

function App() {

  const DummyQuotes = [
    {
      id: "p1",
      author: "Sarah",
      text: "Learn React With React",
    },
    {
      id: 'p2',
      author: 'Emily',
      text: 'Learn With Udemy'
    }
  ];

  return (
    <Layout> {/*  Layout wrapper */}
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes dummyData={DummyQuotes}/>
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetails quoteData={DummyQuotes}/>
        </Route>
        <Route path="/new-quote">
          <AddQuotes />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
