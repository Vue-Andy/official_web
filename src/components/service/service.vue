<template>
  <section class="service overflow_hidden">
    <div class="empty hidden-xs-only"></div>
    <div class="top overflow_hidden"><img class='fw' src="../../assets/images/index/product_banner.jpg" alt=""></div>
    <div class="main flex w1200 mar_auto">
      <div class="theme_container hidden-xs-only">
        <div class="syllabus overflow_hidden" :class='{isSyllbusFix:isSyllbusFix}'>
          <div class="syllItem" v-for='(item,index) in syllItems' :key='item.tar' @click='jump(item.path,index)' :class='{active:routeIndex === index}'>{{item.content}}</div>
        </div>
      </div>
      <div class="mob_theme_container hidden-sm-and-up" :class='{isFix:isFix}'>
        <div class="mobSyllabus flex">
          <div class="itemBox" v-for='item in mobSyllabus' :key='item.id'>
            <router-link :to='item.path'>{{item.text}}</router-link>
            <div class="line mar_auto"></div>
          </div>
        </div>
      </div>
      <div class="details">
        <transition name='el-zoom-in-top' :duration="{ enter: 200, leave: 400 }">
          <router-view></router-view>
        </transition>
      </div> 
    </div>
  </section>
</template>

<script>
  // 头部图片url
  // import topImgUrl from '@/assets/images/index/service.jpg'
  export default {
    name:'service',
    data() {
      return {
        routeIndex:0,
        isFix:false,
        isSyllbusFix:false,
        mobSyllabus:[
          {id:'sylla1',path:'/service/purchase',text:'配件交易'},
          {id:'sylla2',path:'/service/sToB',text:'供应链服务'},
          {id:'sylla3',path:'/service/insurance',text:'金融保险服务'},
          {id:'sylla4',path:'/service/media',text:'媒体服务'}
        ],
        syllItems:[
          {tar:'sale', content:'配件交易', path:'/service/purchase'},
          {tar:'purchase', content:'供应链服务', path:'/service/sToB'},
          {tar:'insur', content:'保险金融服务', path:'/service/insurance'},
          {tar:'media', content:'媒体服务', path:'/service/media'}
        ],
        // topImg:topImgUrl
      }
    },
    methods:{
      jump(param,index){
        if(this.$router.currentRoute.fullPath.indexOf(param) !== -1) return
        this.$router.replace(param)
        this.routeIndex = index
      },
      handleScroll(){
        if(document.documentElement.scrollTop > 88){
          // this.isFix = true
        }else{
          this.isFix = false
        }
        if(document.documentElement.scrollTop > 350){
          this.isSyllbusFix = true
        }else{
          this.isSyllbusFix = false
        }
      }
    },
    updated() {
      let ind = this.$router.currentRoute.path.lastIndexOf('/')
      let route = this.$router.currentRoute.path.slice(ind+1)
      route === 'purchase' || route === 'service' ? 
      this.routeIndex = 0 : 
      (route === 'sToB' ? this.routeIndex = 1 : route === 'insurance' ? this.routeIndex = 2 : this.routeIndex = 3)
    },
    mounted(){
      window.addEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style scoped>
.syllabus.isSyllbusFix{
  position:fixed;
  top:100px;
}
.mob_theme_container{
  font-size: 0.28rem;
  width:100%;
  margin-bottom:1.43em;
  background:#fff;
}
.mob_theme_container.isFix{
  position:fixed;
  top:3.14em;
  width:100%;
  padding:2em 1em 0 1em;
  box-sizing: border-box;
  left:0;
}
.mob_theme_container .line{
  width:1.14em;
  height:0.214em;
  border-radius: 0.17em;
  background:#7BAA17;
  display:none;
}
.mob_theme_container a{
  display:block;
}
.mob_theme_container .router-link-active{
  color:#7BAA17;
}
.mob_theme_container .router-link-active + .line{
  display:block;
}
div.active{
  background:#7BAA17;
  color:#fff;
}
@media screen and (min-width: 768px) {
  div.details {
    width:80%;
  }
}
@media screen and (max-width: 768px) {
  .mob_theme_container {
    line-height: 1.357em;
  }
  .mob_theme_container a{
    margin-bottom:0.39em;
  }
  div.details {
    width:100%;
  }
}
</style>
