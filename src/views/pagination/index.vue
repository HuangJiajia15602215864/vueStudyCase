<template>
    <div class="pagination">
        <span class="demonstration">分页组件</span>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
            :current-page="currentPage4" :page-sizes="[10, 20, 30, 40]" :page-size="10"
            layout="total, sizes, prev, pager, next, jumper" :total="400" background>
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: 'pagination',
        data() {
            return {
                currentPage4: 4
            }
        },

        methods: {
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        }
    }
</script>
<style lang='scss' scoped>

</style>