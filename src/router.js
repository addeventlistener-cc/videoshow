import VueRouter from 'vue-router' 
import game from './components/game.vue'
import gaoxiao from './components/gaoxiao.vue'
import ashboard from './components/ashboard.vue'
import login from './components/login.vue'
import register from './components/register.vue'
import user from './components/user.vue'
import regsuccess from './components/regsuccess.vue'

let router=new VueRouter({
    routes:[
        {path:'/',redirect:'/game'},
        {path:'/game',component:game},
        {path:'/gaoxiao',component:gaoxiao},
        {path:'/ashboard',component:ashboard},
        {path:'/login',component:login},
        {path:'/register',component:register},
        {path:'/user',component:user},
        {path:'/register/regsuccess',component:regsuccess},
    ]
})
export default router