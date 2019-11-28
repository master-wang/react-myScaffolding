import request from '../util/request'
import { DATA_BASE_URL } from '../config'

export function getInfo(){
  return request('/slider', {
    method: 'get',
    baseURL: DATA_BASE_URL
  });
}
