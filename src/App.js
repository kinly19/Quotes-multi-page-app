import React from 'react';
import { Suspense } from 'react/cjs/react.production.min';
import { Route, Routes, Navigate, Link } from 'react-router-dom';

import AllQuotes from './pages/AllQuotes';
import QuoteDetails from './pages/QuoteDetails';
// import AddQuotes from './pages/AddQuotes'; //without lazy loading
import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound';
import Comments from './components/comments/Comments';
import LoadingSpinner from './components/UI/LoadingSpinner';

//<Suspense> - component that lets you “wait” for some code to load and declaratively specify a loading state (like a spinner) while we’re waiting
//with lazy loading 
// using React.lazy we call import as a function and then we pass the path of the import
const AddQuotes = React.lazy(() => import('./pages/AddQuotes')); 

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
      <Suspense fallback={<div className='centered'><LoadingSpinner /></div>}> {/* check notes on Suspense component */}
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
      </Suspense>
    </Layout>
  );
}

export default App;
