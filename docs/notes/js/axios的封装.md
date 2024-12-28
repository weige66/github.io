---
title: axios的封装
createTime: 2024/12/28 23:32:38
permalink: /notes/js/axios的封装/
---

```javascript
import axios from "axios";
import qs from "qs"; //处理参数
import router from '../router'; //引入路由
import { Loading , Message} from 'element-ui';

let loading = null;

//开始加载动画
function openLoading(){
  loading = Loading.service({
    lock:true,
    text:'拼命加载中...',
    background:'rgba(0,0,0,.7)'
  });
}

//关闭加载动画
function closeLoading(){
  loading.close();
}

//添加请求拦截器
axios.interceptors.request.use(
  config => {
    //加载动画
    openLoading()
    if(localStorage.sessionId){ //如果我的sessionId存在(sessionId其实就是token)
      // 设置统一的请求header
      config.headers.Authorization = localStorage.sessionId //授权（每次请求把sessionId带给后台）
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

//添加响应拦截器
axios.interceptors.response.use(
  response => {
　　//逻辑处理
    if(response.data.errorCode == -1){ //后端反回的状态值，本应该errorCode是status
      Message({
        type:'warning',
        duration:1500,
        showClose: true,
        message:'当前登录已失效，请从新登录！'
      })
      router.push("/logon")//让用户从新回到登录页面
    }
    return response;
  },
  error => {
　　closeLoading() //请求超时清除加载动画
    return Promise.resolve(error.response);
  }
);


axios.defaults.baseURL = "http://10.26.41.181:8081/nei";    // 开发

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.timeout = 6000; //设置请求超时时间

function checkStatus(response) {
  return new Promise((resolve, reject) => {
    if(response && (response.status === 200 || response.status === 304 || response.status === 400)){
　　　try{
　　　　　closeLoading() //关闭加载动画
      }catch(e){
　　     //抛出异常
        console.log(e)
      }
      resolve(response.data);
    }else{
　　　 try{
        closeLoading() //关闭加载动画
      }catch(e){
        //抛出异常
        console.log(e)
      }
      Message({
        type:'error',
        showClose: true,
        message:'网络异常，请检查网络连接是否正常！'
      })
    }
  });
}

export default {
  post(url, params) {
    return axios({
      method: "post",
      url,
      data: params
    }).then(response => {
      return checkStatus(response);
    });
  },
  get(url, params) {
    params = qs.stringify(params);
    return axios({
      method: "get",
      url,
      params
    }).then(response => {
      return checkStatus(response);
    });
  }
};
//  使用：在main.js里面引入这个文件，并挂载到vue原型上，这样可以通过this.xxxx去拿到

import axios from './api/api.js'   //引入axios文件夹
Vue.prototype.$axios = axios;   //挂载到整个Vue原型上
//  axios 的使用：在需要请求的页面如下引用

//post请求
this.$axios.post('url',{key:value}).then(res =>{
   cons.log(res,'后端返回数据') 
})
//get请求
this.$axios.get('url?key=value').then(res =>{
   cons.log(res,'后端返回数据') 
})

```