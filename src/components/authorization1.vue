<template>
  <div class="authorization">
    <div class="body_authorization">
      <form class="form_authorization">
        <label class="label_login">Login</label>
        <input v-model="login" type="text" class="input_login" />
        <label class="label_password">Password</label>
        <input v-model="password" type="text" class="input_password" />
        <div v-if="fail" class="fail_authorization">Try again</div>
        <div class="help_For_Authorization">
          <button @click.prevent="btnForgotPassword" class="btnForgotPass">
            Help
          </button>
          <button
            @click="onLogin"
            @keydown.enter.prevent="onLogin"
            class="btnLogin"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default{
    data(){
        return {
            login:"",
            password:"",
            
        }
    }
}





</script>