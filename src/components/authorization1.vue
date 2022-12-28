<template>
  <div class="authorization">
    <div class="authorization__body">
      <form class="authorization__form" @keydown.enter.prevent="">
        <label for="" class="authorization__login-label">Login</label>
        <input v-model="login" type="text" class="authorization__login-input" />
        <label for="" class="authorization__password-label"
          >Password</label
        >
        <input
          v-model="password"
          type="password"
          class="authorization__password-input"
        />

        <div class="authorization__btns-group">
          <button
            @click.prevent="onForgotPasswordClick"
            class="authorization__forgive-btn"
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
  </div>
</template>
<script>
import { onMounted } from 'vue';

export default {
  data() {
    return {
      login: "",
      password: "",
      authorized:false,
    };
  },
  methods:{
    userData() {
      return {
        id: 1,
        login: "admin",
        password: "123456"
      }; 
    },
    loginVerification() {
      const user = this.userData();
      if (this.login === user.login && this.password === user.password) {
        this.authorized = true;
         localStorage.setItem('login',JSON.stringify(this.authorized));
        this.$emit('authorized', true)
      }else{
        this.authorized = false;
      }
    },
    logOut() {
      if (this.authorized) {
        this.authorized = false;
        localStorage.setItem('login',JSON.stringify(this.authorized))
      }
    }
  },
};
</script>
