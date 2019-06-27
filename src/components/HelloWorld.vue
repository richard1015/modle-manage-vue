<template>
  <div>
    <div class="layui-container">
      <div class="nav-logo">
        <img src="../assets/beijing.png">
      </div>
      <nav-msg :msg="msg" :version="version"></nav-msg>
      <div class="nav-list-self">
      </div>
      <div class='border12'></div>

    </div>
    <body-main></body-main>
    <div class="foot">
      Copyright © 2019 ：{{foot}}版权所有 ·中国电科院技术支持
    </div>
  </div>


</template>
<script>
  import navMsg from "./nav-msg"
  import bodyMain from "./body-main"
  export default {
    name: 'HelloWorld',
    components: {
      navMsg,
      bodyMain
    },
    data() {
      return {
        msg: '',
        area: '',
        imgSrc: '',
        foot: '',
        version: ''
      }
    },
    mounted() {
      const _this = this;
      this.$axios.get('./static/nav.json').then(function (res) {
        _this.msg = res.data.title;
        _this.version = res.data.version;
        _this.area = res.data.area;
        _this.foot = res.data.foot;

      })
    },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .border12 {
    /* margin: 63px auto */
    background: url(../assets/1280.png);
    width: 100%;
    height: 4px;
    position: absolute;
    top: 48px
      /* margin-top: 48px */
  }

  .layui-container {

    height: 52px;
    padding: 0;
    overflow: hidden;
    background: url(../assets/bj.png) no-repeat 410px;
    background-color: #fff;
  }

  .nav-logo {
    height: 48px;
    position: absolute;
    top: 0;
    left: 15px;
    line-height: 48px;
  }

  .nav-logo img {
    position: absolute;
    top: 18%;
  }

  .foot {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 32px;
    line-height: 32px;
    background: #F0F0F0;
    font-family: MicrosoftYaHei;
    font-size: 12px;
    color: #999999;
    text-align: center
  }

</style>
