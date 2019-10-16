<template>
  <section class="cooperation overflow_hidden">
    <div class="empty hidden-xs-only"></div>
    <div class="top overflow_hidden"><img class='fw' src="../../assets/images/index/cooperation.jpg" alt=""></div>
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
    <div v-if='showFooterImg' class="bottom">
      <img src="../../assets/images/cooperation/supplier/group_2.jpg" alt="" class='fw'>
    </div>
  </section>
</template>

<script>
  export default {
    name:'cooperation',
    data() {
      return {
        routeIndex:0,
        showFooterImg: true,
        isFix:false,
        isSyllbusFix:false,
        mobSyllabus:[
          {id:'sylla1',path:'/cooperation/supplier',text:'供应商合作'},
          {id:'sylla2',path:'/cooperation/insuranceCo',text:'保险合作'},
          {id:'sylla3',path:'/cooperation/repaireSite',text:'维修厂合作'},
          {id:'sylla4',path:'/cooperation/mediaCo',text:'媒体合作'}
        ],
        syllItems:[
          {tar:'supplier',content:'供应商合作',path:'/cooperation/supplier'},
          {tar:'insur',content:'保险合作',path:'/cooperation/insuranceCo'},
          {tar:'repaire',content:'维修厂合作',path:'/cooperation/repaireSite'},
          {tar:'store',content:'媒体合作',path:'/cooperation/mediaCo'}
        ]
      }
    },
    methods:{
      jump(param,index){
        if(this.$router.currentRoute.fullPath.indexOf(param) !== -1) return
        this.$router.replace(param)
        this.routeIndex = index
      },
      // 监听页面刷新事件
      watchRoute(){
        let route = this.$router.currentRoute.fullPath
        if(route === '/cooperation' || route === '/cooperation/supplier') {
          this.showFooterImg = true
          this.routeIndex = 0
        } else {
          this.showFooterImg = false
          route == '/cooperation/insuranceCo' ? this.routeIndex = 1 : (route == '/cooperation/repaireSite' ? this.routeIndex = 2 : this.routeIndex = 3)
        }
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
    created() {
      this.watchRoute()
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    watch:{
      $route(to,from){
        if(to.path === '/cooperation' || to.path === '/cooperation/supplier') {
          this.showFooterImg = true
        }else{
          this.showFooterImg = false
        }
      }
    }
  }
</script>

<style scoped>
  .syllabus.isSyllbusFix{
    position:fixed;
    top:100px;
  }
  .mob_theme_container{
    width:100%;
    font-size: 0.28rem;
    margin-bottom:1.43em;
    background:#fff;
  }
  .mob_theme_container.isFix{
    position: fixed;
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
    .details {
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
  }
</style>
