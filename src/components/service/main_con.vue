<template>
  <div class='defaultService'>
    <div class="title">平台简介</div>
    <div class="cont flex">
      <el-row :gutter='10'>
        <el-col :xs='24' :sm='8'>
          <div class="imgBox">
            <img class='fw' src="../../assets/images/service/purchase/product_picture_ptjj.png" alt="">
          </div>
        </el-col>
        <el-col :xs='24' :sm='16'>
          <div class="text">{{texts[0]}}<br><br>{{texts[1]}}</div>
        </el-col>
      </el-row>
    </div>
    <div class="title">产品服务</div>
    <div class="cont flex">
      <el-row :gutter='10'>
        <el-col :xs='24' :sm='12' v-for='item in serviceClassfy' :key='item.title'>
          <div class="itemBox">
            <div class="imgItem mar_auto">
              <img class='fw' :src="item.imgUrl" alt="">
            </div>
            <div class="name mt30">{{item.title}}</div>
            <p class="desc">{{item.pContent[0]}}</p>
            <p class="desc">{{item.pContent[1]}}</p>
            <div class="goCheck mt70 cursor" @click='jump(item.path)'>去查看<i></i></div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  // 平台简介图
  // import stageIntroImg from '@/assets/images/service/purchase/product_picture_ptjj.png'
  export default {
    name:'main_con',
    data() {
      return {
        // stageIntor:stageIntroImg,
        texts:[
          '机械之家面向全国提供吊、泵、挖三大工程类机械设备全品类配件线上采购服务，工程机械设备保险服务。目前，机械之家已完成超3000种机型匹配，拥有70万+可售SKU，所供配件为厂家直销，正品保障。',
          '机械之家已形成从配件搜索、报价比价、在线结算、配送、售后的交易服务闭环。同时秉承着开放共赢的理念，将对庞大的数据库进行共享，连接机械后市场其他领域，如保险金融、维修、二手机等，引领并推动着整个行业的优化升级，实现“成为机械行业最专业的后市场平台”的愿景!'
        ],
        serviceClassfy:[
          {
            imgUrl:require('@/assets/images/service/purchase/product_icon_caigou.png'),
            title:'配件采购',
            pContent:['在线找件、比价、确型、交易','挖机、吊车、泵车全系车型，70万+可售SKU'],
            path:'/service/purchase'
          }, {
            imgUrl:require('@/assets/images/service/purchase/product_icon_S2B.png'),
            title:'配件S2B服务',
            pContent:['海量客户、全国联仓','下沉一线市场、全国铺货、深耕需求'],
            path:'/service/sToB'
          }, {
            imgUrl:require('@/assets/images/service/purchase/product_icon_fuwu.png'),
            title:'保险服务',
            pContent:['在线测算，比价，量身定制','专业团队协助理赔，省钱更省心'],
            path:'/service/insurance'
          }, {
            imgUrl:require('@/assets/images/service/purchase/product_icon_meiti.png'),
            title:'媒体服务',
            pContent:['行业最大自媒体矩阵','内容合作、投放、报道、导流，精准触达'],
            path:'/service/media'
          }
        ]
      }
    },
    methods:{
      jump(path) {
        this.$router.push(path)
      }
    },
    beforeCreate() {
    }
  }
</script>
<style scoped>
  div.cont.main{
    margin-bottom:80px;
  }
  .imgItem{
    width:24.6%;
  }
  .text{
    line-height: 30px;
    font-size: 0.16rem;
    margin-bottom:70px;
  }
  .itemBox{
    padding:50px 0;
    margin-bottom:70px;
    text-align: center;
    border:1px solid rgba(226,226,226,1);
    border-radius: 4px;
  }
  .itemBox .name{
    font-size: 0.20rem;
    color:#333;
    margin-bottom:15px;
  }
  .itemBox .desc{
    font-size: 0.16rem;
    line-height: 22px;
    color:#666;
  }
  .itemBox .goCheck{
    font-size: 0.20rem;
    line-height:27px;
    color:#7BAA17;
  }
  .itemBox .goCheck i{
    display:inline-block;
    width:4%;
    height:15px;
    background-image:url(../../assets/images/service/purchase/product_icon_arrow_green.png);
    background-repeat: no-repeat;
    margin-left:5px;
    vertical-align: middle;
  }
</style> 