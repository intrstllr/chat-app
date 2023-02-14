<template>
    <Authorization v-if="!authorized" @UserSecondIsLogin="complieteAuthoriz" :user="{login:'admin2',password:'654321'}"/>
    <PageChat v-else  @logout="logOut" :user="user"/>
</template>

<script>
import PageChat from "../components/PageChat.vue";
import Authorization from "../components/Authorization.vue";
export default {
    components: {
        PageChat,
        Authorization,
    },
    data() {
        return {
            authorized: JSON.parse(localStorage.getItem("authsecond")),
            user:{
                id:2
            }
        };
    },
    methods: {
        complieteAuthoriz() {
            this.authorized = true;
            JSON.stringify(localStorage.setItem("authsecond", this.authorized));
        },
        logOut() {
            this.authorized = false;
            JSON.stringify(localStorage.setItem("authsecond", this.authorized));
        },
    },
};
</script>

<style>
* {
    font-family: "Roboto", sans-serif;
}
</style>
