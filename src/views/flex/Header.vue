<template>
    <div class="header">
        <div class="header__left">
            左
        </div>
        <div class="header__main">
            <slot @click="goIndex">Title</slot>
        </div>
        <div class="header__right">
            <div>右</div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'HeadBar',
        methods: {
            goIndex() {
                this.$router.push({
                    path: `/flex`,
                });
            }
        },
    }
</script>
<style lang="scss" scoped>
    .header {
        display: flex;
        width: 100%;
        line-height: 88px;
        height: 88px;
        font-size: 36px;
        background-color: #42b983;
        z-index: 999;
        color: #fff;
        transition: background-color .5s ease;

        .header__main {
            flex: 1;
            display: flex;
            // justify-content: center;
            // align-items: center;
            // text-align: center;
        }

        .header__left,
        .header__right {
            padding: 0 16px;
            width: 120px;
        }

        .header__left {
            text-align: left;
        }

        .header__right {
            text-align: right;
        }
    }
</style>