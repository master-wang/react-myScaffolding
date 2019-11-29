/**
 * ajax 请求的封装
 */
import axios from 'axios';
// import { createHashHistory } from 'history';

// 拦截器
// const history =  createHashHistory({});
// 默认的 url
const BASE_API_PREFIX = '';
// 定义路由名称，登陆与首页，在登陆成功与失败跳转对应的组件
// const PATHS = {
//   LOGIN: '/user/login',
//   HOME_PAGE: '/home'
// };
// 前端请求发送 cookies
axios.defaults.withCredentials = true;

/**
 * 封装的 request 请求接口
 * @param {string} url 例如：'/web/getList'
 * @param {{
    method: 'get', // 方法
    data: params,// {} 参数对象
    baseURL: WORKORDER_BASE_URL  // url的前缀
  }} options
 */
function request(url, options) {
  const method = (options.method || 'get').toLowerCase();
  const opts = {
    url,
    method,
    baseURL: options.baseURL || BASE_API_PREFIX,
    headers: options.headers || {}
  };
  const optionData = options.data || {};
  if (method === 'get') opts.params = optionData;
  else opts.data = optionData;
  return axios(opts)
    .then((res) => {
      const response = res || {};
      const { status } = response;
      if (status === 200) { // http请求没问题
        const { data, code } = response.data;
        if (code === 200) { // 如果接口请求没问题直接返回data，有问题则将错误信息全部返回
          return Promise.resolve(data);
        }
        // 登录超时，或用户没有群组 跳登录
        // if (code === 101 || code === 515) {
        //   history.push(PATHS.LOGIN);
        // }
        // return Promise.reject(response.data || '服务器错误');
      }
      return Promise.reject(new Error(res.msg));
    })
    .catch((err) => {
      if (!err.code) { // 如网络原因错误，打印信息
        // console.error(err.message);
      }
      return Promise.reject(err);
    });
}

// module.exports = request;
export default request;
