<template>
    <div>
        我是动漫
    </div>
</template>

<script>
    import bus from "../bus";

    export default {
        name: "second",
        mounted() {
            bus.$emit("PageButtonInit","4");
        },

    }
</script>

<style scoped>

</style>
