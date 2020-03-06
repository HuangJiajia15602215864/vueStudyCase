<template>
    <div class="chart">
        <Chart id="test" :option="option" />
    </div>
</template>

<script>
    import Chart from "./Chart";
    export default {
        name: 'chart',
        data() {
            return {
                chartData: {
                    xData: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
                    sData: [5, 20, 36, 10, 10, 70]
                },
                option:{
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
        },
        components: {
            Chart
        },
        mounted() {
            this.refreshData();
        },
        methods: {
            refreshData() {
                let xData = this.chartData.xData;
                let sData=this.chartData.sData;
                for(let i=0;i<xData.length;i++){
                    setTimeout(()=>{
                        this.option.xAxis.data.push(xData[i]);
                        this.option.series[0].data.push(sData[i]);
                    },1000*i)
                }
            }
        }
    }
</script>
<style lang='scss' scoped>
</style>