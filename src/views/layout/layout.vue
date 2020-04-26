<template>
    <div class="h-div">
        <el-container>
            <el-header>
                <div class="header">
                    <div class="img">
                        <el-avatar size="large" :src="user.avatarUrl"></el-avatar>
                    </div>
                    <el-dropdown trigger="click">
                        <span class="el-dropdown-link">
                            {{ '欢迎！' + user.nickName }}<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>
                                <div @click="logout"> 退出登录 </div>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <div class="left">
                        <el-menu default-active="/" class="el-menu-vertical-demo" :router="true">
                            <el-submenu index="1">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span slot="title">用户管理</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="/user/list">用户列表</el-menu-item>
                                    <el-menu-item index="/user/add">添加用户</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>

                            <el-submenu index="2">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span slot="title">设备管理</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="/driver/list">设备列表</el-menu-item>
                                    <el-menu-item index="/driver/add">添加设备</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                        </el-menu> 
                    </div>
                </el-aside>
                <el-container>
                    <el-main>
                        <div class="main">
                            <router-view></router-view>
                        </div>
                    </el-main>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data(){
        return {

        }
    },
    methods:{
        logout(){
            this.$store.commit('logout');
            this.$router.replace('/site/login')
        }
    },
    computed:{
        ...mapState(['user'])
    }
}
</script>

<style scoped>
    .h-div /deep/ .el-container{
        height: 100%;
        width: 100%;
    }
    .header{
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 30px 0 0;
        box-sizing: border-box;
        border-bottom: 1px solid rgba(0,0,0,.1);
    }
    .header .img{
        height: 100%;
        width: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .left{
        height: 100%;
        width: 100%;
    }
    .left /deep/ .el-menu{
        height: 100%;
    }
    .main{
        height: 100%;
        width: 100%;
    }
    .footer{
        height: 100%;
        width: 100%;
    }
</style>