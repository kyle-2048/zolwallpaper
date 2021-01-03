<template>
    <div class="all">
        <div class="header">
            <img src="../../static/logo-sjbz.png" alt="图片加载失败">
            <div class="Search">
                <input type="text" placeholder="请输入壁纸名称" >
                <i class="el-icon-search"></i>
                <button class="SearchButton"><div>搜索</div></button>
            </div>
        </div>
        <div class="Navbar">
            <ul class="left">
                <li v-for="(data,index) in NavLeftList" :key="index" @click="changeHover(index),NavLocation=data"
                    :class="{NavActive:index===navActive}" >
                    {{data}}
                </li>
            </ul>
            <ul class="right">
                <li>相关推荐:</li>
                <li>产品图赏</li>
                <li>上传壁纸</li>
            </ul>
        </div>
        <div class="wrapper_location">
            <a href="">{{NavLocation}}</a>
            <span>></span>
            <a href="">{{FenleiList[this.ActiveFenlei]}}</a>
        </div>
        <div style="display: flex">
<!--            主内容左边区域-->
            <div style="margin-right:0.1rem" >
                <div class="carousel_container">
                    <el-carousel indicator-position="outside" style="width: 7.2rem;height: 4.32rem" arrow="always">
                        <el-carousel-item v-for="(item,index) in carouselPhoto" :key="index">
                            <h3><img :src="item.img" alt=""></h3>
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <div class="BizhiFenlei">
                    <span class="spanTitle">壁纸分类:</span>
                    <div class="FenleiContainer">
                    <span v-for="(data,index) in FenleiList" :key="index" @click="HandleClick(index)" :class="{ActFenleiClass:index==ActiveFenlei}">{{data}}</span>
                    </div>
                </div>
                <router-view></router-view>
                <ButtonPage></ButtonPage>
            </div>
<!--            主内容右边区域-->
            <div class="rightArea">
<!--                父传子，传过去的是数据-->
                <paixing :list="tuijianList" :title="listTitle[0]"></paixing>
                <div class="hotLabel">
                    <div class="title">热门手机壁纸标签</div>
                    <div class="labelCon">
                        <a v-for="(data,index) in labelList" v-givecolor>{{data}}</a>
                    </div>
                </div>
                <paixing :list="meilvList" :title="listTitle[1]"></paixing>
                <paixing :list="fengjingList" :title="listTitle[2]" ></paixing>
                <paixing :list="dongmanList" :title="listTitle[3]" ></paixing>
                <paixing :list="keaiList" :title="listTitle[4]" ></paixing>
                <paixing :list="chuangyiList" :title="listTitle[5]" ></paixing>
            </div>
        </div>
    </div>
</template>


<script>
    import '@/style/BizhiShouye.css'
    import paixing from '@/component/publicTemplate/paixingTemplate'
    import ButtonPage from '@/component/pageButton'
    export default {
        name: "BizhiShouye",
        components:{
            ButtonPage,
            paixing
        },
        directives:{
            //根据长度不同，给标签框的标签添加不同的颜色
          givecolor:{
              inserted(el,binding,vnode){
                  if(el.textContent.length===4){
                      el.style.color="#666"
                  }
                  else if(el.textContent.length===6){
                      el.style.color="#f60"
                  }
                  else if(el.textContent.length===7){
                      el.style.color="#65850F"
                  }else{
                      el.style.color="#c00"

                  }
              }
          }
        },
        data(){
            return{
                NavLeftList:['壁纸首页','电脑壁纸','笔记本壁纸','iPad壁纸','手机壁纸','壁纸精选','婚纱摄影'],
                navActive:null, //存储左导航栏active的index
                ActiveFenlei:null,
                NavLocation:'手机壁纸',
                carouselPhoto:[
                    {img:require('../../static/el-carousel/ChMlV17sNC6IfUZ4AA7_9VBO9usAAU9bgAI2Z8ADwAN411.jpg')},
                    {img:require('../../static/el-carousel/ChMlV17sRDuIAZBDABIMs86nd9wAAU9oQPcG6gAEgzL038.jpg')},
                    {img:require('../../static/el-carousel/ChMlWF7xvaWIcxEzAB9uRBF9dyoAAVJlgLjyx8AH25c171.jpg')},
                    {img:require('../../static/el-carousel/ChMly174KB2IdiS5ABioy_YEDFgAAYYIQAiVo0AGKjj866.jpg')},
                    {img:require('../../static/el-carousel/ChMly174TtSIWl0yACH1FqvGiHEAAYYaQDSk7sAIfUu364.jpg')},
                    {img:require('../../static/el-carousel/ChMlzF8FPhWIZGl_AGDuxV_IAoQAAYfcwI7vLQAYO7d856.jpg')}
                ],
                FenleiList:['全部','游戏','动漫','美女','创意','爱情','卡通','可爱','明星','车模','潮图','汽车',
                '品牌','体育','节目','影视','动物','建筑','植物','星座','美食','手抄报','背景','其他'],
                labelList:['苹果手机壁纸','安卓壁纸','非主流手机壁纸','好看的手机壁纸','唯美壁纸','动态手机壁纸','大屏幕手机壁纸',
                    '智能手机壁纸','精美壁纸','小清新手机壁纸','高清的手机壁纸','安卓动态壁纸','iPhone壁纸','个性手机壁纸','伤感壁纸','搞笑手机壁纸',
                    '3D手机壁纸','宽屏的手机壁纸','小米手机壁纸'],
                listTitle:['手机壁纸网友推荐','美女手机壁纸下载排行','风景手机壁纸下载排行','动漫手机壁纸下载排行','可爱手机壁纸下载排行','创意手机壁纸下载排行'],
                tuijianList:[
                    {
                        word:'个性清纯美女高清手机壁纸',
                        amount:'1900',
                        img:require('../../static/tuijianListPhoto/ChMkJlfJQguIbLjUAAEsA-DD_9YAAU7kQFJVtUAASwb382.jpg')
                    },
                    {
                        word:'韩国宅男《闹钟 Alarm》高清',
                        amount:'1089',
                        img:require('../../static/tuijianListPhoto/ChMkJ1fJQdmIT6e2AAFnkfy9QK4AAU7igEGvb0AAWep269.jpg')
                    },
                    {
                        word:'太空星云锁屏竖图手机壁纸',
                        amount:'1012',
                        img:require('../../static/tuijianListPhoto/ChMkJlfJQVeIVwuxAA1qPhZyxrsAAU7cQBNftUADWpW742.jpg')
                    },
                    {
                        word:'超美高清美丽风景壁纸',
                        amount:'929',
                        img:require('../../static/tuijianListPhoto/ChMkJlfJQcuIWeyfAAaVOawltHYAAU7hwPMhXYABpVR177.jpg')
                    },
                    {
                        word:'创意文字手机壁纸',
                        amount:'902',
                        img:require('../../static/tuijianListPhoto/ChMkJ1fJUUuIFFmUAAVgYLAulZsAAU9dQJRnKAABWB4914.jpg')
                    },
                    {
                        word:'另类彩色创意壁纸图片',
                        amount:'688',
                        img:require('../../static/tuijianListPhoto/ChMkJlfJVbKIAnd7AANLnP3a-cAAAU95QLSqB0AA0u0264.jpg')
                    },
                    {
                        word:'Elementary OS Luna壁纸全',
                        amount:'636',
                        img:require('../../static/tuijianListPhoto/ChMkJ1fJQVSIMLbUACHw9N-ATccAAU7cAJiX0oAIfEM441.jpg')
                    },
                    {
                        word:'清纯美女张馨予高清手机壁纸',
                        amount:'607',
                        img:require('../../static/tuijianListPhoto/ChMkJ1fJQfOITPmeAAK9kzM1VqIAAU7jQKVJ5AAAr2r152.jpg')
                    },
                    {
                        word:'蓝色风景iPhone 6 plus手机',
                        amount:'564',
                        img:require('../../static/tuijianListPhoto/ChMkJ1fJVDOIaq8OAAdmrY1k4PQAAU9vgKneYMAB2bF789.jpg')
                    },
                    {
                        word:'火焰字母手机壁纸',
                        amount:'544',
                        img:require('../../static/tuijianListPhoto/ChMkJlfJQj2IKhFqAAFZN3C4Z7IAAU7mQE48hEAAVlP331.jpg')
                    },
                ],
                meilvList:[
                    {
                        word:'个性清纯美女高清手机壁纸',
                        amount:'24175',
                        img:require('../../static/paixingPhoto/meilv/2.jpg')
                    },
                    {
                        word:'精美剑侠情缘非主流壁纸',
                        amount:'37832',
                        img:require('../../static/paixingPhoto/meilv/1.jpg')
                    },
                    {
                        word:'清纯非主流美女高清壁纸',
                        amount:'15794',
                        img:require('../../static/paixingPhoto/meilv/3.jpg')
                    },
                    {
                        word:'IU高清好看的手机壁纸',
                        amount:'27421',
                        img:require('../../static/paixingPhoto/meilv/4.jpg')
                    },
                    {
                        word:'戚薇个人写真集手机壁纸',
                        amount:'17483',
                        img:require('../../static/paixingPhoto/meilv/5.jpg')
                    },
                    {
                        word:'韩国美女手机壁纸',
                        amount:'27315',
                        img:require('../../static/paixingPhoto/meilv/6.jpg')
                    },
                    {
                        word:'清纯小美女手机壁纸',
                        amount:'30842',
                        img:require('../../static/paixingPhoto/meilv/7.jpg')
                    },
                    {
                        word:'小天后泰勒唯美壁纸',
                        amount:'15837',
                        img:require('../../static/paixingPhoto/meilv/2.jpg')
                    },
                    {
                        word:'蕾哈娜欧美高清美女壁纸',
                        amount:'28547',
                        img:require('../../static/paixingPhoto/meilv/9.jpg')
                    },
                    {
                        word:'裴紫绮高清写真壁纸图片',
                        amount:'28532',
                        img:require('../../static/paixingPhoto/meilv/10.jpg')
                    },
                ],
                fengjingList:[
                    {
                        word:'冰雪冬季唯美壁纸下载',
                        amount:'24175',
                        img:require('../../static/paixingPhoto/fengjing/1.jpg')
                    },
                    {
                        word:'Elementary OS壁纸全集',
                        amount:'13874',
                        img:require('../../static/paixingPhoto/fengjing/2.jpg')
                    },
                    {
                        word:'高清锁屏手机壁纸',
                        amount:'31572',
                        img:require('../../static/paixingPhoto/fengjing/3.jpg')
                    },
                    {
                        word:'超美高清美丽风景壁纸',
                        amount:'41023',
                        img:require('../../static/paixingPhoto/fengjing/4.jpg')
                    },
                    {
                        word:'浩渺星空竖图壁纸',
                        amount:'31334',
                        img:require('../../static/paixingPhoto/fengjing/5.jpg')
                    },
                    {
                        word:'高清手机屏保壁纸桌面',
                        amount:'34897',
                        img:require('../../static/paixingPhoto/fengjing/6.jpg')
                    },
                    {
                        word:'太空星云锁屏竖图手机壁纸',
                        amount:'18764',
                        img:require('../../static/paixingPhoto/fengjing/7.jpg')
                    },
                    {
                        word:'蓝色风景手机壁纸',
                        amount:'25647',
                        img:require('../../static/paixingPhoto/fengjing/8.jpg')
                    },{
                        word:'码头唯美风景壁纸',
                        amount:'34210',
                        img:require('../../static/paixingPhoto/fengjing/9.jpg')
                    },
                    {
                        word:'超大自然景色手机壁纸',
                        amount:'21795',
                        img:require('../../static/paixingPhoto/fengjing/10.jpg')
                    },

                ],
                dongmanList:[
                    {
                        word:'海贼王大图手机壁纸',
                        amount:'31456',
                        img:require('../../static/paixingPhoto/dongman/1.jpg')
                    },
                    {
                        word:'无头骑士异闻录高清手机壁纸',
                        amount:'23490',
                        img:require('../../static/paixingPhoto/dongman/2.jpg')
                    },
                    {
                        word:'言叶之庭唯美手绘壁纸',
                        amount:'34242',
                        img:require('../../static/paixingPhoto/dongman/3.png')
                    },
                    {
                        word:'全职猎人动漫手机壁纸',
                        amount:'17892',
                        img:require('../../static/paixingPhoto/dongman/4.jpg')
                    },
                    {
                        word:'可爱的卡通手机壁纸下载',
                        amount:'26748',
                        img:require('../../static/paixingPhoto/dongman/5.jpg')
                    },
                    {
                        word:'卡通Q版手机壁纸',
                        amount:'18467',
                        img:require('../../static/paixingPhoto/dongman/6.jpg')
                    },
                    {
                        word:'高清动漫黑岩射手手机壁纸',
                        amount:'18942',
                        img:require('../../static/paixingPhoto/dongman/7.jpg')
                    },{
                        word:'可爱动漫物部布都手机壁纸',
                        amount:'23480',
                        img:require('../../static/paixingPhoto/dongman/2.jpg')
                    },
                    {
                        word:'时崎狂三高清手机壁纸',
                        amount:'26427',
                        img:require('../../static/paixingPhoto/dongman/9.jpg')
                    },
                    {
                        word:'辛普森一家手机壁纸',
                        amount:'31042',
                        img:require('../../static/paixingPhoto/dongman/10.jpg')
                    },
                ],
                keaiList:[
                    {
                        word:'韩国宅男闹钟高清壁纸',
                        amount:'21342',
                        img:require('../../static/paixingPhoto/keai/1.jpg')
                    },
                    {
                        word:'童话秋天插画壁纸',
                        amount:'31075',
                        img:require('../../static/paixingPhoto/keai/2.jpg')
                    },
                    {
                        word:'亚马逊小人可爱壁纸',
                        amount:'18743',
                        img:require('../../static/paixingPhoto/keai/3.jpg')
                    },
                    {
                        word:'盒子人Danbo手机壁纸',
                        amount:'23492',
                        img:require('../../static/paixingPhoto/keai/4.jpg')
                    },
                    {
                        word:'幽默可爱高清手机壁纸',
                        amount:'31055',
                        img:require('../../static/paixingPhoto/keai/5.jpg')
                    },
                    {
                        word:'童话秋天插画壁纸二',
                        amount:'26840',
                        img:require('../../static/paixingPhoto/keai/6.jpg')
                    },
                    {
                        word:'个性动物手机壁纸图集',
                        amount:'31020',
                        img:require('../../static/paixingPhoto/keai/7.jpg')
                    },
                    {
                        word:'动漫非主流情侣高清壁纸',
                        amount:'24867',
                        img:require('../../static/paixingPhoto/keai/8.jpg')
                    },
                    {
                        word:'卑鄙的我手机壁纸',
                        amount:'28460',
                        img:require('../../static/paixingPhoto/keai/9.jpg')
                    },
                    {
                        word:'可爱好玩卡通手机桌面',
                        amount:'31128',
                        img:require('../../static/paixingPhoto/keai/10.jpg')
                    },

                ],
                chuangyiList:[
                    {
                        word:'ZOL原创手机壁纸下载',
                        amount:'23405',
                        img:require('../../static/paixingPhoto/chuangyi/1.jpg')
                    },
                    {
                        word:'高清宽屏手机壁纸',
                        amount:'34201',
                        img:require('../../static/paixingPhoto/chuangyi/2.jpg')
                    },
                    {
                        word:'简约的美手机高清壁纸',
                        amount:'18846',
                        img:require('../../static/paixingPhoto/chuangyi/3.jpg')
                    },
                    {
                        word:'V字仇杀队高清手机壁纸下载',
                        amount:'15672',
                        img:require('../../static/paixingPhoto/chuangyi/4.jpg')
                    },
                    {
                        word:'彩色宽屏手机壁纸',
                        amount:'31058',
                        img:require('../../static/paixingPhoto/chuangyi/5.jpg')
                    },
                    {
                        word:'简约高清小米手机壁纸',
                        amount:'31284',
                        img:require('../../static/paixingPhoto/chuangyi/6.jpg')
                    },
                    {
                        word:'清新文艺范手机壁纸',
                        amount:'25642',
                        img:require('../../static/paixingPhoto/chuangyi/7.jpg')
                    },
                    {
                        word:'窗外的雨滴高清大图壁纸',
                        amount:'28465',
                        img:require('../../static/paixingPhoto/chuangyi/8.jpg')
                    },
                    {
                        word:'简约手机壁纸图片',
                        amount:'31586',
                        img:require('../../static/paixingPhoto/chuangyi/9.jpg')
                    },
                    {
                        word:'大图彩色手机壁纸下载',
                        amount:'34506',
                        img:require('../../static/paixingPhoto/chuangyi/10.jpg')
                    },
                ],
            }
        },
        methods:{
            changeHover(index){
                this.navActive=index;
            },
            //根据所点击的壁纸分类跳转到对应的网页，这里只有前三个具有路由跳转功能
            HandleClick(index){
                this.ActiveFenlei=index;
                //这里注意先存储sessionstore再跳转
                // window.sessionStorage.setItem('activeIndex',this.ActiveFenlei)
                switch (this.FenleiList[this.ActiveFenlei]) {
                    case '游戏' : return this.$router.push('/bizhi/youxi');
                    case '动漫' : return this.$router.push('/bizhi/dongman');
                    case '全部' : return this.$router.push('/bizhi/all');
                }

            }

        },
        mounted() {
            //实现ActiveFenlei根据路由的路径变化
            let path=this.$route.path;
            if(path.indexOf('all')>-1){
                this.ActiveFenlei=0;
            }
            else if(path.indexOf('youxi')>-1){
                this.ActiveFenlei=1;
            }
            else if(path.indexOf('dongman')>-1){
                this.ActiveFenlei=2;
            }
        },
    }

</script>

<style scoped>

</style>
