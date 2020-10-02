class Trend {
    constructor (query) {
        this.query = query
        this.data = {}
        this.isComplete = false
        this.isSuccess = false

        this.spanSeconds = 0
        this.queryTime = Date()
        this.oldestTweetCreatedAt = ''
        this.possibleViews = 0

        this.tweetsPerSecond = 0
    }

    processData = (data) => {
        if(!data){
            this.isComplete = true
            return
        }

        this.data = data
        this.oldestTweetCreatedAt = Date.parse(data.oldestTweetCreatedAt)
        this.queryTime = Date.parse(data.queriedAt)
        this.spanSeconds = (this.queryTime - this.oldestTweetCreatedAt) / 1000
        this.tweetsPerSecond = data.tweets.length / this.spanSeconds
        
        this.emoji = ''
        this.tweetPlurality = data.tweets.length !== 1 ? 'tweets' : 'tweet'
        this.timeQty = 0
        this.timeUnits = ''

        this.possibleViews = data.metricSummary.possibleViews

        if(this.spanSeconds < 60){
            this.emoji = '🚀'
            this.timeQty = Math.round(this.spanSeconds)
            this.timeUnits = 's'
        } else if (this.spanSeconds < 60 * 60) {
            this.emoji = '🔥'
            this.timeQty = Math.round(this.spanSeconds / 60) + 1
            this.timeUnits = 'min'
        } else if (this.spanSeconds < 60 * 60 * 24) {
            this.emoji = '😐'
            this.timeQty = Math.round(this.spanSeconds / (60 * 60)) + 1
            this.timeUnits = 'hrs'
        } else {
            this.emoji = '🥶'
            this.timeQty = Math.round(this.spanSeconds / (60 * 60 * 24)) + 1
            this.timeUnits = 'days'
        }

        this.isComplete = true
        this.isSuccess = !this.objectIsEmpty(this.data)
    }

    objectIsEmpty = (obj) => {
        return Object.keys(obj).length === 0 && obj.constructor === Object
    }
}

export default Trend