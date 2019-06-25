webpackJsonp([1],{

/***/ 852:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(892)
}
var normalizeComponent = __webpack_require__(196)
/* script */
var __vue_script__ = __webpack_require__(894)
/* template */
var __vue_template__ = __webpack_require__(895)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/store/List.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-325eec83", Component.options)
  } else {
    hotAPI.reload("data-v-325eec83", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 892:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(893);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(350)("0f5e2526", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js!../../../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-325eec83\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./List.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js!../../../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-325eec83\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./List.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 893:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(100)(false);
// imports


// module
exports.push([module.i, "\n.avatar-uploader .el-upload {\n    border: 1px dashed #d9d9d9;\n    border-radius: 6px;\n    cursor: pointer;\n    position: relative;\n    overflow: hidden;\n}\n.avatar-uploader .el-upload:hover {\n    border-color: #409EFF;\n}\n.avatar-uploader-icon {\n    font-size: 28px;\n    color: #8c939d;\n    width: 300px;\n    height: 200px;\n    line-height: 200px;\n    text-align: center;\n}\n.avatar {\n    width: 300px;\n    height: 200px;\n    display: block;\n}\n", ""]);

// exports


/***/ }),

/***/ 894:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
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
                page: 1
            },
            TotalPage: 0,
            tableData: [],
            rules: {
                name: [{ required: true, message: '必填项不可为空!', trigger: 'blur' }],
                address: [{ required: true, message: '必填项不可为空!', trigger: 'blur' }],
                logo: [{ required: true, message: '必填项不可为空!', trigger: 'blur' }]
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
            tagList: []
        };
    },
    created: function created() {
        this.handleTableData();
        this.handleTableHeight();
        window.addEventListener('resize', this.handleTableHeight);
    },

    methods: {
        //新增按钮
        storeAdd: function storeAdd() {
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
        storeUpdate: function storeUpdate(row) {
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
        storeCancel: function storeCancel(formName) {
            this.dialogFormVisible = false;
            this.$refs[formName].clearValidate();
        },

        // 添加
        submitFormAdd: function submitFormAdd(formName) {
            var _this = this;

            this.$refs[formName].validate(function (valid) {
                if (valid) {
                    _this.$api.storeAdd(_this.form).then(function (res) {
                        _this.$message({
                            showClose: true,
                            type: res.status === 1 ? 'success' : 'error',
                            message: res.message
                        });
                        _this.handleTableData();
                    }).catch(function (err) {
                        _this.$message({
                            type: 'error',
                            message: '操作失败'
                        });
                    });
                } else {
                    return false;
                }
                _this.$refs[formName].clearValidate();
            });
        },

        // 修改
        submitFormUpdate: function submitFormUpdate(formName) {
            var _this2 = this;

            this.$refs[formName].validate(function (valid) {
                if (valid) {
                    _this2.$api.storeUpdate(_this2.form).then(function (res) {
                        _this2.$message({
                            showClose: true,
                            type: res.status === 1 ? 'success' : 'error',
                            message: res.message
                        });
                        _this2.handleTableData();
                    }).catch(function (err) {
                        _this2.$message({
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
        handleTableData: function handleTableData() {
            var _this3 = this;

            this.$api.storeList(this.searchParams).then(function (res) {
                _this3.tableData = res.data.data;
                _this3.TotalPage = res.data.total;
                _this3.loading = false;
            }).catch(function (err) {
                _this3.$alert('获取数据失败, 请重试!', '提示', {
                    confirmButtonText: '确定',
                    callback: function callback(action) {}
                });
            });
        },
        handleCurrentChange: function handleCurrentChange(page) {
            this.searchParams.page = page;
            this.handleTableData();
        },

        // 表格高度计算
        handleTableHeight: function handleTableHeight() {
            this.tableHeight = window.innerHeight - 318;
        },

        // 图片上传成功将地址回传给表单
        handleAvatarSuccess: function handleAvatarSuccess(res, file) {
            console.log(res.status, res.name);
            if (res.status > 0) {
                var fileName = res.name;
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
        beforeAvatarUpload: function beforeAvatarUpload(file) {
            console.log(file);
            var isJPEG = file.type === 'image/jpeg';
            // const isPng = file.type === 'image/png';
            // const isJPG = file.type === 'image/jpg';
            var isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPEG) {
                this.$message.error('上传头像图片只能是 JPG JPEG PNG格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPEG && isLt2M;
        },
        tagChange: function tagChange(value) {
            var checkedCount = value.length;
            var tag = value.join(',');
            console.log(value.join(','));
            this.form.tag = tag;
        }
    },
    destroyed: function destroyed() {
        window.removeEventListener('resize', this.handleTableHeight);
    }
});

/***/ }),

/***/ 895:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "main content amount-flow" },
    [
      _c(
        "el-form",
        {
          staticClass: "search-form-inline",
          attrs: { inline: true, model: _vm.searchParams, size: "small" }
        },
        [
          _c(
            "el-row",
            { attrs: { gutter: 12 } },
            [
              _c(
                "el-col",
                { attrs: { span: 4 } },
                [
                  _c(
                    "el-form-item",
                    [
                      _c(
                        "el-button",
                        {
                          attrs: { type: "primary", size: "small" },
                          on: {
                            click: function($event) {
                              return _vm.storeAdd()
                            }
                          }
                        },
                        [_vm._v("添加门店")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-table",
        {
          directives: [
            {
              name: "loading",
              rawName: "v-loading",
              value: _vm.loading,
              expression: "loading"
            }
          ],
          staticStyle: { width: "100%", "margin-top": "1px" },
          attrs: { data: _vm.tableData, height: _vm.tableHeight, border: "" }
        },
        [
          _c("el-table-column", {
            attrs: { prop: "name", label: "店名", width: "100" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "门头照", prop: "logo", width: "" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c("img", {
                      staticStyle: {
                        width: "100%",
                        height: "100%",
                        display: "block"
                      },
                      attrs: { src: scope.row.logo }
                    })
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "宣传照1", prop: "banner1", width: "" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    scope.row.banner1
                      ? _c("img", {
                          staticStyle: {
                            width: "100%",
                            height: "100%",
                            display: "block"
                          },
                          attrs: { src: scope.row.banner1 }
                        })
                      : _vm._e()
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "宣传照2", prop: "banner2", width: "" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    scope.row.banner2
                      ? _c("img", {
                          staticStyle: {
                            width: "100%",
                            height: "100%",
                            display: "block"
                          },
                          attrs: { src: scope.row.banner2 }
                        })
                      : _vm._e()
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "宣传照3", prop: "banner3", width: "" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    scope.row.banner3
                      ? _c("img", {
                          staticStyle: {
                            width: "100%",
                            height: "100%",
                            display: "block"
                          },
                          attrs: { src: scope.row.banner3 }
                        })
                      : _vm._e()
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "宣传照4", prop: "banner4", width: "" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    scope.row.banner4
                      ? _c("img", {
                          staticStyle: {
                            width: "100%",
                            height: "100%",
                            display: "block"
                          },
                          attrs: { src: scope.row.banner4 }
                        })
                      : _vm._e()
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "地址", prop: "address", width: "" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "执照号", prop: "license_number", width: "" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "法人姓名", prop: "legal_person", width: "" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "法人电话", prop: "legal_phone", width: "" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "状态", prop: "status", width: "" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(
                          scope.row.status === 0
                            ? "审核中"
                            : scope.row.status === 1
                            ? "审核成功"
                            : "审核失败"
                        ) +
                        "\n            "
                    )
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "操作", width: "" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c(
                      "el-button",
                      {
                        attrs: { type: "primary", size: "small" },
                        on: {
                          click: function($event) {
                            return _vm.storeUpdate(scope.row)
                          }
                        }
                      },
                      [_vm._v("编辑")]
                    )
                  ]
                }
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("el-pagination", {
        staticStyle: { "margin-top": "25px" },
        attrs: {
          background: "",
          "current-page": _vm.searchParams.page,
          "page-size": 10,
          layout: "total, prev, pager, next, jumper",
          total: _vm.TotalPage
        },
        on: {
          "current-change": _vm.handleCurrentChange,
          "update:currentPage": function($event) {
            return _vm.$set(_vm.searchParams, "page", $event)
          },
          "update:current-page": function($event) {
            return _vm.$set(_vm.searchParams, "page", $event)
          }
        }
      }),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: { title: _vm.title, visible: _vm.dialogFormVisible },
          on: {
            "update:visible": function($event) {
              _vm.dialogFormVisible = $event
            }
          }
        },
        [
          _c(
            "el-form",
            {
              ref: "form",
              attrs: {
                model: _vm.form,
                rules: _vm.rules,
                "label-width": "80px"
              }
            },
            [
              _c(
                "el-form-item",
                { attrs: { label: "店名", prop: "name" } },
                [
                  _c("el-input", {
                    attrs: { autocomplete: "off" },
                    model: {
                      value: _vm.form.name,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "name", $$v)
                      },
                      expression: "form.name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "地址", prop: "address" } },
                [
                  _c("el-input", {
                    attrs: { autocomplete: "off" },
                    model: {
                      value: _vm.form.address,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "address", $$v)
                      },
                      expression: "form.address"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "门头照", prop: "logo" } },
                [
                  _c(
                    "el-upload",
                    {
                      staticClass: "avatar-uploader",
                      attrs: {
                        action: "/upload/image?name=logo",
                        "show-file-list": false,
                        accept: "image/jpeg,image/jpg,image/png",
                        "on-success": _vm.handleAvatarSuccess,
                        "before-upload": _vm.beforeAvatarUpload
                      }
                    },
                    [
                      _vm.imageUrl
                        ? _c("img", {
                            staticClass: "avatar",
                            attrs: { src: _vm.imageUrl }
                          })
                        : _c("i", {
                            staticClass: "el-icon-plus avatar-uploader-icon"
                          })
                    ]
                  ),
                  _vm._v(" "),
                  _c("el-input", {
                    attrs: { autocomplete: "off", type: "hidden" },
                    model: {
                      value: _vm.form.logo,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "logo", $$v)
                      },
                      expression: "form.logo"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "宣传照1", prop: "banner1" } },
                [
                  _c(
                    "el-upload",
                    {
                      staticClass: "avatar-uploader",
                      attrs: {
                        action: "/upload/image?name=banner1",
                        "show-file-list": false,
                        accept: "image/jpeg,image/jpg,image/png",
                        "on-success": _vm.handleAvatarSuccess,
                        "before-upload": _vm.beforeAvatarUpload
                      }
                    },
                    [
                      _vm.banner1
                        ? _c("img", {
                            staticClass: "avatar",
                            attrs: { src: _vm.banner1 }
                          })
                        : _c("i", {
                            staticClass: "el-icon-plus avatar-uploader-icon"
                          })
                    ]
                  ),
                  _vm._v(" "),
                  _c("el-input", {
                    attrs: { autocomplete: "off", type: "hidden" },
                    model: {
                      value: _vm.form.banner1,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "banner1", $$v)
                      },
                      expression: "form.banner1"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "宣传照2", prop: "banner2" } },
                [
                  _c(
                    "el-upload",
                    {
                      staticClass: "avatar-uploader",
                      attrs: {
                        action: "/upload/image?name=banner2",
                        "show-file-list": false,
                        accept: "image/jpeg,image/jpg,image/png",
                        "on-success": _vm.handleAvatarSuccess,
                        "before-upload": _vm.beforeAvatarUpload
                      }
                    },
                    [
                      _vm.banner2
                        ? _c("img", {
                            staticClass: "avatar",
                            attrs: { src: _vm.banner2 }
                          })
                        : _c("i", {
                            staticClass: "el-icon-plus avatar-uploader-icon"
                          })
                    ]
                  ),
                  _vm._v(" "),
                  _c("el-input", {
                    attrs: { autocomplete: "off", type: "hidden" },
                    model: {
                      value: _vm.form.banner2,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "banner2", $$v)
                      },
                      expression: "form.banner2"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "宣传照3", prop: "banner3" } },
                [
                  _c(
                    "el-upload",
                    {
                      staticClass: "avatar-uploader",
                      attrs: {
                        action: "/upload/image?name=banner3",
                        "show-file-list": false,
                        accept: "image/jpeg,image/jpg,image/png",
                        "on-success": _vm.handleAvatarSuccess,
                        "before-upload": _vm.beforeAvatarUpload
                      }
                    },
                    [
                      _vm.banner3
                        ? _c("img", {
                            staticClass: "avatar",
                            attrs: { src: _vm.banner3 }
                          })
                        : _c("i", {
                            staticClass: "el-icon-plus avatar-uploader-icon"
                          })
                    ]
                  ),
                  _vm._v(" "),
                  _c("el-input", {
                    attrs: { autocomplete: "off", type: "hidden" },
                    model: {
                      value: _vm.form.banner3,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "banner3", $$v)
                      },
                      expression: "form.banner3"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "宣传照4", prop: "banner4" } },
                [
                  _c(
                    "el-upload",
                    {
                      staticClass: "avatar-uploader",
                      attrs: {
                        action: "/upload/image?name=banner4",
                        "show-file-list": false,
                        accept: "image/jpeg,image/jpg,image/png",
                        "on-success": _vm.handleAvatarSuccess,
                        "before-upload": _vm.beforeAvatarUpload
                      }
                    },
                    [
                      _vm.banner4
                        ? _c("img", {
                            staticClass: "avatar",
                            attrs: { src: _vm.banner4 }
                          })
                        : _c("i", {
                            staticClass: "el-icon-plus avatar-uploader-icon"
                          })
                    ]
                  ),
                  _vm._v(" "),
                  _c("el-input", {
                    attrs: { autocomplete: "off", type: "hidden" },
                    model: {
                      value: _vm.form.banner4,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "banner4", $$v)
                      },
                      expression: "form.banner4"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "营业执照号", prop: "license_number" } },
                [
                  _c("el-input", {
                    attrs: { autocomplete: "off" },
                    model: {
                      value: _vm.form.license_number,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "license_number", _vm._n($$v))
                      },
                      expression: "form.license_number"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "法人姓名", prop: "legal_person" } },
                [
                  _c("el-input", {
                    attrs: { autocomplete: "off" },
                    model: {
                      value: _vm.form.legal_person,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "legal_person", $$v)
                      },
                      expression: "form.legal_person"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "法人电话", prop: "legal_phone" } },
                [
                  _c("el-input", {
                    attrs: { autocomplete: "off" },
                    model: {
                      value: _vm.form.legal_phone,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "legal_phone", _vm._n($$v))
                      },
                      expression: "form.legal_phone"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                [
                  _vm.isAdd
                    ? _c(
                        "el-button",
                        {
                          attrs: { type: "primary" },
                          on: {
                            click: function($event) {
                              return _vm.submitFormAdd("form")
                            }
                          }
                        },
                        [_vm._v("确认")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.isUpdate
                    ? _c(
                        "el-button",
                        {
                          attrs: { type: "primary" },
                          on: {
                            click: function($event) {
                              return _vm.submitFormUpdate("form")
                            }
                          }
                        },
                        [_vm._v("确认修改")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "el-button",
                    {
                      on: {
                        click: function($event) {
                          return _vm.storeCancel("form")
                        }
                      }
                    },
                    [_vm._v("取消")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-325eec83", module.exports)
  }
}

/***/ })

});