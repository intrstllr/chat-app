<template>
  <div class="authorization">
    <div class="authorization__body">
      <form class="authorization__form" @keydown.enter.prevent="">
        <label for="" class="authorization__login-label">Login</label>
        <input v-model="login" type="text" class="authorization__login-input" />
        <label for="" class="authorization__password-label" id="loginInput"
          >Password</label
        >
        <input
          v-model="password"
          type="password"
          class="authorization__password-input"
          id="passwordInput"
        />
        <div v-if="isAllert" class="authorization__allert">
          Incorrect login or password
        </div>
        <div class="authorization__btns-group">
          <button
            @click.prevent="onForgotPasswordClick"
            class="authorization__forgive-btn"
          >
            Help
          </button>
          <button
            @click="onLoginClick"
            @keydown.enter.prevent="onLoginClick"
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
export default {
  data() {
    return {};
  },
};
</script>
