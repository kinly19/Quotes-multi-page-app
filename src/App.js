import { Route, Routes, Navigate, Link } from 'react-router-dom';

import AllQuotes from './pages/AllQuotes';
import QuoteDetails from './pages/QuoteDetails';
import AddQuotes from './pages/AddQuotes';
import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound';
import Comments from './components/comments/Comments';

// notes - dont forget / before the pathname
// Navigate replaces redirect - react router v6

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
      <Routes> {/* v5 uses switch */}
        <Route path="/" element={<Navigate replace to= '/quotes'/>}/>
        <Route path="/quotes" element={<AllQuotes />}/>
        <Route path="/quotes/:quoteId" element={<QuoteDetails quoteData={DummyQuotes}/>}>
        <Route
            path=''
            element={
              <div className='centered'>
                <Link className='btn--flat' to='comments'>
                  Load Comments
                </Link>
              </div>
            }
          />
          <Route path='comments' element={<Comments />} />
        </Route>
        <Route path="/new-quote"  element={ <AddQuotes />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </Layout>
  );
}

export default App;
