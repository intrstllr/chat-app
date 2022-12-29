<template>
  <div>
    <authorization1 v-if="!isAuth" @authorized="isAuth = true" />
    <body v-else>
      <div>
        <div class="messages__List">
          <div v-for="msg in messages" :key="msg.id" class="mess_list">
            {{ msg.body }}
            <div class="btndel" @click.prevent="deleteMessage(msg.id)">Х</div>
            <div class="time">{{new Date(msg.timeSend).toLocaleTimeString()}}</div>
          </div>
        </div>
      </div>
      <button class="logOut__btn"   >LogOut</button>
      <div class="indent__for__form"></div>
      <form class="form">
        <div class="name">user1</div>
        <input
          type="text"
          class="input_for_messages"
          autocomplete="off"
          v-model="message"
        />
        <button class="btnSend" @click.prevent="sendMessage">Send</button>
      </form>
    </body>
  </div>
</template>

<script>
import authorization1 from "../components/authorization1.vue";

export default {
  components: {
    authorization1,
  },
  data() {
    return {
      message: "",
      messages: localStorage.getItem("messages")
        ? JSON.parse(localStorage.getItem("messages"))
        : [],
      isAuth: localStorage.getItem("login"),
    };
  },
  methods: {

    sendMessage() {
      let msg = {};
      msg.id = Date.now();
      msg.body = this.message;
      msg.timeSend = new Date()
      msg.loginUser = 
      this.messages.push(msg);
      this.message = "";
      this.saveMessages();
    },
    saveMessages() {
      let parsed = JSON.stringify(this.messages);
      setInterval(localStorage.setItem("messages", parsed));
    },
    deleteMessage(id) {
      this.messages = this.messages.filter((it) => it.id != id);
      this.saveMessages();
    },
  },
  mounted() {
    setInterval(() => localStorage.getItem("messages"), 1000);
  },
};
</script>
<style scoped>
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
.name {
  height: 35px;
  background: blue;
  padding: 15px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 14px;
  font-weight: 300;
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
}
.indent__for__form {
  min-height: 60px;
  width: 100%;
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
  border: #faa;
}
.btndel:hover {
  background-color: #f00;
}
.mess_list {
  padding: 16px;
  background: rgb(126, 142, 231);
  border-radius: 20px;
  width: 48%;
  margin-top: 5px;
}
.logOut__btn {
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
</style>
