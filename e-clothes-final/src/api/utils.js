import axios from 'axios'

const API_URL = 'http://localhost:3000/api/';
const API_URL_SPRING_BOOT = 'http://localhost:8888/api/v1/';

export function getApiNoAuth(){
    return axios.create({
        baseURL: API_URL,
        timeout: 10000,
        withCredentials: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'COntent-Type': 'application/json'
        }
    })
}

export function getApiNoAuthSpringBoot(){
    return axios.create({
        baseURL: API_URL_SPRING_BOOT,
        timeout: 10000,
        withCredentials: false,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'COntent-Type': 'application/json'
        }
    })
}

export function getApi(token, params){
    if(params){ params.access_token = token } else {
        params = {
            access_token: token
        }
    }
    return axios.create({
        baseURL: API_URL,
        timeout: 100000,
        withCredentials: true,
        params: params,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json; charset=utf-8'
        }
    })
}
