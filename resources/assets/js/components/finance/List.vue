<template>
    <div class="main content amount-flow">
        <el-form :inline="true" :model="searchParams" class="search-form-inline" size="small">
            <el-row :gutter="12">
                <el-col :span="5">
                    <el-form-item label="订单号">
                        <el-input v-model="searchParams.trade_no"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="收入类型">
                        <el-select v-model="searchParams.sub_type" placeholder="请选择">
                            <el-option
                                    v-for="sub_type in sub_types"
                                    :key="sub_type.id"
                                    :label="sub_type.name"
                                    :value="sub_type.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="5">
                    <el-form-item label="日期">
                        <el-date-picker
                                v-model="searchParams.date"
                                type="daterange"
                                align="right"
                                unlink-panels
                                format="yyyy-MM-dd"
                                value-format="yyyy-MM-dd"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                        </el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="3">
                    <el-form-item>
                        <el-button type="primary" @click="handleSearch">查询</el-button>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <el-table
                :data="tableData"
                :height="tableHeight"
                v-loading="loading"
                border
                style="width: 100%; margin-top: 1px">
            <el-table-column
                    prop="date"
                    label="日期"
                    width="200">
            </el-table-column>
            <el-table-column
                    prop="order_trade_no"
                    label="订单号"
                    width="200">
            </el-table-column>
            <el-table-column
                    prop="amount"
                    label="金额(元）"
                    width="">
            </el-table-column>
            <el-table-column
                    prop="type"
                    label="类型"
                    width="">
                <template slot-scope="scope">
                    {{ scope.row.type === 1 ? '收入' : '' }}
                </template>
            </el-table-column>
            <el-table-column
                    prop="sub_type"
                    label="子类型"
                    width="">
                <template slot-scope="scope">
                    {{ scope.row.sub_type === 11 ? '微信收入' : (scope.row.sub_type === 12 ? '支付宝收入' : '') }}
                </template>
            </el-table-column>
            <el-table-column
                    prop="comment"
                    label="备注"
                    width="500">
            </el-table-column>
            <el-table-column
                    label="时间"
                    prop="created_at"
                    width="200">
            </el-table-column>
        </el-table>
        <el-pagination
                style="margin-top: 25px"
                background
                @current-change="handleCurrentChange"
                :current-page.sync="searchParams.page"
                :page-size="10"
                layout="total, prev, pager, next, jumper"
                :total="TotalPage">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                showVisible: false,
                tableHeight: 0,
                url: '',
                loading: false,
                dialogFormVisible: false,
                searchParams: {
                    trade_no: '',
                    sub_type: '',
                    date: '',
                    page: 1,
                },
                showData: {},
                TotalPage: 0,
                sub_types: [],
                tableData: [],
            }
        },
        created() {
            this.handleSubTypes();
            this.handleTableData();
            this.handleTableHeight();
            window.addEventListener('resize', this.handleTableHeight);
        },
        methods: {
            handleSubTypes() {
                this.$api.financeSubType().then(res => {
                    this.sub_types = res.data;
                }).catch(err => {
                    this.$message({
                        type: 'error',
                        message: '支付渠道初始化异常'
                    });
                });
            },
            // 加载数据
            handleTableData() {
                this.$api.financeList(this.searchParams).then(res => {
                    this.tableData = res.data.data;
                    this.TotalPage = res.data.total;
                    this.loading = false;
                }).catch(err => {
                    this.$alert('获取数据失败, 请重试!', '提示', {
                        confirmButtonText: '确定',
                        callback: action => {
                        }
                    });
                });
            },
            handleSearch() {
                this.handleTableData();
            },
            handleCurrentChange(page) {
                this.searchParams.page = page;
                this.handleTableData();
            },
            // 表格高度计算
            handleTableHeight() {
                this.tableHeight = window.innerHeight - 318;
            },
            tagChange(value) {
                let checkedCount = value.length;
                let tag = value.join(',');
                this.form.tag = tag;
            },
        },
        destroyed() {
            window.removeEventListener('resize', this.handleTableHeight);
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
