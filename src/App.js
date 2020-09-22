import React from 'react'
import './css/style.css'
import TwitterTrendManager from './components/TwitterTrendManager'
import Greeting from './components/Greeting'
import TwitterController from './controllers/TwitterController'

const twitterController = new TwitterController(process.env.REACT_APP_API_URL);

function App() {

  return (
    <div className='App'>
      <div className='section'>
        <div className='container'>
          <Greeting />
        </div>
      </div>
      <div className='section'>
        <div className='container'>
          <TwitterTrendManager twitterController={twitterController} />
        </div>
      </div>
    </div>
  );
}

export default App;