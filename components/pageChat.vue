<template>
    <main class="page">
        <div class="page_container">
            <div class="page_body">
                <button class="LogOut" @click.prevent="$emit('logout')">LogOut</button>
                <ChatContent :user="user"></ChatContent>
            </div>
        </div>
    </main>
</template>

<script>
import ChatContent from "./ChatContent.vue";

export default {
    components: {
        ChatContent,
    },
    props: { user: {}},
    // data(){
    //     let user1= JSON.parce(localStorage.getItem('authfirst'))
    //     let user2= JSON.parce(localStorage.getItem('authsecond'))
        
    // },
    // getUser(user1,user2){
    //     if
    // }
};
</script>
<style>
.page_body {
    height: 100%;
    max-height: 100%;
}
.page_container {
    height: 100%;
    max-height: 100%;
}
.page {
    height: 100%;
}
.LogOut {
    height: 40px;
    width: 100px;
    background-color: antiquewhite;
    border-color: antiquewhite;
    margin: 5px 0 0 88%;
    cursor: pointer;
}
</style>
