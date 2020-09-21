import React from 'react'
import './css/style.css'

function App() {

  const style = {        
    position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)'
  }

  return (
    <div className='App' style={style}>
      <div className='section'>
        <div className='container'>
            <h1 className='title'>coming<span className='has-text-primary'>soon</span></h1>
        </div>
      </div>
    </div>
  );
}

export default App;