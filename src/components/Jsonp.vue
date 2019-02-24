<template>
  <div class="centent">
    <div>{{ msg }}</div>
  </div>
</template>

<script>
  export default {
    name: 'Jsonp',
    data () {
      return {
        msg: 'Jsonp'
      }
    }
  }
</script>
conosle.log('jsonp......')
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .centent {
    flex: 1;
    height: 100%;
  }
</style>
