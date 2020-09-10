import React from 'react'

function QueryTag (props) {

    let dataIsEmpty = (obj) => {
        return Object.keys(obj).length === 0 && obj.constructor === Object
    }

    return(
        <span
            className={`tag ${!dataIsEmpty(props.data) ? 'is-primary' : ''} is-large`}>
            {props.query}
            {!dataIsEmpty(props.data) ? <button className='delete' onClick={props.handleCloseTag}>&#10006;</button> : null}
        </span>
    )
}

export default QueryTag