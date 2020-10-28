import React from 'react'
import './css/style.css'
import TwitterTrendManager from './components/TwitterTrendManager'
import Greeting from './components/Greeting'
import TwitterController from './controllers/TwitterController'
import ErrorBoundary from './components/ErrorBoundary'
import Instructions from './components/Instructions'

const twitterController = new TwitterController(process.env.REACT_APP_API_URL);

function App() {

  return (
    <div className='App'>
      <div className='container'>
        <Greeting />
        <Instructions />
        <div className='section'>
          <ErrorBoundary>
            <TwitterTrendManager twitterController={twitterController} />
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
}

export default App;