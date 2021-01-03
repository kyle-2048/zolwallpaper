<template>
    <div id="app" >
        <router-view></router-view>
    </div>
</template>

<script>
    import '@/style/common.css'
    export default {
        name: "App",
        data(){
            return{

            }
        },
        updated() {

        },
        methods:{

        },

    }
</script>

<style scoped>
    /*app要先设置宽高100%，路由大div才能够设置宽高100%*/
    #app{
        width: 100%;
        height: 100%;
    }
</style>
