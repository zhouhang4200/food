<template>
    <div class="main content amount-flow">
        <el-form :inline="true" :model="searchParams" class="search-form-inline" size="small">
            <el-row :gutter="12">
                <el-col :span="4">
                    <el-form-item label="名称">
                        <el-input v-model="searchParams.name" id="name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="4">
                    <el-form-item>
                        <el-button type="primary" @click="handleSearch">查询</el-button>
                        <el-button
                                type="primary"
                                size="small"
                                @click="categoryAdd()">新增类目</el-button>
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
                    prop="name"
                    label="类目名称"
                    width="">
            </el-table-column>
            <el-table-column
                    label="操作"
                    width="">
                <template slot-scope="scope">
                    <el-button
                            type="primary"
                            size="small"
                            @click="categoryUpdate(scope.row)">编辑</el-button>
                    <el-button
                            type="primary"
                            size="small"
                            @click="categoryDelete(scope.row.id)">删除</el-button>
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
        <el-dialog :category_title="category_title" :visible.sync="category_visible">
            <el-form :model="form" ref="form" :rules="category_rules" label-width="80px">
                <el-form-item label="类目名称" prop="name">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button v-if="isAdd" type="primary" @click="submitFormCategoryAdd('form')">确认</el-button>
                    <el-button v-if="isUpdate" type="primary" @click="submitFormCategoryUpdate('form')">确认修改</el-button>
                    <el-button @click="categoryCancel('form')">取消</el-button>
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
                searchParams:{
                    name:'',
                    page:1,
                },
                category_title:'',
                category_visible:false,
                form:{
                    name:'',
                },
                category_rules:{
                    name:[{ required: true, message:'必填项不可为空!', trigger: 'blur' }],
                },
                timer:'',
                loading:true,
                tableHeight: 0,
                isAdd:true,
                isUpdate:false,
                TotalPage:0,
                tableData: [],
                categories:{
                },
                tagList: [],
            }
        },
        methods: {
            categoryAdd(){
                this.form={};
                this.isAdd=true;
                this.isUpdate=false;
                this.title='类目添加';
                this.category_visible = true;
                this.tagList=[];
                this.imageUrl=false;
            },
            // 编辑按钮
            categoryUpdate(row) {
                this.handleTableData();
                this.tagList=[];
                this.isAdd=false;
                this.isUpdate=true;
                this.title='类目修改';
                this.category_visible = true;
                this.form=JSON.parse(JSON.stringify(row));
                if (row.tag) {
                    this.tagList=row.tag.split(',');
                }
            },
            // 取消按钮
            categoryCancel(formName) {
                this.category_visible = false;
                this.$refs[formName].clearValidate();
            },
            // 添加
            submitFormCategoryAdd(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$api.categoryAdd(this.form).then(res => {
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
                    } else {
                        return false;
                    }
                    this.$refs[formName].clearValidate();
                });
            },
            // 修改
            submitFormCategoryUpdate(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$api.categoryUpdate(this.form).then(res => {
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
                    } else {
                        return false;
                    }
                });
            },
            // 加载数据
            handleTableData(){
                this.$api.categoryList(this.searchParams).then(res => {
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
            handleName(){
            },
            handleSearch() {
                this.handleTableData();
            },
            handleCurrentChange(page) {
                this.searchParams.page = page;
                this.handleTableData();
            },
            // 删除
            categoryDelete (id) {
                this.$confirm('删除此类目将会使该类目下的所有菜品也删除，您确定要删除吗？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$api.categoryDelete({id:id}).then(res => {
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
            // 表格高度计算
            handleTableHeight() {
                this.tableHeight = window.innerHeight - 318;
            },
            tagChange(value) {

            },
        },
        created(){
            this.handleTableData();
            this.handleName();
            this.handleTableHeight();
            window.addEventListener('resize', this.handleTableHeight);
        },
        mounted() {

        },
        beforeDestroy() {

        },
        destroyed() {
            window.removeEventListener('resize', this.handleTableHeight);
        },
    }
</script>
