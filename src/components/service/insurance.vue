<template>
  <div>
    <div class="title">简介</div>
    <p>
      <span>保险渠道服务</span><br>
      机械之家与7大保险集团合作工程机械设备险，在线测算+比价，量身定制；专业团队理赔省钱更省心。<br><br>
      <span>供应链金额</span><br>
      机械之家与知名金融单位合作，对行业开展仓单融资、采购白条、保险分期、票据秒贴等金融服务，大幅降低您的资金占用成本，扩大周转能力，助力您周转更简单。
    </p>
    <div class="topImg">
      <!-- mainImg -->
      <img class='fw' src="../../assets/images/service/insurance/top_img.jpg" alt="">
    </div>
    <div class="center_title">{{titles[0]}}</div>
    <div class="sub_title">{{sub_titles[0]}}</div>
    <!-- 机械之家保险业务简介 -->
    <div class="imgBox busIntro flex">
      <el-row :gutter='10'>
        <el-col :xs='24' :sm='8' v-for='item in busIntro' :key='item.id'>
          <div class="imgItem">
            <div class='mar_auto subImgItem'>
              <el-row>
                <el-col :xs='10' :sm='24'>
                  <img class='fw' :src="item.imgUrl" alt="">
                </el-col>
                <el-col :xs='14' :sm='24'>
                  <p>{{item.desc}}</p>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>
      
    </div>
    <!-- 精选大平台，为您量身定制保险方案 -->
    <div class="imgBox stage">
      <div class="center_title">{{titles[1]}}</div>
      <div class="sub_title">{{sub_titles[1]}}</div>
      <div class="cors flex">
        <div class="imgItem1" v-for='(item,index) in stageImgs' :key='"stage"+index'>
          <div class='mar_auto subImgItem1'>
            <img class='fw' :src="item" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="tip">多个合作协会指定服务商&lt;</div>
    <!-- 4年工程机械服务经验，累计服务60000多用户 -->
    <div class="center_title">{{titles[2]}}</div>
    <div class="sub_title">{{sub_titles[2]}}</div>
    <div class="imgBox serve">
      <div class="bigImg mar_auto">
        <!-- service.mainServiceImg -->
        <img class='fw' src="../../assets/images/service/insurance/serve.jpg" alt="">
      </div>
    </div>
    <div class="contact flex mar_auto">
      <div class="erweima">
        <img src="../../assets/images/service/insurance/erweima.png" alt="" class="fw">
      </div>
      <div class="method">
        <div class="methodItem flex">
          <div class="contactBox">
            <img :src="service.serviceWX" alt="" class="wx fw">
          </div>
          <div class="desc">识别二维码免费测算保费</div>
        </div>
        <div class="methodItem flex">
          <div class="contactBox">
            <img :src="service.serviceTel" alt="" class="wx fw">
          </div>
          <div class="desc">保险咨询：4006002166</div>
        </div>
      </div>
    </div>
    <!-- 协助理赔 -->
    <div class="center_title">{{titles[3]}}</div>
    <div class="sub_title">{{sub_titles[3]}}</div>
    <div class="assist">
      <div class="payBox mar_auto flex">
        <el-row :gutter='10'>
          <el-col :xs='12' :sm='6' v-for='(item,index) in assistPayment' :key="item.id">
            <div class="payItem">
              <div class="payTitle">{{item.title}}</div>
              <p v-if='index !== 3'>{{item.desc}}</p>
              <p v-if='index === 3'>{{item.desc[0]}} <br> {{item.desc[1]}}</p>
              <div class="icon">
                <img :src="item.imgUrl" alt="" class="fw">
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 推荐 -->
    <div class="recom">
      <div class="center_title">{{titles[4]}}</div>
      <div class="sub_title">{{sub_titles[4]}}</div>
      <div class="recText mar_auto">
        <p>{{recomData.content}}</p>
        <p class="idInfo">{{recomData.idInfo}}</p>
      </div>
      <div class="GYF">
        <img class='fw' :src="recomData.recomImg" alt="">
      </div>
    </div>  
    <!-- 解决难题 -->
    <div class="center_title">{{titles[5]}}</div>
    <div class="sub_title">{{sub_titles[5]}}</div>
    <div class="pop mar_auto">{{solveData.content}}</div>
    <div class="bottomImg">
      <img :src="solveData.solveImg" alt="" class="fw">
    </div>

    <div class="title">供应链金融</div>
    <div class="financeBox">
      <el-row :gutter='10'>
        <el-col :xs='24' :sm='12' v-for='item in supplierChain' :key='item.id'>
          <div class="financeItem flex">
            <div class="financeImgBox">
              <img :src="item.imgUrl" alt="" class='fw'>
            </div>
            <div class="text">
              <p>{{item.title1}}</p>
              <p>{{item.title2}}</p>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  // 主图url
  import mainImg from '@/assets/images/service/insurance/top_img.jpg'
  // 业务简介图片
  import busIntroImg1 from '@/assets/images/service/insurance/insur4.png'
  import busIntroImg2 from '@/assets/images/service/insurance/insur3.png'
  import busIntroImg3 from '@/assets/images/service/insurance/insur2.png'
  // 精选大平台图片
  import stageImg1 from '@/assets/images/service/insurance/china_renbao.png'
  import stageImg2 from '@/assets/images/service/insurance/china_renshou.png'
  import stageImg3 from '@/assets/images/service/insurance/taipingyang.png'
  import stageImg4 from '@/assets/images/service/insurance/hunandiaozhuang.png'
  import stageImg5 from '@/assets/images/service/insurance/hunanbengche.png'
  import stageImg6 from '@/assets/images/service/insurance/taikang.png'
  import stageImg7 from '@/assets/images/service/insurance/china_pingan.png'
  import stageImg8 from '@/assets/images/service/insurance/nanjingdiaozhuang.png'
  import stageImg9 from '@/assets/images/service/insurance/guangxidiaozhuang.png'
  import stageImg10 from '@/assets/images/service/insurance/shaoxingdingli.png'
  // 服务相关图片
  import mainServiceImg from '@/assets/images/service/insurance/serve.jpg'
  import serviceEWM from '@/assets/images/service/insurance/erweima.png'
  import serviceWX from '@/assets/images/service/insurance/wx.png'
  import serviceTel from '@/assets/images/service/insurance/tel.png'
  // 协助理赔相关图片
  import assistImg1 from '@/assets/images/service/insurance/1.png'
  import assistImg2 from '@/assets/images/service/insurance/2.png'
  import assistImg3 from '@/assets/images/service/insurance/3.png'
  import assistImg4 from '@/assets/images/service/insurance/4.png'
  // 推荐相关图片
  import recomImg from '@/assets/images/service/insurance/people.png'
  // 解决难题相关图片
  import solveImg from '@/assets/images/service/insurance/7.png'
  // 供应链金融数据
  import chainImg1 from '@/assets/images/service/insurance/service_icon_gyljr_01.png'
  import chainImg2 from '@/assets/images/service/insurance/service_icon_gyljr_02.png'
  import chainImg3 from '@/assets/images/service/insurance/service_icon_gyljr_03.png'
  import chainImg4 from '@/assets/images/service/insurance/service_icon_gyljr_04.png'


  export default {
    name:'insurance',
    data() {
      return {
        // 主图url
        mainImg:mainImg,
        titles:[
          '机械之家保险业务简介',
          '精选大平台，为您量身定制保险方案',
          '4年工程机械服务经验，累计服务60000多用户',
          '为用户提供协助理赔服务，让理赔更加省时省心',
          '超6万车主的选择，多家协会和大公司推荐',
          '4年，机械之家致力解决您的保险难题'
        ],
        sub_titles:[
          '志在成为工程机械领域专业、独特和值得信赖的第三方保险服务平台',
          '去除保险销售的中间环节，帮您省去传统保险销售中的中介费用，明明白白买保险！',
          '我们根据您的实际需求，依靠6万多家车主的选择依据，从海量产品库中选择合适您的保障！',
          '我们致力于连接保险公司和消费者，打造可靠、高效、让人安心的一站式互联网保险服务平台',
          '不仅仅是销售一份保单，我们用心对待您的每一份保障需求',
          '客户第一，专业可靠，我们用心为您和您的家人提供贴心的一站式保险服务，让您省心、安心！'
        ],
        // 业务简介数据
        busIntro:[
          {id:'bus1',imgUrl:busIntroImg1,desc:'机械之家保险是机械之家后市场生态体系的重要环节，公司通过整合互联网和保险两端的优势资源'},
          {id:'bus2',imgUrl:busIntroImg2,desc:'以用户需求为导向，提供独特的售前智能投顾、售中专业咨询和售后一站式理赔服务'},
          {id:'bus3',imgUrl:busIntroImg3,desc:'公司以帮助用户提升对专业保险的认知、指导用户正确使用保险产品转移经营分险为己任'}
        ],
        // 精选大平台数据
        stageImgs:[stageImg1,stageImg2,stageImg3,stageImg4,stageImg5,stageImg6,stageImg7,stageImg8,stageImg9,stageImg10],
        // 服务相关数据
        service:{
          mainServiceImg:mainServiceImg,
          serviceEWM:serviceEWM,
          serviceWX:serviceWX,
          serviceTel:serviceTel
        },
        // 协助理赔相关数据
        assistPayment:[
          {id:'assit1',imgUrl:assistImg1,title:'选购更省心',desc:'机选各家保险公司产品货比三家，不花冤枉钱'},
          {id:'assit2',imgUrl:assistImg2,title:'服务更称心',desc:'专业保险服务团队保驾护航专业理赔顾问团队'},
          {id:'assit3',imgUrl:assistImg3,title:'体验更舒心',desc:'专注保险行业十余年量身定制保险方案'},
          {id:'assit4',imgUrl:assistImg4,title:'理赔更放心',desc:['一对一','专人理赔协助']},
        ],
        // 推荐相关数据
        recomData:{
          recomImg,
          content:'买保险，我选机械之家！我公司有10多台吊车都是找机械之家购买的。机械之家不仅能帮您选择最合适的保险方案，如果不慎出险还有协助理赔服务，帮您全程跟踪！',
          idInfo:'——山东盛辉起重运输有限公司 总经理 郭亚峰'
        },
        // 解决难题相关数据
        solveData:{
          solveImg,
          content:'服务好，价格优惠。他们有很好的团队，他们非常有耐心的解释了险种内容，而且保费比当地便宜。'
        },
        // 供应链金融数据
        supplierChain:[
          {id:'chain1',imgUrl:chainImg1,title1:'仓单融资',title2:'降低仓储资金占用，轻松铺货、扩大周转量'},
          {id:'chain2',imgUrl:chainImg2,title1:'采购白条',title2:'降低采购资金占用，轻松采购，扩大周转量'},
          {id:'chain3',imgUrl:chainImg3,title1:'保险分期',title2:'设备保险分期，轻松购险，享受保障更简单'},
          {id:'chain4',imgUrl:chainImg4,title1:'票据秒贴',title2:'多家银行比价，简单兑换，快速提现，增加现金流'}
        ]
      }
    }
  }
</script>
<style scoped>
@import './insurance.css'
</style> 