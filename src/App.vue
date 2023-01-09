<template>
  <header>
    <div class="header__container">
      <div class="header__body">
        <nav class="header__nav">
          <div class="status__first__user__not__active"
          :class="{status__first__user__active:isActiveFirst ===`true`}"></div>
          <RouterLink class="page_1" to="/page1">accountUser1</RouterLink>
          <div class="status__second__user__not__active"
          :class="{status__second__user__active:isActiveSecond ===`true`}"></div>
          <RouterLink class="page_2" to="/page2">accountUser2</RouterLink>
        </nav>
      </div>
    </div>
  </header>
  <RouterView />
</template>



<script>
  export default{
    data() {
      return{
        isActiveFirst:localStorage.getItem("login1"),
        isActiveSecond:localStorage.getItem("login2")
      }
    }
  }
</script>

<style scoped>
body {
  width: 100vh;
}
#app{
  width: 100vh;
  margin-right: 0px;
}

header{
  background-color: aliceblue;
  width: 100%;
  margin: 0px;
  position:relative;
}
.header__container {
  margin: 0 auto;
  padding: 0px;
  max-width: 1300px;
}
.header__body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}
.header__nav {
  margin-left: 30%;
  display: flex;
  align-items: center;
  font-size:40px;
}
.page_1:hover , .page_2:hover{
  background-color:white
}

.page_1 {
  margin-right: 50px;

}
.page_2 {
  margin-right: 50px;

} 
.status__first__user__not__active{
  border-radius: 50vh;
  background-color: red;
  margin-top: 2vh;
  width: 30px;
  height: 30px;
  margin-right: 1vh;
}
.status__first__user__active{
  border-radius: 50vh;
  background-color: #12b82d;
  margin-top: 2vh;
  width: 30px;
  height: 30px;
  margin-right: 1vh;
}
.status__second__user__not__active{
  border-radius: 50vh;
  background-color: red;
  margin-top: 2vh;
  width: 30px;
  height: 30px;
  margin-right: 1vh;
}
.status__second__user__active{
  border-radius: 50vh;
  background-color: #12b82d;
  margin-top: 2vh;
  width: 30px;
  height: 30px;
  margin-right: 1vh;
}
</style>
