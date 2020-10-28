import React from 'react'

function TrendStats(props) {
    let tableRows = [...props.trends].sort((a,b) => b.score - a.score).map(trend => {
        let emoji = '🥶'

        if(trend.score > 90){
            emoji = '🚀'
        } else if (trend.score > 80) {
            emoji = '🔥'
        } else if (trend.score > 70) {
            emoji = '😐'
        }

        return <tr className='is-size-4' key={trend.query}>
                    <td>
                        <div className='has-text-weight-bold has-text-primary'>{emoji} {trend.query}</div>
                    </td>
                    <td>
                        <div className='has-text-centered'>
                            <span className='has-text-weight-bold has-text-primary'>{trend.score.toFixed(1)}</span>
                        </div>
                    </td>
                </tr>
        })

    let tableHead =                 
        <thead>
            <tr>
                <td></td>
                <td className='has-text-centered'>score</td>
            </tr>
        </thead>

    if (tableRows.length === 0){
        tableHead = null
    }

    return(
        <table className='table'>
            {tableHead}
            <tbody>
                {tableRows}
            </tbody>
        </table>
    )
}

export default TrendStats