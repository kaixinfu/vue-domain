<template>
  <div id="app">
    <div id="header">
      <img class="logoStyle" src="./assets/logo.png">
      <h1>常见跨域的几种处理方法</h1>
    </div>
    <div id="container">
      <p id="routeList">
        <router-link to=/jsonp>1. jsonp</router-link>
        <router-link to=/cors>2. cors(跨域资源共享)</router-link>
        <router-link to=/postMessage>3. postMessage</router-link>
        <router-link to=/websocket>4.websocket</router-link>
        <router-link to=/node>5. node 中间件代理</router-link>
      </p>
      <router-view id="content"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 20px;
    margin-bottom: 20px;
    flex-direction: column;
    flex: 1;
  }

  #header {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }

  #container {
    flex: 1;
    display: flex;
  }

  #content {
    flex: 7;
  }

  .logoStyle {
    width: 60px;
    height: 60px;
  }

  #routeList {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1;
    margin: 0px;
    padding: 0px;
    height: 800px;
  }
</style>
