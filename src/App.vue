<template>
    <AccessViaLinks></AccessViaLinks>
    <RouterView />
</template>

<script>
import AccessViaLinks from "./components/AccessViaLinks.vue";
export default {
    components: { 
        AccessViaLinks
    },
};
</script>

<style scoped>
* {
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
