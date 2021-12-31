import axios from "axios";
import { showMessage } from "./status"; // 引入状态码文件
import { message } from "antd";

// 设置接口超时时间
axios.defaults.timeout = 60000;

const envMode = {
  dev: "http://127.0.0.1:7002", // 本地起的服务端口
  test: "http://10.0.8.6:7002", // 本地起的服务端口
  prod: "http://vt-prod.com"
};

// 请求地址，这里是动态赋值的的环境变量
axios.defaults.baseURL = envMode[import.meta.env.MODE];

// http request 拦截器
axios.interceptors.request.use(
    config => {
        // 配置请求头
        config.headers = {
            // "Content-Type":'application/x-www-form-urlencoded',   // 传参方式:表单
            "Content-Type": "application/json;charset=UTF-8",        // 传参方式json
            "token": "user token"              // 这里自定义配置，这里传的是token
        };
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response
    },
    error => {
        const { response } = error;
        if (response) {
            // 请求已发出，但无法获取2xx的范围
            showMessage(response.status);
            return Promise.reject(response.data)
        } else {
            message.error("网络连接异常,请稍后再试!")
        }
    }
);

// 封装GET，POST请求并导出
export function request (url="", params={}, type="POST") {
    // 设置url params type的默认值
    return new Promise((resolve,reject)=>{
        let promise;
        if( type.toUpperCase() == "GET" ){
          promise = axios({
            url,
            params
          })
        }else if( type.toUpperCase() == "POST" ){
          promise = axios({
            method: "POST",
            url,
            data:params
          })
        }
        //处理返回
        promise.then(res=>{
          resolve(res)
        }).catch(err=>{
          reject(err)
        })
      })
}