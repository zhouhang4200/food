webpackJsonp([0],{

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(384)
}
var normalizeComponent = __webpack_require__(81)
/* script */
var __vue_script__ = __webpack_require__(386)
/* template */
var __vue_template__ = __webpack_require__(387)
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
Component.options.__file = "resources/assets/js/components/customer/List.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d7ff2f70", Component.options)
  } else {
    hotAPI.reload("data-v-d7ff2f70", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(385);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(140)("5bbee6ad", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js!../../../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d7ff2f70\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./List.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js!../../../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d7ff2f70\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./List.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)(false);
// imports


// module
exports.push([module.i, "\n.avatar-uploader .el-upload {\n    border: 1px dashed #d9d9d9;\n    border-radius: 6px;\n    cursor: pointer;\n    position: relative;\n    overflow: hidden;\n}\n.avatar-uploader .el-upload:hover {\n    border-color: #409EFF;\n}\n.avatar-uploader-icon {\n    font-size: 28px;\n    color: #8c939d;\n    width: 300px;\n    height: 200px;\n    line-height: 200px;\n    text-align: center;\n}\n.avatar {\n    width: 300px;\n    height: 200px;\n    display: block;\n}\n", ""]);

// exports


/***/ }),

/***/ 386:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            imageUrl: '',
            loading: true,
            tableHeight: 0,
            isAdd: true,
            isUpdate: false,
            title: '添加',
            url: '',
            dialogFormVisible: false,
            AccountBlackListName: {},
            searchParams: {
                name: '',
                category_id: '',
                page: 1
            },
            TotalPage: 0,
            tableData: [],
            rules: {
                name: [{ required: true, message: '必填项不可为空!', trigger: 'blur' }],
                amount: [{ required: true, message: '必填项不可为空!', trigger: 'blur' }],
                original_amount: [{ required: true, message: '必填项不可为空!', trigger: 'blur' }],
                category_id: [{ required: true, message: '必填项不可为空!', trigger: 'blur' }],
                logo: [{ required: true, message: '必填项不可为空!', trigger: 'blur' }]
            },
            form: {
                name: '',
                category_id: '',
                tag: "",
                material: '暂无',
                logo: '',
                amount: '',
                original_amount: '',
                intro: '暂无'
            },
            categories: {},
            tagList: []
        };
    },

    methods: {
        handleCategory: function handleCategory() {
            var _this = this;

            this.$api.category().then(function (res) {
                _this.categories = res.data;
            }).catch(function (err) {
                _this.$message({
                    type: 'error',
                    message: '数据初始化异常'
                });
            });
        },

        //新增按钮
        dishAdd: function dishAdd() {
            this.form = {};
            this.isAdd = true;
            this.isUpdate = false;
            this.title = '添加';
            this.dialogFormVisible = true;
            this.tagList = [];
            this.imageUrl = false;
        },

        // 编辑按钮
        dishUpdate: function dishUpdate(row) {
            this.handleTableData();
            this.tagList = [];
            this.isAdd = false;
            this.isUpdate = true;
            this.title = '修改';
            this.imageUrl = row.logo;
            this.dialogFormVisible = true;
            this.form = JSON.parse(JSON.stringify(row));
            if (row.tag) {
                this.tagList = row.tag.split(',');
            }
        },

        // 取消按钮
        dishCancel: function dishCancel(formName) {
            this.dialogFormVisible = false;
            this.$refs[formName].clearValidate();
        },

        // 添加
        submitFormAdd: function submitFormAdd(formName) {
            var _this2 = this;

            this.$refs[formName].validate(function (valid) {
                if (valid) {
                    _this2.$api.dishAdd(_this2.form).then(function (res) {
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
                _this2.$refs[formName].clearValidate();
            });
        },

        // 修改
        submitFormUpdate: function submitFormUpdate(formName) {
            var _this3 = this;

            this.$refs[formName].validate(function (valid) {
                if (valid) {
                    _this3.$api.dishUpdate(_this3.form).then(function (res) {
                        _this3.$message({
                            showClose: true,
                            type: res.status === 1 ? 'success' : 'error',
                            message: res.message
                        });
                        _this3.handleTableData();
                    }).catch(function (err) {
                        _this3.$message({
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
            var _this4 = this;

            this.$api.dishList(this.searchParams).then(function (res) {
                _this4.tableData = res.data.data;
                _this4.TotalPage = res.data.total;
                _this4.loading = false;
            }).catch(function (err) {
                _this4.$alert('获取数据失败, 请重试!', '提示', {
                    confirmButtonText: '确定',
                    callback: function callback(action) {}
                });
            });
        },
        handleName: function handleName() {
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
        handleSearch: function handleSearch() {
            this.handleTableData();
        },
        handleCurrentChange: function handleCurrentChange(page) {
            this.searchParams.page = page;
            this.handleTableData();
        },

        // 删除
        dishDelete: function dishDelete(id) {
            var _this5 = this;

            this.$confirm('您确定要删除吗？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(function () {
                _this5.$api.dishDelete({ id: id }).then(function (res) {
                    _this5.$message({
                        showClose: true,
                        type: res.status === 1 ? 'success' : 'error',
                        message: res.message
                    });
                    _this5.handleTableData();
                }).catch(function (err) {
                    _this5.$message({
                        type: 'error',
                        message: '操作失败'
                    });
                });
            });
        },

        // 表格高度计算
        handleTableHeight: function handleTableHeight() {
            this.tableHeight = window.innerHeight - 318;
        },

        // 图片上传成功将地址回传给表单
        handleAvatarSuccess: function handleAvatarSuccess(res, file) {
            if (res) {
                this.imageUrl = URL.createObjectURL(file.raw);
                this.form.logo = res.path;
            }
        },

        // 图片上传
        beforeAvatarUpload: function beforeAvatarUpload(file) {
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
    created: function created() {
        this.handleTableData();
        this.handleName();
        this.handleTableHeight();
        this.handleCategory();
        window.addEventListener('resize', this.handleTableHeight);
    },
    destroyed: function destroyed() {
        window.removeEventListener('resize', this.handleTableHeight);
    }
});

/***/ }),

/***/ 387:
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
                    { attrs: { label: "类目" } },
                    [
                      _c(
                        "el-select",
                        {
                          attrs: { placeholder: "请选择" },
                          model: {
                            value: _vm.searchParams.category_id,
                            callback: function($$v) {
                              _vm.$set(_vm.searchParams, "category_id", $$v)
                            },
                            expression: "searchParams.category_id"
                          }
                        },
                        _vm._l(_vm.categories, function(category) {
                          return _c("el-option", {
                            key: category.id,
                            attrs: { label: category.name, value: category.id }
                          })
                        }),
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
                "el-col",
                { attrs: { span: 4 } },
                [
                  _c(
                    "el-form-item",
                    { attrs: { label: "名称" } },
                    [
                      _c("el-input", {
                        attrs: { id: "name" },
                        model: {
                          value: _vm.searchParams.name,
                          callback: function($$v) {
                            _vm.$set(_vm.searchParams, "name", $$v)
                          },
                          expression: "searchParams.name"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
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
                          attrs: { type: "primary" },
                          on: { click: _vm.handleSearch }
                        },
                        [_vm._v("查询")]
                      ),
                      _vm._v(" "),
                      _c(
                        "el-button",
                        {
                          attrs: { type: "primary", size: "small" },
                          on: {
                            click: function($event) {
                              return _vm.dishAdd()
                            }
                          }
                        },
                        [_vm._v("新增")]
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
            attrs: { prop: "name", label: "菜肴名称", width: "200" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "价格", prop: "amount", width: "" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "所属类目", prop: "category_id", width: "200" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(scope.row.category.name) +
                        "\n            "
                    )
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "预览图片", prop: "logo", width: "" },
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
            attrs: { label: "口味标记", prop: "tag", width: "" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "菜肴配料", prop: "material", width: "" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "简介", prop: "intro", width: "" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "操作", width: "250" },
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
                            return _vm.dishUpdate(scope.row)
                          }
                        }
                      },
                      [_vm._v("编辑")]
                    ),
                    _vm._v(" "),
                    _c(
                      "el-button",
                      {
                        attrs: { type: "primary", size: "small" },
                        on: {
                          click: function($event) {
                            return _vm.dishDelete(scope.row.id)
                          }
                        }
                      },
                      [_vm._v("删除")]
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
                { attrs: { label: "菜肴名称", prop: "name" } },
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
                { attrs: { label: "所属类目", prop: "category_id" } },
                [
                  _c(
                    "el-select",
                    {
                      attrs: { placeholder: "请选择" },
                      model: {
                        value: _vm.form.category_id,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "category_id", $$v)
                        },
                        expression: "form.category_id"
                      }
                    },
                    _vm._l(_vm.categories, function(category) {
                      return _c("el-option", {
                        key: category.id,
                        attrs: { label: category.name, value: category.id }
                      })
                    }),
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "口味标记", prop: "tag" } },
                [
                  _c(
                    "el-checkbox-group",
                    {
                      attrs: { autocomplete: "off" },
                      on: { change: _vm.tagChange },
                      model: {
                        value: _vm.tagList,
                        callback: function($$v) {
                          _vm.tagList = $$v
                        },
                        expression: "tagList"
                      }
                    },
                    [
                      _c("el-checkbox", { attrs: { label: "不辣" } }),
                      _vm._v(" "),
                      _c("el-checkbox", { attrs: { label: "微辣" } }),
                      _vm._v(" "),
                      _c("el-checkbox", { attrs: { label: "特辣" } })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "菜肴配料", prop: "material" } },
                [
                  _c("el-input", {
                    attrs: { autocomplete: "off" },
                    model: {
                      value: _vm.form.material,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "material", $$v)
                      },
                      expression: "form.material"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "预览图片", prop: "logo" } },
                [
                  _c(
                    "el-upload",
                    {
                      staticClass: "avatar-uploader",
                      attrs: {
                        action: "/upload/image",
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
                { attrs: { label: "价格", prop: "amount" } },
                [
                  _c("el-input", {
                    attrs: { autocomplete: "off" },
                    model: {
                      value: _vm.form.amount,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "amount", _vm._n($$v))
                      },
                      expression: "form.amount"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "原价", prop: "original_amount" } },
                [
                  _c("el-input", {
                    attrs: { autocomplete: "off" },
                    model: {
                      value: _vm.form.original_amount,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "original_amount", _vm._n($$v))
                      },
                      expression: "form.original_amount"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "简介", prop: "intro" } },
                [
                  _c("el-input", {
                    attrs: { autocomplete: "off" },
                    model: {
                      value: _vm.form.intro,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "intro", $$v)
                      },
                      expression: "form.intro"
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
                          return _vm.dishCancel("form")
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
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-d7ff2f70", module.exports)
  }
}

/***/ })

});