<template>
  <div class='sToB'>
    <div class="title">简介</div>
    <div class="text">{{mainText}}</div>
    <div class="topImg">
      <img src="../../assets/images/service/sToB/product_gylfw_jj.jpg" alt="" class="fw">
    </div>
    <div class="title">给供应商的价值</div>
    <div class="contBox flex">
      <el-row :gutter='10'>
        <el-col :xs='24' :sm='12' v-for="item in values" :key='item.id'>
          <div class="contItem flex">
            <div class="left">{{item.method}}</div>
            <div class="right">
              <p class='title'>{{item.title}}</p>
              <p>{{item.content}}</p>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="title">助力供应商6大提升</div>
    <div class="contBox flex">
      <el-row :gutter='10'>
        <el-col :xs='24' :sm='12' v-for="item in promotions" :key='item.id'>
          <div class="boxItem flex">
            <div class="left"><img class='fw' :src="item.imgUrl" alt=""></div>
            <div class="right">
              <p class="title">{{item.title}}</p>
              <p>{{item.content}}</p>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  // 6大提升相关图片
  import img1 from '@/assets/images/service/sToB/product_icon_1.png'
  import img2 from '@/assets/images/service/sToB/product_icon_2.png'
  import img3 from '@/assets/images/service/sToB/product_icon_3.png'
  import img4 from '@/assets/images/service/sToB/product_icon_4.png'
  import img5 from '@/assets/images/service/sToB/product_icon_5.png'
  import img6 from '@/assets/images/service/sToB/product_icon_6.png'
  export default {
    name:'sToB',
    data() {
      return {
        mainText:'机械之家打破传统配件供应链的桎梏，实行标准化管理。通过ERP系统，配件供应商与机械之家交易系统进行紧密集成，可实现库存在线与同步，自动接收机械之家交易平台订单，真正实现配件交易过程的去人化——询价、接单、结算各个环节均无需人工介入，为供应商释放了人工成本压力，最终实现资源优化配置和提升供应链管理效率的目的。',
        // 给供应商的价值相关数据
        values:[
          {id:'val1',method:'加',title:'全网覆盖，增加销售',content:'供应商业务将由区域转变为全国更多客源，助销量大幅增长'},
          {id:'val2',method:'减',title:'缩减环节，降低成本',content:'大幅减少中间环节，自动交易数据化后台支持，降低人工成本'},
          {id:'val3',method:'乘',title:'提升效率，优化管理',content:'大数据管理库存，提升周转降低资金占用；集约式仓储，提升流通效率'},
          {id:'val4',method:'除',title:'去除人为干扰、实现自动化交易',content:'去除线下欠款多、回款难、吃回扣等规避员工过度参与业务的隐藏风险'},
        ],
        // 6大提升相关数据
        promotions:[
          {id:'pro1',imgUrl:img1,title:'生意做到全中国;',content:'做深存量市场，扩大增量市场，将原来的服务区域范围客户变为服务全国范围客户，提升市场占有面积。'},
          {id:'pro2',imgUrl:img2,title:'产品标准化、交易自动化、大幅降低专业人员成本',content:'交易环节从高度依赖人的专业性，经由产品标准化梳理和大数据辅助，转为由电脑自动匹配完成。'},
          {id:'pro3',imgUrl:img3,title:'品牌商品标准化标准商品品牌化',content:'对商品进行标准化管理，通过平台推广传播，提升产品知名度，进而实现标准商品品牌化。'},
          {id:'pro4',imgUrl:img4,title:'全面降低运营风险促进企业成功转型',content:'线上交易回款周期短，供应链金融降低资金占，自动化交易规避员工深度涉及业务后的潜在风险，促进企业转型成功。'},
          {id:'pro5',imgUrl:img5,title:'库存周转高效，备货有章可循，降低资金占用',content:'智能仓储系统，依据市场需求波动大数据辅助备货，降低无效库存，释放资金压力，集约式仓储系统降低库存成本。'},
          {id:'pro6',imgUrl:img6,title:'促进公平交易助力健康发展',content:'平台交易规则严明、公正，倡导行业有序竞争，促进企业健康发展。'}
        ]
      }
    }
  }
</script>
<style scoped>
  .text{
    line-height: 30px;
    font-size: 0.16rem;
  }
  div.topImg{
    font-size: 0.2rem;
    margin:2em 0 5em 0;
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
  }
  div.contItem div.left{
    width:2.8em;
    height:2.8em;
    background:#7BAA17;
    border-radius: 50%;
    text-align:center;
    line-height: 2.8em;
    font-weight: bold;
    color:#fff;
    align-self: center;
  }
  div.contItem div.right{
    font-size: 0.2rem;
    width:16em;
  }
  p{
    font-size: 0.16rem;
    color:#666;
  }
  
  div.contItem p.title{
    font-weight: bold;
    line-height:1.5em;
    margin-bottom:0.5em;
  }
  div.boxItem p.title{
    font-weight: bold;
    margin-bottom:0.5em;
  }
  div.boxItem{
    font-size: 0.20rem;
    box-sizing: border-box;
    height:9.6em;
    margin-bottom:4.6em;
    padding:1.65em 1.2em;
    border:1px solid #E2E2E2;
    overflow: hidden;
  }
  div.boxItem .left{
    width:16.3%;
    height:3.2em;
    align-self: center;
  }
  div.boxItem .right{
    width:69.5%;
    height:100%;
    align-self: center;
  }
  div.imgBox{
    width:24.6%;
    margin-bottom:1.5em;
  }
  @media screen and (max-width: 768px) {
    .text{
      font-size: 0.28rem;
      line-height: 1.71em;
      margin-bottom: 2em;
      color:#666;
    }
    div.contItem{
      font-size: 0.16rem;
      padding:1em;
    }
    div.contItem div.left{
      font-size: 0.32rem;
      width:2.687em;
      height:2.687em;
      line-height: 2.687em;
    }
    div.contItem div.right{
      font-size:0.28rem;
      width:18.5em;
    }
    div.contItem p.title + p{
      font-size: 0.24rem;
    }
    div.boxItem .left{
      width:3.2em;
      height:3.2em;
    }
    div.boxItem .right{
      font-size: 0.28rem;
      width:18.5em;
    }
    div.boxItem{
      height:auto;
    }
    p{
      font-size: 0.28rem;
    }
    div.boxItem p.title{
      font-size: 0.28rem;
    }
    div.boxItem p.title + p{
      font-size: 0.24rem;
    }
  }
</style> 