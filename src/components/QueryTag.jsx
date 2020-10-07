import React from 'react'

function QueryTag (props) {
    let elem = null

    if(props.trend.isComplete && props.trend.isSuccess){
        elem =  <span className={`is-primary is-large tag`}>
                    {props.trend.query}
                    <button className='delete' onClick={props.handleCloseTag} ></button>
                </span>
    } else if (props.trend.isComplete && !props.trend.isSuccess) {
        elem =  <span className={`is-warning is-large tag has-tooltip-arrow`} data-tooltip={"Not Found"}>
                    {props.trend.query}
                    <button className='delete' onClick={props.handleCloseTag} ></button>
                </span>
    } else {
        elem =  <span className={`is-light is-large tag`}>
                    {props.trend.query}
                </span>
    }

    return(elem)
}

export default QueryTag