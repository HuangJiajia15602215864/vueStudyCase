<template>
  <div class="home">
    <div class="button" @click="goPage('html')">HTML</div>
    <div class="button" @click="goPage('css')">CSS</div>
    <div class="button" @click="goPage('js')">JS</div>
    <div class="button" @click="goPage('list')">列表</div>
    <div class="button" @click="goPage('luckyDraw')">抽奖</div>
    <div class="button" @click="goPage('calendar')">日历</div>
    <div class="button" @click="goPage('flex')">flex移动端页面布局</div>
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
     flex-wrap: wrap ;
  }

  .button {
    background-color: #3D11EE;
    color: #fff;
    font-size: px2rem(32px);
    width: px2rem(140px);
    height: px2rem(50px);
    border-radius: px2rem(10px);
    margin: px2rem(20px);
    text-align: center;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
</style>