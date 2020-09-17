import React from 'react'

function TrendStats(props) {
    let dataIsEmpty = (obj) => {
        return Object.keys(obj).length === 0 && obj.constructor === Object
    }

    //console.log('propsdata',props.data)

    let queries = [...props.data.keys()]

    let table = queries.map(query => {
        if(!dataIsEmpty(props.data.get(query))){
            let queryData = props.data.get(query)

            let oldestTweetCreatedAt = queryData.oldestTweetCreatedAt
            let start = Date.parse(oldestTweetCreatedAt)
            let end = Date.parse(queryData.queriedAt)
            let spanMinutes = (end - start) / 60;
            console.log(start, end)

            let lpm = queryData.metricSummary.likes / spanMinutes
            let rtpm = queryData.metricSummary.retweets / spanMinutes
            let tpm = queryData.tweets.length / spanMinutes

            return <tr key={query}>
                        <td>{query}</td>
                        <td>{rtpm.toFixed(3)}</td>
                        <td>{tpm.toFixed(3)}</td>
                        <td>{spanMinutes.toFixed(2)}</td>
                    </tr>
        }
    })

    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>Query</th>
                    <th>RTs per minute</th>
                    <th>tweets per minute</th>
                    <th>span (minutes)</th>
                </tr>
            </thead>
            <tbody>
                {table}
            </tbody>
        </table>
    )
}

export default TrendStats