import React from 'react'
import './css/style.css'
import TwitterTrendManager from './components/TwitterTrendManager'
import Greeting from './components/Greeting'
import TwitterController from './controllers/TwitterController'
import ErrorBoundary from './components/ErrorBoundary'

const twitterController = new TwitterController(process.env.REACT_APP_API_URL);

function App() {

  return (
    <div className='App'>
      <div className='section'>
        <div className='container'>
          <Greeting />
        </div>
        <div className='container'>
          <ErrorBoundary>
            <TwitterTrendManager twitterController={twitterController} />
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
}

export default App;