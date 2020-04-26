import Ajax from './ajax';

/**
 * 登录
 * @param {*} data 
 */

const Login = (data) => Ajax({url: 'pi/admin-login', data:data, method:'post'});

export default {
    Login
}