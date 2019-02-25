<template>
  <div className="centent">
    <div>{{ msg }}</div>
    <el-button type="primary" v-on:click="handleClickJsonp('GET')">get 请求</el-button>
    <el-button type="primary" v-on:click="handleClickJsonp('POST')">post 请求</el-button>
  </div>
</template>

<script>
export default {
  name: 'Cors',
  url: '',
  data () {
    return {
      msg: 'Cors 方法测试',
      url: 'http://localhost:5000/cors'
    }
  },
  methods: {
    handleClickJsonp (type) {
      if (type === 'GET') {
        this.$axios({
          method: 'get',
          url: `${this.url}Get?reqPort=5000'`
        })
          .then(function (response) {
            console.log(response)
          })
          .catch(function (error) {
            console.log(error)
          })
      } else {
        this.$axios({
          method: 'post',
          url: `${this.url}Post`,
          headers: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          data: {
            reqPort: '5000'
          }
        })
          .then(function (response) {
            console.log(response)
          }).catch(function (error) {
            console.log(error)
          })
      }
    }
  }
}
</script>
<style scoped>
  h1, h2 {
    font-weight: normal
  }

  ul {
    list-style-type: none;
    padding: 0
  }

  li {
    display: inline-block;
    margin: 0 10px
  }

  a {
    color: #42b983
  }

  .centent {
    flex: 1;
    height: 100%
  }
</style>
