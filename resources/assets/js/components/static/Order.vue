<template>
    <div class="main content amount-flow">
        <ve-line :data="weekOrderData"></ve-line>
        <ve-line :data="monthOrderData"></ve-line>
        <ve-histogram :data="yearOrderData"></ve-histogram>

    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                weekOrderData: {
                    columns: ['日期', '近7日共计点菜数', '近7日成功下单数', '近7日成功下单金额'],
                    rows: [
                    ]
                },
                monthOrderData: {
                    columns: ['日期', '近30日共计点菜数', '近30日成功下单数', '近30日成功下单金额'],
                    rows: [
                    ]
                },
                yearOrderData: {
                    columns: ['日期', '每月共计点菜数', '每月成功下单数', '每月成功下单金额'],
                    rows: [
                    ]
                },
            }
        },
        created(){
            this.handleWeekData();
            this.handleMonthData();
            this.handleYearData();
        },
        methods: {
            handleWeekData(){
                this.$api.orderWeekData().then(res => {
                    if (res.status === 1) {
                        this.weekOrderData.rows=res.data;
                    }
                }).catch(err => {
                    this.$message({
                        type: 'error',
                        message: '数据初始化异常'
                    });
                });
            },
            handleMonthData(){
                this.$api.orderMonthData().then(res => {
                    if (res.status === 1) {
                        this.monthOrderData.rows=res.data;
                    }

                }).catch(err => {
                    this.$message({
                        type: 'error',
                        message: '数据初始化异常'
                    });
                });
            },
            handleYearData(){
                this.$api.orderYearData().then(res => {
                    this.yearOrderData.rows=res.data;
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
