webpackJsonp([1],{

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(345)
}
var normalizeComponent = __webpack_require__(81)
/* script */
var __vue_script__ = __webpack_require__(347)
/* template */
var __vue_template__ = __webpack_require__(348)
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
Component.options.__file = "resources/assets/js/components/h5/Order.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0cd46a83", Component.options)
  } else {
    hotAPI.reload("data-v-0cd46a83", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(346);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(140)("7e4f3efa", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js!../../../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0cd46a83\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./Order.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js!../../../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0cd46a83\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./Order.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)(false);
// imports


// module
exports.push([module.i, "\n.imageStyle img {\n    width: 100%;\n    height: 100%;\n    display: block;\n}\n.van-card__thumb {\n    width: 100px;\n    height: 70px;\n    margin-right: 10px;\n    /* -webkit-box-align: center; */\n    /* -webkit-align-items: center; */\n    /* align-items: center; */\n    /* -webkit-box-pack: center; */\n    -webkit-justify-content: center;\n    /* justify-content: center; */\n    /* -webkit-box-flex: 0; */\n    -webkit-flex: none;\n    /* flex: none; */\n    /* margin-top: 20px; */\n}\n.van-button--warning {\n    color: #fff;\n    background-color: #409eff;\n    border: 1px solid #409eff;\n}\n.van-card {\n    position: relative;\n    color: #323233;\n    padding: 10px 15px;\n    font-size: 14px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    background-color: #fafafa;\n}\n.van-card__content, .van-card__header {\n    height: 44px;\n}\n.van-card__title {\n    line-height: 16px;\n    max-height: 32px;\n    font-weight: 500;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    padding-top: 5px;\n}\n.van-card__bottom, .van-card__desc {\n    line-height: 20px;\n    margin-top: 4px;\n    font-size: 14px;\n}\n", ""]);

// exports


/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vant__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





__WEBPACK_IMPORTED_MODULE_1_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_0_vant__["a" /* GoodsAction */]).use(__WEBPACK_IMPORTED_MODULE_0_vant__["b" /* GoodsActionBigBtn */]).use(__WEBPACK_IMPORTED_MODULE_0_vant__["c" /* GoodsActionMiniBtn */]);

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            form: {
                account: '',
                fee: ''
            },
            accountOptions: [],
            accountShow: false,
            showNumber: false,
            images: ["h5.keeper.test/images/banner1.jpg", "h5.keeper.test/images/banner2.jpg"],
            imageURL: "",
            hot: '热卖中',
            price: '',
            originPrice: '',
            desc: '微辣',
            title: '',
            number: 0,
            totalAmount: 0,
            dishData: {},
            customerDishDetail: []
        };
    },
    created: function created() {},

    computed: {},
    mounted: function mounted() {
        this.dishes();
    },

    methods: {
        sub: function sub(dish) {
            var dishId = dish.id;
            var id = 'number' + dishId;
            var numberObject = document.getElementById(id);
            var numberValue = Number(numberObject.value);
            var finalNumber = 0;

            if (numberValue > 0) {
                finalNumber = numberValue - 1;
                numberObject.value = finalNumber;

                if (this.customerDishDetail.length > 0) {
                    for (var i = 0; i < this.customerDishDetail.length; i++) {
                        if (this.customerDishDetail[i].dish_id === dishId) {
                            this.customerDishDetail[i].number = finalNumber;

                            if (finalNumber < 1) {
                                this.customerDishDetail.splice(i, 1);
                            }

                            // 总价减去次价格
                            this.totalAmount -= Number(dish.amount) * 100;
                        }
                    }
                }
            }
        },
        add: function add(dish) {
            var dishId = dish.id;
            var id = 'number' + dishId;
            var numberObject = document.getElementById(id);
            var numberValue = Number(numberObject.value);
            var finalNumber = 0;

            finalNumber = numberValue + 1;
            numberObject.value = finalNumber;
            // console.log(numberObject.value);
            if (this.customerDishDetail.length > 0 && numberValue > 0) {
                for (var i = 0; i < this.customerDishDetail.length; i++) {
                    if (this.customerDishDetail[i].dish_id === dishId) {
                        this.customerDishDetail[i].number = finalNumber;

                        // 总价增加
                        this.totalAmount += Number(dish.amount) * 100;
                    }
                }
            } else {
                var newJson = {};
                newJson.dish_id = dishId;
                newJson.number = finalNumber;
                this.customerDishDetail.push(newJson);

                // 总价增加
                this.totalAmount += Number(dish.amount) * 100;
            }

            // console.log(Number(dish.amount), this.totalAmount, dish.amount);
        },
        dishes: function dishes() {
            var _this = this;

            this.$api.h5DishList({ merchant_id: 1 }).then(function (res) {
                if (res.status === 1) {
                    console.log(res.data);
                    _this.dishData = res.data;
                } else if (res.status === 3) {
                    __WEBPACK_IMPORTED_MODULE_0_vant__["d" /* Toast */].fail(res.message);
                    // this.$router.push({name: 'login', query: {}});
                } else {
                    __WEBPACK_IMPORTED_MODULE_0_vant__["d" /* Toast */].fail(res.message);
                }
            });
        },
        onConfirmAccount: function onConfirmAccount(value, index) {
            this.form.account = value;
            this.accountShow = false;
        },
        onInput: function onInput(key) {
            this.form.fee += key;
        },
        onDelete: function onDelete() {
            this.form.fee = '';
        },
        onClose: function onClose() {
            this.showNumber = false;
        },

        // 表单提交
        onSubmitForm: function onSubmitForm() {
            var _this2 = this;

            this.$validator.validateAll().then(function (result) {
                if (result) {
                    _this2.$api.FinanceWithdrawApply(_this2.form).then(function (res) {
                        if (res.status === 1) {
                            __WEBPACK_IMPORTED_MODULE_0_vant__["d" /* Toast */].success(res.message);
                        } else if (res.status === 3) {
                            __WEBPACK_IMPORTED_MODULE_0_vant__["d" /* Toast */].fail(res.message);
                            _this2.$router.push({ name: 'login', query: {} });
                        } else {
                            __WEBPACK_IMPORTED_MODULE_0_vant__["d" /* Toast */].fail(res.message);
                        }
                    }).catch(function (err) {
                        __WEBPACK_IMPORTED_MODULE_0_vant__["d" /* Toast */].fail('表单数据异常!');
                    });
                }
            });
        }
    }
});

/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticStyle: { "margin-top": "20px" } }, [
    _c(
      "div",
      { staticClass: "head" },
      [
        _c(
          "van-swipe",
          {
            staticClass: "imageStyle",
            attrs: { autoplay: 3000, height: 150, "indicator-color": "white" }
          },
          [
            _c("van-swipe-item", [
              _c("img", { attrs: { src: "/images/banner1.jpg" } })
            ]),
            _vm._v(" "),
            _c("van-swipe-item", [
              _c("img", { attrs: { src: "/images/banner2.jpg" } })
            ]),
            _vm._v(" "),
            _c("van-swipe-item", [
              _c("img", { attrs: { src: "/images/banner1.jpg" } })
            ]),
            _vm._v(" "),
            _c("van-swipe-item", [
              _c("img", { attrs: { src: "/images/banner2.jpg" } })
            ])
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "body" }, [
      _c(
        "div",
        {
          staticClass: "main",
          staticStyle: { position: "relative", width: "100%", float: "right" }
        },
        _vm._l(_vm.dishData, function(dish) {
          return _c(
            "van-swipe-cell",
            {
              key: dish.id,
              attrs: { "right-width": 10, "on-close": _vm.onClose }
            },
            [
              _c(
                "van-cell-group",
                [
                  _c(
                    "van-card",
                    {
                      attrs: {
                        price: dish.amount,
                        title: dish.name,
                        thumb: dish.logo,
                        "origin-price": dish.original_amount
                      }
                    },
                    [
                      _c("div", { attrs: { slot: "footer" }, slot: "footer" }, [
                        _c("div", { staticClass: "amount_container" }, [
                          _c(
                            "div",
                            { staticClass: "amount_box" },
                            [
                              _c(
                                "van-button",
                                {
                                  attrs: { size: "mini" },
                                  on: {
                                    click: function($event) {
                                      return _vm.sub(dish)
                                    }
                                  }
                                },
                                [_vm._v("-")]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                staticStyle: {
                                  width: "40px",
                                  "text-align": "center"
                                },
                                attrs: {
                                  type: "number",
                                  value: "0",
                                  id: "number" + dish.id,
                                  maxlength: "2",
                                  pattern: "[0-9]*",
                                  readonly: "readonly"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "van-button",
                                {
                                  attrs: { size: "mini" },
                                  on: {
                                    click: function($event) {
                                      return _vm.add(dish)
                                    }
                                  }
                                },
                                [_vm._v("+")]
                              )
                            ],
                            1
                          )
                        ])
                      ])
                    ]
                  )
                ],
                1
              )
            ],
            1
          )
        }),
        1
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "foot" },
      [
        _c("van-submit-bar", {
          attrs: { price: _vm.totalAmount, "button-text": "提交订单" },
          on: { submit: _vm.onSubmit }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-0cd46a83", module.exports)
  }
}

/***/ })

});