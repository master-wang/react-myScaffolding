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
    baseURL: 'http://api.map.baidu.com/telematics/v3/weather?location=嘉兴&output=json&ak=5slgyqGDENN7Sy7pw29IUvrZ'
  });
}
