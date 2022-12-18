<template>
  <div id="mainList">
    <header>
      <ul class="massagesList">
        <li v-for="msg in messages" :key="msg.id">
          {{ msg.body
          }}<span
            ><button class="btndel" @click.prevent="deleteMessage(msg.id)">
              delete
            </button></span
          >
        </li>
      </ul>
      <div class="indent"></div>
      <form class="form">
        <div class="name">user1</div>
        <input type="text" class="pole" autocomplete="off" v-model="message" />
        <button class="btn" @click.prevent="sendMessage">send</button>
      </form>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      messages: localStorage.getItem('messages') ? 
      JSON.parse(localStorage.getItem('messages')) : []
    };
  },
  methods: {
    sendMessage() {
      let msg = {};
      msg.id = Date.now();
      msg.body = this.message;
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
      this.saveMessages()
    }, 
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

.pole {
  height: 35px;
  border-radius: 5px;
  border: none;
  margin: 5px;
  padding: 0;
  display: flex;
  width: 100%;
  outline: none;
}
.btn {
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
.massagesList {
  list-style: none;
  margin: 0;
  padding: 0;
}
.massagesList > li {
  padding: 10px;
}
.massagesList > li > span {
  font-weight: 500;
}
.massagesList > li:nth-child(odd) {
  background: #aeb9d6;
}
.indent {
  min-height: 60px;
  width: 100%;
}
.btndel {
  margin-left: 700px;
  margin-bottom: 0px;
}
</style>
