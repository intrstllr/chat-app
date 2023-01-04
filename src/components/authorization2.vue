<template>
  <div class="authorization__body">
    <form class="authorization__form__" @keydown.enter.prevent="">
      <div class="div__login">
        <input
          v-model="login"
          type="text"
          class="authorization__login-input"
          placeholder="Login"
        />
      </div>
      <div class="div__password">
        <input
          v-model="password"
          type="password"
          class="authorization__password-input"
          placeholder="Password"
        />
      </div>
      <div class="authorization__btns-group">
        <button
          @click.prevent=""
          class="authorization__forgive-btn"
          @click="helpForAuthorization()"
        >
          Help
        </button>
        <button
          @click.prevent="loginVerification"
          @keydown.enter.prevent="loginVerification"
          class="authorization__login-btn"
        >
          Login
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      login: "",
      password: "",
      authorized2: false,
    };
  },
  methods: {
    userData() {
      return {
        id: 2,
        login: "admin2",
        password: "654321",
      };
    },
    loginVerification() {
      const user = this.userData();
      if (this.login === user.login && this.password === user.password) {
        this.authorized2 = true;
        localStorage.setItem("login2", JSON.stringify(this.authorized2));
        this.$emit("authorized", true);
      } else {
        this.authorized2 = false;
      }
    },
    helpForAuthorization() {
      alert(` login:admin2 \n password:654321`);
    },
  },
};
</script>

<style>
.authorization__body {
  margin-bottom: 900px;
  background-color:#91e795;
  height: 350px;
  width: 460px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  flex-direction: row;
  flex-wrap: wrap;
}
.authorization__form__ {
  border-radius: 5px;
  background-color: aliceblue;
}
.authorization__login-input {
  margin-bottom: 50px;
  size: 30px;
  width: 250px;
  height: 35px;
  border-radius: 5px;
  margin-left: 50px;
  margin-top: 25px;
  background-color: aliceblue;
}
.authorization__password-input {
  margin-bottom: 50px;
  size: 30px;
  width: 250px;
  height: 35px;
  border-radius: 5px;
  margin-left: 50px;
  margin-bottom: 75px;
  background-color: aliceblue;
  margin-top: 25px;
}
.authorization__forgive-btn{
  background-color: aliceblue;
  border-radius: 5px;
  width: 60px;
  height: 30px;
}
.authorization__login-btn{
  background-color: aliceblue;
  border-radius: 5px;
  width: 60px;
  height: 30px;
  margin-left: 270px;
}
.div__login{
  background: #10dd76;
  max-height: 100px;
  border-radius: 5px;
}
.div__password{
  background: #10dd76;
  max-height: 100px;
  border-radius: 5px;
}
.authorization__btns-group{
  background-color:#91e795;
}
</style>