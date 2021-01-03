<template>
    <div>
        <ImgCon :Data="ImgData" :Title="ImgTitle"></ImgCon>
    </div>
</template>

<script>
    import ImgCon from './publicTemplate/ImgCon';
    import bus from '../bus'
    export default {
        name: "youxi",
        components: {
            ImgCon,
        },
        //进入此页面时将页码设为第一页(因为当页码不是1时，点击游戏按钮，页码不会改变)，给按钮1添加激活样式，将值传到pageButton页面
        mounted() {
            bus.$emit("PageButtonInit","4");
        },
        data() {
            return {
                ImgData: [
                    {
                        name: '游戏手机壁纸', Img: [
                            {img: require('../../static/Game_Img/FirstPage/ChMkJ1fJWBKIEtiBAAqCvWvIljAAAU-IAFWk8EACoLV301.jpg')},
                            {img: require('../../static/Game_Img/FirstPage/ChMkJ1fJWBWIZt03AATzkDgE7zAAAU-IAJHKuAABPOo799.jpg')},
                            {img: require('../../static/Game_Img/FirstPage/ChMkJ1fJWD6IY_uMAAkPnW-dksQAAU-JAAKuSEACQ-1350.jpg')},

                        ],
                    },
                    {
                        name: '', Img: [
                            {img: require('../../static/Game_Img/FirstPage/ChMkJ1gQQ7mIXO-mACS0cNxfoZwAAXNHAMMXBQAJLSI983.jpg')},
                            {img: require('../../static/Game_Img/FirstPage/ChMkJ1jJBjeIfA1yAAPogpMzGEsAAaxCwGDun8AA-ia044.jpg')},
                            {img: require('../../static/Game_Img/FirstPage/ChMkJ1jTPnWICB1kAALfHXwkw38AAa_QgJEXVQAAt81012.jpg')},
                        ]
                    },
                    {
                        name: '', Img: [
                            {img: require('../../static/Game_Img/FirstPage/ChMkJlf4xryIeleiAANAPD4_wAgAAWsMwIBF3cAA0BU935.jpg')},
                            {img: require('../../static/Game_Img/FirstPage/ChMkJlfJV-iII8EuAA17pk77T3cAAU-GwKbI-0ADXu-413.jpg')},
                            {img: require('../../static/Game_Img/FirstPage/ChMkJlfJWIaIMihIAASUU7fxDe0AAU-KAGAnRUABJRr272.jpg')},
                        ]
                    },
                    {
                        name: '', Img: [
                            {img: require('../../static/Game_Img/FirstPage/ChMkJljLtJGIOWjYAAEWXVcwHaMAAa1GgE0X0gAARZ1700.jpg')},
                            {img: require('../../static/Game_Img/FirstPage/ChMkJljR4VOIPB8UAAKX3PmQ3dkAAa8_QMBtYYAApf0713.jpg')},
                            {img: require('../../static/Game_Img/FirstPage/ChMkJljSChyIfwtbAAE62qRR2AsAAa9LgA_Wl0AATry866.jpg')},
                        ]
                    },
                    {
                        name: '', Img: [
                            {img: require('../../static/Game_Img/FirstPage/ChMkJ1gQQ7mIXO-mACS0cNxfoZwAAXNHAMMXBQAJLSI983.jpg')},
                            {img: require('../../static/Game_Img/FirstPage/ChMkJ1jJBjeIfA1yAAPogpMzGEsAAaxCwGDun8AA-ia044.jpg')},
                            {img: require('../../static/Game_Img/FirstPage/ChMkJ1jTPnWICB1kAALfHXwkw38AAa_QgJEXVQAAt81012.jpg')},
                        ]
                    },
                ],
                ImgTitle: [
                    {
                        title: [
                            ['地下城与勇士手机壁纸', '魔兽世界手机壁纸', '小清新水果图片壁纸'],
                            ['雪山唯美意境图片壁纸', '唯美壮观的山峰风景图片壁', '唯美大山自然风景高清图片'],
                            ['魅惑性感美女手机图片壁纸', '个性酷美女手机图片壁纸', '养眼气质美女手机图片壁纸'],
                            ['动物大联盟创意壁纸三', '动物大联盟创意壁纸三', '动物大联盟创意壁纸二'],
                            ['温馨母女手机图片壁纸', '亲密无间母女拥抱温馨图片', '超可爱小宝贝手机图片壁纸'],
                            ['雪山唯美意境图片壁纸', '唯美壮观的山峰风景图片壁', '唯美大山自然风景高清图片'],
                        ]
                    },
                    {
                        amount: [
                            [8, 9, 10],
                            [8, 8, 8],
                            [8, 10, 10],
                            [20, 20, 12],
                            [10, 13, 11]
                        ]
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
