import Ajax from './ajax';

/**
 * 登录
 * @param {*} data 
 */
const Login = (data) => Ajax('pi/admin-login',data, 'post');

export default {
    Login
}