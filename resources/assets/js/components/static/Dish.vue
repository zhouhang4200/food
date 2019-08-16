<template>
    <div class="main content amount-flow">
        <ve-line :data="weekDishData"></ve-line>
        <ve-line :data="monthDishData"></ve-line>
        <ve-line :data="yearDishData"></ve-line>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                weekDishData: {
                    columns: ['日期', '近7日共计点菜数'],
                    rows: [
                    ]
                },
                monthDishData: {
                    columns: ['日期', '近30日共计点菜数'],
                    rows: [
                    ]
                },
                yearDishData: {
                    columns: ['日期', '所有共计点菜数'],
                    rows: [
                    ]
                }
            }
        },
        created(){
            this.handleWeekData();
            this.handleMonthData();
            this.handleYearData();
        },
        methods: {
            handleWeekData(){
                this.$api.dishWeekData().then(res => {
                    this.weekDishData.rows=res.data;
                }).catch(err => {
                    this.$message({
                        type: 'error',
                        message: '数据初始化异常'
                    });
                });
            },
            handleMonthData(){
                this.$api.dishMonthData().then(res => {
                    this.monthDishData.rows=res.data;
                }).catch(err => {
                    this.$message({
                        type: 'error',
                        message: '数据初始化异常'
                    });
                });
            },
            handleYearData(){
                this.$api.dishYearData().then(res => {
                    this.yearDishData.rows=res.data;
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
