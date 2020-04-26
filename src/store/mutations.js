import storege from '@/storege';
export default {

    /**
     * 保存user
     * @param {*}} state 
     * @param {*} data 
     */
    saveUser(state, data){
        state.user = data
    },

    /**
     * 保存token
     * @param {*} state 
     * @param {*} data 
     */
    saveAccessToken(state, data){
        state.accessToken = data
    },

    /**
     * 退出登录
     * @param {*} state 
     */
    logout(state){
        state.user = null;
        state.accessToken = null;
        storege.setItem('user', null);
        storege.setItem('accessToken', null);
    }
}