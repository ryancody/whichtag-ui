const path = require('path')

class TwitterController {
    constructor(baseUrl){
        this.baseUrl = baseUrl
    }

    async getTrend(query){
        try{
            return await this.get(`twitter/${query}`)
        }catch(e){
            console.error(e)
        }
    }

    async get(endpoint){

        var url = path.join(this.baseUrl, endpoint);

        let response = await fetch(url, {
            'method':'get',
            'headers': {
                
            }
        })

        if(response.statusText !== "OK")
            throw Error("Failed to get info from Twitter")

        return await response.json()
    }
}

export default TwitterController