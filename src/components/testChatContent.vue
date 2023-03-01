<template>
    <div class="container">
        <div class="message_container">
            <MessageInfo v-for="mess in chat" :message="mess" :key="mess.id" @delete="deleteMessage"/>
        </div>
        <form>
            <input class="input" placeholder="write message" type="text" v-model="message" />
            <button class="btn_send" @click.prevent="sendMessage">send</button>
        </form>
    </div>
</template>
<script>
import MessageInfo from "./testMessageInfo.vue";
export default {
    components: {
        MessageInfo,
    },
    props: { user: {}},
    
    data() {
        return {
            message: "",
            chat: this.$globals.storage.data.chat,
        };
    },
    methods: {
        sendMessage() {
            let mess = {
                id: Date.now(),
                body: this.message,
                time: Date.now(),
            };
            console.log(this.$globals.storage.data);
            this.$globals.storage.addMessage(mess);
        },
        deleteMessage(id) {
            this.$globals.storage.deleteMessage(id);
        },
    },
};
</script>
<style>
.message_container {
    display: flex;
    flex-direction: column;
    margin: auto;
    height: 675px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid black;
    align-items: flex-end;
    overflow-y: auto;
    max-width: 800px;
}
form {
    padding: 10px 0px;
    display: flex;
    flex-direction: row;
    max-width: 800px;
    height: 50px;
}
.input {
    flex: 1 1 auto;
    padding-left: 5px;
}
.btn_send {
    width: 70px;
    cursor: pointer;
}
.container {
    max-width: 40%;
    margin: auto;
}
.left_display {
    margin-right: 70%;
}
</style>
