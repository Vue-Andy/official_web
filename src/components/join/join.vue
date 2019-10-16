<template>
  <section class="join overflow_hidden">
    <div class="empty hidden-xs-only"></div>
    <div class="top overflow_hidden"><img class='fw' src="../../assets/images/index/join.jpg" alt=""></div>
    <div class="main flex w1200 mar_auto">
      <div class="theme_container hidden-xs-only">
        <div class="syllabus overflow_hidden" :class='{isFix:isFix}'>
          <div class="syllItem" v-for='(item,index) in syllItems' :key='item.tar' @click='jumpToDetail(item.tar,index)' :class='{active:contIndex===index}'>{{item.content}}</div>
        </div>
      </div>
      <div class="details">
        <div id="staff" class='anchor first'></div>
        <div class="title">人才理念</div>
        <div class="sub_title first">“三有人才”是机械之家的人才理念。<br> “三有人才”是机械之家选拔经营管理干部的标准，也是现有经营管理干部的要求标准。</div>
        <div class="imgBox1 imgBox"><img class='fw' src="../../assets/images/join/join_rcln.png" alt=""></div>
        <div id="train" class='anchor'></div>
        <div class="title">培训体系</div>
        <p class="sub_title">根据公司的战略和发展需求，机械之家定期对员工进行知识体系培训，提升员工专业技能和综合能力，以“有态度、有能力、有素质”为基 准培养综合型人才。</p>
        <div class="imgBox hidden-xs-only"><img src="../../assets/images/join/about.png" alt="" class="fw"></div>
        <div class="trainImg hidden-sm-and-up">
          <img src="../../assets/images/join/join_pxtx_picture_01.png" alt="" class="fw">
        </div>
        <div class="trainImgItem hidden-sm-and-up" v-for='(item,index) in pxtxImgs' :key='"train"+index'>
          <img :src="item" alt="" class="fw">
        </div>
        <div id="team" class='anchor'></div>
        <div class="title">团队建设</div>
        <div class='flex teamBuild'>
          <el-row>
            <el-col :xs='24' :sm='12' v-for='item in tdjsImgs' :key='item.id'>
              <div class="imgItem">
                <img :src="item.imgUrl" alt="" class="fw">
                <p>{{item.text}}</p>
              </div>
            </el-col>
          </el-row>
        </div>
        <div id="leader" class='anchor'></div>
        <div class="title">核心团队</div>
        <p class="sub_title">公司核心团队来自阿里、京东、中联重科、三一重工等知名企业，是一支既有丰富行业 经验，又有充足互联网基因精英队伍。核心团队具有丰富的行业资源与强大的整合能力，带领公司在产业互联网领域一路驰骋，茁壮成长。</p>
        <div class="imgBox tc"><img src="../../assets/images/join/Group.png" alt="" class="halfWidth"></div>
        <div id="recruit" class='anchor'></div>
        <div class="title">招贤纳士</div>
        <div class="tabTitle">
          <span class="tabItem cursor" @click='tabIndex = 0' :class='{active:tabIndex === 0}'>销售团队</span>
          <span class="tabItem cursor" @click='tabIndex = 1' :class='{active:tabIndex === 1}'>技术团队</span>
        </div>
        <div class="tabContent" v-show='tabIndex === 0'>
          <div class="tabItemBox" v-for='(item,index) in saleTeam' :key='item.id'>
            <div class="tabItemTitle flex cursor" @click='handleSaleTab(index)' :class='{active:saleTabItemIndex === index && isOpen}'>
              <div class="flex">
                <span>{{index+1}}.{{item.title}}</span>
                <span class='flex'><i class='area'></i><span>{{item.pos}}</span><i class='icon-down'></i></span>
              </div>
            </div>
            <div class="tabItemContent" v-show='saleTabItemIndex === index && isOpen'>
              <p class="title">岗位职责：</p>
              <p class="content" v-for='(sub_item,index1) in item.duty' :key='item.title + index1'>{{index1+1}}、{{sub_item}}</p>
              <p class="title">任职要求：</p>
              <p class="content" v-for='(sub_item,index2) in item.duty' :key='index2 + item.title'>{{index2+1}}、{{sub_item}}</p>
            </div>
          </div>
        </div>
        <div class="tabContent" v-show='tabIndex === 1'>
          <div class="tabItemBox" v-for='(item,index) in skillTeam' :key='item.id'>
            <div class="tabItemTitle flex cursor" @click='handleSkillTab(index)' :class='{active:skillTabItemIndex === index && isOpen}'>
              <div class='flex'>
                <span>{{index+1}}.{{item.title}}</span>
                <span class='flex'><i class='area'></i><span>{{item.pos}}</span><i class='icon-down'></i></span>
              </div>
            </div>
            <div class="tabItemContent" v-show='skillTabItemIndex === index && isOpen'>
              <p class="title">岗位职责：</p>
              <p class="content" v-for='(sub_item,index1) in item.duty' :key='item.title + index1'>{{index1+1}}、{{sub_item}}</p>
              <p class="title">任职要求：</p>
              <p class="content" v-for='(sub_item,index2) in item.duty' :key='index2 + item.title'>{{index2+1}}、{{sub_item}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  // 培训体系图片
  import pxtxImg1 from '../../assets/images/join/join_pxtx_picture_02.png';
  import pxtxImg2 from '../../assets/images/join/join_pxtx_picture_03.png';
  import pxtxImg3 from '../../assets/images/join/join_pxtx_picture_04.png';
  import pxtxImg4 from '../../assets/images/join/join_pxtx_picture_05.png';
  // 团队建设图片
  import tdjsImg1 from '../../assets/images/join/mobile/join_tdjs_picture_01.png';
  import tdjsImg2 from '../../assets/images/join/mobile/join_tdjs_picture_02.png';
  import tdjsImg3 from '../../assets/images/join/mobile/join_tdjs_picture_03.png';
  import tdjsImg4 from '../../assets/images/join/mobile/join_tdjs_picture_04.png';

  export default {
    name:'join',
    data() {
      return {
        contIndex:0,
        isFix:false,
        syllItems:[
          {tar:'staff',content:'人才理念'},
          {tar:'train',content:'培训体系'},
          {tar:'team',content:'团队建设'},
          {tar:'leader',content:'核心团队'},
          {tar:'recruit',content:'招贤纳士'}
        ],
        tabIndex: 0,
        saleTabItemIndex:0,
        skillTabItemIndex:0,
        pxtxImgs:[pxtxImg1,pxtxImg2,pxtxImg3,pxtxImg4],
        tdjsImgs:[
          {id:'tdjs1',imgUrl:tdjsImg1,text:'机械之家一周年，“梦想GO”聚会'},
          {id:'tdjs2',imgUrl:tdjsImg2,text:'公司产研/数据团队拓展训练'},
          {id:'tdjs3',imgUrl:tdjsImg3,text:'微软云孵化器毕业庆典聚会'},
          {id:'tdjs4',imgUrl:tdjsImg4,text:'机械之家A+轮融资宣告会暨年度庆典'}
        ],
        isOpen:false,
        // 销售团队数据
        saleTeam:[
          {
            id:'sale1',
            title:'保险',
            pos:'长沙',
            duty:['掌握保险公司的投保政策；','负责来电客户对保险业务的咨询解答工作；','负责工程车险客户的保险投保、续保工作；','完成新保、续保客户保单资料的信息登记、存档。'],
            requirement:['20-30岁，保险或市场营销相关专业专科以上学历；','业务拓展能力较好，具备良好的沟通能力和服务意识；','有责任心、有较强的计划执行能力，熟练掌握各种办公软件；','有车险或销售、理赔定损类工作经验的优先；','主要做吊车、泵车等工程机械的工程车险，公司有现成的客户资源，而且专业的工程机械险种只有我们这些公司才能承保，所以不要担心业务的问题，你只要用心，想赚钱的赶快来！']
          }, {
            id:'sale2',
            title:'财险顾问',
            pos:'长沙',
            duty:['掌握保险公司的投保政策；','负责来电客户对保险业务的咨询解答工作；','负责工程车险客户的保险投保、续保工作；','完成新保、续保客户保单资料的信息登记、存档。'],
            requirement:['20-30岁，保险或市场营销相关专业专科以上学历；','业务拓展能力较好，具备良好的沟通能力和服务意识；','有责任心、有较强的计划执行能力，熟练掌握各种办公软件；','有车险或销售、理赔定损类工作经验的优先；','主要做吊车、泵车等工程机械的工程车险，公司有现成的客户资源，而且专业的工程机械险种只有我们这些公司才能承保，所以不要担心业务的问题，你只要用心，想赚钱的赶快来！']
          }, {
            id:'sale3',
            title:'车险专员',
            pos:'长沙',
            duty:['掌握保险公司的投保政策；','负责来电客户对保险业务的咨询解答工作；','负责工程车险客户的保险投保、续保工作；','完成新保、续保客户保单资料的信息登记、存档。'],
            requirement:['20-销售，电话销售','20-30岁，保险或市场营销相关专业专科以上学历；','业务拓展能力较好，具备良好的沟通能力和服务意识；','有责任心、有较强的计划执行能力，熟练掌握各种办公软件；','有车险或销售、理赔定损类工作经验的优先。','主要做吊车、泵车等工程机械的工程车险，公司有现成的客户资源，而且专业的工程机械险种只有我们这些公司才能承保，所以不要担心业务的问题，你只要用心，月薪过万也是没有问题的！期待你的参与！']
          }, {
            id:'sale4',
            title:'销售经理（江门）',
            pos:'江门',
            duty:['经过培训之后熟悉掌握公司业务知识和特性；','负责市场调研，业务拓展及维护；','提高公司业务在所负责区域的渗透率，关注结果；','就当地工程机械市场行情进行分析及反馈；','配合其他部门业务流工作；','按公司要求完成各项指标；','完成上级领导交待的其他工作；'],
            requirement:['大专及以上学历，年龄在32岁以下，必须有车；','性格开朗，勇于挑战，有野心、抗压能力和学习能力；','良好的团队协助精神，责任心强，能够快速融入新环境；','在校期间有兼职经历或担任学生干部并获得良好评价者优先录用。']
          }, {
            id:'sale5',
            title:'销售经理（韶关）',
            pos:'韶关',
            duty:['经过培训之后熟悉掌握公司业务知识和特性；','负责市场调研，业务拓展及维护；','提高公司业务在所负责区域的渗透率，关注结果；','就当地工程机械市场行情进行分析及反馈；','配合其他部门业务流工作；','按公司要求完成各项指标；','完成上级领导交待的其他工作；'],
            requirement:['大专及以上学历，年龄在32岁以下，必须有车；','性格开朗，勇于挑战，有野心、抗压能力和学习能力；','良好的团队协助精神，责任心强，能够快速融入新环境；','在校期间有兼职经历或担任学生干部并获得良好评价者优先录用。']
          }, {
            id:'sale6',
            title:'销售经理（肇庆）',
            pos:'肇庆',
            duty:['经过培训之后熟悉掌握公司业务知识和特性；','负责市场调研，业务拓展及维护；','提高公司业务在所负责区域的渗透率，关注结果；','就当地工程机械市场行情进行分析及反馈；','配合其他部门业务流工作；','按公司要求完成各项指标；','完成上级领导交待的其他工作；'],
            requirement:['大专及以上学历，年龄在32岁以下，必须有车；','性格开朗，勇于挑战，有野心、抗压能力和学习能力；','良好的团队协助精神，责任心强，能够快速融入新环境；','在校期间有兼职经历或担任学生干部并获得良好评价者优先录用。']
          }, {
            id:'sale7',
            title:'BD销售经理',
            pos:'长沙',
            duty:['经过培训之后熟悉掌握公司业务知识和特性；','负责市场调研，业务拓展及维护；','提高公司业务在所负责区域的渗透率，关注结果；','就当地工程机械市场行情进行分析及反馈；','配合其他部门业务流工作；','按公司要求完成各项指标；','完成上级领导交待的其他工作；'],
            requirement:['大专及以上学历，年龄在32岁以下，必须有车；','性格开朗，勇于挑战，有野心、抗压能力和学习能力；','良好的团队协助精神，责任心强，能够快速融入新环境；','在校期间有兼职经历或担任学生干部并获得良好评价者优先录用。']
          }, {
            id:'sale8',
            title:'区域经理（益阳）',
            pos:'益阳',
            duty:['经过培训之后熟悉掌握公司业务知识和特性；','负责市场调研，业务拓展及维护；','提高公司业务在所负责区域的渗透率，关注结果；','就当地工程机械市场行情进行分析及反馈；','配合其他部门业务流工作；','按公司要求完成各项指标；','完成上级领导交待的其他工作；'],
            requirement:['大专及以上学历，年龄在32岁以下，必须有车；','性格开朗，勇于挑战，有野心、抗压能力和学习能力；','良好的团队协助精神，责任心强，能够快速融入新环境；','在校期间有兼职经历或担任学生干部并获得良好评价者优先录用。']
          }, {
            id:'sale9',
            title:'区域经理（岳阳）',
            pos:'岳阳',
            duty:['经过培训之后熟悉掌握公司业务知识和特性；','负责市场调研，业务拓展及维护；','提高公司业务在所负责区域的渗透率，关注结果；','就当地工程机械市场行情进行分析及反馈；','配合其他部门业务流工作；','按公司要求完成各项指标；','完成上级领导交待的其他工作；'],
            requirement:['大专及以上学历，年龄在32岁以下，必须有车；','性格开朗，勇于挑战，有野心、抗压能力和学习能力；','良好的团队协助精神，责任心强，能够快速融入新环境；','在校期间有兼职经历或担任学生干部并获得良好评价者优先录用。']
          }, {
            id:'sale10',
            title:'售后服务工程师',
            pos:'长沙',
            duty:['负责公司现有及潜在客户和平台用户的关系建立、持续性需求收集及持续性关系维护；','通过公司系统工具对客户的需求提供确型、报价、技术支持等服务；','通过与交易客户保持持续性关系，获取潜在客户的信息，不断增加客户资源；','完成主管交代的其它任务；'],
            requirement:['专科及以上学历，年龄在35岁以下；','熟悉工程机械配件起重机、挖掘机、泵车设备其中之一；','在三一重工、卡特、小松等知名工程机械公司从事过相关产品售后服务工作者优先；']
          }
        ],
        skillTeam:[
          {
            id:'skill1',
            title:'运营',
            pos:'长沙',
            duty:['负责平台产品的运营及具体跟进，对最终结果负责任；','建立数据分析体系，通过数据异常找出原因和识别规律，关注产品的市场表现，不断提出改进意见，推进产品的优化迭代；','负责产品的日常活动策划及商品填充、排序等，负责流量导入，对页面点击率、转化率、用户留存率、销售额等负责；','协助提高频道整体流量、提高平台日活等工作的推进；','独立负责部门的产品运营，挖掘和分析用户的需求、购买习惯、情感、体验，提出合理的产品需求，制定一系列完善的产品整体运营规划并执行；','认真完成领导安排的工作内容。'],
            requirement:['3年以上大型互联网2B运营相关岗位工作经验，有相关行业（机械后市场）工作背景者优先；','熟悉大型互联网产品的市场分析，及经营分析，有项目或产品规划管理经验者优先；','具备具有独立的创意性思维，极强的理解能力、较强的分析能力、逻辑思维能力、判断力、执行力及较好的报告撰写功底；','能够从多维度开展创新性工作；具有较强的沟通表达能力和协调能力；','强大的PPT、excel及数据分析能力','有移动运营相关经验的优先']
          }, {
            id:'skill2',
            title:'产品经理（2B）',
            pos:'长沙',
            duty:['对负责的2B产品方向进行需求分析，产品规划设计和定位，对该方向产品整体把控；','负责产品相关的行业及需求调研、分析，撰写需求文档等；','根据产品实施效果以及业务发展状况，设计产品原型，定期迭代改进产品；','组织产品需求讨论、需求实施及项目推进，确保项目高质量完成；','具有独立带领团队（产品、UED、研发、测试）完成既定目标，实现最终产品方案落地的能力。'],
            requirement:['5年及以上互联网产品经理经验，有汽车后或大型电商相关产品经验优先；','出色的产品统筹、策划、决策判断能力，熟悉产品设计工作流程；熟悉PC、移动端及小程序产品设计规范；具有较强的产品运营思路； 有较强产品架构能力者优先；','较强的数据敏感性，一定的数据分析运用能力，同时有一定的文字表达能力；','能够在复杂的环境下灵活把控，并推进把控合作型项目的进展;','很强的逻辑思维能力，较强的跨团队沟通及解决问题能力；','有大型项目从0到1经验者优先；有从1-N产品运营经验优先；']
          }, {
            id:'skill3',
            title:'产品经理（2C）',
            pos:'长沙',
            duty:['根据公司战略，基于公司业务需求，围绕2C电商平台进行产品相关工作；','具备业务抽象能力，能够将上下游各环节业务场景分解、抽象成标准化的业务模型；','跟进产品全生命周期，从需求调研、产品规划、设计、跟进开发、上线，到持续迭代从而满足业务快速发展；','协调内外部资源和支持，驱动项目进度，主导产品落地，确保业务目标达成。'],
            requirement:['有电商、汽配件零售行业相关运营经验者优先考虑，至少经历过1个完整的产品研发生命周期；','出色的产品规划能力，主导产品方向和制定长期规划，并拆分可实施项目；','具备强烈的责任心，能够主动进行跨部门沟通和协作，有一定的抗压能力；','优秀的沟通协作能力、逻辑思维能力、资源整合能力和系统分析能力；','能够独立完成用户需求调研、产品规划、功能设计，熟练使用axure、office、visio等日常工具。']
          }, {
            id:'skill4',
            title:'高级JAVA',
            pos:'长沙',
            duty:['完成软件系统代码的实现，编写代码注释和开发文档；','进行系统的功能定义,程序设计；','项目架构设计，数据库设计；','分析并解决软件开发过程中的问题；','协助制定总体技术规划；','配合产品经理完成相关任务目标。'],
            requirement:['一本院校计算机科学与技术、软件工程专业毕业，统招本科及以上学历，年龄在22岁—35岁之间；','精通Java语言，有良好的OOP思想以及代码习惯；','精通MySQL数据库，有建库经验，熟悉数据库优化；','精通Spring、MyBatis等常用Java框架；','有良好的数据结构以及算法基础；','有单独完成项目的系统架构工作经验；','熟悉微信的公众号、小程序、支付等API;','有参加过ACM、OI竞赛可以直接参加面试；','具备很强的解决问题能力和学习新技术的欲望。','良好的团队协作，沟通技巧，对新技术敏感,具备强烈的责任心及良好的团队合作精神，能承受一定的工作压力；']
          }
        ]
      }
    },
    methods:{
      jumpToDetail(id,index){
        document.querySelector("#"+id).scrollIntoView(true)
        this.contIndex = index
      },
      handleSaleTab(index) {
        this.saleTabItemIndex = index
        this.isOpen = !this.isOpen
      },
      handleSkillTab(index) {
        this.skillTabItemIndex = index
        this.isOpen = !this.isOpen
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
      window.addEventListener('scroll',()=>{
        this.handleScroll()
        if(document.documentElement.scrollTop <= 300){
          this.contIndex = 0
        }
      })
    }
  }
</script>

<style scoped>
@import './join.css'
</style>
