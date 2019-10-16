<template>
  <section class="firstPage">
    <div class="carousel">
      <el-carousel class='hidden-xs-only' trigger="click" :height="imgHeight">
        <el-carousel-item v-for="item in carouselData" :key="item.first_title" :style='{height:imgHeight}'>
          <img ref='imgHeight' :src="item" alt="" width='100%'>
        </el-carousel-item>
      </el-carousel>
      <el-carousel class='hidden-sm-and-up' trigger="click" height="193px">
        <el-carousel-item v-for="item in carouselData1" :key="item.first_title">
          <img ref='imgHeight1' :src="item" alt="" width='100%'>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="main w1200 mar_auto">
      <!-- 公司简介 -->
      <div class="info flex">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <div class="intro">
              <div class="intro_title flex">
                <span class='fir_title'>公司简介</span>
                <span class='checkMore cursor' @click='checkMore("/about")'>查看更多>>&nbsp;&nbsp;&nbsp;</span>
              </div>
              <div class="text">{{companyIntro[0]}}<br/><br/>{{companyIntro[1]}}</div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12">
            <div class="propaganda">
              <span class='fir_title'>企业宣传片</span>
              <div class="propaganda-video">
                <video :src="mediaUrl" controls preload width="100%" poster="../../../static/video.jpg">您的浏览器暂不支持视频播放！</video>
              </div>
              <div class="propaganda-bot">
                <img :src="videoBot">
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class='mainImg hidden-xs-only'><img src="../../assets/images/index/home_picture_1.png" alt="" class="fw"></div>
      <div class="mobImgBox hidden-sm-and-up">
        <div class="mobImgItem" v-for='(item,index) in mobImgs' :key='"mob"+ index'>
          <img :src="item" alt="" class="fw">
        </div>
      </div>
      <div class="imgs">
        <el-row :gutter='10'>
          <el-col :xs='24' :sm='8'>
            <div class="imgItem">
              <div class="imgItemBox">
                <img src="../../assets/images/index/home_icon_shim.png" alt="">
              </div>
              <p class='tag'>使命</p>
              <p class="text">让机械后市场服务更高效</p>
            </div>
          </el-col>
          <el-col :xs='24' :sm='8'>
            <div class="imgItem">
              <div class="imgItemBox">
                <img src="../../assets/images/index/home_icon_yuanj.png" alt="">
              </div>
              <p class='tag'>愿景</p>
              <p class="text">成为机械行业领先的后市场服务平台</p>
            </div>
          </el-col>
          <el-col :xs='24' :sm='8'>
            <div class="imgItem">
              <div class="imgItemBox">
                <img src="../../assets/images/index/home_icon_jiazg.png" alt="">
              </div>
              <p class='tag'>核心价值观</p>
              <p class="text">客户第一，疾慢如仇</p>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- 公司动态 -->
      <div class="dynamic">
        <div class="sub_title flex">
          <span class='fir_title mt'><i></i>公司动态</span> 
          <span class='checkMore cursor' @click='checkMore("/dynamic")'>查看更多>></span>
        </div>
        <div class="sub_cont">
          <el-row :gutter='10'>
            <el-col :xs="24" :sm="8" v-for='item in dynamicImgs' :key='item.id'>
              <div class="imgBox cursor" @click='jumpToDetail(item.id)'>
                <img :src="item.mainUrl" alt="" class='fw'>
                <p class='title' :title='item.title'>{{item.title}}</p>
                <p class='abstract' :title='item.abstract'>{{item.abstract}}</p>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import eventBus from '@/utils/bus'
import { getJson } from '@/api/api'

// pc轮播图 url
import carouselImg1 from '@/assets/images/index/pc_home_banner1.png'
import carouselImg2 from '@/assets/images/index/pc_home_banner2.jpg'
import carouselImg3 from '@/assets/images/index/pc_home_banner3.jpg'
// mob轮播图 url
import carouselImg11 from '@/assets/images/index/mobile_home_1.png'
import carouselImg22 from '@/assets/images/index/mobile_home_2.jpg'
import carouselImg33 from '@/assets/images/index/mobile_home_3.jpg'
// 移动端图
import mobImg1 from '@/assets/images/index/join_pxtx_picture_1.png'
import mobImg2 from '@/assets/images/index/join_pxtx_picture_2.png'
import mobImg3 from '@/assets/images/index/join_pxtx_picture_3.png'
import mobImg4 from '@/assets/images/index/join_pxtx_picture_4.png'


export default {
  name: "Index",
  data() {
    return {
      imgHeight:'475px',
      // 轮播图
      carouselData: [
        carouselImg1,carouselImg2,carouselImg3
      ],
      carouselData1:[
        carouselImg11,carouselImg22,carouselImg33
      ],
      mediaUrl:'',
      // 公司简介数据
      companyIntro:['湖南机械之家信息科技有限公司成立于2015年1月，是一家专注于工程机械后市场服务的产业互联网公司，以“让机械后市场服务更高效”为使命，致力于工程机械后市场交易和服务的标准化、智能化。 ','机械之家以创新的模式，联结行业上下游资源，利用互联网技术，为用户提供庞大的零配件数据服务、高效的信息化系统平台、完善的供应链服务体系，帮助用户提高交易效率，降低采购成本。'],
      // 移动端四张图
      mobImgs:[mobImg1,mobImg2,mobImg3,mobImg4],
      // 公司动态图片urls
      dynamicImgs:[],
      // 公司视频底部
      videoBot:"data:image/png;base64,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",
    }
  },
  methods:{
    getHotNews() {
      getJson('static/news.json').then(res => {
        let length = res.data.length
        for(let i=length-1; i >=length-3; i--){
          if(res.data[i]){
            this.dynamicImgs.push(res.data[i])
          }
        }
      })
    },
    checkMore(param, type = 1) {
      param === '/dynamic' || type === 1 ? this.$router.push(param)  : this.$router.push({path: param, query:{from: "index"}})
    },
    jumpToDetail(id) {
      this.$router.push({path:'/dynamic',query:{id}})
    }
  },
  beforeCreate() {
    this.$router.replace('/index')
  },
  created() {
    getJson('static/media.json').then(res => {
      console.log(res)
      this.$nextTick(()=>{
        this.mediaUrl = res.data.url
      })
    })
  },
  beforeMount() {
    if(window){ 
      let width = document.documentElement.clientWidth
      this.imgHeight = 475 * width /1920 + "px"
    }
  },
  mounted() {
    if(window){ 
      let width = document.documentElement.clientWidth
      this.imgHeight = 475 * width /1920 + "px"
    }
    var that = this
    window.onresize = function temp() {
      if(that.$router.currentRoute.fullPath.indexOf('index') === -1){ return; }
      that.imgHeight = `${that.$refs.imgHeight['0'].height}px`
    }
    this.getHotNews()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "./index_pc.css";
</style>
