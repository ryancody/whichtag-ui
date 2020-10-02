import React from 'react'

function TrendStats(props) {

    let tableRows = [...props.trends].sort((a,b) => b.tweetsPerSecond - a.tweetsPerSecond).map(trend => {


            return <tr className='is-size-4' key={trend.query}>
                        <td>
                            <div className='is-size-3'>{trend.emoji} {trend.query}</div>
                            <div>
                                    <span className='has-text-weight-bold has-text-primary'>{trend.data.tweets.length} {trend.tweetPlurality}</span> in
                                    <span className='has-text-weight-bold has-text-primary'> {trend.timeQty} {trend.timeUnits}</span>
                            </div>
                            <div>
                                <span role='img' aria-label='views'>👀</span><span role='img' aria-label='by'> ⨯ </span> 
                                <span className='has-text-weight-bold has-text-primary'>{Number(trend.possibleViews).toLocaleString()} followers</span>
                            </div>
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