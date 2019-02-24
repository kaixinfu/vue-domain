import { List, Card } from 'antd';

<template>
  <div id="app">
    <el-container>
      <el-aside width="180px">
        <div id="routeList">
          <router-link to='/'>首页</router-link>
          <router-link to=/jsonp>1. jsonp</router-link>
          <router-link to=/cors>2. cors(跨域资源共享)</router-link>
          <router-link to=/postMessage>3. postMessage</router-link>
          <router-link to=/websocket>4.websocket</router-link>
          <router-link to=/node>5. node 中间件代理</router-link>
        </div>
      </el-aside>
      <el-container>
        <el-header>
          <h1>常见跨域的几种处理方法</h1>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
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

  .logoStyle {
    width: 50px;
    height: 50px;
  }

  #routeList {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 50px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
