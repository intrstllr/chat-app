<template>
  <header>
    <div class="header__container">
      <div class="header__body">
        <nav class="header__nav">
          <RouterLink class="page_1" to="/page1">accountUser1</RouterLink>
          <RouterLink class="page_2" to="/page2">accountUser2</RouterLink>
        </nav>
      </div>
    </div>
  </header>
</template>


<style>

header{
  background-color: aliceblue;
  width: 100%;
  margin: 0px;
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
</style>