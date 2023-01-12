<template>
  <div class="wrapper__form_second">
          <div class="authorization__form__container_second">
              <form class="content__form_second" @keydown.enter.prevent="">
                  <!-- <div class="div__login_second"> -->
                      <input
                          v-model="login"
                          type="text"
                          class="authorization__login-input_second"
                          placeholder="Login"
                              />
                  <!-- </div> -->
                  <!-- <div class="div__password_second"> -->
                      <input
                          v-model="password"
                          type="password"
                          class="authorization__password-input_second"
                          placeholder="Password"
                      />
                  <!-- </div> -->
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

.content__form_second {
  margin: 0px auto;
  background-color: hsl(0, 0%, 90%);
  width: 350px;
  max-width: 400px;
  border-radius: 10px;
  height: 300px;
  min-width: 350px;
}
.wrapper__form_second {
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin-right: 0%;
  padding: 0px;
  width: 100vw;
}
.authorization__form__container_second{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0 auto;
  max-width: 1000px;
  width: fit-content;
}
.authorization__btns-group_second {
  max-width: fit-content;
  width:300px;
  display: flex;
  justify-content: space-between;
  min-width: 300px;
}
.authorization__login-input_second {
  width: 300px;
  max-width: 300px;
  border-radius: 5px;
  height: 30px;
  padding-left:10px;
  margin-left: 25px;
  margin-top: 40px;
}
.authorization__password-input_second {
  width: 300px;
  max-width: 300px;
  border-radius: 5px;
  padding-left: 10px;
  height: 30px;
  margin-left: 25px;
  margin-top: 60px;
}
.authorization__forgive-btn_second {
  height: 30px;
  width: 50px;
  margin-left: 30px;
  margin-top: 50px;
}
.authorization__login-btn_second {
  height: 30px;
  width: 50px;
  margin-top: 50px;
  margin-left: 0px
}

</style>
