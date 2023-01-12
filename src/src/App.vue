<template>
  <header class="header">
    <div class="header__container">
      <div class="header__body">
        <nav class="header__nav">
          <div class="status__first__user__not__active"
          :class="{status__first__user__active:isActiveFirst ===`true`}"></div>
          <RouterLink class="page_1" to="/page1">FirstUser</RouterLink>
          <div class="status__second__user__not__active"
          :class="{status__second__user__active:isActiveSecond ===`true`}"></div>
          <RouterLink class="page_2" to="/page2">SecondUser</RouterLink>
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
*{
  font-family: 'Times New Roman', Times, serif;
}
body {
  width: 100%;
  margin: 0%;
  padding: 0%;
  height: 100%;
}
#app{
  width: 100vh;
  margin-right: 0px;
}

.header{
  background-color: #f0f8ff;
  width: 100%;
  max-height: 90px;
  height: 90px;

}
.header__container {
  margin: 0 auto;
  padding:  0 10px;
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
  font-size:40px;
  padding:auto;
  border: 0px;
  margin: auto;
}
.page_1:hover , .page_2:hover{
  background-color:white
}

.page_1 {
  margin-right: 50px;
  font-size: 50px;
}
.page_1:active {
  background-color: #f0f8ff;
}
.page_1{
  text-decoration:none;
}
.page_1:visited{
  color:#02010e
}

.page_2 {
  margin-right: 50px;
  font-size: 50px;
  text-decoration:none
} 
.page_2:active{
  background-color: #f0f8ff;
}
.page_2:visited{
  color:#02010e
}
.status__first__user__not__active{
  border-radius: 50vh;
  background-color: red;
  margin-top: 1vh;
  width: 30px;
  height: 30px;
  margin-right: 1vh;
}
.status__first__user__active{
  border-radius: 50vh;
  background-color: #12b82d;
  margin-top: 1vh;
  width: 30px;
  height: 30px;
  margin-right: 1vh;
}
.status__second__user__not__active{
  border-radius: 50vh;
  background-color: red;
  margin-top: 1vh;
  width: 30px;
  height: 30px;
  margin-right: 1vh;
}
.status__second__user__active{
  border-radius: 50vh;
  background-color: #12b82d;
  margin-top: 1vh;
  width: 30px;
  height: 30px;
  margin-right: 1vh;
}
</style>
