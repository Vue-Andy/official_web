<template>
  <div>
    <div class="imgBox">
      <img src="../../assets/images/cooperation/insurance/topImg.png" alt="" class="fw">
    </div>
    <div class="center_title">为什么选择我们</div>
    <div class="sub_title">志在成为工程机械领域专业、独特和值得信赖的第三方保险服务平台</div>
    <div class="professional flex">
      <div class="imgItem1" v-for='item in profession' :key='item.id'>
        <div class="innerBox mar_auto">
          <img class='fw' :src="item.imgUrl" alt="">
          <p>{{item.title}}</p>
        </div>
      </div>
    </div>
    <div class="polygon">
      <div class="center_title fiveAd">五大优势让您轻松赚钱</div>
    </div>
    <div class="advantage flex">
      <div class="advanItem">
        <div class="circle flex mar_auto">
          <div class="text">保费</div>
          <div class="text">最低</div>
        </div>
      </div>
      <div class="arrowBox">
        <img src="../../assets/images/cooperation/insurance/doubleArrow.png" alt="" class="fw doubleArrow">
      </div>
      <div class="advanItem">
        <div class="circle flex mar_auto">
          <div class="text">战略</div>
          <div class="text">合作</div>
        </div>
      </div>
       <div class="arrowBox">
        <img src="../../assets/images/cooperation/insurance/doubleArrow.png" alt="" class="fw doubleArrow">
      </div>
      <div class="advanItem">
        <div class="circle flex mar_auto">
          <div class="text">专业</div>
          <div class="text">顾问</div>
        </div>
      </div>
    </div>
    <div class="advantageText flex">
      <div class="textItem">为用户选择最优保险承保方案，车船税低至16元/吨</div>
      <div class="textItem">中国人保、中国太平洋、中国平安战略合作单位</div>
      <div class="textItem">专业保险顾问为您设计最合理的保障方案，最大程度降低保费成本</div>
    </div>
    <div class="advantage1 flex mar_auto">
      <div class="advanItem">
        <div class="circle flex mar_auto">
          <div class="text">保费</div>
          <div class="text">分期</div>
        </div>
      </div>
      <div class="arrowBox">
        <img src="../../assets/images/cooperation/insurance/doubleArrow.png" alt="" class="fw doubleArrow">
      </div>
      <div class="advanItem">
        <div class="circle flex mar_auto">
          <div class="text">售后</div>
          <div class="text">理赔</div>
        </div>
      </div>
    </div>
    <div class="advantageText flex lastTwo mar_auto">
      <div class="textItem">无抵押保费分期，首付20%，支持您事业发展</div>
      <div class="textItem">专业售后理赔指导，让您无后顾之忧</div>
    </div>
    <div class="center_title"><span>一</span>合作流程<span>一</span></div>
    <div class="procedure mar_auto flex">
      <div class='cooItem' v-for='(item,index) in procedure' :key='item.id' :class='{bb:index <=2,br:indexStr.indexOf(index) > -1}'>
        <div class='imgItem2 mar_auto' :class='{logoImg:index === 4}'>
          <img :src="item.imgUrl" alt="" class="fw">
          <p v-if='index !== 4'>{{item.title}}</p>
        </div>
      </div>
    </div>
    <div class="query"><img src="../../assets/images/cooperation/insurance/footer.png" alt="" class="fw"></div>
  </div>
</template>
<script>
  // 专业三项图片
  import team from '@/assets/images/cooperation/insurance/team.png'
  import quality from '@/assets/images/cooperation/insurance/quality.png'
  import service from '@/assets/images/cooperation/insurance/service.png'
  // 合作流程图片
  import procedure1 from '@/assets/images/cooperation/insurance/apply.png'
  import procedure2 from '@/assets/images/cooperation/insurance/coop.png'
  import procedure3 from '@/assets/images/cooperation/insurance/revoke.png'
  import procedure4 from '@/assets/images/cooperation/insurance/bill.png'
  import procedure5 from '@/assets/images/cooperation/insurance/logo.png'
  import procedure6 from '@/assets/images/cooperation/insurance/returnPoint.png'

  export default {
    name:'insurance',
    data() {
      return {
        indexStr: '0134',
        // 专业三项
        profession:[
          {id:'pro1',imgUrl:team,title:'专业团队'},
          {id:'pro2',imgUrl:quality,title:'专业品质'},
          {id:'pro3',imgUrl:service,title:'专业服务'}
        ],
        // 合作流程
        procedure:[
          {id:'procedure1',imgUrl:procedure1,title:'申请代理'},
          {id:'procedure2',imgUrl:procedure2,title:'合作洽谈'},
          {id:'procedure3',imgUrl:procedure3,title:'授权代理'},
          {id:'procedure4',imgUrl:procedure4,title:'出单对接'},
          {id:'procedure5',imgUrl:procedure5,title:''},
          {id:'procedure6',imgUrl:procedure6,title:'保单返点'}
        ]
      }
    }
  }
</script>
<style scoped>
div.imgBox > .topInfo1{
  font-size: 0.38rem;
  width:72%;
  color:#68A71F;
  margin-bottom:27px;
}
div.imgBox > .topInfo2{
  width:94.5%;
  padding:4%;
  font-size: 0.18rem;
  background: #68A71F;
  color:#fff;
  border-radius:20px;
}
div.center_title{
  height:33px;
  line-height: 33px;
  font-size: 0.24rem;
  color:#111;
  text-align: center;
}
div.fiveAd{
  margin:2em 0;
}
div.center_title > span{
  color:#999;
  margin:0 29px;
}
div.sub_title{
  margin-top:17px;
  font-size: 0.18rem;
  color:#505050;
  text-align:center;
}
/* 专业 */
div.professional{
  margin-top:49px;
  justify-content: space-around;
}
div.professional .imgItem1{
  padding-top:3%;
  padding-bottom:1%;
  width:30.5%;
  box-shadow:0px 10px 25px 0px rgba(0, 0, 0, 0.1);
  border-radius: 4%;
  background:#fff;
}
div.professional .imgItem1 > div{
  font-size: 0.30rem;
  color:#000;
  text-align: center;
  width:57.5%;
}
div.polygon{
  font-size:2.12rem;
  padding-top:0.8em;
}
/* 优势 */
div.advantage{
  font-size: 0.2rem;
  justify-content: space-around;
}
div.advanItem{
  width:19.4%;
}
div.advantageText.lastTwo{
  width:72%;
  margin-bottom:5em;
}
div.advantageText .textItem{
  width:30%;
}
div.circle{
  flex-direction: column;
  justify-content: center;
  font-size: 0.33rem;
  width:4.3em;
  height:4.3em;
  border-radius: 50%;
  background:#68A71F;
  color:#fff;
  text-align:center;
  align-self: center;
}
div.arrowBox{
  width:2.85%;
  align-self: center;
}
div.textItem{
  width:100%;
  font-size:0.20rem;
  margin-top:1.6em;
  color:#000;
}
div.advantage1{
  font-size: 0.2rem;
  width:72%;
  margin-top:5em;
  margin-bottom:2.5em;
}
div.advantage1 .advanItem{
  width:27%;
}
div.advantage1 .arrowBox{
  width:3.96%;
}
/* 合作流程 */
div.procedure{
  width:84.2%;
  margin-top:30px;
  margin-bottom:26px;
}
div.cooItem{
  width:33.3%;
  box-sizing: border-box;
  padding:20px 0;
}
div.imgItem2{
  width:35.3%;
  margin-bottom:15px;
}
div.cooItem.bb{
  border-bottom:2px solid #68A71F;
}
div.cooItem.br{
  border-right:2px solid #68A71F;
}
div.imgItem2 > p{
  font-size: 0.21rem;
  color:#000;
  text-align:center;
}
div.logoImg{
  width:40%;
  transform:translateY(10%);
}
/* 底部图片 */
@media screen and (min-width: 768px) {
  div.polygon {
    background-image: url(../../assets/images/cooperation/insurance/polygon.png);
    background-size: contain;
    background-repeat: no-repeat;
    margin-top:-10%;
    height:1em;
  }
  div.advantage {
    margin-top:-7%;
  }
  div.query {
    font-size: 0.2rem;
    margin-bottom:5em;
  }
}
@media screen and (max-width: 768px) {
  div.imgBox{
    padding:1em;
  }
  div.center_title{
    font-size: 0.32rem;
  }
  div.circle{
    font-size: 0.28rem;
  }
  div.textItem{
    font-size: 0.18rem;
  }
}
</style> 