import React from 'react'

function Instructions(){

    return(
        <div className='section is-size-4'>
          <div className='block'><span role='img' aria-label='icon'>💭</span> <span className='has-text-primary'>compose</span> a tweet</div>
          <div className='block'><span role='img' aria-label='icon'>🤔</span> consider the <span className='has-text-primary'>key words or phrases</span></div>
          <div className='block'><span role='img' aria-label='icon'>🔎</span> <span className='has-text-primary'>search those words</span> or phrases below</div>
          <div className='block'><span role='img' aria-label='icon'>🏆</span> choose the ones with the <span className='has-text-primary'>best score</span></div>
        </div>
    )

}

export default Instructions