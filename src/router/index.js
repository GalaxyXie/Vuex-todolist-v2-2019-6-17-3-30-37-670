import VueRouter from 'vue-router'
import index from '../components/index'
import Main from '../components/Main'
import Home from '../components/Home'
import MyPage from '../components/MyPage'
import Vue from 'vue'
Vue.use(VueRouter)

    
const routes = [
  { path: '/index', component: index },
  { path: '/', name: 'main',component: Main },
  { path: '/home', name: 'home', component: Home },
  { path: '/mypage',name:'MyPage', component: MyPage },
],
router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
export default router