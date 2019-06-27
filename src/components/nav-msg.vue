<template>
  <div>
    <div class="nav-msg">
      <span class="msg-main">{{msg}}</span>
      <span class="g-m">{{version}}</span>
      <img style="margin-left: -36px;height: 48px;" src="../assets/bj1.png" alt="">
    </div>
  </div>
</template>
<script>
  export default {
    name: 'navMsg',
    props:["msg","version"],
    data() {
        return{
          
        }
    },

  }

</script>
<style scope>
  .nav-msg .msg-main {
    font-family: MicrosoftYaHei;
    font-size: 17px;
    color: #00968D;
    font-weight: 800;
    letter-spacing: 0;
    display: inline-block;
    margin-top: 1px;
  }

  .nav-msg {
    position: absolute;
    left: 180px;
    line-height: 48px;
    height: 48px;
  }

  .nav-msg img {
    position: absolute;
    right: -130px;
    top: 0
  }

  .nav-msg .g-m {
    font-family: ArialMT;
    font-size: 12px;
    color: #666666;
    letter-spacing: 0;
  }

</style>
