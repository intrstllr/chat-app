<template>
  <div  id="mainList">   
    <header>
      <ul class="massages__list">
        <li v-for="msg02 in messages02" :key="msg02.id">{{ msg02.body }}
          <span><button class="btndel" @click.prevent="deleteMessage(msg.id)">
            delete</button></span></li>
      </ul>
      <div class="indent"></div>
      <form class="form">
        <div class="name">user2</div>
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
      messages02: localStorage.getItem('messages02') ? 
      JSON.parse(localStorage.getItem('messages02')) : []
    };
  },
  methods: {
    sendMessage() {
      let msg02 = {};
      msg02.id = Date.now();
      msg02.body = this.message;
      this.messages02.push(msg02);
      this.message = "";
      this.saveMessages();
      this.messages02 = JSON.parse(localStorage.getItem('messages02'));
    },
    saveMessages() {
      let parsed02 = JSON.stringify(this.messages02);
      localStorage.setItem("messages02", parsed02);
    },
    deleteMessage(id) {
      this.messages02 = this.messages02.filter((it) => it.id != id);
      localStorage.setItem("messages02")
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
  background: green;
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
  background: green;
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
.massages__list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.massages__list > li {
  padding: 10px;
}
.massages__list > li > span {
  font-weight: 500;
}
.massages__list > li:nth-child(odd) {
  background: #99e0a9;
}
.indent{
  min-height: 60px;
  width: 100%;
}
.btndel{
  margin-left: 700px;
  margin-bottom: 0px ;
}
</style>
