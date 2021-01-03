<template>
    <div class="buttonGroup">
        <el-button round><router-link to="/bizhi/all">Zol壁纸</router-link></el-button>
        <el-button round><router-link to=""></router-link>原地不动</el-button>
    </div>

</template>

<script>
    export default {
        name: "toBizhi"
    }
</script>

<style scoped>
    .buttonGroup{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>
