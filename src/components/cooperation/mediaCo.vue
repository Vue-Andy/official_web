<template>
  <div>
    <div class="title">媒体合作</div>
    <div class='topImg'><img src="../../assets/images/cooperation/media/product_picture_zmtjz_2.png" alt="" class="fw"></div>
    <p>机械之家自媒体矩阵，含“吊车之家”、“泵车之家”“开心挖”“好挖”等行业领域颇具影响力的公众号平台，更有以珊珊为IP的抖音号、快手号、私域流量池，以及吊车头条号、泵车头条号，总计粉丝超100万，内容累计传播量超5亿次，是工程机械行业最大的自媒体矩阵！<br/><br/>机械之家自媒体致力于打造行业资讯、新闻报道、专业技术知识、配件与保险、二手设备交易、招聘求职、租赁等服务为一体的综合流量平台，用全新的互联网方案对传统工程机械产业进行改造，致力于让工程机械后市场服务变得更高效！</p>
    <div class="subTitle mar_auto hidden-xs-only">合作内容</div>
    <div class="line mar_auto hidden-xs-only">
      <div class="centerLine mar_auto"></div>
    </div>
    <div class="title hidden-sm-and-up mt70">合作内容</div>

    <p>机械之家自媒体矩阵，粉丝的核心组成为起重、泵送、挖机行业从业人士，精准定工程机械行业吊、泵、挖三大精准群体。与机械之家推广合作，将极大的提高用户精准触达率，减少合作企业的宣传推广成本，实现更精准的推广！</p>
    <div class='mt30'>
      <img class='fw' src="../../assets/images/cooperation/media/cooperation_pictre_mthz.png" alt="">
    </div>
    <div class="subContent">资讯投稿：添加微信bczj168 <br> 投放/导流合作：0731-85581121</div>
  </div>
</template>
<script>
  import coopImg1 from '@/assets/images/cooperation/media/product_icon_kfwnr_1.png'
  import coopImg2 from '@/assets/images/cooperation/media/product_icon_kfwnr_2.png'
  import coopImg3 from '@/assets/images/cooperation/media/product_icon_kfwnr_3.png'
  import coopImg4 from '@/assets/images/cooperation/media/product_icon_kfwnr_4.png'
  import coopImg5 from '@/assets/images/cooperation/media/product_icon_kfwnr_5.png'
  import coopImg6 from '@/assets/images/cooperation/media/product_icon_kfwnr_6.png'
  export default {
    name:'storage',
    data() {
      return {
        // 合作内容图片URL
        coopContent:[
          {id:'coop1',imgUrl:coopImg1,title:'事件报道'},
          {id:'coop2',imgUrl:coopImg2,title:'资讯投稿'},
          {id:'coop3',imgUrl:coopImg3,title:'视频服务'},
          {id:'coop4',imgUrl:coopImg4,title:'投放合作'},
          {id:'coop5',imgUrl:coopImg5,title:'定向导流'},
          {id:'coop6',imgUrl:coopImg6,title:'定向推广'},
          {id:'coop7',imgUrl:'',title:''},
          {id:'coop8',imgUrl:'',title:''}
        ]
      }
    }
  }
</script>
<style scoped>
div.topImg{
  font-size: 0.2rem;
  margin-bottom: 1.5em;
}
.subTitle{
  height:1.375em;
  line-height: 1.375em;
  font-size: 0.24rem;
  color:#111;
  margin-top:2.08em;
  text-align: center;
}
.line{
  font-size: 0.2rem;
  width:6em;
  margin-bottom:2.5em;
  border-bottom:2px solid #ECECF1;
}
.centerLine{
  width:25px;
  height:5px;
  background:#7BAA17;
}
p{
  font-size: 0.16rem;
  color:#666;
}
div.subContent{
  margin-bottom:5.5em;
  text-align:center;
  font-size: 0.14rem;
  color:#666;
  text-align: right;
}
@media screen and (max-width: 768px) {
  P{
    font-size: 0.28rem;
    line-height: 1.71em;
  }
  div.subContent{
    margin-top: 1em;
  }
}
</style> 