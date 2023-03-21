// import { createApp } from 'vue'
// import App from './App.vue'
// import store from './store'
// import home from './components/home.vue'
// import { createRouter, createWebHashHistory } from 'vue-router'

// const Home = home
// const Detail = {template:'<h1>Detalles</h1>'}

// const routes = [
//     {
//         path:'/',
//         component:Home
//     },
//     {
//         path:'/detail',
//         component:Detail,
//     }
// ]

// const VueRouter = createRouter({
//     history: createWebHashHistory(),
//     routes
// })

// const app = createApp(App).use(store).use(VueRouter).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
// import home from './components/home.vue'
import home from '@/components/home.vue'
import detail from '@/components/detalles.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const Home = home
const Detail = detail

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/detail',
    component: Detail
  }
]

const vueRouter = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp(App)
  .use(store)
  .use(vueRouter)
  .mount('#app')

