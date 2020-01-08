<template>
    <div class="luckyDraw">
        <div class="game-box">
            <template v-for="(val, idx) of boundList">
                <div v-if="idx == 4" class="game-item game-begin" :key="idx" @click="beginGame">
                    开始游戏
                </div>
                <div v-else :key="idx" class="game-item" :class="{
            active: idx === curGameIdx
            }">
                    {{val.val}}
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'luckyDraw',
        data(){
            return {
                curGameIdx:2,
                boundList:[{val:'1',idx:'1'},{val:'2',idx:'2'},{val:'3',idx:'3'},{val:'4',idx:'4'},{val:'5',idx:'5'},
                {val:'6',idx:'6'},{val:'7',idx:'7'},{val:'8',idx:'8'},{val:'9',idx:'9'},
                ]
            }
        },
        methods: {
            beginGame(){

            }
        },
    }
</script>
<style lang='scss' scoped>
    @import '@/assets/scss/utils.scss';
     .game-box {
        background-color: red;
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        .game-item {
            width: 123px;
            height:95px;
            background: yellow;
            border: 1px solid transparent;
            transition: all 0.2s;
            &.game-begin {
                background: transparent;
            }
            &.active {
                border: 1px solid black;
            }
        }
    }
</style>