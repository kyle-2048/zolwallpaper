import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App'
import router from './router/index'
import ElementUI from 'element-ui'
import store from './store/index.js'
import 'element-ui/lib/theme-chalk/index.css'
import Axios from 'axios';
// import Vuex from 'vuex'

Vue.prototype.axios=Axios;

import LazyLoad from 'vue-lazyload'
Vue.use(LazyLoad,{
    loading:require('../static/loading/0176af5844caf4a8012060c87e987f.gif'),
    preLoad: 1.3,
    attempt: 1,
    // error: 'dist/error.png',
})

function setRem(){
    if(document.documentElement.clientWidth>1024){
        document.documentElement.style.fontSize=100+'px';
    }else{
        document.documentElement.style.fontSize=document.documentElement.clientWidth/980*100+'px';
    }
    console.log(document.documentElement.style.fontSize);
}
window.onresize=function () {
    setRem();
}
window.onload=function(){
    setRem();
}

// Vue.use(Vuex)
Vue.use(ElementUI)
Vue.config.productionTip=false
Vue.use(VueRouter);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
})

//每次跳转路由时，滚动条回到最上面
router.afterEach((to,from,next)=>{
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
})

