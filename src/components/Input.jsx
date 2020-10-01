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

    cleanFirstChar = content => {
        if(content[0] === '#'){
            
            content = content.substring(1, content.length)
        }

        return content
    }

    submitInput = () => {
        let content = this.state.content.trim()

        content = this.cleanFirstChar(content)

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