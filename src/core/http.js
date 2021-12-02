export default class $http {
    constructor(config = {}) {
        this.baseURL = config.url ?? ""
        this.baseHeaders = config.headers ?? [];
    }

    instanceHeaders () {
        const headers = new Headers()

        headers.append("Accept", "application/json")
        headers.append("Content-Type", "application/json")

        this.baseHeaders.map(header => headers.append(header.property, header.value));

        return headers;
    }

    async get () {
        let data = {};
        let message = "";

        let response = await fetch(this.baseURL, {
            method: "GET",
            headers: this.instanceHeaders()
        })

        if (response.ok) data = await response.json()
        else message = await response.json()

        return {
            status: response.ok,
            statusCode: response.status,
            data: data,
            message: message.message
        }
    }
}