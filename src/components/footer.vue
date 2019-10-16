<template>
  <footer class="footer">
    <div class="w1200 mar_auto hidden-xs-only">
      <div class="subs flex">
        <div v-for='(item,index) in items' :key='index'>
          <div class="foot_title">{{item.title}}</div>
          <ul>
            <li v-for='(sub_item,index1) in item.content' 
              :key='index1' 
              @click='jump(sub_item.path,index)' 
              @mouseenter="handleMouseEnter(index,index1)"
              @mouseleave="handleMouseLeave()"
              :class='{cursor:index !== 4, beian:index == 4 && index1 == 2}'>
              <span v-if='index == 4 && index1 == 2'><a href='http://www.beian.miit.gov.cn' target="_blank">{{sub_item.text}}</a></span>
              <span v-else>{{sub_item.text}}</span>
              <img :src='sub_item.imgUrl' v-if='sub_item.imgUrl && itemIndex === 2 && imgIndex === index1'>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="mobile hidden-sm-and-up">
      <div class="box" v-for='(item,index) in items' :key='index'>
        <div class="sub_title flex" @click='handleClick(index)'>
          <span>{{item.title}}</span><span class='icon' :class='{active:tabIndex === index && isOpen}'></span>
        </div>
        <div class="content" v-show='tabIndex === index && isOpen'>
          <ul>
            <li v-for='(sub_item,index1) in item.content' 
              :key='index1' @click='jump(sub_item.path,index)' 
              :class='{cursor:index !== 4, beian:index == 4 && index1 == 2}'
              @mouseenter="handleMouseEnter(index,index1)">
              <span v-if='index == 4 && index1 == 2'><a href='http://www.beian.miit.gov.cn' target="_blank">{{sub_item.text}}</a></span>
              <span v-else>{{sub_item.text}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="content">
      <ul>
        <li class="copyright">
          <span><a href='http://www.beian.miit.gov.cn' target="_blank">湘ICP备15003563号  湖南机械之家信息科技有限公司</a></span>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
  import erweima1 from '@/assets/images/index/qrcode/bottom_qrcode_1.png'
  import erweima2 from '@/assets/images/index/qrcode/bottom_qrcode_2.png'
  import erweima3 from '@/assets/images/index/qrcode/bottom_qrcode_3.png'
  import erweima4 from '@/assets/images/index/qrcode/bottom_qrcode_4.png'
  export default {
    name:'footerCon',
    data() {
      return {
        items:[
          {
            title:'关于我们',
            content:[
              {text:'了解机械之家',path:'/about'},
              {text:'机械之家动态',path:'/dynamic'},
              {text:'加入机械之家',path:'/join'},
              {text:'联系机械之家',path:'/cooperation'}
            ]
          }, {
            title:'核心服务',
            content:[
              {text:'配件采购',path:'/service/purchase'},
              {text:'供应链服务',path:'/service/sToB'},
              {text:'保险金融服务',path:'/service/insurance'},
              {text:'媒体服务',path:'/service/media'}
            ]
          }, {
            title:'关注我们',
            content:[
              {text:'吊车之家服务平台',path:'',imgUrl:erweima1},
              {text:'吊车之家',path:'',imgUrl:erweima2},
              {text:'泵车之家',path:'',imgUrl:erweima3},
              {text:'开心挖',path:'',imgUrl:erweima4}
            ]
          }, {
            title:'平台合作',
            content:[
              {text:'供应商招商',path:'/cooperation/supplier'},
              {text:'保险合作',path:'/cooperation/insuranceCo'},
              {text:'维修厂合作',path:'/cooperation/repaireSite'},
              {text:'媒体合作',path:'/cooperation/mediaCo'}
            ]
          }, {
            title:'联系我们',
            content:[{text:'电话：0731-85581121'},{text:'地址：湖南省长沙市岳麓区中电软件园7栋3楼'},
            // {text:'湖南机械之家信息科技有限公司版权所有 湘ICP备15003563号'}
            ]
          }
        ],
        tabIndex:4,
        isOpen:true,
        imgIndex:-1,
        itemIndex:0
      }
    },
    methods:{
      jump(param,index) {
        if(index === 4) return
        if(this.$router.currentRoute.fullPath.indexOf(param) !== -1) return
        this.$router.replace(param)
        window.scrollTo(0,0)
      },
      handleClick(index) {
        this.tabIndex = index
        this.isOpen = !this.isOpen
      },
      handleMouseEnter(index,index1) {
        this.itemIndex = index
        this.imgIndex = index1
      },
      handleMouseLeave() {
        this.imgIndex = -1
      }
    },
    mounted() {
     /*  console.log(document.getElementsByClassName('beian'))
      document.getElementsByClassName('beian')[0].onclick = function(e) {
        console.log(e)
        window.open('www.beian.miit.gov.cn',"_blank")
      } */
    }
  }
</script>

<style scoped>
ul,ol,dl{list-style-type:none}
footer{
  background:#F5F5F5;
}
footer > div.w1200{
  padding:40px 0;
}
footer > div.mobile{
  background:#fff;
  padding:35px 32px;
}
div.subs > div{
  width:19.6%;
}
div.foot_title{
  font-size:0.20rem;
  font-weight: bold;
  line-height: 27px;
  color:#333;
  margin:30px 0 20px 0;
}
li{
  font-size: 0.14rem;
  line-height: 20px;
  margin-bottom:10px;
  color:#333;
}
li.cursor:hover{
  color:#7BAA17;
}
div.box{
  border-bottom:2px solid #EBEBEB;
}
div.box:last-child{
  border-bottom:none;
}
div.sub_title{
  font-size:0.12rem;
  height:4.25em;
}
div.sub_title span{
  align-self: center;
}
div.content li{
  font-size: 0.12rem;
  color:#333;
  height:2.33em;
  line-height: 2.33em;
  padding-left:0.75em;
}
li.beian,div.content li.beian{
  color:#666;
}
div.content li.copyright{
  margin: 0px;
  font-size: 0.14rem;
  text-align: center;
  padding-bottom: 1em;
}
div.subs li{
  position:relative;
}
div.subs li > img{
  /* display:none; */
  position:absolute;
  left:50%;
  z-index:100;
}
div.subs li:last-child > img{
  bottom:0;
}
.icon{
  transform: scale(0.6);
  width:14px;
  height:14px;
  background-image:url(../assets/images/header/mobile/bottom_icon_more.png);
  background-size: contain;
  background-repeat: no-repeat;
}
.icon.active{
  width:14px;
  height:14px;
  background-image:url(../assets/images/header/mobile/bottom_icon_delete.png);
  background-size: contain;
  background-repeat: no-repeat;
}


  @media screen and (max-width: 768px) {
    div.sub_title{
      font-size: 0.24rem;
    }
    div.content li{
      font-size: 0.24rem;
      color:#666;
    }
  }
</style>
