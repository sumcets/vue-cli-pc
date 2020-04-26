<template>
  <div class="login">
      <div class="raw">
          <div class="title">
              登录
          </div>
          <el-form ref="form" :model="form" :rules="rules" label-width="80px">
              <el-row>
                <el-col :span="24">
                    <el-form-item label="用户名" prop="username">
                        <el-input v-model="form.username"/>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-form-item label="密码" prop="password">
                        <el-input v-model="form.password" type="password"/>
                    </el-form-item>
                </el-col>
            </el-row>
          </el-form>
          <div class="btn">
              <el-button type="primary" @click="submit" v-loading="loading">登录</el-button>
          </div>
      </div>
  </div>
</template>

<script>
import Api from '../../http/api';
import storege from '@/storege'; 
const { Login } = Api;
export default {
    data(){
        return {
            form:{
                username: 'zhangkun',
                password: 'zk@123456'
            },
            loading: false,
            rules:{
                username:[
                    {required: true, message: '请输入用户名', trigger: 'blur'}
                ],
                password:[
                    {required: true, message: '请输入用户名', trigger: 'blur'}
                ]                          
            }
        }
    },
    methods:{
        submit(){
            this.$refs.form.validate(async (val)=>{
                if(val){
                    this.loading = true;
                    const res = await Login(this.form);
                    this.loading = false;
                    if(res.success){
                        storege.setItem('user', res.data);
                        storege.setItem('accessToken', res.data.token);
                        this.$store.commit('saveUser', res.data);
                        this.$store.commit('saveAccessToken', res.data.token);
                        this.$router.replace('/')
                        return
                    }
                    this.$message({
                        message:'用户名或密码错误',
                        type:'error',
                        duration: 1500
                    });
                    this.$store.commit('logout')
                }
            })
        }
    }
}
</script>

<style scoped>
    .login{
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .raw{
        height: auto;
        width: 500px;
    }
    .title{
        height: 100px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        font-weight: 800;
    }
    .btn{
        height: auto;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
        
</style>