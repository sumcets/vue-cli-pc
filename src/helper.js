import store from './store/store';
import storage from './storege';

/**
 * 重置用户状态，用于刷新过后保留用户信息
 */
export const resetStatus = ()=>{
    let user = storage.getItem('user');
    let accessToken = storage.getItem('accessToken');
    store.commit('saveUser', user);
    store.commit('saveAccessToken', accessToken);
}