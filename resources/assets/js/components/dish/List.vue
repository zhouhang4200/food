<template>
    <div class="main content amount-flow">
        <el-form :inline="true" :model="searchParams" class="search-form-inline" size="small">
            <el-row :gutter="12">
                <el-col :span="4">
                    <el-form-item label="类目">
                        <el-select v-model="searchParams.category" placeholder="请选择">
                            <el-option
                                    v-for="value,key in categories"
                                    :key="key"
                                    :label="value"
                                    :value="key">
                                {{ value }}
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
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
                                @click="dishAdd()">新增</el-button>
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
            <!--<el-table-column-->
            <!--prop="merchantId"-->
            <!--label="商户ID"-->
            <!--width="200">-->
            <!--</el-table-column>-->
            <el-table-column
                    prop="name"
                    label="菜肴名称"
                    width="200">
            </el-table-column>
            <el-table-column
                    label="价格"
                    prop="amount"
                    width="">
            </el-table-column>
            <el-table-column
                    label="所属类目"
                    prop="category"
                    width="200">
                <template slot-scope="scope">
                    {{ categories[scope.row.category] }}
                </template>
            </el-table-column>
            <el-table-column
                    label="预览图片"
                    prop="logo"
                    width="">
                <template slot-scope="scope">
                    <img src="../../image/a.jpg" style="width: 100%;height: 100%;display: block;">
                </template>
            </el-table-column>
            <el-table-column
                    label="口味标记"
                    prop="tag"
                    width="">
            </el-table-column>
            <el-table-column
                    label="菜肴配料"
                    prop="material"
                    width="">
            </el-table-column>
            <el-table-column
                    label="简介"
                    prop="intro"
                    width="">
            </el-table-column>
            <el-table-column
                    label="操作"
                    width="250">
                <template slot-scope="scope">
                    <el-button
                            type="primary"
                            size="small"
                            @click="dishUpdate(scope.row)">编辑</el-button>
                    <el-button
                            type="primary"
                            size="small"
                            @click="dishDelete(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
                style="margin-top: 25px"
                background
                @current-change="handleCurrentChange"
                :current-page.sync="searchParams.pageNum"
                :page-size="10"
                layout="total, prev, pager, next, jumper"
                :total="TotalPage">
        </el-pagination>
        <el-dialog :title="title" :visible.sync="dialogFormVisible">
            <el-form :model="form" ref="form" :rules="rules" label-width="80px">
                <el-form-item label="菜肴名称" prop="name">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="所属类目" prop="category">
                    <el-select v-model="form.category" placeholder="请选择">
                        <el-option
                                v-for="value,key in categories"
                                :key="key"
                                :label="value"
                                :value="key">
                            {{ value }}
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="口味标记" prop="tag">
                    <!--<el-input v-model.number="form.tag" autocomplete="off"></el-input>-->
                    <el-checkbox-group v-model="tagList" autocomplete="off" @change="tagChange">
                        <el-checkbox label="不辣"></el-checkbox>
                        <el-checkbox label="微辣"></el-checkbox>
                        <el-checkbox label="特辣"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="菜肴配料" prop="material">
                    <el-input v-model.number="form.material" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="预览图片" prop="logo">
                    <el-upload
                            class="avatar-uploader"
                            action="/upload/image"
                            :show-file-list="false"
                            accept="image/jpeg,image/jpg,image/png"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                    <el-input v-model="form.logo" autocomplete="off" type="hidden"></el-input>
                </el-form-item>
                <el-form-item label="价格" prop="amount">
                    <el-input v-model.number="form.amount" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="简介" prop="intro">
                    <el-input v-model.number="form.intro" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button v-if="isAdd" type="primary" @click="submitFormAdd('form')">确认</el-button>
                    <el-button v-if="isUpdate" type="primary" @click="submitFormUpdate('form')">确认修改</el-button>
                    <el-button @click="dishCancel('form')">取消</el-button>
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
                imageUrl:'',
                loading:true,
                tableHeight: 0,
                isAdd:true,
                isUpdate:false,
                title:'添加',
                url:'',
                dialogFormVisible:false,
                AccountBlackListName:{},
                searchParams:{
                    pageNum:1,
                },
                TotalPage:0,
                tableData: [],
                rules:{
                    name:[{ required: true, message:'必填项不可为空!', trigger: 'blur' }],
                    amount:[{ required: true, message:'必填项不可为空!', trigger: 'blur' }],
                    category:[{ required: true, message:'必填项不可为空!', trigger: 'blur' }],
                    logo:[{ required: true, message:'必填项不可为空!', trigger: 'blur' }],
                },
                form: {
                    name: '',
                    category: '',
                    tag: '',
                    material: '',
                    logo: '123',
                    amount: '',
                    intro: ''
                },
                categories:{
                    1 : '主菜',
                    2 : '主食',
                    3 : '饮料',
                },
                tagList: [],
            }
        },
        methods: {
            //新增按钮
            dishAdd(){
                this.isAdd=true;
                this.isUpdate=false;
                this.title='添加';
                this.dialogFormVisible = true;
                this.form={
                    merchantId: '1',
                };
                this.tagList=['不辣'];
            },
            // 编辑按钮
            dishUpdate(row) {
                this.tagList=[];
                this.isAdd=false;
                this.isUpdate=true;
                this.title='修改';
                this.dialogFormVisible = true;
                this.form=JSON.parse(JSON.stringify(row));
                if (row.tag) {
                    this.tagList=row.tag.split(',');
                }
            },
            // 取消按钮
            dishCancel(formName) {
                this.dialogFormVisible = false;
                this.$refs[formName].clearValidate();
            },
            // 添加
            submitFormAdd(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$api.dishAdd(this.form).then(res => {
                            this.$message({
                                showClose: true,
                                type: res.messageType == 'SUCCESS' ? 'success' : 'error',
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
            submitFormUpdate(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$api.dishUpdate(this.form).then(res => {
                            this.$message({
                                showClose: true,
                                type: res.messageType == 'SUCCESS' ? 'success' : 'error',
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
                this.$api.dishList(this.searchParams).then(res => {
                    this.tableData = res.data.pagerList;
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
                // this.$api.AccountBlackListName(this.searchParams).then(res => {
                //     this.AccountBlackListName = res;
                // }).catch(err => {
                //     this.$alert('获取数据失败, 请重试!', '提示', {
                //         confirmButtonText: '确定',
                //         callback: action => {
                //         }
                //     });
                // });
            },
            handleSearch() {
                var name = document.getElementById('name').value;
                var category = document.getElementById('category').value;

                if (name) {
                    this.searchParams['name'] = name;
                    delete this.searchParams.pageNum;
                } else {
                    delete this.searchParams.name;
                }

                if (category) {
                    this.searchParams['category'] = category;
                    delete this.searchParams.pageNum;
                } else {
                    delete this.searchParams.category;
                }
                this.handleTableData();
            },
            handleCurrentChange(pageNum) {
                this.searchParams.pageNum = pageNum;
                this.handleTableData();
            },
            // 删除
            dishDelete (id) {
                this.$confirm('您确定要删除吗？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$api.dishDelete({id:id}).then(res => {
                        this.$message({
                            showClose: true,
                            type: res.messageType == 'SUCCESS' ? 'success' : 'error',
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
            // 图片上传成功将地址回传给表单
            handleAvatarSuccess(res, file) {
                if (res) {
                    this.imageUrl = URL.createObjectURL(file.raw);
                    this.form.logo = res.path;
                }
            },
            // 图片上传
            beforeAvatarUpload(file) {
                const isJPEG = file.type === 'image/jpeg';
                // const isPng = file.type === 'image/png';
                // const isJPG = file.type === 'image/jpg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPEG) {
                    this.$message.error('上传头像图片只能是 JPG JPEG PNG格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPEG && isLt2M;
            },
            tagChange(value) {
                let checkedCount = value.length;
                let tag = value.join(',');
                console.log(value.join(','));
                this.form.tag = tag;
            },
        },
        created(){
            this.handleTableData();
            this.handleName();
            this.handleTableHeight();
            window.addEventListener('resize', this.handleTableHeight);
        },
        destroyed() {
            window.removeEventListener('resize', this.handleTableHeight);
        },

    }
</script>
