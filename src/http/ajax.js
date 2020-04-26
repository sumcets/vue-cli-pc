import Axios from 'axios';
import store from '@/store/store'; 
const baseURL = 'http://192.168.5.47:8083/' 

export default function Ajax(url, data={}, method='get'){
    const token = store.state.accessToken; 
    return new Promise((resolve)=>{
        Axios({
            url: baseURL + url,
            method: method.toUpperCase(),
            headers: {
                Authorization:'Bearer ' + token
            },
            params: method ==='get' ? data : {},
            data: method !== 'get' ? data : {},
        }).then((res)=>{
            resolve(res.data)
        }).catch((res)=>{
            resolve(res.response.data)
        })
    })
}