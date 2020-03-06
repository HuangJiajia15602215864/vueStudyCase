<template>
    <div>
        <input type="text" :value="value" @input="onInput">
    </div>
</template>
<script>
    export default {
        name: 'NumberInput',
        props: {
            value: String
        },
        methods: {
            onInput(event) {
                if (/^\d+$/.test(event.target.value)) {
                    this.$emit('input', event.target.value)
                } else {
                    event.target.value = this.value
                }
            },

            loadData() {
                requestData().then((res) => {
                    this.data = res.data.concat(this.data)
                    this.$nextTick(() => {
                        if (!this.scroll) {
                            this.scroll = new Bscroll(this.$refs.wrapper, {})
                            this.scroll.on('touchend', (pos) => {
                                // 下拉动作
                                if (pos.y > 50) {
                                    this.loadData()
                                }
                            })
                        } else {
                            this.scroll.refresh()
                        }
                    })
                })
            }

        }
    }
</script>