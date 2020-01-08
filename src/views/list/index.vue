<template>
  <div class="index">
   <div class="card" v-for="card in cards" :key="card" @click="goDetail">
       <div class="card-title">{{card.title}}</div>
       <div class="card-content">{{card.content}}</div>
   </div>
   <div @click="goHome">回到首页</div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data(){
        return{
            cards:[]  
        }
    },
    mounted() {
        this.cards=[
                {title:"第一个卡片标题",content:"第一个卡片内容"},
                {title:"第二个卡片标题",content:"第二个卡片内容"},
                {title:"第三个卡片标题",content:"第三个卡片内容"},
                {title:"第四个卡片标题",content:"第四个卡片内容"},
                {title:"第五个卡片标题",content:"第五个卡片内容"},
            ]
    },
    methods: {
        goDetail(){
            this.$router.push({path: '/list/detail'});
        },
        goHome(){
            this.$router.push({path: '/'});
        }
    },
  }
</script>
<style lang='scss' scoped>
  @import '@/assets/scss/utils.scss';
  .index{
      background-color: #eee;

  }
  .card{
      width: 90%;
      height: 200px;
      background-color: #fff;
      margin: 20px 5%;
      border: 1px solid green;
      border-radius: 5px;
  }
</style>