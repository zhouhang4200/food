<template>
    <div class="main content amount-flow">
        <ve-line :data="weekDishData"></ve-line>
        <ve-line :data="monthDishData"></ve-line>
        <ve-line :data="yearDishData"></ve-line>
    </div>
</template>
<style>
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 300px;
        height: 200px;
        line-height: 200px;
        text-align: center;
    }
    .avatar {
        width: 300px;
        height: 200px;
        display: block;
    }
</style>

<script>
    export default {
        data: function () {
            return {
                weekDishData: {
                    columns: ['日期', '共计点菜数', '成功下单数', '成功下单金额'],
                    rows: [
                        { '日期': '1/1', '共计点菜数': 1393, '成功下单数': 1093, '成功下单金额': 0.32 },
                        { '日期': '1/2', '共计点菜数': 3530, '成功下单数': 3230, '成功下单金额': 0.26 },
                        { '日期': '1/3', '共计点菜数': 2923, '成功下单数': 2623, '成功下单金额': 0.76 },
                        { '日期': '1/4', '共计点菜数': 1723, '成功下单数': 1423, '成功下单金额': 0.49 },
                        { '日期': '1/5', '共计点菜数': 3792, '成功下单数': 3492, '成功下单金额': 0.323 },
                        { '日期': '1/6', '共计点菜数': 4593, '成功下单数': 4293, '成功下单金额': 0.78 }
                    ]
                },
                monthDishData: {
                    columns: ['日期', '共计点菜数', '成功下单数', '成功下单金额'],
                    rows: [
                        { '日期': '1/1', '共计点菜数': 1393, '成功下单数': 1093, '成功下单金额': 0.32 },
                        { '日期': '1/2', '共计点菜数': 3530, '成功下单数': 3230, '成功下单金额': 0.26 },
                        { '日期': '1/3', '共计点菜数': 2923, '成功下单数': 2623, '成功下单金额': 0.76 },
                        { '日期': '1/4', '共计点菜数': 1723, '成功下单数': 1423, '成功下单金额': 0.49 },
                        { '日期': '1/5', '共计点菜数': 3792, '成功下单数': 3492, '成功下单金额': 0.323 },
                        { '日期': '1/6', '共计点菜数': 4593, '成功下单数': 4293, '成功下单金额': 0.78 }
                    ]
                },
                yearDishData: {
                    columns: ['日期', '共计点菜数', '成功下单数', '成功下单金额'],
                    rows: [
                        { '日期': '1/1', '共计点菜数': 1393, '成功下单数': 1093, '成功下单金额': 0.32 },
                        { '日期': '1/2', '共计点菜数': 3530, '成功下单数': 3230, '成功下单金额': 0.26 },
                        { '日期': '1/3', '共计点菜数': 2923, '成功下单数': 2623, '成功下单金额': 0.76 },
                        { '日期': '1/4', '共计点菜数': 1723, '成功下单数': 1423, '成功下单金额': 0.49 },
                        { '日期': '1/5', '共计点菜数': 3792, '成功下单数': 3492, '成功下单金额': 0.323 },
                        { '日期': '1/6', '共计点菜数': 4593, '成功下单数': 4293, '成功下单金额': 0.78 }
                    ]
                },
            }
        },
        created(){
            // this.handleWeekData();
            // this.handleMonthData();
            // this.handleYearData();
        },
        methods: {
            handleWeekData(){
                this.$api.dishWeekData().then(res => {
                    this.weekDishData=res.data;
                }).catch(err => {
                    this.$message({
                        type: 'error',
                        message: '数据初始化异常'
                    });
                });
            },
            handleMonthData(){
                this.$api.dishMonthData().then(res => {
                    this.monthDishData=res.data;
                }).catch(err => {
                    this.$message({
                        type: 'error',
                        message: '数据初始化异常'
                    });
                });
            },
            handleYearData(){
                this.$api.dishYearData().then(res => {
                    this.yearDishData=res.data;
                }).catch(err => {
                    this.$message({
                        type: 'error',
                        message: '数据初始化异常'
                    });
                });
            },
        },
        destroyed() {

        },

    }
</script>
