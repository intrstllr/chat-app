<template>
    <links/>
    <RouterView />
</template>

<script>
import links from "./components/links.vue";
export default {
    components: {
        links,
    },
};
</script>
    
<style scoped>
* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
}
body {
    width: 100%;
    margin: 0%;
    padding: 0%;
    height: 100%;
}
#app {
    width: 100%;
    margin-right: 0px;
}
</style>
