<template>
  <div id="app">
    <jxzjHeader></jxzjHeader>
    <header class='hidden-sm-and-up mobile'>
      <div class="headerBox flex">
        <div class="logo">
          <img width='83' src="./assets/images/header/mobile/nav_icon_logo.png" alt="">
        </div>
        <div class="menu_mob flex" @click='showMenu = !showMenu'>
          <!-- <i :class="showMenu ?'closeMobMenu' : 'mobMenu'"></i> -->
          <span>菜单</span>
          <span :class="showMenu ?'closeMobMenu' : 'mobMenu'"></span>
        </div>
      </div>
      <el-collapse-transition>
        <div class="menu" v-show='showMenu'>
          <ul>
            <li class='flex' v-for='(item,index) in navItems' :key='index+"item.path"' @click='showMenu = !showMenu'>
              <router-link class='flex' :to='item.path'>
                <span>{{item.name}}</span>
                <i class='icon'></i>
              </router-link>
            </li>
          </ul>
        </div>
      </el-collapse-transition>
    </header>
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
  data() {
    return {
      showMenu:false,
      navItems:[{
        name:'首页',
        path:'/index'
      }, {
        name:'关于机械之家',
        path:'/about'
      }, {
        name:'产品服务',
        path:'/service'
      }, {
        name:'公司动态',
        path:'/dynamic'
      }, {
        name:'平台合作',
        path:'/cooperation'
      }, {
        name:'加入我们',
        path:'/join'
      }],
    }
  },
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



/* 移动端头部样式 */
header.mobile{
  box-sizing: border-box;
  font-size:0.28rem;
  height:3.14em;
  background:#fff;
  width:100%;
  position:fixed;
  top:0;
  z-index: 1000;
}
header.mobile .menu{
  background:#fff;
}
.headerBox {
  font-size:0.28rem;
  height:100%;
  padding:0 1em;
}
.headerBox .logo img{
  width:7.57em;
}
.headerBox .logo,.headerBox .menu_mob,.mobMenu,.closeMobMenu{
  align-self: center;
}
.headerBox .menu_mob{
  width:4.03em;
  height:2em;
  box-sizing: border-box;
  background: #7BAA17;
  border-radius:0.5em;
  padding:0.32em 0.535em;
  font-size:0.28rem;
  color:#fff;
}
.mobMenu{
  display:inline-block;
  background-image:url(./assets/images/header/mobile/nav_icon_more@2x.png);
  background-position: 0 50%;
  background-size:contain;
  background-repeat: no-repeat;
  font-size:0.12rem;
  width:0.8em;
  height:0.8em;
}
.closeMobMenu{
  display:inline-block;
  background-image:url(./assets/images/header/mobile/nav_icon_delete.png);
  background-position: 0 50%;
  background-size:contain;
  background-repeat: no-repeat;
  font-size:0.12rem;
  width:0.8em;
  height:0.8em;
}
.menu li{
  font-size: 0.32rem;
  height:3em;
  text-align: center;
  color:#333;
  background:#fff;
  padding:0 2.25em;
}
.menu li a{
  border-bottom:2px solid #F5F5F5;
  width:100%;
  height:3em;
  line-height: 3em;
}
.menu li i{
  height:1.357em;
  width:1.357em;
  background-image:url(./assets/images/header/mobile/icon_right.png);
  background-repeat: no-repeat;
  background-size: contain;
  display:none;
  margin-top:1em;
  position:relative;
  float:left;
}
.menu li .router-link-active i{
  display:inline-block;
}
</style>
