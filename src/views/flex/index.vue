<template>
    <div class="page">
        <Header></Header>
        <div class="page-content">
            <div class="detail" @click="goHeader">1</div>
            <div class="detail">2</div>
            <div class="detail">3</div>
            <div class="detail">4</div>
        </div>
        <Taber></Taber>
    </div>
</template>

<script>
    import Header from './Header';
    import Taber from './Taber';
    export default {
        name: 'flex',
        components: {
            Header,
            Taber
        },
        methods: {
            goHeader() {
                this.$router.push({
                    path: `/flex/header`,
                });
            }
        },
    }
</script>
<style lang='scss' scoped>
    @import '@/assets/scss/utils.scss';

    .page {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
        display: flex;
        flex-direction: column;

        .page-content {
            flex: 1;
            overflow-y: auto;
        }

        .detail {
            margin: 10px;
            padding: 10px;
            border-radius: 5px;
            background-color: antiquewhite;
            height: 200px;
        }
    }
</style>