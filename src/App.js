import React from 'react'
import './sass/style.scss'
import TwitterTrendManager from './components/TwitterTrendManager'
import Greeting from './components/Greeting'
import TwitterController from './controllers/TwitterController'

function App() {

  const twitterController = new TwitterController('https://localhost:5001/');

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