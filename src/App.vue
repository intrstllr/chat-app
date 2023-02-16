<template>
    <links/>
    <RouterView />
</template>

<script>
import links from "./components/links.vue";
import test from "./components/test.vue";
export default {
    components: {
        links,
        test
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
    margin: 0%;
    padding: 0%;
}
</style>
