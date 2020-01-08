<template>
  <div class="detail">
   详情页
   <div @click="goList">回到列表页</div>
  </div>
</template>

<script>
  export default {
    name: 'detail',
    methods: {
        goList(){
            history.back();
        },
    },
  }
</script>
<style lang='scss' scoped>
  @import '@/assets/scss/utils.scss';


</style>