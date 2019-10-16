<template>
  <div class='repaireSite'>
    <div class="title">维修厂合作</div>
    <p class="titleDesc">机械之家配件板块，专注于吊车、泵车、挖机全车配件的找件、确型、比价、交易；目前机械之家可售SKU数已超70万，配件关系数超640万条，几乎覆盖所主流机型。至今，机械之家已为全国超过4万家维修单位配件一站式服务。</p>
    <div class="subTitle mar_auto hidden-xs-only">配件合作</div>
    <div class="line mar_auto hidden-xs-only">
      <div class="centerLine mar_auto"></div>
    </div>
    <div class="title hidden-sm-and-up">配件合作</div>
    <p>吊、泵、挖全车件精准确型、供应。机械之家根据行业资源分布，已建长沙、广州、徐州3个中心仓全向全国各地调拨货物。未来机械之家将在全国拓展38个前置仓，真正做到身边的货、渠道的价，又快又省。</p>
    <div class="advantage">
      <!-- <el-row>
        <el-col :xs='24' :sm='12'>
          <div class="rightItem flex">
            <div class="emptyBox hidden-xs-only" style='font-size:0.2rem;height:20em;'></div>
            <span>四大优势</span>
          </div>
        </el-col>
        <el-col :xs='24' :sm='12'>
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
      </el-row> -->
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
              <div class="ewmDesc">扫码体验配件平台</div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="subTitle mar_auto hidden-xs-only">金融合作</div>
    <div class="line mar_auto hidden-xs-only">
      <div class="centerLine mar_auto"></div>
    </div>
    <div class="title hidden-sm-and-up mt70">金融合作</div>

    <p>白条服务——采购配件时要账期难，经常出现不按期结算就不给发货现象，维修钱还没到手就先垫付钱进去，资金成本重。在机械之家，资质合格的维修单位采购配件无需现付，无需为账期谈判耗费时间精力，可直接使用白条服务，先拿配件后付钱。</p>
    <div class='baitiao'><img src="../../assets/images/cooperation/repaireSite/cooperation_picture_jrhz_1.png" alt="" class="fw"></div>
    <p>保险定保合作——机械之家与国内多家龙头保险企业合作，每年为超万台工程机械设备提供保险服务。为更好的服务广大在保工程机械设备，招募合规工程机械设备维修企业，予以工程机械设备定保服务。</p>
    <div class='baitiao'><img src="../../assets/images/cooperation/repaireSite/cooperation_picture_jrhz_2.png" alt="" class="fw"></div>
  </div>
</template>
<script>
  // 四大优势图片
  import advanImg1 from '@/assets/images/cooperation/repaireSite/product_sdys_quan.png'
  import advanImg2 from '@/assets/images/cooperation/repaireSite/product_sdys_zhun.png'
  import advanImg3 from '@/assets/images/cooperation/repaireSite/product_sdys_kuai.png'
  import advanImg4 from '@/assets/images/cooperation/repaireSite/product_sdys_sheng.png'

  import exImg from '@/assets/images/service/purchase/product_sdys_qrcode_1.png'
  import gzhImg from '@/assets/images/service/purchase/product_sdys_qrcode_2.png'
  export default {
    name:'repaire',
    data() {
      return {
        // 四大优势数据
        advantage:[
          {id:'advan1',imgUrl:advanImg1,topTitle:'吊车、泵车、挖机三大种类全车件，品类齐全',botTitle:'找配件，来机械之家就够了'},
          {id:'advan2',imgUrl:advanImg2,topTitle:'行业首个配件电子目录数据库，超600万条关系数据',botTitle:'精准确型，从此告别配错型号的烦恼'},
          {id:'advan3',imgUrl:advanImg3,topTitle:'全国联仓，自动匹配，自动出库',botTitle:'就在您身边的仓库，智能出库、急速发货'},
          {id:'advan4',imgUrl:advanImg4,topTitle:'厂家直销、支持一键找件比价',botTitle:'质量保证，拒绝假货，省钱更省心'}
        ],
        exImg:exImg,
        gzhImg:gzhImg
      }
    },
    created() {
      console.log(22)
      document.getElementById('app').scrollTo(0,0)
      console.log(33)
    }
  }
</script>
<style scoped>
.repaireSite > P{
  font-size: 0.16rem;
  color:#666;
  margin-bottom:2.5em;
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
/* 优势 */
div.advantage{
  font-size: 0.2rem;
  margin-top:2em;
}
div.advantageItem{
  font-size: 0.2rem;
  margin-bottom:2.5em;
}
div.rightItem{
  font-size:0.01rem;
  margin-top:7.5em;
  color:#999;
  text-align: center;
}
div.rightItem > div{
  width:40%;
}
div.rightItem .ewmDesc{
  margin-top:20px;
}
div.advantageItem:last-child{
  margin:0;
}
div.rightItem > span{
  font-size: 0.24rem;
  width:100%;
  text-align: center;
  align-self: center;
  color:#111;
}
div.baitiao{
  font-size: 0.2rem;
  margin:2em 0;
}
div.imgBox{
  width:12.88%;
}
div.textBox{
  width:83.9%;
}
.topText{
  font-size: 0.18rem;
  margin-top:0.33em;
  color:#111;
}
.botText{
  font-size: 0.14rem;
  color:#666;
}
@media screen and (max-width: 768px) {
  .repaireSite > P{
    font-size: 0.28rem;
    line-height: 1.71em;
  }
  div.rightItem .ewmDesc{
    font-size: 0.2rem;
  }
}
</style> 