<template>
    <div class="main content amount-flow">
        <el-form :inline="true" :model="searchParams" class="search-form-inline" size="small">
            <el-row :gutter="12">
                <el-col :span="4">
                    <el-form-item>
                        <el-button
                                type="primary"
                                size="small"
                                @click="storeAdd()">添加门店
                        </el-button>
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
                    label="店名"
                    width="100">
            </el-table-column>
            <!--<el-table-column-->
            <!--label="主门店"-->
            <!--prop="parent_name"-->
            <!--width="">-->
            <!--</el-table-column>-->
            <el-table-column
                    label="门头照"
                    prop="logo"
                    width="">
                <template slot-scope="scope">
                    <img :src="scope.row.logo" style="width: 100%;height: 100%;display: block;">
                </template>
            </el-table-column>
            <el-table-column
                    label="宣传照1"
                    prop="banner1"
                    width="">
                <template slot-scope="scope">
                    <img v-if="scope.row.banner1" :src="scope.row.banner1"
                         style="width: 100%;height: 100%;display: block;">
                </template>
            </el-table-column>
            <el-table-column
                    label="宣传照2"
                    prop="banner2"
                    width="">
                <template slot-scope="scope">
                    <img v-if="scope.row.banner2" :src="scope.row.banner2"
                         style="width: 100%;height: 100%;display: block;">
                </template>
            </el-table-column>
            <el-table-column
                    label="宣传照3"
                    prop="banner3"
                    width="">
                <template slot-scope="scope">
                    <img v-if="scope.row.banner3" :src="scope.row.banner3"
                         style="width: 100%;height: 100%;display: block;">
                </template>
            </el-table-column>
            <el-table-column
                    label="宣传照4"
                    prop="banner4"
                    width="">
                <template slot-scope="scope">
                    <img v-if="scope.row.banner4" :src="scope.row.banner4"
                         style="width: 100%;height: 100%;display: block;">
                </template>
            </el-table-column>
            <el-table-column
                    label="地址"
                    prop="address"
                    width="">
            </el-table-column>
            <el-table-column
                    label="执照号"
                    prop="license_number"
                    width="">
            </el-table-column>
            <el-table-column
                    label="法人姓名"
                    prop="legal_person"
                    width="">
            </el-table-column>
            <el-table-column
                    label="法人电话"
                    prop="legal_phone"
                    width="">
            </el-table-column>
            <el-table-column
                    label="状态"
                    prop="status"
                    width="">
                <template slot-scope="scope">
                    {{ scope.row.status === 0 ? '审核中' : (scope.row.status === 1 ? '审核成功' : '审核失败') }}
                </template>
            </el-table-column>
            <el-table-column
                    label="操作"
                    width="">
                <template slot-scope="scope">
                    <el-button
                            type="primary"
                            size="small"
                            @click="storeUpdate(scope.row)">编辑
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
        <el-dialog :title="title" :visible.sync="dialogFormVisible">
            <el-form :model="form" ref="form" :rules="rules" label-width="90px">
                <el-form-item label="店名" prop="name">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="地址" prop="address">
                    <el-input v-model="form.address" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="门头照" prop="logo">
                    <el-upload
                            class="avatar-uploader"
                            action="/upload/image?name=logo"
                            :show-file-list="false"
                            accept="image/jpeg,image/jpg,image/png"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                    <el-input v-model="form.logo" autocomplete="off" type="hidden"></el-input>
                </el-form-item>
                <el-form-item label="宣传照1" prop="banner1">
                    <el-upload
                            class="avatar-uploader"
                            action="/upload/image?name=banner1"
                            :show-file-list="false"
                            accept="image/jpeg,image/jpg,image/png"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                        <img v-if="banner1" :src="banner1" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                    <el-input v-model="form.banner1" autocomplete="off" type="hidden"></el-input>
                </el-form-item>
                <el-form-item label="宣传照2" prop="banner2">
                    <el-upload
                            class="avatar-uploader"
                            action="/upload/image?name=banner2"
                            :show-file-list="false"
                            accept="image/jpeg,image/jpg,image/png"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                        <img v-if="banner2" :src="banner2" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                    <el-input v-model="form.banner2" autocomplete="off" type="hidden"></el-input>
                </el-form-item>
                <el-form-item label="宣传照3" prop="banner3">
                    <el-upload
                            class="avatar-uploader"
                            action="/upload/image?name=banner3"
                            :show-file-list="false"
                            accept="image/jpeg,image/jpg,image/png"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                        <img v-if="banner3" :src="banner3" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                    <el-input v-model="form.banner3" autocomplete="off" type="hidden"></el-input>
                </el-form-item>
                <el-form-item label="宣传照4" prop="banner4">
                    <el-upload
                            class="avatar-uploader"
                            action="/upload/image?name=banner4"
                            :show-file-list="false"
                            accept="image/jpeg,image/jpg,image/png"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                        <img v-if="banner4" :src="banner4" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                    <el-input v-model="form.banner4" autocomplete="off" type="hidden"></el-input>
                </el-form-item>
                <el-form-item label="营业执照号" prop="license_number">
                    <el-input v-model.number="form.license_number" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="法人姓名" prop="legal_person">
                    <el-input v-model="form.legal_person" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="法人电话" prop="legal_phone">
                    <el-input v-model.number="form.legal_phone" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button v-if="isAdd" type="primary" @click="submitFormAdd('form')">确认</el-button>
                    <el-button v-if="isUpdate" type="primary" @click="submitFormUpdate('form')">确认修改</el-button>
                    <el-button @click="storeCancel('form')">取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imageUrl: '',
                banner1: '',
                banner2: '',
                banner3: '',
                banner4: '',
                loading: true,
                tableHeight: 0,
                isAdd: true,
                isUpdate: false,
                title: '添加',
                url: '',
                dialogFormVisible: false,
                searchParams: {
                    page: 1,
                },
                TotalPage: 0,
                tableData: [],
                rules: {
                    name: [{required: true, message: '必填项不可为空!', trigger: 'blur'}],
                    address: [{required: true, message: '必填项不可为空!', trigger: 'blur'}],
                    logo: [{required: true, message: '必填项不可为空!', trigger: 'blur'}],
                },
                form: {
                    name: '',
                    address: '',
                    logo: '',
                    license_number: "",
                    legal_person: "",
                    legal_phone: "",
                    banner1: '',
                    banner2: '',
                    banner3: '',
                    banner4: ''
                },
                categories: {},
                tagList: [],
            }
        },
        created() {
            this.handleTableData();
            this.handleTableHeight();
            window.addEventListener('resize', this.handleTableHeight);
        },
        methods: {
            //新增按钮
            storeAdd() {
                this.form = {};
                this.isAdd = true;
                this.isUpdate = false;
                this.title = '添加';
                this.dialogFormVisible = true;
                this.tagList = [];
                this.imageUrl = false;
                this.banner1 = false;
                this.banner2 = false;
                this.banner3 = false;
                this.banner4 = false;
            },
            // 编辑按钮
            storeUpdate(row) {
                this.handleTableData();
                this.tagList = [];
                this.isAdd = false;
                this.isUpdate = true;
                this.title = '修改';
                this.imageUrl = row.logo;
                this.banner1 = row.banner1;
                this.banner2 = row.banner2;
                this.banner3 = row.banner3;
                this.banner4 = row.banner4;
                this.dialogFormVisible = true;
                this.form = JSON.parse(JSON.stringify(row));
            },
            // 取消按钮
            storeCancel(formName) {
                this.dialogFormVisible = false;
                this.$refs[formName].clearValidate();
            },
            // 添加
            submitFormAdd(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$api.storeAdd(this.form).then(res => {
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
            submitFormUpdate(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$api.storeUpdate(this.form).then(res => {
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
            handleTableData() {
                this.$api.storeList(this.searchParams).then(res => {
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
            handleCurrentChange(page) {
                this.searchParams.page = page;
                this.handleTableData();
            },
            // 表格高度计算
            handleTableHeight() {
                this.tableHeight = window.innerHeight - 318;
            },
            // 图片上传成功将地址回传给表单
            handleAvatarSuccess(res, file) {
                // console.log(res.status, res.name);
                if (res.status > 0) {
                    let fileName = res.name;
                    if (fileName === 'logo') {
                        this.imageUrl = URL.createObjectURL(file.raw);
                        this.form.logo = res.path;
                    } else if (fileName === 'banner1') {
                        this.banner1 = URL.createObjectURL(file.raw);
                        this.form.banner1 = res.path;
                    } else if (fileName === 'banner2') {
                        this.banner2 = URL.createObjectURL(file.raw);
                        this.form.banner2 = res.path;
                    } else if (fileName === 'banner3') {
                        this.banner3 = URL.createObjectURL(file.raw);
                        this.form.banner3 = res.path;
                    } else if (fileName === 'banner4') {
                        this.banner4 = URL.createObjectURL(file.raw);
                        this.form.banner4 = res.path;
                    }
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
