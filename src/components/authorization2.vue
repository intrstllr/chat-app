<template>
  <div class="wrapper__form__second">
          <div class="content__form__second">
              <form class="authorization__form__container__second" @keydown.enter.prevent="">
                  <div class="div__login___second">
                      <input
                          v-model="login"
                          type="text"
                          class="authorization__login-input___second"
                          placeholder="Login"
                              />
                  </div>
                  <div class="div__password__second">
                      <input
                          v-model="password"
                          type="password"
                          class="authorization__password-input__second"
                          placeholder="Password"
                      />
                  </div>
                  <div class="authorization__btns-group___second">
                      <button
                          @click.prevent=""
                          class="authorization__forgive-btn__second"
                          @click="helpForAuthorization()"
                      >
                          Help
                      </button>
                      <button
                          @click.prevent="loginVerification"
                          @keydown.enter.prevent="loginVerification"
                          class="authorization__login-btn_second"
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
      return {
        login: "",
        password: "",
        authorized1: false,
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
          this.authorized1 = true;
          localStorage.setItem("login2", JSON.stringify(this.authorized1));
          this.$emit("authorized", true);
        } else {
          this.authorized1 = false;
        }
      },
      helpForAuthorization() {
        alert(` login:admin2 \n password: 654321`);
      },
    },
  };
  </script>
  
  <style>
  body {
    padding: 0;
    margin: 0;
  }
  
  .authorization__form__container__second {
    max-width: 1250px;
    margin: 0px auto;
    background-color: hsl(0, 0%, 90%);
    width: 450px;
    border-radius: 10px;
  }
  .wrapper__form__second {
    min-height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    margin: 0px;
    padding: 0px;
  }
  .content__form__second {
    flex: 1 1 auto;
    margin-top: 40vh;
    margin-left: 0vh;
  }
  .div__login_second{
    padding: 30px;
    max-width: 1500px;
    width: 390px;
  }
  .div__password_second {
    padding: 30px;
    max-width: 1500px;
    width: 390px;
  }
  .authorization__btns-group_second{
    padding: 30px;
    max-width: 1500px;
    width: 390px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
  }
  .authorization__login-input_second {
    width: 350px;
    border-radius: 5px;
    height: 30px;
  }
  .authorization__password-input_second {
    width: 350px;
    border-radius: 5px;
    height: 30px;
  }
  .authorization__forgive-btn_second {
    height: 30px;
    width: 50px;
    margin-top: 0px;
  }
  .authorization__login-btn_second {
    height: 30px;
    width: 50px;
    margin-top: 0px;
  }
  
  </style>