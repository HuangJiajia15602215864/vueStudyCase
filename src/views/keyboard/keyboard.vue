<template>
    <div class="keyboard">
        <div class="container" id="app">
            <fieldset>
                <legend>Normal layout</legend>
                <input type="text" placeholder="Text input" @focus="show" data-layout="normal" />
            </fieldset>
            <vue-touch-keyboard id="keyboard"  :layout="layout" :cancel="hide" :accept="accept"
                :input="input" :next="next" />

        </div>
    </div>
</template>

<script>
    import VueTouchKeyboard from "vue-touch-keyboard";
    import style from "vue-touch-keyboard/dist/vue-touch-keyboard.css"
    export default {
        name: 'keyboard',
        data() {
            return {
                layout: "normal",
                input: null,
                options: {
                    useKbEvents: false
                }
            }
        },
        components: {
            "vue-touch-keyboard": VueTouchKeyboard.component
        },
        methods: {
            show(e) {// 输入框聚焦时
                console.log(e)
                console.log(e.target)
                this.input = e.target;
            },

        }
    }
</script>
<style lang='scss' scoped>
    html {
        font-family: Tahoma;
        font-size: 16px;
    }

    body {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 16px;
        color: #333;
    }

    * {
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    h1 {
        text-align: center;
        font-size: 36px;
        margin-top: 20px;
        margin-bottom: 10px;
        font-weight: 500;
    }

    .panel-body {
        padding: 15px;
    }

    #keyboard {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;

        z-index: 1000;
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;

        padding: 1em;

        background-color: #EEE;
        box-shadow: 0px -3px 10px rgba(black, 0.3);

        border-radius: 10px;
    }

    fieldset {
        display: block;
        width: 300px;
        padding: 15px;
        margin: 15px auto;
        border-style: solid;
        background-color: #fff;
        border-color: #ddd;
        border-width: 1px;
        border-radius: 4px;
    }

    input {
        display: block;
        width: 100%;
        height: 34px;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.42857143;
        color: #555;
        background-color: #fff;
        background-image: none;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
        transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;

        &:focus {
            border-color: #66afe9;
            outline: 0;
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
        }
    }
</style>