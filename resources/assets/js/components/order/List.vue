<template>
    <div class="main content amount-flow">
        <el-form :inline="true" :model="searchParams" class="search-form-inline" size="small">
            <el-row :gutter="12">
                <el-col :span="5">
                    <el-form-item label="订单号">
                        <el-input v-model="searchParams.trade_no"></el-input>
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
                <el-col :span="6">
                    <el-form-item label="支付渠道">
                        <el-select v-model="searchParams.channel" placeholder="请选择">
                            <el-option
                                    v-for="channel in channels"
                                    :key="channel.id"
                                    :label="channel.name"
                                    :value="channel.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="支付状态">
                        <el-select v-model="searchParams.pay_status" placeholder="请选择">
                            <el-option
                                    v-for="pay_status in pay_statuses"
                                    :key="pay_status.id"
                                    :label="pay_status.name"
                                    :value="pay_status.id">
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
                    prop="trade_no"
                    label="订单号"
                    width="200">
            </el-table-column>
            <el-table-column
                    prop="amount"
                    label="金额(元）"
                    width="200">
            </el-table-column>
            <el-table-column
                    prop="channel"
                    label="支付渠道"
                    width="200">
                <template slot-scope="scope">
                    {{ scope.row.channel === 1 ? '微信支付' : (scope.row.channel === 2 ? '支付宝' : '') }}
                </template>
            </el-table-column>
            <el-table-column
                    prop="pay_status"
                    label="支付状态"
                    width="200">
                <template slot-scope="scope">
                    {{ scope.row.channel === 1 ? '已支付' : '待支付' }}
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
                    label="下单时间"
                    prop="created_at"
                    width="200">
            </el-table-column>
            <el-table-column
                    label="操作"
                    width="200">
                <template slot-scope="scope">
                    <el-button
                            type="primary"
                            size="small"
                            @click="show(scope.row.id)">详情</el-button>
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
        <el-dialog title="订单详情" :visible.sync="showVisible">
            <el-form :model="form" ref="form" label-width="100px" disabled>
                <el-form-item label="订单号" prop="trade_no">
                    <el-input v-model="form.trade_no" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="支付订单号" prop="out_trade_no">
                    <el-input v-model="form.out_trade_no" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="支付状态" prop="pay_status">
                    <el-input v-model="form.pay_status" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="支付方式" prop="channel_name">
                    <el-input v-model="form.channel_name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="支付金额" prop="amount">
                    <el-input v-model="form.amount" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="支付时间" prop="created_at">
                    <el-input v-model="form.created_at" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="点菜详情" prop="dish_detail">
                    <el-input type="textarea" v-model="form.dish_detail"></el-input>
                </el-form-item>
                <el-form-item label="备注" prop="comment">
                    <el-input type="textarea" v-model="form.comment" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
        </el-dialog>
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
        data(){
            return {
                showVisible:false,
                tableHeight: 0,
                url:'',
                loading:false,
                dialogFormVisible:false,
                searchParams:{
                    trade_no:'',
                    table_id:'',
                    seat_id:'',
                    date:'',
                    channel:'',
                    pay_status:'',
                    page:1,
                },
                form:{
                    trade_no:'',
                    out_trade_no:'',
                    channel_name:'',
                    pay_status:'',
                    created_at:'',
                    dish_detail:'',
                    amount:'',
                    comment:'空',
                },
                showData:{},
                TotalPage:0,
                channels:[],
                pay_statuses:[],
                tableData: [],
            }
        },
        created(){
            this.handlePayStatuses();
            this.handleChannels();
            this.handleTableData();
            this.handleTableHeight();
            window.addEventListener('resize', this.handleTableHeight);
        },
        methods: {
            handlePayStatuses(){
                this.$api.orderPayStatus().then(res => {
                    this.pay_statuses=res.data;
                }).catch(err => {
                    this.$message({
                        type: 'error',
                        message: '支付状态初始化异常'
                    });
                });
            },
            handleChannels(){
                this.$api.orderChannel().then(res => {
                    this.channels=res.data;
                }).catch(err => {
                    this.$message({
                        type: 'error',
                        message: '支付渠道初始化异常'
                    });
                });
            },
            // 加载数据
            handleTableData(){
                this.$api.orderList(this.searchParams).then(res => {
                    this.tableData = res.data.data;
                    this.TotalPage = res.data.total;
                    this.loading=false;
                }).catch(err => {
                    this.$alert('获取数据失败, 请重试!', '提示', {
                        confirmButtonText: '确定',
                        callback: action => {
                        }
                    });
                });
            },
            // 详情
            show(id){
                this.$api.orderShow({id:id}).then(res => {
                    this.form = res.data;
                    this.showVisible = true;
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
                console.log(value.join(','));
                this.form.tag = tag;
            },
        },
        destroyed() {
            window.removeEventListener('resize', this.handleTableHeight);
        },

    }
</script>
