class TwitterController {
    constructor(baseUrl){
        if (!baseUrl){
            throw new Error('TwitterController received invalid baseUrl: {baseUrl}')
        }

        this.baseUrl = baseUrl
    }

    async postTrendQuery(query, body){
        try{
            return await this.post(`twitter/${query}`, body)
        }catch(e){
            console.error(e)
        }
    }

    async post(endpoint, body){
        let url = new URL(endpoint, this.baseUrl).href

        let response = await fetch(url, {
            'method':'post',
            'headers': {
                
            },
            'body':body
        })

        if(response.status !== 200)
            throw Error("Failed to retrieve data from API")

        return await response.json()
    }
}

export default TwitterController