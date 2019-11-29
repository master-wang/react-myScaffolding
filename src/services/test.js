import request from '../util/request'
import { DATA_BASE_URL } from '../config/index'

export function getInfo(){
  return request('/slider', {
    method: 'get',
    baseURL: DATA_BASE_URL
  });
}

export function getWeaterInfo(params){
  return request('', {
    method: 'get',
    data: params,
    baseURL: 'https://api.apiopen.top/recommendPoetry'
  });
}
