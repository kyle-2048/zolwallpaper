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
                            {img: require('../../../static/Game_Img/SecondPage/ChMkJ1fJVuqIMbSQAAJ8JFec_aMAAU-AwIMTsIAAnw8160.jpg')},
                            {img: require('../../../static/Game_Img/SecondPage/ChMkJ1fJVwuIESzWAA6ozJMF0j4AAU-BgC5-UYADqjk063.jpg')},
                            {img: require('../../../static/Game_Img/SecondPage/ChMkJlfJVeKILqzyAAt3UTy2U7kAAU96QMt9nQAC3dp028.jpg')},
                        ],
                    },
                    {
                        name: '', Img: [
                            {img: require('../../../static/Game_Img/SecondPage/ChMkJlfJVfiIHdmEAAmLpcc1WrUAAU96wOUN8UACYu9609.jpg')},
                            {img: require('../../../static/Game_Img/SecondPage/ChMkJlfJVkeIO4mYAAVMdSZHT6QAAU99AAtrLcABUyN077.jpg')},
                            {img: require('../../../static/Game_Img/SecondPage/ChMkJlfJVlSISORjAA9pLOqYblkAAU99QATs1MAD2lE352.jpg')},
                        ]
                    },
                    {
                        name: '', Img: [
                            {img: require('../../../static/Game_Img/SecondPage/ChMkJlfJVoOIIwSlAAw9hNWagf4AAU9-QMSHu0ADD2c565.jpg')},
                            {img: require('../../../static/Game_Img/SecondPage/ChMkJlfJVqOIA0b4AA8BRmHhjaIAAU9_AOexpgADwFe671.jpg')},
                            {img: require('../../../static/Game_Img/SecondPage/ChMkJlfJVrWIFFeFAAkWLD7SiN0AAU9_gHy-WAACRZE893.jpg')},
                        ]
                    },
                    {
                        name: '', Img: [
                            {img: require('../../../static/Game_Img/SecondPage/ChMkJlfJVsiIOK49AAUTEgVNgAkAAU-AAG3XeQABRMq911.jpg')},
                            {img: require('../../../static/Game_Img/SecondPage/ChMkJlfJVxWIGgSMACBZgmncX-cAAU-BwFKMwQAIFma174.jpg')},
                            {img: require('../../../static/Game_Img/SecondPage/ChMkJlfJVz-IOkCjAALBIp8QlDcAAU-CwFGYa0AAsE6920.jpg')},
                        ]
                    },
                    {
                        name: '', Img: [
                            {img: require('../../../static/Game_Img/SecondPage/ChMkJlfJVfiIHdmEAAmLpcc1WrUAAU96wOUN8UACYu9609.jpg')},
                            {img: require('../../../static/Game_Img/SecondPage/ChMkJlfJVkeIO4mYAAVMdSZHT6QAAU99AAtrLcABUyN077.jpg')},
                            {img: require('../../../static/Game_Img/SecondPage/ChMkJlfJVlSISORjAA9pLOqYblkAAU99QATs1MAD2lE352.jpg')},
                        ]
                    },
                ],
                ImgTitle: [
                    {
                        title: [
                            ['暗黑破坏神高清手机壁纸', '英雄联盟手机高清壁纸', '上古卷轴游戏高清壁纸'],
                            ['DOTA 2经典高清手机壁纸', 'DNF高清手机大图壁纸', '战争前线 Warface游戏壁纸'],
                            ['堕落之王手机高清壁纸', '孤岛危机2 HD 02 手机高清壁纸', 'LOL经典手机壁纸'],
                            ['dota 2高清手机壁纸图片', 'lol超清手机壁纸', 'dota影魔超清壁纸'],
                            ['DOTA 2经典高清手机壁纸', 'DNF高清手机大图壁纸', '战争前线 Warface游戏壁纸'],
                        ]
                    },
                    {
                        amount: [
                            [11, 13, 11],
                            [11, 16, 12],
                            [13, 13, 11],
                            [15, 11, 8],
                            [11, 16, 12],
                        ]
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
