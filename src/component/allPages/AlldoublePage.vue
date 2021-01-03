<template>
    <div>
        <!--        父传子传给图片-->
        <ImgCon :Data="ImgData" :Title="ImgTitle"></ImgCon>
    </div>

</template>

<script>
    import ImgCon from '../publicTemplate/ImgCon';
    import bus from '../../bus'
    export default {
        name: "second",
        components:{
            ImgCon
        },
        data(){
            return{
                ImgData:[
                    {name:'最新手机壁纸',Img:[
                            {img:require('../../../static/All_Img/doubleNumPage/ChMkKl_i-mOIaR7DAA5uVgAt4yAAAHLSALJ9xIADm5u376.jpg')},
                            {img:require('../../../static/All_Img/doubleNumPage/ChMkKl_i-yGILp12AEbw88g2UD8AAHLSgLl1_kARvEL258.jpg')},
                            {img:require('../../../static/All_Img/doubleNumPage/ChMkKl_J79OINAeUAAYf4QZoVt8AAGQJAPrvHwABh_5475.jpg')},
                        ],
                    },
                    {name:'风景手机壁纸',Img:[
                            {img:require('../../../static/All_Img/doubleNumPage/ChMkKV-rvJmIegocABk41ZOY00wAAFJMQDjULMAGTjt526.jpg')},
                            {img:require('../../../static/All_Img/doubleNumPage/ChMkKV8jx7qIRwxPAAMwrHLCVRMAAAVPQDbtGUAAzDE791.jpg')},
                            {img:require('../../../static/All_Img/doubleNumPage/ChMkKV9YohWIYs-cAAHYK_As4U4AACFNAPi0koAAdhD142.jpg')},
                        ]},
                    {name:'美女手机壁纸',Img:[
                            {img:require('../../../static/All_Img/doubleNumPage/ChMkKV9ZgL-IU79CAALuqGcx31UAACGeQLPj9gAAu7A279.jpg')},
                            {img:require('../../../static/All_Img/doubleNumPage/ChMkKV_huRqIHjQgABG70_mRG-MAAHIQQC3-NEAEbvr824.jpg')},
                            {img:require('../../../static/All_Img/doubleNumPage/ChMkKV_lVgSIEs5MADM9NV7gJGwAAHRbANR9GEAMz1N060.jpg')},
                        ]},
                    {name:'动漫手机壁纸',Img:[
                            {img:require('../../../static/All_Img/doubleNumPage/ChMkKV_lViKIVnceACkftr-aRegAAHRcAHFaHsAKR_O682.jpg')},
                            {img:require('../../../static/All_Img/doubleNumPage/ChMkKV_SCj6IYQMYABL2QIZ96U4AAGjSgJp1e8AEvZY707.jpg')},
                            {img:require('../../../static/All_Img/doubleNumPage/ChMkKV_YXoWIWxLZAB1VLvOGtHgAAGyGgIbZbgAHVVG176.jpg')},
                        ]},
                    {name:'可爱手机壁纸',Img:[
                            {img:require('../../../static/All_Img/doubleNumPage/1607322310893.jpg')},
                            {img:require('../../../static/All_Img/doubleNumPage/1608284056193.jpg')},
                            {img:require('../../../static/All_Img/doubleNumPage/1608864958985.jpg')},
                        ]},

                ],
                ImgTitle:[
                    {title:[
                            ['烂漫灯光装饰布置图片壁纸','时尚漂亮女孩手机图片壁纸','蹒跚学步孩童写真图片壁纸'],
                            ['童真可爱小孩图片壁纸','动物大联盟壁纸-八月 心怀','2020辛巴狗小小兵系列壁纸'],
                            ['辛巴狗9.10教师节快乐！','做一个酷酷的女孩图片壁纸','烂漫灯光装饰布置图片壁纸'],
                            ['精选可爱呆萌的小狗图片壁','欧美酷酷女孩图片壁纸','清新自然剪影风景图片壁纸'],
                            ['可爱小朋友高清图片壁纸','清新自然剪影风景图片壁纸','可乐素材图片背景壁纸'],
                        ]},
                    {amount:[
                            [8,8,8],
                            [8,10,10],
                            [10,13,11],
                            [8,9,10],
                            [20,20,12],
                        ]}
                ]
            }

        }
    }
</script>

<style scoped>

</style>
