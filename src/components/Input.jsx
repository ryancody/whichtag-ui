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

    submitInput = () => {
        if(this.state.content === '')
            return

        this.props.processInput(this.state.content)
        this.setState({ content: '' })
    }

    render() {
        return (
            <div className='field has-addons'>
                <div className={`control`}>
                    <input className={`input`} type='text' placeholder={`what are you looking for?`}
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