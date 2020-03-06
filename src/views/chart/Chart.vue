<template>
    <div :id="id" :style="style" :ref="id"></div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: "Chart",
        data() {
            return {
                chart: ""
            }
        },
        props: {
            id: {
                type: String
            },
            width: {
                type: String,
                default: '100%'
            },
            height: {
                type: String,
                default: '300px'
            },
            option: {
                type: Object,
                default () {
                    return {
                        xAxis: {
                            type: 'category',
                            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: [{
                            data: [820, 932, 901, 934, 1290, 1330, 1320],
                            type: 'line'
                        }]
                    }
                }
            }
        },
        // 一旦option中的数据有了变化，那么图表就会重新渲染。
        watch: {
            option: {
                handler(newVal, oldVal) {
                    if (this.chart) {
                        if (newVal) {
                            this.chart.setOption(newVal)
                        } else {
                            this.chart.setOption(oldVal)
                        }
                    } else {
                        this.init();
                    }
                },
                deep: true //对象内部属性的监听，关键
            }

        },
        computed: {
            style() {
                return {
                    height: this.height,
                    width: this.width
                };
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                this.chart = echarts.init(document.getElementById(this.id));
                console.log(this.chart);
                this.chart.setOption(this.option);
                window.addEventListener("resize", this.chart.resize); // 自动缩放,实现了图表跟随窗口大小自适应的需求
            }
            //前端每隔一分钟向后台请求一次数据，且为当前时间的上一分钟的数据；
            // 前端将上述数据每隔一秒向图表set一次数据
            //以上两点均未完成
        }
    }
</script>