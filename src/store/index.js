import Vue from 'vue'
import Vuex from 'vuex'

//需要实现页面刷新后activeFenlei不变的效果，但是store在页面刷新后state值会重置，所以启用了store，(最后应该是没用store)
//使用了获取route的path来实现
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        ActiveIndex:null,
    },
    mutations:{
        changeActive(state,payload){
            state.ActiveIndex=payload;
        }
    },
    actions:{

    }
})

