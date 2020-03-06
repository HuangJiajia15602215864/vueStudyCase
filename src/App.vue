<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <transition :name="transitionName">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>
<script>
  export default {
    name: 'app',
    data() {
      return {
        transitionName: 'fade'
      }
    },
    watch: {
      '$route'(to, from) {
        // 实现转场动画：第一种方法：路由meta属性
        // let toDepth = to.meta.depth;// 下一个页面的层级
        // let fromDepth = from.meta.depth;//上一个页面的层级
        // console.log("to:"+toDepth)
        // console.log("from:"+fromDepth)
        // if (fromDepth > toDepth) {// 返回
        //   this.transitionName = 'fade-left'
        //   console.log('返回')
        // } else if (fromDepth < toDepth) {// 进入
        //   this.transitionName = 'fade-right'
        //   console.log('进入')
        // } else {
        //   this.transitionName = 'fade'
        //   console.log('默认')
        // }
        // 第二种方法：利用vue-navigation插件
        this.$navigation.on('forward', (to, from) => {
          this.transitionName = 'fade-right'
          console.log('进入')
        })
        this.$navigation.on('back', (to, from) => {
          this.transitionName = 'fade-left'
           console.log('返回')
        })
        this.$navigation.on('replace', (to, from) => {
          this.transitionName = 'fade'
          console.log('默认')
        })
      }
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #eee;
  }

  * {
    padding: 0;
    margin: 0;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>