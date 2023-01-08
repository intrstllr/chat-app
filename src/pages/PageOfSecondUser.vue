<template>
  <header>
  <div class="logOut__btn" @click="logOut()">Log Out</div> 
  </header>
  <authorization2 v-if="!isAuth" @authorized="isAuth = true" />
  <div class="content" v-else>
      <div class="messages__List">
        <div
          v-for="msg in messages"
          :key="msg.id"
          class="mess_list"
          :style="{ background: msg.color }"
        >
          {{ msg.body }}
          <div class="btndel" @click.prevent="deleteMessage(msg.id)">X</div>
          <div class="time">
            {{ new Date(msg.timeSend).toLocaleTimeString() }}
          </div>
          <div class="whoSend">
            {{ msg.loginUser }}
          </div>
        </div>
    </div>
    <div class="indent__for__form"></div>
    <form class="form">
      <input
        type="text"
        class="input_for_messages"
        autocomplete="off"
        v-model="message"
      />
      <button class="btnSend" @click.prevent="sendMessage">Send</button>
    </form>
  </div>
</template>

<script>
import authorization2 from "../components/authorization2.vue";
export default {
  components: {
    authorization2,
  },
  data() {
    return {
      message: "",
      messages: localStorage.getItem("messages")
        ? JSON.parse(localStorage.getItem("messages"))
        : [],
      isAuth: localStorage.getItem("login2"),
    };
  },
  methods: {
    sendMessage() {
      let msg = {};
      msg.id = Date.now();
      msg.body = this.message;
      msg.timeSend = new Date();
      msg.loginUser = "admin2";
      msg.color = "#2ff02f";
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
    logOut() {
      localStorage.removeItem("login2");
      location.reload();
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
  background: #18bd2e;
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
  min-height: 60px;
  width: 100%;
  position: fixed;
  height: 30px;
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
  background:  #18bd2e;
  border: none;
  width: 100px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  color: white;
  border-radius: 5px;
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
.list_body {
  min-height: 200px;
}
header{
  max-height: 200px;

}
</style>
