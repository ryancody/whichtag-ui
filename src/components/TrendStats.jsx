import React from 'react'

function TrendStats(props) {
    let dataIsEmpty = (obj) => {
        return !obj || (Object.keys(obj).length === 0 && obj.constructor === Object)
    }

    let table = [...props.data.keys()].map(query => {
        if(!dataIsEmpty(props.data.get(query))){
            let queryData = props.data.get(query)
            let oldestTweetCreatedAt = Date.parse(queryData.oldestTweetCreatedAt)
            let queryTime = Date.parse(queryData.queriedAt)
            let spanSeconds = (queryTime - oldestTweetCreatedAt) / 1000

            let message = ''
            let emoji = ''
            let tweetPlurality = queryData.tweets.length !== 1 ? 'tweets' : 'tweet'

            if(spanSeconds < 60){
                let seconds = Math.round(spanSeconds)
                
                message = `${queryData.tweets.length} ${tweetPlurality} in the last ${seconds} seconds`
                emoji = '🚀'
            } else if (spanSeconds < 60 * 60) {
                let minutes = Math.round(spanSeconds / 60) + 1

                message = `${queryData.tweets.length} ${tweetPlurality} in the last ${minutes} minutes`
                emoji = '🔥'
            } else if (spanSeconds < 60 * 60 * 24) {
                let hours = Math.round(spanSeconds / (60 * 60)) + 1
                
                message = `${queryData.tweets.length} ${tweetPlurality} in the last ${hours} hours`
                emoji = '😑'
            } else {
                let days = Math.round(spanSeconds / (60 * 60 * 24)) + 1
                
                message = `${queryData.tweets.length} ${tweetPlurality} in the last ${days} days`
                emoji = '🥶'
            }

            return <tr className='is-size-4' key={query}>
                        <td>{emoji}</td>
                        <td>{query}</td>
                        <td>{message}</td>
                    </tr>
        }

        return null
    })

    return(
        <table className='table'>
            <tbody>
                {table}
            </tbody>
        </table>
    )
}

export default TrendStats