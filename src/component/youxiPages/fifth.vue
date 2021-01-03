<template>
    <div>
        <ImgCon :Data="ImgData" :Title="ImgTitle"></ImgCon>
    </div>
</template>

<script>
    import ImgCon from '../publicTemplate/ImgCon';
    export default {
        name: "second",
        components: {
            ImgCon,
        },
        data() {
            return {
                ImgData: [
                    {
                        name: '游戏手机壁纸', Img: [
                            {img: require('../../../static/Game_Img/ThirdPage/ChMkJ1fJVRGIGDKnAAP2F0R47ggAAU91gD_YwAAA_Yv069.jpg')},
                            {img: require('../../../static/Game_Img/ThirdPage/ChMkJ1fJVSaITQ2NAAMlTHZdGaEAAU92AFhaisAAyVk669.jpg')},
                            {img: require('../../../static/Game_Img/ThirdPage/ChMkJ1fJVSSILnXsAAzkeVBGOuUAAU92ABQT1gADOSR987 (1).jpg')},
                        ],
                    },
                    {
                        name: '', Img: [
                            {img: require('../../../static/Game_Img/ThirdPage/ChMkJlfJU3mIDyE-AAMKT-9Ca_sAAU9qQLKg7sAAwpn088.jpg')},
                            {img: require('../../../static/Game_Img/ThirdPage/ChMkJlfJU4uIBragAAD7WnkMVpsAAU9qwLbrjQAAPty159.jpg')},
                            {img: require('../../../static/Game_Img/ThirdPage/ChMkJlfJVKmId5rAAAZYjPY0G7IAAU9ygPZuNQABlik067.jpg')},
                        ]
                    },
                    {
                        name: '', Img: [
                            {img: require('../../../static/Game_Img/ThirdPage/ChMkJlfJVPWIeKH5AAKG-IufUioAAU90wBOuIQAAocQ880.jpg')},
                            {img: require('../../../static/Game_Img/ThirdPage/ChMkJlfJVTqICtXJAAJBszCs4w4AAU92gGqdcMAAkHL231.jpg')},
                            {img: require('../../../static/Game_Img/ThirdPage/ChMkJlfJU3mIDyE-AAMKT-9Ca_sAAU9qQLKg7sAAwpn088.jpg')},
                        ]
                    },
                    {
                        name: '', Img: [
                            {img: require('../../../static/Game_Img/ThirdPage/ChMkJlfJU3mIDyE-AAMKT-9Ca_sAAU9qQLKg7sAAwpn088.jpg')},
                            {img: require('../../../static/Game_Img/ThirdPage/ChMkJlfJU4uIBragAAD7WnkMVpsAAU9qwLbrjQAAPty159.jpg')},
                            {img: require('../../../static/Game_Img/ThirdPage/ChMkJlfJVKmId5rAAAZYjPY0G7IAAU9ygPZuNQABlik067.jpg')},
                        ]
                    },
                    {
                        name: '', Img: [
                            {img: require('../../../static/Game_Img/ThirdPage/ChMkJlfJVPWIeKH5AAKG-IufUioAAU90wBOuIQAAocQ880.jpg')},
                            {img: require('../../../static/Game_Img/ThirdPage/ChMkJlfJVTqICtXJAAJBszCs4w4AAU92gGqdcMAAkHL231.jpg')},
                            {img: require('../../../static/Game_Img/ThirdPage/ChMkJlfJU3mIDyE-AAMKT-9Ca_sAAU9qQLKg7sAAwpn088.jpg')},
                        ]
                    },
                ],
                ImgTitle: [
                    {
                        title: [
                            ['《英雄联盟》游戏角色手机壁纸', 'LOL高清手机大图壁纸', '安卓LOL手机壁纸图片'],
                            ['游戏高清安卓手机桌面壁纸', 'LOL手机高清壁纸图片', 'LOL英雄联盟手机壁纸'],
                            ['街霸游戏高清手机壁纸', '《使命召唤OL》游戏手机壁纸', 'LOL高清手机桌面图片'],
                            ['游戏高清安卓手机桌面壁纸', 'LOL手机高清壁纸图片', 'LOL英雄联盟手机壁纸'],
                            ['街霸游戏高清手机壁纸', '《使命召唤OL》游戏手机壁纸', 'LOL高清手机桌面图片'],

                        ]
                    },
                    {
                        amount: [
                            [11, 12, 16],
                            [12, 11, 10],
                            [12, 9, 10],
                            [12, 11, 10],
                            [12, 9, 10],
                        ]
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
