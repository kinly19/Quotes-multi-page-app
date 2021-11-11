import { Route, Switch, Redirect } from 'react-router-dom';

import AllQuotes from './pages/AllQuotes';
import QuoteDetails from './pages/QuoteDetails';
import AddQuotes from './pages/AddQuotes';
import Layout from './components/layout/Layout';

//notes - dont forget / before the pathname

function App() {
  return (
    <Layout> {/*  Layout wrapper */}
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetails />
        </Route>
        <Route path="/new-quote">
          <AddQuotes />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
