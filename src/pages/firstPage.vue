<template>
    <Authorization
        v-if="!authorized"
        @UserFirstIsLogin="complieteAuthoriz"
        :user="{ login: 'admin', password: '123456' }"
    />
    <PageChat v-else @logout="logOut" :user="{ id: '1' }" />
</template>

<script>
import PageChat from "../components/pageChat.vue";
import Authorization from "../components/Authorization.vue";
export default {
    components: {
        PageChat,
        Authorization,
    },
    data() {
        return {
            authorized: JSON.parse(localStorage.getItem("authfirst")),
        };
    },
    methods: {
        complieteAuthoriz() {
            this.authorized = true;
            JSON.stringify(localStorage.setItem("authfirst", this.authorized, this.userId));
        },
        logOut() {
            this.authorized = false;
            JSON.stringify(localStorage.setItem("authfirst", this.authorized));
        },
    },
};
</script>

<style>
* {
    font-family: "Roboto", sans-serif;
}
</style>
