webpackJsonp([18],{

/***/ 879:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(922)
}
var normalizeComponent = __webpack_require__(202)
/* script */
var __vue_script__ = __webpack_require__(924)
/* template */
var __vue_template__ = __webpack_require__(925)
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
Component.options.__file = "resources/assets/js/components/static/Order.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3b240138", Component.options)
  } else {
    hotAPI.reload("data-v-3b240138", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 922:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(923);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(363)("8bbf8a9c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3b240138\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Order.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3b240138\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Order.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 923:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(105)(false);
// imports


// module
exports.push([module.i, "\n.avatar-uploader .el-upload {\n    border: 1px dashed #d9d9d9;\n    border-radius: 6px;\n    cursor: pointer;\n    position: relative;\n    overflow: hidden;\n}\n.avatar-uploader .el-upload:hover {\n    border-color: #409EFF;\n}\n.avatar-uploader-icon {\n    font-size: 28px;\n    color: #8c939d;\n    width: 300px;\n    height: 200px;\n    line-height: 200px;\n    text-align: center;\n}\n.avatar {\n    width: 300px;\n    height: 200px;\n    display: block;\n}\n", ""]);

// exports


/***/ }),

/***/ 924:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            weekOrderData: {
                columns: ['日期', '近7日共计点菜数', '近7日成功下单数', '近7日成功下单金额'],
                rows: []
            },
            monthOrderData: {
                columns: ['日期', '近30日共计点菜数', '近30日成功下单数', '近30日成功下单金额'],
                rows: []
            },
            yearOrderData: {
                columns: ['日期', '每月共计点菜数', '每月成功下单数', '每月成功下单金额'],
                rows: []
            }
        };
    },
    created: function created() {
        this.handleWeekData();
        this.handleMonthData();
        this.handleYearData();
    },

    methods: {
        handleWeekData: function handleWeekData() {
            var _this = this;

            this.$api.orderWeekData().then(function (res) {
                if (res.status === 1) {
                    _this.weekOrderData.rows = res.data;
                }
            }).catch(function (err) {
                _this.$message({
                    type: 'error',
                    message: '数据初始化异常'
                });
            });
        },
        handleMonthData: function handleMonthData() {
            var _this2 = this;

            this.$api.orderMonthData().then(function (res) {
                if (res.status === 1) {
                    _this2.monthOrderData.rows = res.data;
                }
            }).catch(function (err) {
                _this2.$message({
                    type: 'error',
                    message: '数据初始化异常'
                });
            });
        },
        handleYearData: function handleYearData() {
            var _this3 = this;

            this.$api.orderYearData().then(function (res) {
                _this3.yearOrderData.rows = res.data;
            }).catch(function (err) {
                _this3.$message({
                    type: 'error',
                    message: '数据初始化异常'
                });
            });
        }
    },
    destroyed: function destroyed() {}
});

/***/ }),

/***/ 925:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "main content amount-flow" },
    [
      _c("ve-line", { attrs: { data: _vm.weekOrderData } }),
      _vm._v(" "),
      _c("ve-line", { attrs: { data: _vm.monthOrderData } }),
      _vm._v(" "),
      _c("ve-histogram", { attrs: { data: _vm.yearOrderData } })
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
    require("vue-hot-reload-api")      .rerender("data-v-3b240138", module.exports)
  }
}

/***/ })

});