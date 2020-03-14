import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue' 
import ItemView from '../views/ItemView.vue'
import UserView from '../views/UserView.vue'
import bus from '@/utils/bus.js'
import store from '@/store'
/* import CreateListView from '../views/CreateListView.js' */
import AsyncAwaitTest from '@/views/AsyncAwaitTest.vue'
import CommonTest from '@/views/CommonTest.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/news'
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView,
    beforeEnter:(to, from, next) => {
      bus.$emit('start:spinner');
      //this.$store.dispatch('FETCH_LIST', this.$route.name)
      store.dispatch('FETCH_LIST', to.name)
      .then(() => {
        //bus.$emit('end:spinner');
        next();
      })
      .catch()  
    } 
    //component: CreateListView('NewsView'),
  },
  {
    path: '/ask',
    name: 'ask',
    component: AskView,
    beforeEnter:(to, from, next) =>{
      bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)       
        .then(() => {
          //bus.$emit('end:spinner');
          next();
        })
        .catch()   
    }
    //component: CreateListView('AskView'),
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: JobsView,
    beforeEnter:(to, from, next) =>{
      bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)       
        .then(() => {
          //bus.$emit('end:spinner');
          next();
        })
        .catch()   
    }
    //component: CreateListView('JobsView'),
  },
  {
    path: '/item/:id',
    name: 'ItemView',
    component: ItemView
  },
  {
    path: '/user/:id',
    name: 'UserView',
    component: UserView
  },
  {
    path: '/AsyncAwaitTest',
    name: 'AsyncAwaitTest',
    component: AsyncAwaitTest
  },
  {
    path: '/CommonTest',
    name: 'CommonTest',
    component: CommonTest
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
