import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
        super(props)

        this.state = { isFetching: false, doneFetching: false, content: '' }
    }

    handleChange = e => {
        this.setState({ content: e.target.value })
    }

    handleOnKeyUp = e => {
        if (e.key === "Enter")
            this.submitInput()
    }

    cleanHashtag = content => {
        return content.replace("#", " ").trim()
    }

    submitInput = () => {
        let content = this.cleanHashtag(this.state.content)
        
        if(content === '')
            return

        this.props.processInput(content)
        this.setState({ content: '' })
    }

    render() {
        return (
            <div className='field has-addons'>
                <div className={`control`}>
                    <input className={`input`} type='text' placeholder={`search`}
                        onChange={this.handleChange}
                        onKeyUp={this.handleOnKeyUp}
                        value={this.state.content}
                    />
                </div>
                <div className={`control`}>
                    <button className={`button`} onClick={this.submitInput} >go</button>
                </div>
            </div>
        )
    }
}

export default Input