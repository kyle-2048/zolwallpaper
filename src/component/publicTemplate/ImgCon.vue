<template>
    <div>
<!--        这是一个装图片的复用组件-->
        <div class="ImgContainer" v-for="(data,index) in Data" :key="index">
            <div class="header">
                <span>{{data.name}}</span>
                <span>更多></span>
            </div>
            <div class="main">
                <div v-for="(item,index2) in data.Img" :key="index2" class="ImgCon">
                    <img v-lazy="item.img" alt="" :key="index2">
                    <div class="word">
                        <span>{{Title[0].title[index][index2]}}</span>
                        <span>({{Title[1].amount[index][index2]}}张)</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import '@/style/ImgCon.css'
    export default {
        name: "ImgCon",
        data(){
            return{
                // title:[1,2,3]
            }
        },
        props:{
            Data:Array,
            Title:Array,
        },
        mounted() {

        }
    }
</script>

<style scoped>

</style>
