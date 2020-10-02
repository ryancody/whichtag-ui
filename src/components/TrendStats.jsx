import React from 'react'

function TrendStats(props) {

    let tableRows = [...props.trends].sort((a,b) => b.tweetsPerSecond - a.tweetsPerSecond).map(trend => {


            return <tr className='is-size-4' key={trend.query}>
                        <td>{trend.emoji}</td>
                        <td>{trend.query}</td>
                        <td>
                            <p>
                                <span className='has-text-weight-bold has-text-primary'>{trend.data.tweets.length} {trend.tweetPlurality}</span> in the last
                                <span className='has-text-weight-bold has-text-primary'> {trend.timeQty} {trend.timeUnits}</span>
                            </p>
                            <p>
                                possible <span role='img' aria-label='views'>👀</span><span role='img' aria-label='by'> ⨯ </span> 
                                <span className='has-text-weight-bold has-text-primary'>{Number(trend.possibleViews).toLocaleString()} followers</span>
                            </p>
                        </td>
                    </tr>
        })

    return(
        <table className='table'>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    )
}

export default TrendStats