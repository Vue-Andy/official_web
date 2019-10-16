import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: (resolve) => require(['../components/index/index'],resolve)
    }, 
    {
      path: '/index',
      name: 'index',
      component: (resolve) => require(['../components/index/index'],resolve)
    }, 
    {
      path: '/about',
      name: 'about',
      component: (resolve) => require(['../components/about/about'],resolve)
    }, 
    {
      path: '/service',
      component: (resolve) => require(['../components/service/service'],resolve),
      children:[
        {
          path:'',
          component: (resolve) => require(['../components/index/index'],resolve)
          ,redirect:'purchase'
        }, {
          path:'main_con',
          component: (resolve) => require(['../components/service/main_con'],resolve)
          ,redirect:'purchase'
        }, {
          path:'purchase',
          component: (resolve) => require(['../components/service/purchase'],resolve)
        }, {
          path:'sToB',
          component: (resolve) => require(['../components/service/sToB'],resolve)
        }, {
          path:'insurance',
          component: (resolve) => require(['../components/service/insurance'],resolve)
        }, {
          path:'media',
          component: (resolve) => require(['../components/service/media'],resolve)
        }
      ]
    }, 
    {
      path: '/dynamic',
      name: 'dynamic',
      component: (resolve) => require(['../components/dynamic/dynamic'],resolve)
    }, 
    {
      path: '/cooperation',
      component: (resolve) => require(['../components/cooperation/cooperation'],resolve),
      children:[
        {
          path:'',
          component: (resolve) => require(['../components/cooperation/supplier'],resolve),
          redirect:'supplier'
        }, {
          path:'supplier',
          component: (resolve) => require(['../components/cooperation/supplier'],resolve)
        }, {
          path:'mediaCo',
          component: (resolve) => require(['../components/cooperation/mediaCo'],resolve)
        }, {
          path:'insuranceCo',
          component: (resolve) => require(['../components/cooperation/insuranceCo'],resolve)
        }, {
          path:'repaireSite',
          component: (resolve) => require(['../components/cooperation/repaireSite'],resolve)
        }
      ]
    },  
    {
      path: '/join',
      name: 'join',
      component: (resolve) => require(['../components/join/join'],resolve)
    }
  ]
})
