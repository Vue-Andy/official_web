<template>
  <div class='purchase'>
    <div class="title">平台简介</div>
    <div class="cont flex">
      <el-row :gutter='10'>
        <el-col :xs='24' :sm='11'>
          <div class="text">{{mainText[0]}}<br/><br/>{{mainText[1]}}</div>
        </el-col>
        <el-col :xs='24' :sm='13'>
          <div class="topBox">
            <img src="../../assets/images/service/purchase/home_picture_2.png" alt="" class="fw">
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 四大优势 -->
    <div class="title">采购配件：</div>
    <div class="subTitle mar_auto">四大优势</div>
    <div class="line mar_auto">
      <div class="centerLine mar_auto"></div>
    </div>
    <div class="advantage pr">
      <el-row :gutter='10'>
        <el-col :xs='24' :sm='13'>
          <div class="leftItem">
            <div class="advantageItem flex" v-for='item in advantage' :key='item.id'>
              <div class="imgBox">
                <img class='fw' :src="item.imgUrl" alt="">
              </div>
              <div class="textBox">
                <p class="topText">{{item.topTitle}}</p>
                <p class="botText">{{item.botTitle}}</p>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs='0' :sm='3'>&nbsp;</el-col>
        <el-col :xs='24' :sm='8'>
          <div class="rightItem flex sa">
            <div class="exBox">
              <img :src="exImg" alt="" class="fw">
              <div class="ewmDesc">扫码体验配件平台</div>
            </div>
            <div class="gzhBox">
              <img :src="gzhImg" alt="" class="fw">
              <div class="ewmDesc">扫码查看公众号</div>
            </div>
          </div>
          <p class='contact' style='text-align:center;'>配件咨询热线：0731-85581121</p>
        </el-col>
      </el-row>
    </div>
    <!-- 业务范围 -->
    <div class="title">业务范围</div>
    <div class="text">业务范围覆盖全国36个省市及地区，共计超3万家维修单位在机械之家进行一站式零配件采购。</div>
    <div class="cont flex">
      <!-- busImg -->
      <div class="bus"><img src="../../assets/images/service/purchase/product_ywfw_map.png" alt="" class="fw"></div>
    </div>
  </div>
</template>
<script>
  // 四大优势图片
  import advanImg1 from '@/assets/images/service/purchase/product_sdys_quan.png'
  import advanImg2 from '@/assets/images/service/purchase/product_sdys_zhun.png'
  import advanImg3 from '@/assets/images/service/purchase/product_sdys_kuai.png'
  import advanImg4 from '@/assets/images/service/purchase/product_sdys_sheng.png'
  import exImg from '@/assets/images/service/purchase/product_sdys_qrcode_1.png'
  import gzhImg from '@/assets/images/service/purchase/product_sdys_qrcode_2.png'
  // 业务范围图片
  import busImg from '@/assets/images/service/purchase/product_ywfw_map.png'

  export default {
    name:'purchase',
    data() {
      return {
        mainText:['机械之家配件交易平台于2015年9月上线，专注于吊车、 泵车、挖机全车配件的在线找件、比价、交易。 ','目前，已完成超5600种机型匹配，拥有超70万可售SKU， 所供配件为厂家直销，正品保障。 至2019年中，机械之 家已为全国超4万家维修单位、技师、4S店等提供配件 一站式采购服务。目前用户在线可完成找件、确型、比 价、下单、配送等一系列服务。'],
        // 四大优势数据
        advantage:[
          {id:'advan1',imgUrl:advanImg1,topTitle:'吊车、泵车、挖机三大种类全车件，品类齐全',botTitle:'找配件，来机械之家就够了'},
          {id:'advan2',imgUrl:advanImg2,topTitle:'行业首个配件电子目录数据库，超600万条关系数据',botTitle:'精准确型，从此告别配错型号的烦恼'},
          {id:'advan3',imgUrl:advanImg3,topTitle:'全国联仓，自动匹配，自动出库',botTitle:'就在您身边的仓库，智能出库、急速发货'},
          {id:'advan4',imgUrl:advanImg4,topTitle:'厂家直销、支持一键找件比价',botTitle:'质量保证，拒绝假货，省钱更省心'}
        ],
        exImg:exImg,
        gzhImg:gzhImg,
        busImg:busImg
      }
    }
  }
</script>
<style scoped>
  .text{
    line-height: 30px;
    font-size: 0.16rem;
    margin-bottom:70px;
    color:#666;
  }
  /* 优势 */
  .subTitle{
    height:33px;
    line-height: 33px;
    font-size: 0.24rem;
    color:#111;
    margin-top:40px;
    text-align: center;
  }
  .line{
    width:120px;
    margin-bottom:45px;
    border-bottom:2px solid #ECECF1;
  }
  .centerLine{
    width:25px;
    height:5px;
    background:#7BAA17;
  }
  div.advantageItem{
    font-size:0.12rem;
    margin-bottom:10.3%;
  }
  div.rightItem{
    font-size:0.01rem;
    margin-top:7.5em;
  }
  @media screen and (min-width: 768px) {
    div.rightItem {
      margin-left:30px;
    }
  }
  div.rightItem>div{
    width:40%;
    text-align: center;
  }
  div.rightItem .ewmDesc{
    font-size: 0.14rem;
    color:#999;
    margin-top:20px;
  }
  div.imgBox{
    width:12.88%;
    align-self: center;
  }
  div.textBox{
    width:83.9%;
  }
  .topText{
    font-size: 0.18rem;
    margin-top:0.25em;
    margin-bottom:0.45em;
    color:#111;
  }
  .botText{
    font-size: 0.14rem;
    color:#666;
  }
  .exBox{
    align-self: center;
    width:41.6%;
  }
  .gzhBox{
    align-self: center;
    width:38.8%;
  }
  div.bus{
    margin-bottom:150px;
  }
  p.contact{
    font-size: 0.18rem;
    margin-top: 1.44em;
    margin-left:30px;
    position: absolute;
    bottom:3em;
  }
  
  @media screen and (max-width: 768px) {
    .text{
      font-size: 0.28rem;
      line-height: 1.41em;
      margin-bottom: 2em;
    }
    .topText{
      font-size: 0.24rem;
      color:#111;
      line-height: 1.75em;
      margin:0;
      padding:0;
    }
    .botText{
      font-size: 0.18rem;
      line-height: 1.38em;
    }
    div.rightItem{
      padding:2em;
      margin-top:1em;
      font-size: 0.2rem;
      padding-bottom:0;
    }
    p.contact{
      bottom:0;
      margin-left: 0;
      width:100%;
      font-size: 0.24rem;
      position:static;
    }
    div.rightItem .ewmDesc{
      font-size: 0.2rem;
    }
  }
</style> 