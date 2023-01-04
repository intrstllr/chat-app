<template>
  <div class="authorization__body_1">
    <form class="authorization__form__1" @keydown.enter.prevent="">
      <div class="div__login_1">
        <input
          v-model="login"
          type="text"
          class="authorization__login-input_1"
          placeholder="Login"
        />
      </div>
      <div class="div__password_1">
        <input
          v-model="password"
          type="password"
          class="authorization__password-input_1"
          placeholder="Password"
        />
      </div>
      <div class="authorization__btns-group_1">
        <button
          @click.prevent=""
          class="authorization__forgive-btn_1"
          @click="helpForAuthorization()"
        >
          Help
        </button>
        <button
          @click.prevent="loginVerification"
          @keydown.enter.prevent="loginVerification"
          class="authorization__login-btn_1"
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
    helpForAuthorization() {
      alert(` login:admin \n password:123456`);
    },
  },
};
</script>

<style>
.authorization__body_1 {
  margin-bottom: 900px;
  background-color: #6f70fe;
  height: 350px;
  width: 460px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 100px;
}
.authorization__form__1{
  border-radius: 5px;
  background-color: aliceblue;
}
.authorization__login-input_1 {
  margin-bottom: 50px;
  size: 30px;
  width: 250px;
  height: 35px;
  border-radius: 5px;
  margin-left: 50px;
  margin-top: 25px;
  background-color: aliceblue;
}
.authorization__password-input_1 {
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
.authorization__forgive-btn_1 {
  background-color: aliceblue;
  border-radius: 5px;
  width: 60px;
  height: 30px;
}
.authorization__login-btn_1 {
  background-color: aliceblue;
  border-radius: 5px;
  width: 60px;
  height: 30px;
  margin-left: 270px;
}
.div__login_1 {
  background: #0000fe;
  max-height: 100px;
  border-radius: 5px;
}
.div__password_1 {
  background: #0000fe;
  max-height: 100px;
  border-radius: 5px;
}
.authorization__btns-group_1 {
  background-color: #6f70fe;
}
</style>
