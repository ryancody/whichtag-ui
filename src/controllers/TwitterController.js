const path = require('path')

class TwitterController {
    constructor(baseUrl){
        if (!baseUrl){
            throw new Error('TwitterController received invalid baseUrl: {baseUrl}')
        }

        this.baseUrl = baseUrl
    }

    async testConnection(){
        let response = await this.get('status')

        if(response == null){
            throw new Error("Connection Error")
        }
    }

    async getTrend(query){
        try{
            return await this.get(`twitter/${query}`)
        }catch(e){
            console.error(e)
        }
    }

    async get(endpoint){
        let url = path.join(this.baseUrl, endpoint)

        let response = await fetch(url, {
            'method':'get',
            'headers': {
                
            }
        })

        if(response.status !== 200)
            throw Error("Failed to retrieve data from API")

        return await response.json()
    }
}

export default TwitterController