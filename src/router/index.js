import VueRouter from 'vue-router'
export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'',
            component:()=>import('@/views/toBizhi'),
        },
        {
            path:'/bizhi',
            component:()=>import('@/views/BizhiShouye'),
            children:[
                {
                    path:'youxi',
                    component:()=>import('@/component/youxi'),
                    // component:Youxi,
                },
                {
                    path:'youxi/second',
                    component:()=>import('@/component/youxiPages/second'),
                    // component:Youxi,
                },
                {
                    path:'youxi/third',
                    component:()=>import('@/component/youxiPages/third'),
                    // component:Youxi,
                },
                {
                    path:'youxi/forth',
                    component:()=>import('@/component/youxiPages/forth'),
                    // component:Youxi,
                },
                {
                    path:'youxi/fifth',
                    component:()=>import('@/component/youxiPages/fifth'),
                    // component:Youxi,
                },
                {
                    path:'dongman',
                    component: ()=>import('@/component/dongman')
                    // component:Dongman,
                },
                {
                    path:'all',
                    component: ()=>import('@/component/All'),
                    // component:Dongman,
                },
                {
                    path:'all/second',
                    component:()=>import('@/component/allPages/AlldoublePage')
                },
                {
                    path:'all/third',
                    component: ()=>import('@/component/allPages/AllsinglePage'),
                },
                {
                    path:'all/forth',
                    component:()=>import('@/component/allPages/AlldoublePage')
                },
                {
                    path:'all/fifth',
                    component: ()=>import('@/component/allPages/AllsinglePage'),
                },

            ]
        },
    ]
})
//解决重复点击带有路由跳转的元素报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}



