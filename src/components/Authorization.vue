<template>
    <div class="wrapper">
        <div class="authorization_container">
            <form  class="form_auth">
                <!-- <div class="div__login_blue"> -->
                <input v-model="login" type="text" class="login-input" placeholder="Login" />
                <!-- </div> -->
                <!-- <div class="div__password_blue"> -->
                <input
                    v-model="password"
                    type="password"
                    class="password-input"
                    placeholder="Password"
                />
                <!-- </div> -->
                <div class="btns-group">
                    <button
                        @click.prevent=""
                        class="forgive-btn"
                        @click="helpForAuthorization()"
                    >
                        Help
                    </button>
                    <button
                        @click.prevent="loginVerification"
                        @keydown.enter.prevent="loginVerification"
                        class="login-btn"
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
    props: { user: {}},
    data() {
        return {
            login: "",
            password: "",
            authorized: false,
        };
    },
    methods: {
        loginVerification() {
            if (this.user.password === this.password && this.user.login === this.login) {
                this.$emit("UserFirstIsLogin");
            }
            if ("654321" === this.password && "admin2" === this.login) {
                this.$emit("UserSecondIsLogin");
            } else {
                return { login: "", password: "" };
            }
        },
        helpForAuthorization() {
            alert(`  login: \r  admin,  admin2 
    \n  password: \r  123456,  654321`);
        },
    },
};
</script>

<style>
* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-size: 19px;
}

body {
    padding: 0px;
    margin: 0px;
}

.form_auth {
    display: flex;
    flex-direction: column;
}

.wrapper {
    height: 850px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    margin-right: 0px;
    padding: 0px;
}

.authorization_container {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    width: 350px;
    height: 260px;
    margin: auto;
    background-color: antiquewhite;
    border-radius: 15px;
}

.btns-group {
    display: flex;
    justify-content: space-between;
    padding: 40px 50px;
}

.login-input {
    max-width: 70%;
    width: 250px;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 20px;
}

.password-input {
    max-width: 70%;
    width: 250px;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 20px;
}

.forgive-btn {
    height: 30px;
    width: 50px;
    cursor: pointer;
}

.login-btn {
    height: 30px;
    width: 50px;
    cursor: pointer;
}
</style>
