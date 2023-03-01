<template>
</template>

<script>
export default {
    components: {
    },
    data() {
        return {
            authorized: JSON.parse(localStorage.getItem("authsecond")),
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
