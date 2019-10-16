<template>
  <div id="app">
    <jxzjHeader></jxzjHeader>
    <transition name='el-zoom-in-center'>
      <router-view/>
    </transition>
    <footerCom></footerCom>
  </div>
</template>

<script>
import jxzjHeader from '@/components/header'
import footerCom from './components/footer'
import 'element-ui/lib/theme-chalk/display.css'
import './assets/css/common.css'
import './assets/css/reset.css'
export default {
  name: 'App',
  components:{ jxzjHeader, footerCom},
  updated() {
    window.scrollTo(0,0);
  }
}
</script>

<style>
#app {
  /* min-width: 1366px;   阿力普惠体：Alibaba ICS*/
  font-family:  STHeiti;   
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  margin:0 atuo;
}
</style>
