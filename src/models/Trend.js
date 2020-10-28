class Trend {
    constructor (query) {
        this.query = query
        this.data = {}
        this.isComplete = false
        this.isSuccess = false

        this.score = 0

        this.tweetsPerSecond = 0
    }

    processData = (data) => {
        if(!data){
            this.isComplete = true
            return
        }

        this.data = data
        this.score = data.score
        this.tweetPlurality = data.tweets.length !== 1 ? 'tweets' : 'tweet'
        this.timeQty = 0
        this.timeUnits = ''

        this.isComplete = true
        this.isSuccess = !this.objectIsEmpty(this.data)
    }

    objectIsEmpty = (obj) => {
        return Object.keys(obj).length === 0 && obj.constructor === Object
    }
}

export default Trend