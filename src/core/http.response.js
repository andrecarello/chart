export default class HttpResponse {
    constructor( request ) {
        this.request = request
    }

    statusCode () {
        return this.request.statusCode;
    }

    status () {
        return this.request.status;
    }

    errors () {
        return this.request.errors;
    }

    message () {
        return this.request.message;
    }

    data (){
        return this.request.data;
    }
}