<template>
    <div>
<!--        父传子传给图片-->
        <ImgCon :Data="ImgData" :Title="ImgTitle"></ImgCon>
    </div>
</template>

<script>
    import ImgCon from './publicTemplate/ImgCon';
    import bus from "../bus";
    export default {
        name: "All",
        components:{
            ImgCon,
        },
        //进入此页面时将页码设为第一页(因为当页码不是1时，点击游戏按钮，页码不会改变)，给按钮1添加激活样式，将值传到pageButton页面
        mounted() {
            bus.$emit("PageButtonInit","4");
        },
        data(){
            return{
                // ImgName:['最新手机壁纸','风景手机壁纸','美女手机壁纸','动漫手机壁纸','可爱手机壁纸'],
                ImgData:[
                    {name:'最新手机壁纸',Img:[
                        {img:require('../../static/All_Img/singleNumPage/1594176059568.jpg')},
                        {img:require('../../static/All_Img/singleNumPage/1594366713946.jpg')},
                        {img:require('../../static/All_Img/singleNumPage/ChMkJ18IGoaIWgYgABLmFbAa9vgAAwzngD1EZ4AEuYt500 (1).jpg')},
                    ],
                    // Title:[
                    //     {title:'雪山唯美意境图片壁纸'},
                    //     {title:'唯美埃菲尔铁塔手机图片壁'},
                    //     {title:'小清新水果图片壁纸'},
                    // ]
                    },
                    {name:'风景手机壁纸',Img:[
                            {img:require('../../static/All_Img/singleNumPage/ChMkJ18IGoaIWgYgABLmFbAa9vgAAwzngD1EZ4AEuYt500 (1).jpg')},
                            {img:require('../../static/All_Img/singleNumPage/ChMkJl8D7C-IGJaOABeAJQ_RCywAAwtEALKMscAF4A9962.jpg')},
                            {img:require('../../static/All_Img/singleNumPage/ChMkJl8IF9eIBfpsABnCFlaefl0AAwzhQOEh6wAGcIu309.jpg')},
                    ]},
                    {name:'美女手机壁纸',Img:[
                            {img:require('../../static/All_Img/singleNumPage/ChMkJl8D4rmIF-u7ADS6NwqWDZIAAws8AORqUAANLpP851.jpg')},
                            {img:require('../../static/All_Img/singleNumPage/ChMkJl8FLh2IOwmuABUC-e-3lScAAwu4AAAAAAAFQMR758.jpg')},
                            {img:require('../../static/All_Img/singleNumPage/1594014709940.jpg')},
                    ]},
                    {name:'动漫手机壁纸',Img:[
                            {img:require('../../static/All_Img/singleNumPage/ChMlV17oYpeIf9XdAAQsDHyxOwEAAU02gBy8fYABCwk260.jpg')},
                            {img:require('../../static/All_Img/singleNumPage/ChMlWF7oYw-IR8hAAAN1urAQ7VIAAU02gN68GcAA3XS205.jpg')},
                            {img:require('../../static/All_Img/singleNumPage/ChMlWF7oYwqINdpYAAK2XimN7eUAAU02gL64T0AArZ2736.jpg')},
                    ]},
                    {name:'可爱手机壁纸',Img:[
                            {img:require('../../static/All_Img/singleNumPage/1593658132779.jpg')},
                            {img:require('../../static/All_Img/singleNumPage/ChMkJ18Ck3OICxrTADQqgeQurf0AAwqyADFlnwANCqZ624.jpg')},
                            {img:require('../../static/All_Img/singleNumPage/1593656215482.jpg')},
                    ]},

                ],
                ImgTitle:[
                    {title:[
                        ['雪山唯美意境图片壁纸','唯美埃菲尔铁塔手机图片壁','小清新水果图片壁纸'],
                        ['雪山唯美意境图片壁纸','唯美壮观的山峰风景图片壁','唯美大山自然风景高清图片'],
                        ['魅惑性感美女手机图片壁纸','个性酷美女手机图片壁纸','养眼气质美女手机图片壁纸'],
                        ['动物大联盟创意壁纸三','动物大联盟创意壁纸三','动物大联盟创意壁纸二'],
                        ['温馨母女手机图片壁纸','亲密无间母女拥抱温馨图片','超可爱小宝贝手机图片壁纸'],
                    ]},
                    {amount:[
                        [8,9,10],
                        [8,8,8],
                        [8,10,10],
                        [20,20,12],
                        [10,13,11]
                    ]}
                ]
            }
        },
    }
</script>

<style scoped>

</style>
