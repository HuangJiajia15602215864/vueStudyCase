<template>
  <div class="home">
    <div class="button" to="/waveLoading">交错动画（波浪加载）</div>
    <div class="button" to="/css">CSS</div>
    <div class="button" to="/js">JS</div>
  </div>
</template>

<script>
export default {
  name: 'home',
}
</script>
<style lang='scss' scoped>
@import '@/assets/scss/utils.scss';
  .home{
    display: flex;
  }
  .button {
    background-color: #3D11EE;
    color: #fff;
    font-size: px2rem(32px);
    width: px2rem(300px);
    border-radius: px2rem(10px);
    margin: px2rem(20px);
    padding: px2rem(25px) 0;
    text-align: center;
  }
</style>
