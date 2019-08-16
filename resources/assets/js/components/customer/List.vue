<template>
    <div class="main content amount-flow">
        <el-form :inline="true" :model="searchParams" class="search-form-inline" size="small">
            <el-row :gutter="12">
                <el-col :span="4">
                    <el-form-item label="菜名">
                        <el-input v-model="searchParams.name" id="name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="4">
                    <el-form-item label="桌号">
                        <el-input v-model="searchParams.table_id"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="4">
                    <el-form-item label="座号">
                        <el-input v-model="searchParams.seat_id"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="4">
                    <el-form-item label="状态">
                        <el-select v-model="searchParams.status" placeholder="请选择">
                            <el-option
                                    v-for="status in statuses"
                                    :key="status.id"
                                    :label="status.name"
                                    :value="status.id">
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
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="order_trade_no"
                    label="订单号"
                    width="200">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="菜名"
                    width="">
                <template slot-scope="scope">
                    {{ scope.row.dish.name }}
                </template>
            </el-table-column>
            <el-table-column
                    label="菜图"
                    prop="logo"
                    width="">
                <template slot-scope="scope">
                    <img :src="scope.row.dish.logo" style="width: 100%;height: 100%;display: block;">
                </template>
            </el-table-column>
            <el-table-column
                    label="桌号"
                    prop="table_id"
                    width="">
            </el-table-column>
            <el-table-column
                    label="座号"
                    prop="table_id"
                    width="">
            </el-table-column>
            <el-table-column
                    label="点菜时间"
                    prop="created_at"
                    width="150">
            </el-table-column>
            <el-table-column
                    label="状态"
                    prop="status">
                <template slot-scope="scope">
                    {{ scope.row.status === 1 ? '已上菜' : '未上菜' }}
                </template>
            </el-table-column>
            <el-table-column
                    label="备注"
                    prop="comment"
                    width="200">
            </el-table-column>
            <el-table-column
                    label="操作"
                    width="">
                <template slot-scope="scope">
                    <el-button
                            v-if="scope.row.status === 0"
                            type="primary"
                            size="small"
                            @click="served(scope.row.id)">完成
                    </el-button>
                </template>
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
                loading: true,
                tableHeight: 0,
                url: '',
                dialogFormVisible: false,
                searchParams: {
                    name: '',
                    table_id: '',
                    seat_id: '',
                    date: '',
                    status: '',
                    page: 1,
                },
                TotalPage: 0,
                tableData: [],
                statuses: {},
            }
        },
        created() {
            this.handleTableData();
            this.handleTableHeight();
            this.handleStatuses();
            window.addEventListener('resize', this.handleTableHeight);
        },
        methods: {
            handleStatuses() {
                this.$api.customerDishDetailStatus().then(res => {
                    this.statuses = res.data;
                }).catch(err => {
                    this.$message({
                        type: 'error',
                        message: '数据初始化异常'
                    });
                });
            },
            // 上菜完成
            served(id) {
                this.$confirm('您确定要完成吗？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$api.customerDishDetailServed({id: id}).then(res => {
                        this.$message({
                            showClose: true,
                            type: res.status === 1 ? 'success' : 'error',
                            message: res.message
                        });
                        this.handleTableData();
                    }).catch(err => {
                        this.$message({
                            type: 'error',
                            message: '操作失败'
                        });
                    });
                });
            },
            // 加载数据
            handleTableData() {
                this.$api.customerDishDetailList(this.searchParams).then(res => {
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
