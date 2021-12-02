import $http from "../core/http";
import Response from "../core/http.response";

export default class ChartRepository {

    async get ( request ) {
        const isObject = typeof request === "object";
        const url = isObject ? request.url : request;
        const headers = isObject ? request.headers : []

        const response = await new $http({ url, headers }).get()
        return new Response(response);
    }
}