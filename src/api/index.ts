import { request } from "./request";

/**
 * @description - 封装User类型的接口方法
 */

export class UserService {
    static async login(params: object) {
        return request("/login", params, "post")
    }

    static async getUser (params: object) {
        return request("api/user/getToken", params, "post")
    }
}

export class landRelevant {
    /**
     * @description 获取地列表
     * @return {HttpResponse} result
     */
    static async landList(params: object) {
        return request("/land_list_info", params, "get")
    }
}