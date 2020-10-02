import React from 'react'
import './css/style.css'
<<<<<<< HEAD
=======
import TwitterTrendManager from './components/TwitterTrendManager'
import Greeting from './components/Greeting'
import TwitterController from './controllers/TwitterController'
import ErrorBoundary from './components/ErrorBoundary'

const twitterController = new TwitterController(process.env.REACT_APP_API_URL);
>>>>>>> master

function App() {

  const style = {        
    position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)'
  }

  return (
    <div className='App' style={style}>
      <div className='section'>
        <div className='container'>
<<<<<<< HEAD
            <h1 className='title'>coming<span className='has-text-primary'>soon</span></h1>
=======
          <ErrorBoundary>
            <TwitterTrendManager twitterController={twitterController} />
          </ErrorBoundary>
>>>>>>> master
        </div>
      </div>
    </div>
  );
}

export default App;