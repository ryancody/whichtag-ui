import React from 'react'

function QueryTag (props) {
    let styleTag = 'is-light is-info'

    if(props.trend.isComplete && props.trend.isSuccess){
        styleTag = 'is-primary'
    } else if (props.trend.isComplete && !props.trend.isSuccess) {
        styleTag = 'is-warning'
    }

    return(
        <span className={`${styleTag} is-large tag`}>
            {props.trend.query}
            {props.trend.isComplete ? <button className='delete' onClick={props.handleCloseTag}></button> : null}
        </span>
    )
}

export default QueryTag