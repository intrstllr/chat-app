<template>
  <header>
    <div class="header__container">
      <div class="header__body">
        <nav class="header_nav">
          <RouterLink class="page_1" to="/page1">accountUser1</RouterLink>
          <RouterLink class="page_2" to="/page2">accountUser2</RouterLink>
        </nav>
      </div>
    </div>
  </header>
  <RouterView />
</template>

<script>

</script>

<style scoped>
header {
  width:100vh;
  background-color: aliceblue;
  height: 10%;
  margin: 0px;
  padding: 0px;
}
.page_2{
  margin-left: 10px;
}
.page_1{
  margin-left: 100px;
}
.header__body{
  background-color:aliceblue;
  width: 1652px;
  height: 70px;
  display: flex;
  justify-content: center;
}

body , div{
  width: 100vh;
}
#app{
  margin-right: 0px;
}
</style>
