<template>
    <div class="wangyoutuijian" style="display: inline-block">
        <div class="title"><h2>{{title}}</h2></div>
        <div class="tuijianList">
            <div class="container" v-for="(data,index) in this.list" :key="index" >
                <div class="word">
                    <a href="javascript:void(0)" @mouseover="ImgShow=index">{{data.word}}</a>
                    <span>({{data.amount}})</span>
                </div>
                <div class="ImgContainer keyCenter" v-show="index===ImgShow">
                    <img :src="data.img" alt="" >
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "paixingTemplate",
        data(){
            return{
                ImgShow:0, //存储要显示的图片
            }
        },
        props:{
            list:Array,
            title:String,
        }
    }
</script>

<style scoped>

</style>
