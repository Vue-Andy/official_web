<template>
  <section class="dynamic overflow_hidden">
    <div class="empty hidden-xs-only"></div>
    <div class="details">
      <div class="top overflow_hidden"><img class='fw' src="../../assets/images/index/dynamic.jpg" alt=""></div>
      <!-- 新闻列表容器 -->
      <div class="main w1200 mar_auto" v-show='isList'>
        <div class="newsList">
          <div class="tabTitle flex">
            <span @click='handleTabClick(1)' class='cursor' :class='{active:tabIndex === 1}'>公司资讯</span>
            <span class="line"></span>
            <span @click='handleTabClick(0)' class='cursor' :class='{active:tabIndex === 0}'>媒体报道</span>
          </div>
          <!-- 媒体报道 -->
          <div class="tabContent firstTab" v-show='tabIndex === 0'>
            <el-row :gutter='10'>
              <el-col :xs='24' :sm='8' v-for='item in hotnews' :key='item.id'>
                <div class="item cursor" @click='jumpToDetail("媒体报道",item.id)'>
                  <div class="imgBox">
                    <img class='fw' :src="item.mainUrl" alt="">
                  </div>
                  <p class='title' :title='item.title'>{{item.title}}</p>
                  <p :title='item.abstract'>{{item.abstract}}</p>
                </div>
              </el-col>
            </el-row>
          </div>
          <div id='firstPagination' class="pagination mar_auto" v-show='tabIndex === 0'>
            <span class="pageBtn cursor" v-for='(item,index) in pageData' :key='item.id' :class='{active:pageIndex1 === index}' @click='handlePageClick(0,index)'>{{item.page}}</span>
          </div>
          <!-- 公司资讯 -->
          <div class="tabContent secondTab" v-show='tabIndex === 1'>
            <el-row :gutter='10'>
              <el-col :xs='24' :sm='8' v-for='item in hotInfos' :key='item.id'>
                <div class="item cursor" @click='jumpToDetail("公司咨讯",item.id)'>
                  <div class="imgBox">
                    <img class='fw' :src="item.mainUrl" alt="">
                  </div>
                  <p class='title' :title='item.title'>{{item.title}}</p>
                  <p :title='item.abstract'>{{item.abstract}}</p>
                </div>
              </el-col>
            </el-row>
          </div>
          <div id='secondPagination' class="pagination mar_auto" v-show='tabIndex === 1'>
            <span class="pageBtn cursor" v-for='(item,index) in pageData' :key='item.id' :class='{active:pageIndex2 === index}' @click='handlePageClick(1,index)'>{{item.page}}</span>
          </div>
        </div>
      </div>
      <!-- 新闻详情容器 -->
      <div class="main w1200 mar_auto" v-show='!isList'>
        <el-row>
          <el-col :xs='24' :sm='17'>
            <!-- 左侧内容部分容器 -->
            <div class="leftContainer">
              <!-- 面包屑导航 -->
              <div class="breadCrumb cursor" @click='returnToList'>
                <el-breadcrumb separator-class="el-icon-arrow-right" >
                  <el-breadcrumb-item to='/index'>首页</el-breadcrumb-item>
                  <el-breadcrumb-item to='/dynamic'>公司动态</el-breadcrumb-item>
                  <el-breadcrumb-item>{{nav}}</el-breadcrumb-item>
                </el-breadcrumb>
              </div>
              <div class="newstitle">{{hotNewsDetail.title}}</div>
              <div class="time">{{hotNewsDetail.time}}</div>
              <div class="newsContent" v-for='item in hotNewsDetail.detail' :key='item.id'>
                <p class="content">{{item.content}}</p>
                <div class="newsImgBox" v-for='(sub_item,index) in item.desc' :key='item.id+"news"+index'>
                  <img :src="sub_item.imgUrl" alt="" class="fw">
                  <p class="sub_content">{{sub_item.sub_title}}</p>
                </div>
              </div>
              <div class="exchange">
                <el-row :gutter='10'>
                  <el-col :xs='24' :sm='24'>
                    <div class="exchangeItem cursor" @click='jumpToDetail(nav,lastArticle.id)'>上一篇：{{lastArticle.title}}</div>
                  </el-col>
                  <el-col :xs='24' :sm='24'>
                    <div class="exchangeItem cursor" @click='jumpToDetail(nav,nextArticle.id)'>下一篇：{{nextArticle.title}}</div>
                  </el-col>
                </el-row>
              </div>
            </div>
          </el-col>
          <el-col :xs='24' :sm='7'>
            <div class="rightContainer hidden-xs-only">
              <div class="hotArticle">热门文章</div>
              <ul class='hotArticleList'>
                <li v-for='item in hotArticle' :key='item.id+"hotArticle"' :title='item.title' class='cursor' @click='jumpToDetail(nav,item.id)'>{{item.title.slice(0,15)}}...</li>
              </ul>
            </div>
            <div class="rightContainer hidden-sm-and-up">
              <div class="hotArticle">热门文章</div>
              <ul class='hotArticleList'>
                <li v-for='item in hotArticle' :key='item.id+"hotArticle"' :title='item.title' class='cursor' @click='jumpToDetail(nav,item.id)'><p>{{item.title}}</p></li>
              </ul>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </section>
</template>

<script>
  import eventBus from '@/utils/bus'
  import { getJson } from '@/api/api'
  export default {
    name:'dynamic',
    data() {
      return {
        isList:true,
        // 列表页数据
        tabIndex:1,
        data:[1,2,3,4,5,6],
        hotnews:[],
        hotInfos:[],
        pageData:[{id:'page1',page:1},{id:'page2',page:2},{id:'page3',page:3}],
        pageIndex1:0,
        pageIndex2:0,
        // 详情页数据
        nav:'媒体报道',
        hotNewsDetail:{},
        // 热门文章
        hotArticle:[],
        // 展示详情页ID
        newsId:0,
        // 上一篇
        lastArticle:{},
        // 下一篇
        nextArticle:{},
        // 所有新闻
        allNews:[]
      }
    },
    methods:{
      handleTabClick(param) {
        this.tabIndex = param
      },
      // 获取热点新闻列表
      getHotNews(param) {
        getJson('static/news.json').then(res => {
          // 起始下标  如总数35  第一页为：1-12 第二页为：13-24  开始下标为  res.data-param*12 + 1  结束下标为  res.data-(param-1)*12-1
          let length = res.data.length
          // let endIndex = length-(param-1)*12-1    // 第一页： 21-11 第二页： 0-9
          // let startIndex = length - param * 12 + 1 < 0 ? 0 : length - param * 12 + 1
          // let endIndex = length-(param-1)*12-1    // 第一页： 21-11 第二页： 0-9
          let startIndex = (param-1) * 12
          let newList = []
          for(let i=startIndex; i < startIndex + 12; i++){
            if(res.data[i]){
              newList.push(res.data[i])
            }
          }
          this.hotnews = newList
          this.hotArticle = []
          for(let j in res.data){
            if(j < 10){
              this.hotArticle.push(res.data[j])
            }
          }
        })
      },
      // 获取热点资讯列表
      getHotInfos(param) {
        getJson('static/news.json').then(res => {
          // 起始下标  如总数60  第一页为：49-60 第二页为：37-48  开始下标为  res.data-param*12 + 1  结束下标为  res.data-(param-1)*12-1
          let length = res.data.length
          this.allNews = res.data
          let endIndex = length-(param-1)*12-1    // 第一页： 21-11 第二页： 0-9
          let startIndex = length - param * 12 + 1 < 0 ? 0 : length - param * 12 + 1
          let newList = []
          for(let i=endIndex; i >= startIndex-1; i--){
            if(res.data[i]){
              newList.push(res.data[i])
            }
          }
          this.hotInfos = newList
        })
      },
      // 获取热点新闻详情
      getHotNewsDetail(id) {
        this.hotNewsDetail = this.allNews.filter(item => {
          return item.id === id
        })[0]
      },
      handlePageClick(type,ind) {
        if(type === 0) {
          this.pageIndex1 = ind
          this.getHotNews(ind+1)
          window.scrollTo(0,0)
        }else{
          this.pageIndex2 = ind
          this.getHotInfos(ind+1)
          window.scrollTo(0,0)
        }
      },
      jumpToDetail(param,id) {
        this.newsId = id
        this.nav = param
        this.isList = false
        this.getHotNewsDetail(id)
        getJson('static/news.json').then(res => {
          let lastArticleId = this.newsId - 1 > 0 ? this.newsId -1 : this.newsId ,
          nextArticleId = this.newsId + 1 <= res.data.length ? this.newsId + 1 : this.newsId;
          this.lastArticle = res.data.filter(item => {
            return Number(item.id) === lastArticleId
          })[0]
          this.nextArticle = res.data.filter(item => {
            return Number(item.id) === nextArticleId
          })[0]
        })
        window.scrollTo(0,0)
      },
      returnToList() {
        this.isList = true
        this.nav === '媒体报道' ? this.tabIndex = 0 : this.tabIndex = 1
      }
    },
    created() {
      this.getHotNews(1)
      this.getHotInfos(1)
    },
    mounted() {
      let newsId = this.$route.query.id
      if(newsId >= 0){
        this.isList = false
        getJson('static/news.json').then(res => {
          let lastArticleId = newsId - 1 > 0 ? newsId -1 : newsId ,
          nextArticleId = newsId + 1 <= res.data.length ? newsId + 1 : newsId;
          this.hotNewsDetail = res.data.filter(item => {
            return item.id === newsId
          })[0]
          this.lastArticle = res.data.filter(item => {
            return Number(item.id) === lastArticleId
          })[0]
          this.nextArticle = res.data.filter(item => {
            return Number(item.id) === nextArticleId
          })[0]
        })
      }
      document.querySelectorAll('.breadCrumb span.el-breadcrumb__inner.is-link')[0].addEventListener('mouseenter',function(e){
        e.target.style.color = '#7BAA17'
      })
      document.querySelectorAll('.breadCrumb span.el-breadcrumb__inner.is-link')[0].addEventListener('mouseleave',function(e){
        e.target.style.color = '#111'
      })
      document.querySelectorAll('.breadCrumb span.el-breadcrumb__inner.is-link')[1].addEventListener('mouseenter',function(e){
        e.target.style.color = '#7BAA17'
      })
      document.querySelectorAll('.breadCrumb span.el-breadcrumb__inner.is-link')[1].addEventListener('mouseleave',function(e){
        e.target.style.color = '#111'
      })
    }
  }
</script>

<style scoped>
@import './dynamic.css';
</style>
