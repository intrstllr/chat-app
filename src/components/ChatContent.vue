<template>
    <div class="container">
        <div class="message_container">
            <MessageInfo v-for="msg in allMessages" :message="msg" :key="msg.id"  :class="{ left_display : msg.userId !== this.user.id}" @delete="deleteMessage"/>
        </div>
        <form>
            <input placeholder="write message" type="text" v-model="message" />
            <button class="btn_send" @click.prevent="sendMessage()">send</button>
        </form>
    </div>
</template>
<script>
import MessageInfo from "./MessageInfo.vue";
export default {
    components: {
        MessageInfo,
    },
    props: { user: {}},
    data() {
        return {
            message: "",
            allMessages: localStorage.getItem("chat") ? JSON.parse(localStorage.getItem("chat")) : [],
        };
    },
    methods: {
        sendMessage() {
            let msg = {
                id: Date.now(),
                body: this.message,
                time: Date.now(),
                userId:this.user.id
            };
            this.allMessages.push(msg);
            this.message = "";
            this.saveMessage();
        },
        saveMessage() {
            let messageLocalstorage = JSON.stringify(this.allMessages);
            setInterval(localStorage.setItem("chat", messageLocalstorage));
        },
        deleteMessage(id) {
            this.allMessages = this.allMessages.filter((el) => el.id != id);
            this.saveMessage();
        },
    },
    mounted() {
        // console.log(user)
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
    max-width:800px;
    height: 50px;
}
input {
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
