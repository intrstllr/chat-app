<template>
    <header class="header">
            <div class="header__container">
                <div class="header__body">
                    <nav class="header__nav">
                        <RouterLink class="page_1" to="/first">FirstUser</RouterLink>
                        <RouterLink class="page_2" to="/second">SecondUser</RouterLink>
                    </nav>
                </div>
            </div>
        </header>
    </template>


<script>
    export default{
    }
</script>


<style scoped>
* {
    font-family: "Roboto", sans-serif;
}
.header {
    background-color: #f0f8ff;
}
.header__container {
    margin: 0 auto;
    padding: 0 10px;
    max-width: 1200px;
}
.header__body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: aliceblue;
    padding: 10px 0;
}
.header__nav {
    display: flex;
    align-items: center;
    font-size: 40px;
    padding: auto;
    border: 0px;
    margin: auto;
}
.page_1:hover,
.page_2:hover {
    background-color: white;
}
.page_1 {
    margin-right: 50px;
    font-size: 50px;
}
.page_1:active {
    background-color: #f0f8ff;
}
.page_1 {
    text-decoration: none;
}
.page_1:visited {
    color: #02010e;
}
.page_2 {
    margin-right: 50px;
    font-size: 50px;
    text-decoration: none;
}
.page_2:active {
    background-color: #f0f8ff;
}
.page_2:visited {
    color: #02010e;
}
.status__first__user__not__active {
    border-radius: 50vh;
    background-color: red;
    margin-top: 1vh;
    width: 30px;
    height: 30px;
    margin-right: 1vh;
    margin: auto;
}
.status__first__user__active {
    border-radius: 50vh;
    background-color: #12b82d;
    margin-top: 1vh;
    width: 30px;
    height: 30px;
    margin-right: 1vh;
    margin: auto;
}
.status__second__user__not__active {
    border-radius: 50vh;
    background-color: red;
    margin-top: 1vh;
    width: 30px;
    height: 30px;
    margin-right: 1vh;
    margin: auto;
}
.status__second__user__active {
    border-radius: 50%;
    background-color: #12b82d;
    margin-top: 1vh;
    width: 30px;
    height: 30px;
    margin-right: 1vh;
    margin: auto;
}
</style>
