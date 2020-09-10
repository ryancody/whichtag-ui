import React from 'react'

function Greeting() {

    let taglines = [
        'not let it flop',
        'go viral',
        'pick the hashiest tag',
        'trend',
        'blow up'
    ]

    let tagline = taglines[Math.floor(Math.random() * taglines.length)]

    return (
        <div>
            <h1 className='title'>which<span className='has-text-primary'>tag</span></h1>
            <p className='subtitle'>helping you <span className='has-text-primary'>{tagline}</span> since 2020</p>
        </div>
    )
}

export default Greeting