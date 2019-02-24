import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Jsonp from '@/components/Jsonp'
import Cors from '@/components/Cors'

const User = {
  template: `<div class="user"><router-view></router-view></div>`
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: User,
      children: [
        {
          path: '',
          component: Home
        }, {
          path: 'jsonp',
          component: Jsonp
        }, {
          path: 'cors',
          component: Cors
        }
      ]
    }
  ]
})
