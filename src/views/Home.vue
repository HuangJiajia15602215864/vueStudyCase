<template>
  <div class="home">
    <div class="button" @click="goPage('html')">HTML</div>
    <div class="button" @click="goPage('css')">CSS</div>
    <div class="button" @click="goPage('js')">JS</div>
    <div class="button" @click="goPage('list')">列表</div>
    <div class="button" @click="goPage('luckyDraw')">抽奖</div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    methods: {
      // 跳转到对应模块
      goPage(value){
        this.$router.push({
          path: `/${value}`,
        });
      }
    },
  }
</script>
<style lang='scss' scoped>
  @import '@/assets/scss/utils.scss';

  .home {
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