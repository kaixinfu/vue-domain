<template>
  <div class="centent">
    <div>{{ msg }}</div>
    <el-button type="primary" v-on:click="handleClick">直接请求</el-button>
    <el-button type="primary" v-on:click="handleClickJsonp">jsonp请求</el-button>
  </div>
</template>

<script>
export default {
  name: 'Jsonp',
  url: '',
  data () {
    return {
      msg: 'Jsonp 方法测试',
      url: 'http://localhost:4000/jsonp'
    }
  },
  methods: {
    handleClick () {
      this.$axios({
        method: 'get',
        url: this.url
      }).then(res => {
        console.log('res', res)
      }).catch(error => {
        console.log('error', error)
      })
    },
    handleClickJsonp () {
      this.$options.methods.sendJsonp({
        url: this.url,
        reqPort: '3000',
        callback: 'alert'
      }).then(res => {
        console.log('res...0')
        console.log('res...1', res)
      }).catch(error => {
        console.log('error...0', error)
      })
    },
    sendJsonp ({url, reqPort, callback, _this}) {
      return new Promise(function (resolve, reject) {
        let script = document.createElement('script')
        script.src = `${url}?callback=${callback}&reqPort=${reqPort}`
        document.body.appendChild(script)
      })
    },
    showMsg (res) {
      console.log('showMsg')
      console.log('showMsg', res)
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
