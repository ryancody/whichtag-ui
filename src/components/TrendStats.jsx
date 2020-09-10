import React from 'react'

function TrendStats(props) {
    try{

        console.log('data',props.data.get('test').data.length)
    }catch(e)
    {
        console.log('couldnt get')
    }
    let queries = [...props.data.keys()]

    let table = queries.map(query => {
            return <tr key={query}>
                        <td>{query}</td>
                        <td>{console.log('query',query)}</td>
                    </tr>
    })

    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>Query</th>
                    <th>Frequency</th>
                    <th>Impressions</th>
                </tr>
            </thead>
            <tbody>
                {table}
            </tbody>
        </table>
    )
}

export default TrendStats