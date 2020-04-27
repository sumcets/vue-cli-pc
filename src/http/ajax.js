import Axios from 'axios';
import store from '@/store/store'; 
import router from '../router/index';
const baseURL = 'http://192.168.0.102:8083/' 

/**
 * 
 * @param {*}
 */
export default function Ajax({url, data={}, params={}, method='get'}){
    const ajax = Axios.create({
        timeout: 6000,
        baseURL: baseURL,
        method: method.toUpperCase(),
        headers:{
            'Content-Type': 'application/json;charset=UTF-8'
        }
    });
    
    ajax.interceptors.request.use(configs => {
        configs.headers['Authorization'] = 'Bearer ' + store.state.accessToken || '';
        return configs
    });
    
    ajax.interceptors.response.use(response => {
        return Promise.resolve(response) 
    }, error => {
        //这个errro对象很难驾驭的住啊
        if(error && error.response && error.response.status === 401){
            router.replace('/site/login')
            return;
        }
        return Promise.reject({
            success: false,
            msg:'出错了～'
        }) 
    });

    return new Promise((resolve)=>{
        ajax({url, data, params}).then((res)=>{
            resolve(res.data)
        }).catch((res)=>{
            resolve(res)
        })
    });
} 