<template>
  <div class="taber">
    <div class="taber-item">
      <div class="icon"></div>
      <span>选项1</span>
    </div>
    <div class="taber-item">
      <div class="icon"></div>
      <span>选项2</span>
    </div>
    <div class="taber-item">
      <div class="icon"></div>
      <span>选项3</span>
    </div>
    <div class="taber-item">
      <div class="icon"></div>
      <span>选项4</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BottomTaber',
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
.taber {
  background-color: #42b983;
  color: #fff;
  height: 88px;
  display: flex;
  .taber-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .icon {
    width: 36px;
    height: 36px;
    background-color: #fff;
  }
}
</style>