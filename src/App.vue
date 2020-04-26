<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

import { resetStatus } from './helper';

export default {
    name: 'App',
    beforeCreate(){
        resetStatus();
    }
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
.h-div{
    height: 100%;
    width: 100%;
}
.el-header{
    padding: 0!important;
}
.el-dropdown{
    cursor: pointer;
}
</style>
