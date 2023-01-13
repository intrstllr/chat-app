<template>
    <div class="wrapper__form">
        <div class="authorization__form__container">
            <form class="content__form" @keydown.enter.prevent="">
                <!-- <div class="div__login_blue"> -->
                <input
                    v-model="login"
                    type="text"
                    class="authorization__login-input_blue"
                    placeholder="Login"
                />
                <!-- </div> -->
                <!-- <div class="div__password_blue"> -->
                <input
                    v-model="password"
                    type="password"
                    class="authorization__password-input_blue"
                    placeholder="Password"
                />
                <!-- </div> -->
                <div class="authorization__btns-group_blue">
                    <button
                        @click.prevent=""
                        class="authorization__forgive-btn_blue"
                        @click="helpForAuthorization()"
                    >
                        Help
                    </button>
                    <button
                        @click.prevent="loginVerification"
                        @keydown.enter.prevent="loginVerification"
                        class="authorization__login-btn_blue"
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
            location.reload();
        },
        helpForAuthorization() {
            alert(` login:admin \n password: 123456`);
        },
    },
};
</script>

<style>
* {
    margin: 0px;
    padding: 0px;
}
body {
    padding: 0px;
    margin: 0px;
}
.content__form {
    margin: 0 auto;
    background-color: hsl(0, 0%, 90%);
    width: 350px;
    max-width: 400px;
    border-radius: 10px;
    min-width: 350px;
    padding: 10px;
}
.wrapper__form {
    min-height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    margin-right: 0%;
    padding: 0px;
}
.authorization__form__container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    margin: auto;
    max-width: 1000px;
}
.authorization__btns-group_blue {
    display: flex;
    justify-content: space-between;
    padding: 30px;
}
.authorization__login-input_blue {
    width: 300px;
    max-width: 300px;
    border-radius: 5px;
    height: 30px;
    padding-left: 10px;
    margin-left: 20px;
    margin-top: 40px;
}
.authorization__password-input_blue {
    width: 300px;
    max-width: 300px;
    border-radius: 5px;
    padding-left: 10px;
    height: 30px;
    margin-left: 20px;
    margin-top: 60px;
}
.authorization__forgive-btn_blue {
    height: 30px;
    width: 50px;
    cursor: pointer;
}
.authorization__login-btn_blue {
    height: 30px;
    width: 50px;
    cursor: pointer;
}
</style>
