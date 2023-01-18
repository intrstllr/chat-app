<template>
    <div v-show="messages !== null">
        <div class="block__Conteiner__With__Messages" ref="ConteinerWithMessages">
            <MessageInfo
                v-for="msg in messages"
                :message="msg"
                :key="msg.date"
                :class="{ usermessage: msg.userId == authUserId }"
            />
        </div>
        <form action="#">
            <textarea
                placeholder="write message"
                v-model="message"
                @keydown.enter.prevent="sendMessage"
            />
            <button @click.prevent="sendMessage">SEND</button>
        </form>
    </div>
</template>

<script>
import MessageInfo from "./MessageInfo.vue";
export default {
    components: {
        MessageInfo,
    },
    props: {
        authUserId: {
            type: [Number, String],
        },
        chatId: {
            type: [Number, String],
        },
    },
    data() {
        return {
            message: "",
        };
    },
    methods: {
        sendMessage() {
            if (this.message === "") {
                let msg = {};
                msg.id = Date.now();
                msg.body = this.message;
                msg.color = "#7e8ee7";
                msg.userId = authUserId;
                this.$storage.addMessage(this.msg);
                
            }
        },
    },
};
</script>
<style>

</style>
