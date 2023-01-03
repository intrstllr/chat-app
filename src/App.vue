<template>
  <header class="header">
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

<script></script>

<style scoped>
header {
  width:100%;
  background-color: #fff;
  max-height: 30px;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 5px;
  height: inherit;
  display: flex;
}
.header__container{
    max-width: 1300px;
    max-height: 30px;
    padding: 0 10px;
    margin: 0 auto;
}
.header__body{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    margin-bottom: 930px;
    height: 100px;
}
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    display: flex;
    align-items: center;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}

</style>
