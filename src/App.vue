<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <router-view/>
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  a {
    font-weight: bold;
    color: #2c3e50;
    margin-right: 20px;
    text-decoration: none;

    &.router-link-exact-active {
      color: #41a799;
    }
    &:hover {
    color: #41a799;
  }
  }
}
</style>
