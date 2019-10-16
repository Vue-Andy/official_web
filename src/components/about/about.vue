<template>
  <section class="about overflow_hidden">
    <div class="empty hidden-xs-only"></div>
    <!-- 顶部图片 topImg-->
    <div class="top overflow_hidden"><img class='fw' src="../../assets/images/index/about.jpg" alt=""></div>
    <div class="main flex w1200 mar_auto">
      <!-- 左侧大纲 -->
      <div class="theme_container hidden-xs-only">
        <div class="syllabus overflow_hidden" :class='{isFix:isFix}'>
          <div class="syllItem" v-for='(item,index) in syllItems' :key='item.tar' @click='jumpToDetail(item.tar,index)' :class='{active:contIndex===index}'>{{item.content}}</div>
        </div>
      </div>
      <div class="details">
        <!-- 公司简介 -->
        <div class="detail intro">
          <div id="intro" class="anchor first"></div>
          <div class="title">公司简介</div>
          <div class="cont">
            <div class="corImgBox">
              <!-- companyIntro.mainImg1 -->
              <img class='fw' src="../../assets/images/about/Bitmap.png" alt="">
            </div>
            <div class="text mt40">
              {{companyIntro.corIntro[0].text}} <br/> {{companyIntro.corIntro[1].text}}
            </div>
            <div class="corImgBox mt70">
              <!-- companyIntro.mainImg2 -->
              <img class='fw' src="../../assets/images/about/about_company_2.jpg" alt="">
            </div>
            <div class="text mt40">
              {{companyIntro.corIntro[2].text[0]}} <br><br>
              {{companyIntro.corIntro[2].text[1]}} <br><br>
              {{companyIntro.corIntro[2].text[2]}}
            </div>
          </div>
        </div>
        
        <!-- 企业文化 -->
        <div class="detail">
          <div id="culture" class="anchor"></div>
          <div class="title">企业文化</div>
          <div class="cont">
            <p v-for='(item,index) in corCulture.contents' :key='index+"co"'>{{item}}</p>
          </div>
        </div>
        <!-- 发展历程 -->
        <div class="detail develop">
          <div id="dev" class="anchor"></div>
          <div class="title">发展历程</div>
          <div class="cont flex">
            <div class="timeBox">
              <p v-for='(item,index) in devProcess.timesLine' :key='index+"time"'>{{item}}</p>
            </div>
            <div class="lineBox">
              <div class="topTwoCircle"></div>
              <div class="topTwoCircle"></div>
              <div class="lineItem" v-for='(i,index) in 14' :key='i'>
                <div class="lineTop" :class='{firstLine:index === 0}'></div>
                <div class="circle" :class='{firstCircle:index === 0}'></div>
                <div class="lineBottom"></div>
              </div>
            </div>
            <div class="textBox">
              <p v-for='(item,index) in devProcess.eventsLine' :key='index+"event"' :title='item'>{{item}}</p>
            </div>
          </div>
        </div>
        <!-- 投资机构 -->
        <div class="detail">
          <div id="invest" class="anchor"></div>
          <div class="title">投资机构</div>
          <p class='investTitle'>机械之家自成立以来，得到国内系列知名投资机构认可已获数轮融资。投资机械之家的投资机构包括：</p>
          <div class="cors flex">
            <div class="imgItem1" v-for='(item,index) in investImgs' :key='"stage"+index'>
              <img class='fw' :src="item" alt="">
            </div>
          </div>
        </div>
        <!-- 荣誉资质 -->
        <div class="detail">
          <div id="honor" class="anchor"></div>
          <div class="title">公司荣誉</div>
          <div class="cont flex">
            <el-row :gutter='10'>
              <el-col :xs='24' :sm='8' v-for='item in honorCer' :key='item.id'>
                <div class="imgBox">
                  <img class='fw' :src="item.imgUrl" alt="">
                </div>
                <p>{{item.text}}</p>
              </el-col>
            </el-row>
          </div>
        </div>
        <!-- 领导关怀 -->
        <div class="detail">
          <div id="care" class="anchor"></div>
          <div class="title">领导关怀</div>
          <div class="cont flex">
            <el-row :gutter='10'>
              <el-col :xs='24' :sm='8' v-for='item in leaderCare' :key='item.id'>
                <div class="imgBox">
                  <img class='fw' :src="item.imgUrl" alt="">
                </div>
                <p>{{item.text}}</p>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  // 头部图片url
  import topImgUrl from '@/assets/images/index/about.jpg'
  // 主内容两张大图url
  import mainImg1 from '@/assets/images/about/Bitmap.png'
  import mainImg2 from '@/assets/images/about/BitmapCopy.png'
  // 投资机构图片
  import investImg1 from '@/assets/images/about/about_tzjg_1.png'
  import investImg2 from '@/assets/images/about/about_tzjg_2.png'
  import investImg3 from '@/assets/images/about/about_tzjg_3.png'
  import investImg4 from '@/assets/images/about/about_tzjg_4.png'
  import investImg5 from '@/assets/images/about/about_tzjg_5.png'
  import investImg6 from '@/assets/images/about/about_tzjg_6.png'
  import investImg7 from '@/assets/images/about/about_tzjg_7.png'
  import investImg8 from '@/assets/images/about/about_tzjg_8.png'
  import investImg9 from '@/assets/images/about/about_tzjg_9.png'
  import investImg10 from '@/assets/images/about/about_tzjg_10.png'


  // 荣誉资质图片
  import honorImg1 from '@/assets/images/about/about_honor_1.png'
  import honorImg2 from '@/assets/images/about/about_honor_2.png'
  import honorImg3 from '@/assets/images/about/about_honor_3.png'
  import honorImg4 from '@/assets/images/about/about_honor_4.png'
  import honorImg5 from '@/assets/images/about/about_honor_5.png'
  import honorImg6 from '@/assets/images/about/about_honor_6.png'
  import honorImg7 from '@/assets/images/about/about_honor_7.png'
  import honorImg8 from '@/assets/images/about/about_honor_8.png'
  import honorImg9 from '@/assets/images/about/about_honor_9.png'
  // 领导关怀图片
  import leaderImg1 from '@/assets/images/about/about_leader_1.png'
  import leaderImg2 from '@/assets/images/about/about_leader_2.png'
  import leaderImg3 from '@/assets/images/about/about_leader_3.png'
  import leaderImg4 from '@/assets/images/about/about_leader_4.png'
  import leaderImg5 from '@/assets/images/about/about_leader_5.png'
  import leaderImg6 from '@/assets/images/about/about_leader_6.png'
  import leaderImg7 from '@/assets/images/about/about_leader_7.png'
  import leaderImg8 from '@/assets/images/about/about_leader_8.png'
  import leaderImg9 from '@/assets/images/about/about_leader_9.png'

  export default {
    name:'about',
    data() {
      return {
        isFix:false,
        contIndex:0,
        syllItems:[
          {tar:'intro',content:'公司简介'},
          {tar:'culture',content:'企业文化'},
          {tar:'dev',content:'发展历程'},
          {tar:'invest',content:'投资机构'},
          {tar:'honor',content:'公司荣誉'},
          {tar:'care',content:'领导关怀'}
        ],
        // topImg:topImgUrl,
        // 公司简介数据
        companyIntro:{
          // mainImg1,
          // mainImg2,
          corIntro:[
            {
              text:'湖南机械之家信息科技有限公司成立于2015年1月，是一家专注于工程机械后市场服务的产业互联网公司，以“让机械后市场服务更高效”为使命，致力于工程机械零配件交易和服务的标准化、智能化。以创新的模式，联结行业上下游资源，利用互联网技术，为用户提供庞大的零配件数据服务、高效的信息化系统平台、完善的供应链服务体系，帮助用户提高交易效率，降低采购成本。'
            },
            {
              text:'公司旗下产品“机械之家服务中心”是工程机械零配件S2B供应链平台，向全国市场提供吊、泵、挖三大工程类机械的全系机型全品类配件线上采购。 目前，机械之家已完成超5600种机型匹配，可售SKU超50万条，且所供配件皆为厂家直销，正品保障。'
            },
            {
              text:['公司整体已形成从配件搜索、报价比价、在线结算、配送、售后的交易服务闭环；并已综合工程机械设备保险、媒体资讯、二手机等生态服务。机械之家秉承着开放共赢的理念，未来将庞大的数据库进行共享，连接机械后市场各领域，如维修、二手机、保险、金融、故障诊断、找活等，引领并推动着整个行业的优化升级，实现“成为机械行业最专业的后市场平台”的愿景!','公司核心团队成员来自里、京东、中联重科、三一重工等知名企业，具有丰富的行业资源与强大的整合能力，是一支融合传统行业和互联网行业的精英组合。','公司已获得（排名不分先后）钟鼎创投、金沙江联合资本、梅花天使、华颖投资、领易投资、开物相泰、麓谷高新创投、第一创客等连续4轮融资，被誉为工程机械配件行业最有潜力的互联网独角兽企业。']
            }
          ],
        },
        // 企业文化数据
        corCulture:{
          contents:[
            '机械之家使命：让机械后市场服务更高效', '公司愿景：成为机械行业领先的后市场服务平台！', 
            '核心价值观：客户第一，疾慢如仇！诚信、敬业、激情、创新、协同。'
          ]
        },
        // 投资机构数据
        investImgs:[investImg1,investImg2,investImg3,investImg4,investImg5,investImg6,investImg7,investImg8,investImg9,investImg10],
        // 荣誉资质数据
        honorCer:[
          {
            id:'honor1',
            imgUrl:honorImg1,
            text:'2018年12月，机械之家获得“2018中国B2B新锐势利企业”'
          },
          {
            id:'honor2',
            imgUrl:honorImg2,
            text:'2018年12月，机械之家获得“2018年中国产业互联网TOP100排行榜”'
          },
          {
            id:'honor3',
            imgUrl:honorImg3,
            text:'2018年06月，机械之家获得湖南湘江新区“优秀双创企业”殊荣'
          },
          {
            id:'honor4',
            imgUrl:honorImg4,
            text:'2017年12月，机械之家被评定为湖南省高新技术企业'
          },
          {
            id:'honor5',
            imgUrl:honorImg5,
            text:'2017年12月，机械之家被评选为“2017中国B2B新锐势力企业”'
          },
          {
            id:'honor6',
            imgUrl:honorImg6,
            text:'2017年10月，机械之家被评选为“2017年中国B2B创新企业50强”'
          },
          {
            id:'honor7',
            imgUrl:honorImg7,
            text:'2017年03月，机械之家被长沙市高新区评定为10家“移动互联网新锐企业”之一'
          },
          {
            id:'honor8',
            imgUrl:honorImg8,
            text:'2017年，机械之家获“2017中国年度最佳雇主”最佳雇主提名奖'
          },
          {
            id:'honor9',
            imgUrl:honorImg9  ,
            text:'2016年10月，机械之家获得中国B2B峰会“2016中国B2B百名创业新锐”奖'
          }
        ],
        // 领导关怀数据
        leaderCare:[
          {
            id:'leader1',
            imgUrl:leaderImg1,
            text:'2019年7月9日，长沙市人大常委会主任程水泉、市政府常务副市长夏建平等一行调研机械之家'
          },
          {
            id:'leader2',
            imgUrl:leaderImg2,
            text:'2019年2月20日，湖南湘江新区党工委委员、管委会副主任罗社辉以及湘江新区、高新区各级领导来机械之家调研'
          },
          {
            id:'leader3',
            imgUrl:leaderImg3,
            text:'2019年2月13日，湖南省陈飞副省长莅临机械之家指导工作并调研'
          },
          {
            id:'leader4',
            imgUrl:leaderImg4,
            text:'2018年12月5日机械之家乔迁仪式上，中国工程机械协会混凝土分会符忠轩会长热情致辞'
          },
          {
            id:'leader5',
            imgUrl:leaderImg5,
            text:'2018年9月，湖南工程机械租赁协会、中鼎创投、浦发银行等领导层出席机械之家战略合作签约暨A轮融资发布会'
          },
          {
            id:'leader6',
            imgUrl:leaderImg6,
            text:'2016年5月18日，省委常委、组织部部长郭开朗，省委组织部离退办主任龙峰等一行8人莅临湖南机械之家考察指导工作'
          },
          {
            id:'leader7',
            imgUrl:leaderImg7,
            text:'2016年4月20日，中共长沙市委常委、长沙市政府副市长张迎春等一行莅临湖南机械之家信息科技有限公司视察指导工作'
          },
          {
            id:'leader8',
            imgUrl:leaderImg8,
            text:'2016年2月26日，新疆克尓克孜州科技局申建平科长，生产力中心徐启生主任一行莅临，对吊车之家参观考察，指导创新创业工作'
          },
          {
            id:'leader9',
            imgUrl:leaderImg9,
            text:'2016年2月23日，江西省南昌市西湖区常委副区长李鑫及江西省南昌市西湖区商务局副局长张文昌莅临吊车之家总部进行考察调研'
          }
        ],
        devProcess:{
          timesLine:['2019年7月','2019年6月','2019年2月','2019年1月','2018年11月','2018年8月','2018年5月','2017年9月','2017年5月','2017年3月','2016年12月','2015年9月','2015年2月','2015年1月'],
          eventsLine:[
            '前置仓开始运营',
            '中央网信办信息发展局考察机械之家并指导工作',
            '湖南省副省长陈飞、省政府副秘书长、省科技厅副厅长等领导调研机械之家并指导工作',
            '获得58产业基金领投数千万A+轮投资',
            '广州中心仓开始运营',
            '成立广州运营中心',
            '获钟鼎创投、金沙江联合资本数千万A轮投资',
            '工程机械零配件供应链平台上线运营，成立长沙中心仓',
            '获梅花创投、华颖投资、岭易投资千万级Pre-A轮投资',
            '成立数据中心，工程机械行业首歌零配件电子目录系统(EPC)上线',
            '获开物相泰，麓谷高新创投、第一创客数百万天使轮投资',
            '工程机械二手设备交易网站及零配件电商平台上线运营',
            '公司旗下自媒体平台“吊车之家”、“泵车之家”、“好挖”上线运营',
            '湖南机械之家信息科技有限公司成立'
          ]
        }
      }
    },
    methods:{
      jumpToDetail(id,index) {
        document.querySelector("#"+id).scrollIntoView(true)
        this.contIndex = index
      },
      // 监听屏幕滚动
      handleScroll() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if(scrollTop >= 350){
          this.isFix = true
          this.scrolled = true
        }else{
          this.isFix = false
          this.scrolled = false
        }
      }
    },
    mounted() {
      // 当屏幕滚动到 900 时，公司简介 高亮
      window.addEventListener('scroll',()=>{
        this.handleScroll()
        if(document.documentElement.scrollTop <= 900){
          this.contIndex = 0
        }
      })
      let from = this.$route.query.from 
      var that = this
      if(from) {
        setTimeout(function(){
          that.jumpToDetail('honor',1)
        },10)
      }
    }
  }
</script>

<style scoped>
@import './about_pc.css';
</style>
