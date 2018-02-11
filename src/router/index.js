import Vue from 'vue';
import Router from 'vue-router';

import layout from './../layout/index.vue';

import contentA from './../content/contentA/contentA.vue';
import contentB from './../content/contentB/contentB.vue';
import contentC from './../content/contentC/contentC.vue';
import contentD from './../content/contentD/contentD.vue';
import HelloWorld from '@/components/HelloWorld.vue'

Vue.use(Router);

export default new Router({
  mode: 'hash', // Demo is living in GitHub.io, so required!
  linkActiveClass: 'open active',
  // scrollBehavior: () => ({ y: 0 }),
  // scrollBehavior(to, from, savedPosition) {
  //   //判断如果滚动条的位置存在直接返回到当前位置，否则返回到起点
  //   if (savedPosition) {
  //     return savedPosition
  //   } else {
  //     if (to.hash) {
  //       return { selector: to.hash }
  //     }
  //   }
  // },
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/main',
      redirect: '/main/contentA',
      name: 'layout',
      component: layout,
      children: [
        {
          path: 'contentA',
          name: 'contentA',
          component: contentA,
        }, {
          path: 'contentB',
          name: 'contentB',
          component: contentB,
        }, {
          path: 'contentC',
          name: 'contentC',
          component: contentC,
        }, {
          path: 'contentD',
          name: 'contentD',
          component: contentD,
        },
      ]
    }
  ]
})
