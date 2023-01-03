<template>
  <div class="authorization__body">
    <form class="authorization__form" @keydown.enter.prevent="">
        <label for="" class="authorization__login-label">Login</label>
        <input v-model="login" type="text" class="authorization__login-input" />
      <div>
        <label for="" class="authorization__password-label">Password</label>
        <input
          v-model="password"
          type="password"
          class="authorization__password-input"
        />
      </div>
      <div class="authorization__btns-group">
        <button @click.prevent="" class="authorization__forgive-btn">
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
  },
};
</script>

<style>
.authorization__body {
  margin-bottom: 900px;
}
.authorization__form {
  background: white;
  float: left;
  width: calc(100% - 40px);
  padding: 30px;
  border-radius: 0 20px 20px 0;
}
</style>
