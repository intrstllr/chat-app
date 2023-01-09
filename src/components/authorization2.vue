<template>
  <div class="wrapper__form_second">
          <div class="content__form_second">
              <form class="authorization__form__container_second" @keydown.enter.prevent="">
                  <div class="div__login_second">
                      <input
                          v-model="login"
                          type="text"
                          class="authorization__login-input_second"
                          placeholder="Login"
                              />
                  </div>
                  <div class="div__password_second">
                      <input
                          v-model="password"
                          type="password"
                          class="authorization__password-input_second"
                          placeholder="Password"
                      />
                  </div>
                  <div class="authorization__btns-group_second">
                      <button
                          @click.prevent=""
                          class="authorization__forgive-btn_second"
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
        location.reload();
      },
      helpForAuthorization() {
        alert(` login:admin2 \n password: 654321`);
      },
    },
  };
  </script>
  
  <style>
*{
  margin: 0px;
  padding: 0px;
}
body {
  padding: 0px;
  margin: 0px;
}

.authorization__form__container_second {
  margin: 0px auto;
  background-color: hsl(0, 0%, 90%);
  width: 40vh;
  border-radius: 10px;
  margin-left: 77vh;

}
.wrapper__form_second {
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin-right: 0%;
  padding: 0px;
}
.content__form_second {
  flex: 1 1 auto;
  margin-top: 30vh;
  margin-left: 0vh;
  width: 100vh;
}
.div__login_second {
  padding: 30px;
  max-width: 100vh;
  width: 34vh;
}
.div__password_second {
  padding: 30px;
  max-width: 100vh;
  width: 34vh;
}
.authorization__btns-group_second {
  padding: 30px;
  max-width: 100vh;
  width: 34vh;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
}
.authorization__login-input_second {
  width: 35vh;
  border-radius: 5px;
  height: 30px;
}
.authorization__password-input_second {
  width: 35vh;
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
