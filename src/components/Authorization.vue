<template>
    <div class="wrapper__form">
        <div class="authorization__form__container">
            <form class="content__form" @keydown.enter.prevent="">
                <!-- <div class="div__login_blue"> -->
                <input v-model="login" type="text" class="authorization__login-input" placeholder="Login" />
                <!-- </div> -->
                <!-- <div class="div__password_blue"> -->
                <input
                    v-model="password"
                    type="password"
                    class="authorization__password-input"
                    placeholder="Password"
                />
                <!-- </div> -->
                <div class="authorization__btns-group">
                    <button
                        @click.prevent=""
                        class="authorization__forgive-btn"
                        @click="helpForAuthorization()"
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
export default {
    data() {
        return {
            login: "",
            password: "",
            logins: this.$storage.data.users.map((el) => {
                return el.login;
            }),
            passwords: this.$storage.data.users.map((el) => {
                return el.password;
            }),
            AuthorizComplete: false
        };
    },
    methods: {
        loginVerification() {
            const user = this.$storage.getUserByLogin(this.login);
            if (user.password === this.password && user.login === this.login) {
                this.AuthorizComplete = true;
                this.$storage.data.firstPage.authUserId = user.id
            }
            this.$emit('AuthorizComplete',user)
            console.log(user)
            console.log(this.AuthorizComplete)

        },
        helpForAuthorization() {
            alert(` Logins: ${this.logins}
            Passwords: ${this.passwords}`);
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

.authorization__btns-group {
    display: flex;
    justify-content: space-between;
    padding: 30px 15px;
    padding-left: 20px;
}

.authorization__login-input {
    width: 300px;
    max-width: 300px;
    border-radius: 5px;
    height: 30px;
    padding-left: 10px;
    margin-left: 20px;
    margin-top: 40px;
}

.authorization__password-input {
    width: 300px;
    max-width: 300px;
    border-radius: 5px;
    padding-left: 10px;
    height: 30px;
    margin-left: 20px;
    margin-top: 60px;
}

.authorization__forgive-btn {
    height: 30px;
    width: 50px;
    cursor: pointer;
}

.authorization__login-btn {
    height: 30px;
    width: 50px;
    cursor: pointer;
}
</style>
