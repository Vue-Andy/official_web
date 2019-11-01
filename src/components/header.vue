<template>
  <div class="header_container" :class='{isFix:isFix}'>
    <!-- 此头部使用首页滚动后 和 非首页 -->
    <header class='flex hidden-xs-only pc' v-show='!isInIndex || (isInIndex && scrolled)'>
      <div class="menu_pc flex">
        <div class="logo">
          <router-link to='/index'><img src="../assets/images/header/nav_icon_logo.png" alt=""></router-link>
        </div>
        <div class='routeBox' v-for='(item,index) in navItems' :key='index+"item.path"' @mouseenter='enterRoute(index)' @mouseleave='outRoute' @click='handleClick(index)'>
          <router-link :to='item.path' :class='{active:routeIndex === index}'>{{item.name}}
          <transition name='el-zoom-in-center'>
            <div class="line"></div>
          </transition></router-link>
        </div>
      </div>
    </header>
    <!-- 此头部只适应首页未发生滚动时的情况 -->
    <header class='flex hidden-xs-only indexHeader pc' v-show='isInIndex && !scrolled'>
      <div class="menu_pc flex">
        <div class="logo">
          <img src="../assets/images/header/nav_icon_logo_white.png" alt="">
        </div>
        <div class='routeBox' v-for='(item,index) in navItems' :key='index+"item.path"' @mouseenter='enterRoute(index)' @mouseleave='outRoute' @click='handleClick(index)'>
          <router-link :to='item.path' :class='{active:routeIndex === index}'>{{item.name}}
          <transition name='el-zoom-in-center'>
            <div class="line"></div>
          </transition></router-link>
        </div>
      </div>
    </header>
    <!-- 此头部只使用移动端 -->
    <div class="emptyHeader hidden-sm-and-up"></div>
    <header class='hidden-sm-and-up mobile'>
      <div class="headerBox flex">
        <div class="logo">
          <img width='83' src="../assets/images/header/mobile/nav_icon_logo.png" alt="">
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
  </div>
</template>

<script>
  export default {
    name:'jxzjHeader',
    data() {
      return {
        // 是否是在index页面
        isInIndex:true,
        scrolled:false,
        // hover 的路由下标
        routeIndex:-1,
        isFix:false,
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
        // 移动端头部
        showMenu:false
      }
    },
    methods:{
      handleClick(index) {
        index === 0 ? this.isInIndex = true : this.isInIndex = false
      },
      // 鼠标移入标题的时候
      enterRoute(index) {
        this.routeIndex = index
      },
      // 鼠标移出标题的时候
      outRoute() {
        this.routeIndex = -1
      },
      // 监听屏幕滚动
      handleScroll() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if(scrollTop >= 100){
          this.isFix = true
          this.scrolled = true
        }else{
          this.isFix = false
          this.scrolled = false
        }
      },
      // 监听页面刷新事件
      watchRoute(){
        let route = this.$router.currentRoute.fullPath
        if(route === '/') {
          this.isInIndex = true
        } else if(route.indexOf('index') == -1) {
          this.isInIndex = false
        }
      }
    },
    // 当头部滚动到一定位置的时候切换头部显示
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
      this.watchRoute()
    },
    // 监听路由变化，动态渲染头部
    watch:{
      $route(to,from){
        if(to.path.indexOf('index') < 0) {
          this.isInIndex = false
        }
      }
    },
    created() {
      this.watchRoute()
    }
  }
</script>

<style scoped>
.header_container{
  width:100%;
}
.routeBox{
  height:25px;
}
header a{
  display:inline-block;
  height:25px;
}
a.active{
  color:#7BAA17;
}
a.active .line{
  display:block;
}
.line{
  display:none;
}
/* 头部公共样式 */
header.pc{
  position:absolute;
  z-index:1000;
  width:100%;
  height:70px;
  background:#fff;
  color:#333;
  margin:0 auto;
  font-size:0.18rem;
}
.menu_pc{
  margin:0 auto;
  margin-top:22px;
  width:62.5%;
}
.router-link-active{
  color:#7BAA17;
}
.router-link-active + div{
  display:block;
}
.router-link-active div{
  display:block;
}
header .line{
  height:4px;
  border-radius:2px;
  background:#7BAA17;
}
header.indexHeader{
  background:transparent;
  color:#fff;
}
header.indexHeader .line{
  background:#fff;
  color:#fff;
}
header.indexHeader a{
  color:#fff;
}
header.indexHeader a.active + .line{
  display:block;
  background:#fff;
}
header.indexHeader a.router-link-active{
  color:#fff;
}
header.indexHeader a.router-link-active + div{
  background:#fff;
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
.headerBox{
  box-sizing: border-box;
  width:100%;
  padding:0.42em 0.84em;
  height:3.14em;
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
  background-image:url(../assets/images/header/mobile/nav_icon_more@2x.png);
  background-position: 0 50%;
  background-size:contain;
  background-repeat: no-repeat;
  font-size:0.12rem;
  width:0.8em;
  height:0.8em;
}
.closeMobMenu{
  display:inline-block;
  background-image:url(../assets/images/header/mobile/nav_icon_delete.png);
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
  background-image:url(../assets/images/header/mobile/icon_right.png);
  background-repeat: no-repeat;
  background-size: contain;
  display:none;
  margin-top:0.75em;
}
.menu li .router-link-active i{
  display:block;
}

</style>

