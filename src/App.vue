<template>
    <AccessViaLinks></AccessViaLinks>
    <div class="logOut" @click="logOut()"></div>
    <RouterView />
</template>

<script>
import AccessViaLinks from "./components/AccessViaLinks.vue";
export default {
    components: {
        AccessViaLinks,
    },
    logOut(){
        this.$storage.data.logOutFirstPage()
    }
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
.logOut{
    background-color: black;
    height: 50px;
    width: 50px;
}
</style>
