import React, { Component } from 'react'
import Input from './Input'
import QueryTag from './QueryTag'
import TrendStats from './TrendStats'

class TwitterTrendManager extends Component {
    constructor(props) {
        super(props)

        this.state = {
            twitterController: props.twitterController,
            queries: new Map()
        }
    }

    handleCloseTag = (query) => {
        let newState = new Map(this.state.queries)
        
        newState.delete(query)
        
        this.setState({queries: newState})
    }
    
    processInput = async (query) => {
        this.setState({queries: this.state.queries.set(query, {})})
 
        let response = await this.state.twitterController.getTrend(query)
 
        this.setState({queries: this.state.queries.set(query, response)})
    }

    render() {
        let queries = this.state.queries

        return (
            <div>
                <Input processInput={this.processInput} />
                <div className='tags'>
                    {[...queries.keys()].map(query => 
                        <QueryTag query={query} 
                            data={queries.get(query)} 
                            key={query} handleCloseTag={() => this.handleCloseTag(query)} 
                        />)}
                </div>
                <div className='container'>
                    <TrendStats data={queries} />
                </div>
            </div>
        )
    }
}

export default TwitterTrendManager