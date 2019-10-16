<template>
  <div class='media'>
    <div class="title">自媒体矩阵</div>
    <div class="imgBox zmt"><img src="../../assets/images/service/media/product_picture_zmtjz_2.png" alt="" class="fw"></div>
    <div class="text">机械之家有工程机械行业最大的自媒体/社群矩阵-“吊车之家”、“泵车之家”“开心挖”“好挖”等专业新媒体平台，致力于打造行业资讯、专业工程机械保险、二手设备交易、招聘求职、配件维修、租赁等服务为一体的资讯平台，累计阅读传播量超2亿次，覆盖行业用户超100万，是工程机械行业最大的自媒体平台。用全新的互联网方案对传统工程机械产业进行改造，致力于让工程机械后市场服务变得更高效.</div>
    <div class="contBox flex">
      <el-row :gutter='10'>
        <el-col :xs='24' :sm='12' v-for="item in values" :key='item.id'>
          <div class="contItem flex">
            <div class="left" v-if='item.method.length === 4'>{{item.method.slice(0,2)}} <br/>{{item.method.slice(2,4)}}</div>
            <div class="left threeWord" v-else>{{item.method}}</div>
            <div class="right">
              <p class='title'>{{item.title}}</p>
              <p>{{item.content}}</p>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="cont flex">
      <p>吊车之家公众号及社群粉丝超过50万，专业提供行业新闻事件、专业知识、二手设备交易信息，以及吊车保险、配件、租赁资讯等服务，用全新的互联网传媒方案对传统工程机械产业进行改造，致力于让工程机械后市场服务变得更高效！</p>
      <p>泵车之家公众号专注于混凝土行业，公众号及社群粉丝超过15万，致力于打造集行业资讯、二手交易、泵车配件、招聘求职等为一体的移动互联网资讯平台。</p>
      <p>开心挖、好挖为全国挖友俱乐部，公众号及社群粉丝数十万，致力于行业资讯生产、二手挖机免费交易、超低价挖机配件信息为一体的传播平台！</p>
      <div class="tips">
        机械之家更有以珊珊为IP的抖音号、快手号、私域流量池，以及吊车头条号、泵车头条号，总计粉丝超100万，内容累计传播量超2亿次，是工程机械行业最大的自媒体矩阵！
      </div>
      <div class="imgBox liuliang">
        <img src="../../assets/images/service/media/product_picture_zmtjz_1.jpg" alt="" class="fw">
      </div>
    </div>
    <div class="title">可服务内容</div>
    <div class="cont serveCont flex">
      <div class="itemBox" v-for='item in serveContent' :key='item.id'>
        <img :src="item.imgUrl" alt="" class="fw">
        <p>{{item.desc}}</p>
      </div>
    </div>
    <div class="title">产品体验</div>
    <div class="cont product flex">
      <div class="itemBox" v-for='item in productExperience' :key='item.id'>
        <img :src="item.imgUrl" alt="" class="fw">
        <p>{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  // 服务内容图片
  import kfwnr1 from '@/assets/images/service/media/product_icon_kfwnr_1.png'
  import kfwnr2 from '@/assets/images/service/media/product_icon_kfwnr_2.png'
  import kfwnr3 from '@/assets/images/service/media/product_icon_kfwnr_3.png'
  import kfwnr4 from '@/assets/images/service/media/product_icon_kfwnr_4.png'
  import kfwnr5 from '@/assets/images/service/media/product_icon_kfwnr_5.png'
  import kfwnr6 from '@/assets/images/service/media/product_icon_kfwnr_6.png'
  // 产品体验图片
  import cpty1 from '@/assets/images/service/media/product_icon_cpty_1.png'
  import cpty2 from '@/assets/images/service/media/product_icon_cpty_2.png'
  import cpty3 from '@/assets/images/service/media/product_icon_cpty_3.png'
  import cpty4 from '@/assets/images/service/media/product_icon_cpty_4.png'
  import cpty5 from '@/assets/images/service/media/product_icon_cpty_5.png'
  export default {
    name:'media',
    data() {
      return {
        values:[
          {id:'val1',method:'吊车之家',title:'起重领域最大的微信自媒体',content:'为全国数十万精准起重用户长期提供内容服务'},
          {id:'val2',method:'头条矩阵',title:'系列工程机械头条号',content:'各类事件报道、专业知识、新闻资讯与互动'},
          {id:'val3',method:'泵车之家',title:'泵送领域资深自媒体平台',content:'泵送咨询、新闻事件、维修知识、配件信息等'},
          {id:'val4',method:'短视频',title:'以珊珊为IP的各短视频平台',content:'行业事件、工地故事、维修视频、事件直播等'},
          {id:'val5',method:'开心挖',title:'挖机资深自媒体平台',content:'专业咨询、挖机租赁、维修知识、编码查找等'},
          {id:'val6',method:'私域流量',title:'起重行业最大的公众号',content:'微信号矩阵，自持社群矩阵等'}
        ],
        // 可服务内容图片URL
        serveContent:[
          {id:'serve1',imgUrl:kfwnr1,desc:'事件报道'},
          {id:'serve2',imgUrl:kfwnr2,desc:'资讯投稿'},
          {id:'serve3',imgUrl:kfwnr3,desc:'视频服务'},
          {id:'serve4',imgUrl:kfwnr4,desc:'投放合作'},
          {id:'serve5',imgUrl:kfwnr5,desc:'定向导流'},
          {id:'serve6',imgUrl:kfwnr6,desc:'定向推广'},
          {id:'serve7',imgUrl:'',desc:''},
          {id:'serve8',imgUrl:'',desc:''}
        ],
        // 产品体验图片URL
        productExperience:[
          {id:'product1',imgUrl:cpty1,desc:'机械之家服务平台'},
          {id:'product2',imgUrl:cpty2,desc:'吊车之家'},
          {id:'product3',imgUrl:cpty3,desc:'泵车之家'},
          {id:'product4',imgUrl:cpty4,desc:'挖机之家'},
          {id:'product5',imgUrl:cpty5,desc:'51融机'}
        ]
      }
    }
  }
</script>
<style scoped>
  .text{
    line-height: 30px;
    font-size: 0.16rem;
    margin-bottom:30px;
  }
  div.imgBox.zmt{
    font-size: 0.2rem;
    margin-bottom:2.5em;
  }
  div.contBox{
    font-size: 0.2rem;
    margin-top:2em;
  }
  div.contItem{
    padding:0.9em 1.5em;
    border:1px solid rgba(226,226,226,1);
    box-sizing: border-box;
    margin-bottom:1.5em;
    height:6em;
    overflow:hidden;
  }
  div.contItem div.left{
    width:3.6em;
    height:3.6em;
    line-height:1.8em;
    background:#7BAA17;
    border-radius: 50%;
    text-align:center;
    /* line-height: 2.5em; */
    color:#fff;
    align-self: center;
    font-weight: bold;
  }
  div.contItem div.left.threeWord{
    line-height: 3.6em;
  }
  div.contItem div.right{
    font-size: 0.2rem;
    width:71.5%;
    height:100%;
  }
  p{
    font-size: 0.16rem;
    color:#666;
  }
  div.contItem p.title{
    line-height:1.5em;
    margin-bottom:0.5em;
    font-weight: bold;
  }
  p.title{
    font-size: 0.2rem;
  }
  div.cont p{
    font-size: 0.16rem;
    color:#666;
    margin-top:1.5em;
  }
  div.product p{
    margin-top:0;
  }
  div.tips{
    font-size: 0.20rem;
    line-height: 1.8em;
    margin:3em 0 2em 0;
    color:#666;
  }
  .liuliang{
    font-size: 0.2rem;
    margin-bottom:5em;
  }

  /* 服务内容 产品体验 公共样式*/
  div.serveCont p,div.product p{
    font-size: 0.18rem;
  }
  /* 服务内容 */
  div.serveCont{
    flex-wrap: wrap;
  }
  div.itemBox{
    font-size: 0.2rem;
    margin:2em 0 1.5em 0;
    text-align: center;
  }
  div.serveCont div.itemBox img{
    width:26.5%;
  }
  /* 产品体验 */
  div.product{
    margin:20px 0 70px 0;
  }
  div.product div.itemBox{
    margin:0px;
  }
  div.product div.itemBox img{
    margin-bottom:20px;
  }
  div.product p{
    color:#666;
  }

  @media screen and (min-width: 768px) {
    div.itemBox {
      width:33%;
    }
    div.product div.itemBox {
      width:15.56%;
    }
  }
  
  @media screen and (max-width: 768px) {
    .text{
      font-size: 0.28rem;
      line-height: 1.71em;
      color:#666;
    }
    div.contItem{
      height:auto;
    }
    div.contItem{
      font-size: 0.28rem;
    }
    div.contItem div.left{
      padding:0.5em;
    }
    p{
      font-size: 0.24rem;
    }
    p.title{
      font-size: 0.28rem;
    }
    div.cont p{
      font-size: 0.28rem;
      line-height: 1.71em;  
    }
    div.tips{
      font-size: 0.28rem;
      line-height: 1.71em;  
      font-weight: bold;
    }
    div.product div.itemBox {
      width:33%;
      margin-bottom: 2em;
    }
    div.itemBox{
      width:33%;
    }
    div.product div.itemBox img{
      margin-bottom: 1em;
    }
  } 
</style> 