<template>
  <div class="authorization__body">
    <form class="authorization__form" @keydown.enter.prevent="">
      <div class="login">
        <input
          v-model="login"
          type="text"
          class="authorization__login-input"
          placeholder="Login"
        />
      </div>
      <div class="password">
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
          @click="help()"
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
      authorized1: false,
    };
  },
  methods: {
    userData() {
      return {
        id: 1,
        login: "admin",
        password: "123456",
      };
    },
    loginVerification() {
      const user = this.userData();
      if (this.login === user.login && this.password === user.password) {
        this.authorized1 = true;
        localStorage.setItem("login1", JSON.stringify(this.authorized1));
        this.$emit("authorized", true);
      } else {
        this.authorized1 = false;
      }
    },
    help() {
      alert();
    },
  },
};
</script>

<style>
.authorization__body {
  margin-bottom: 900px;
  background-color: rgb(18, 19, 18);
  max-width: 1000px;
  max-height: 500px;
}
.authorization__form {
  margin-top: 100px;
  margin-left: 50px;
  margin-right: 50px;

  font-size: 18px;
  font-family: sans-serif;
}
.authorization__login-input {
  margin-bottom: 50px;
  size: 30px;
  width: 250px;
  height: 25px;
  border-radius: 5px;
}
.authorization__password-input {
  margin-bottom: 50px;
  size: 30px;
  width: 250px;
  height: 25px;
  border-radius: 5px;
}
</style>
