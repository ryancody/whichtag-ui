import React, { Component } from 'react'
import Trend from '../models/Trend'
import Input from './Input'
import QueryTag from './QueryTag'
import TrendStats from './TrendStats'

class TwitterTrendManager extends Component {
    constructor(props) {
        super(props)

        this.state = {
            twitterController: props.twitterController,
            trends: new Map()
        }
    }

    handleCloseTag = (query) => {
        let newState = new Map(this.state.trends)
        
        newState.delete(query)
        
        this.setState({trends: newState})
    }
    
    processInput = async (query) => {
        let trend = new Trend(query)
        this.setState({trends: this.state.trends.set(query, trend)})

        let body = {
            siblings: [...this.state.trends.keys()].filter(i => i !== query)
        }
 
        let response = await this.state.twitterController.postTrendQuery(query, body)

        trend.processData(response)
 
        this.setState({trends: this.state.trends.set(query, trend)})
    }

    render() {
        let trends = [...this.state.trends.values()]

        return (
            <div>
                <Input processInput={this.processInput} />
                <div className='tags'>
                    {trends.map(trend => 
                        <QueryTag
                            trend={trend} 
                            key={trend.query} handleCloseTag={() => this.handleCloseTag(trend.query)}
                        />)}
                </div>
                <div className='container'>
                    <TrendStats trends={trends.filter(trend => trend.isSuccess)} />
                </div>
            </div>
        )
    }
}

export default TwitterTrendManager