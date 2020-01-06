<template>
  <div class="home">
    <div class="text" @click="goContent('staggeredWaveLoading')">交错动画（波浪加载）</div>
    <div class="text" @click="goContent('revealText')">CSS</div>
    <div class="text" @click="goContent('html')">JS</div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    methods: {
      // 跳转到对应内容
      goContent(value) {
        this.$router.push({
          path: `/css/${value}`,
        });
      }
    },
  }
</script>
<style lang='scss' scoped>
  @import '@/assets/scss/utils.scss';

  .home {
    display: flex;
    justify-content: space-between;

    .text {
      color: #3D11EE;
    }
  }
</style>