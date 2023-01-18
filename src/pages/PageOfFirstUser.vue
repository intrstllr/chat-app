<template>
    <authorization v-if="!authorizated" @AuthorizComplete='AuthorizComplete'/>
    <MessageContainer v-else/>
</template>

<script>
import authorization from "../components/Authorization.vue";

import MessageContainer from "../components/MessageContainer.vue";
export default {
    components: {
        authorization,

        MessageContainer
    },
    data() {
        return {
            data: this.$storage.data,
            user: null,
            authorizated:true
        };
    },
    created() {
        this.user = this.getUser();
    },
    methods: {
        succesfullAuth(user) {
            if(this.$storage.data.users.find(el => el)){

            }
            this.$storage.updateFirstPageAuth(user.id);
            this.user = this.getUser();
        },
        getUser() {
            if (this.data !== null) {
                return this.$storage.getUserById(this.$storage.data.users);
            } else {
                return null;
            }
        },
    },
};
</script>
<!-- <style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
}
.form {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.15);
    padding: 5px;
    display: flex;
    height: 50px;
    align-items: center;
    backdrop-filter: blur(10px);
}
.input_for_messages {
    height: 35px;
    border-radius: 5px;
    border: none;
    margin: 5px;
    padding: 0;
    display: flex;
    width: 100%;
    outline: none;
}
.btnSend {
    background: blue;
    border: none;
    width: 100px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    color: white;
    border-radius: 5px;
}
.messages__List {
    list-style: none;
    margin-top: 10px;
    padding: 5px;
    position: relative;
}
.indent__for__form {
    min-height: 120px;
    width: 100%;
    height: 120px;
}
.btndel {
    position: absolute;
    top: 4px;
    right: 4px;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    background-color: #faa;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    cursor: pointer;
}
.btndel:hover {
    background-color: #f00;
}
.mess_list {
    padding: 16px;
    border-radius: 20px;
    margin-top: 5px;
    max-width: 620px;
    overflow-wrap: break-word;
    min-width: 620px;
}
.logOut__btn {
    width: 100px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    color: white;
    border-radius: 5px;
    background: blue;
    border: none;
    width: 100px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    color: white;
    border-radius: 5px;
    margin-left: 1500px;
    margin-top: 10px;
    max-height: 35px;
    position: fixed;
}
.content {
    margin-left: 50%;
    display: flex;
}
header {
    max-height: 200px;
}
</style> -->
