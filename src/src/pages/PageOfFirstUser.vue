<template>
  <authorization1 v-if="!isAuth" @authorized="isAuth = true" />
  <div class="visible__content" v-else>
    <header>
      <div class="logOut__btn" @click="logOut()">Log Out</div>
    </header>
    <div class="content">
      <div class="list_body">
        <div class="messages__List">
          <div
            v-for="msg in messages"
            :key="msg.id"
            class="mess_list"
            :class="{ right_mess_list: msg.loginUser === `admin1` }"
            :style="{ background: msg.color }"
          >
            {{ msg.body }}
            <div class="btndel" @click.prevent="deleteMessage(msg.id)">Х</div>
            <div class="time">
              {{ new Date(msg.timeSend).toLocaleTimeString() }}
            </div>
            <div class="whoSend">
              {{ msg.loginUser }}
            </div>
          </div>
        <div class="indent"></div>
        </div>
      </div>
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
      isAuth: localStorage.getItem("login1"),
    };
  },
  methods: {
    sendMessage() {
      let msg = {};
      msg.id = Date.now();
      msg.body = this.message;
      msg.timeSend = new Date();
      msg.loginUser = "admin1";
      msg.color = "#7e8ee7";
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
      localStorage.removeItem("login1");
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
.visible__content {
  width: 99vw;
  height: 100vh;
}
.content {
  width: 99vw;
  min-height: 100vh;
}
header {
  max-height: 200px;
}
.logOut__btn {
  background: blue;
  width: 100px;
  height: 35px;
  border: none;
  width: 100px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  color: white;
  border-radius: 5px;
  margin-left: 90vw;
  margin-top: 10px;
  max-height: 35px;
}

.list_body {
  width: 51%;
  max-width: 60%; 
  margin: auto;
}

.messages__List {
  list-style: none;
  margin-top: 10px;
  padding: 5px;
  position: relative;
  flex-direction: column;
  display: flex;
  flex-wrap: wrap;
  max-width: 600px;
  width:fit-content;
  margin: auto;
  border: 5px;
}
.mess_list {
  padding: 16px;
  border-radius: 10px;
  margin-top: 5px;
  overflow-wrap: break-word;
  width: 25vw;
  max-width: 300px;
  min-width: 150px;
  display: flex;
  flex-direction: column
}
.right_mess_list {
  margin-left: 50%;
}
.btndel {
  margin-right: 0;
  top: 4px;
  float: right;
  right: 4px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: #faa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  cursor: pointer;
  margin-left: 80%;
}
.btndel:hover {
  background-color: #f00;
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
  max-width: 800px;
  margin: auto;
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
.indent {
  width: 100vw;
  height: 60px;
}
</style>
