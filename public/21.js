webpackJsonp([21],{

/***/ 846:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(867)
}
var normalizeComponent = __webpack_require__(196)
/* script */
var __vue_script__ = __webpack_require__(869)
/* template */
var __vue_template__ = __webpack_require__(870)
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
Component.options.__file = "resources/assets/js/components/h5/AlipayOrder.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ab7facce", Component.options)
  } else {
    hotAPI.reload("data-v-ab7facce", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 867:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(868);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(350)("7e9c8f44", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js!../../../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ab7facce\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./AlipayOrder.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js!../../../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ab7facce\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./AlipayOrder.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 868:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(100)(false);
// imports


// module
exports.push([module.i, "\n.imageStyle img {\n    width: 100%;\n    height: 100%;\n    display: block;\n}\n.van-card__thumb {\n    width: 100px;\n    height: 70px;\n    margin-right: 10px;\n    /* -webkit-box-align: center; */\n    /* -webkit-align-items: center; */\n    /* align-items: center; */\n    /* -webkit-box-pack: center; */\n    -webkit-justify-content: center;\n    /* justify-content: center; */\n    /* -webkit-box-flex: 0; */\n    -webkit-flex: none;\n    /* flex: none; */\n    /* margin-top: 20px; */\n}\n.van-button--warning {\n    color: #fff;\n    background-color: #409eff;\n    border: 1px solid #409eff;\n}\n.van-card {\n    position: relative;\n    color: #323233;\n    padding: 10px 15px;\n    font-size: 14px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    background-color: #fafafa;\n}\n.van-card__content, .van-card__header {\n    height: 44px;\n}\n.van-card__title {\n    line-height: 16px;\n    max-height: 32px;\n    font-weight: 500;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    padding-top: 5px;\n}\n.van-card__bottom, .van-card__desc {\n    line-height: 20px;\n    margin-top: 4px;\n    font-size: 14px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ 869:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vant__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(13);
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
    created: function created() {
        // let code=getUrlKey("code");
        // if(code){
        //     //调用接口获取openId   参考文档https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421140842
        //     this.getOpenIdApi(code);
        // }else{
        //     this.getCodeApi("123");
        // }
    },

    computed: {},
    mounted: function mounted() {
        // let code=this.getUrlKey("code");
        // if(code){
        //     console.log(code);
        //     //调用接口获取openId   参考文档https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421140842
        //     this.getOpenIdApi(code);
        // }else{
        //     console.log('code');
        //     this.getCodeApi("123");
        // }
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
                numberObject.setAttribute("style", "width: 40px; text-align: center;color: #f44");
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
            if (finalNumber < 1) {
                numberObject.setAttribute("style", "width: 40px; text-align: center;");
            }

            // if (this.totalAmount > 0) {
            //     document.getElementById('pay').attributes("style", "color: #fff;background-color: #f44;border: 1px solid #f44;")
            // } else {
            //     document.getElementById('pay').attributes("style", "color: #fff;background-color: #fff;border: 1px solid #fff;")
            // }

            console.log(this.customerDishDetail);
        },
        add: function add(dish) {
            var dishId = dish.id;
            var id = 'number' + dishId;
            var numberObject = document.getElementById(id);
            var numberValue = Number(numberObject.value);
            var finalNumber = 0;
            numberObject.setAttribute("style", "width: 40px; text-align: center;color: #f44");

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

            // if (this.totalAmount > 0) {
            //     document.getElementById('pay').attributes("style", "color: #fff;background-color: #f44;border: 1px solid #f44;")
            // } else {
            //     document.getElementById('pay').attributes("style", "color: #fff;background-color: #fff;border: 1px solid #fff;")
            // }

            console.log(this.customerDishDetail);
            // console.log(Number(dish.amount), this.totalAmount, dish.amount);
        },
        onSubmit: function onSubmit() {
            var _this = this;

            console.log(this.totalAmount);
            if (this.totalAmount > 0) {
                var amount = this.totalAmount;
                var detail = this.customerDishDetail;
                var open_id = this.$route.query.open_id;
                var merchant_id = this.$route.query.merchant_id;
                var seat_id = this.$route.query.seat_id;
                var table_id = this.$route.query.table_id;
                var query = this.$route.query;
                var jsApiParameters = '';
                this.$api.h5Pay({ amount: amount, detail: detail, open_id: open_id, merchant_id: merchant_id, seat_id: seat_id, table_id: table_id, query: query }).then(function (res) {
                    // this.$message({
                    //     type: 'info',
                    //     message: document.getElementsByTagName('body')[0].append(res.pay_form)
                    // });
                    // alert(data.pay_form);
                    if (res.status === 1) {
                        // this.html = res.pay_form;
                        var form = res.pay_form;
                        var div = document.createElement('div');
                        div.innerHTML = form;
                        document.body.appendChild(div);
                        document.forms[0].submit();
                    } else {
                        _this.$message({
                            type: 'info',
                            message: '网络错误，请稍后再试'
                        });
                    }
                }).catch(function (error) {
                    _this.$message({
                        type: 'info',
                        message: error
                    });
                });
            }
            // console.log(this.$route.params);
        },
        dishes: function dishes() {
            var _this2 = this;

            var merchant_id = this.$route.query.merchant_id;
            // console.log(merchant_id);
            this.$api.h5DishList({ merchant_id: merchant_id }).then(function (res) {
                if (res.status === 1) {
                    _this2.dishData = res.data;
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
            var _this3 = this;

            this.$validator.validateAll().then(function (result) {
                if (result) {
                    _this3.$api.FinanceWithdrawApply(_this3.form).then(function (res) {
                        if (res.status === 1) {
                            __WEBPACK_IMPORTED_MODULE_0_vant__["d" /* Toast */].success(res.message);
                        } else if (res.status === 3) {
                            __WEBPACK_IMPORTED_MODULE_0_vant__["d" /* Toast */].fail(res.message);
                            _this3.$router.push({ name: 'login', query: {} });
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

/***/ 870:
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
          staticStyle: {
            position: "relative",
            width: "100%",
            float: "right",
            "margin-bottom": "55px"
          }
        },
        [
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
                        _c(
                          "div",
                          { attrs: { slot: "footer" }, slot: "footer" },
                          [
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
                          ]
                        )
                      ]
                    )
                  ],
                  1
                )
              ],
              1
            )
          }),
          _vm._v(" "),
          _c("van-submit-bar", {
            attrs: {
              id: "pay",
              price: _vm.totalAmount,
              "button-text": "提交订单"
            },
            on: {
              submit: function($event) {
                return _vm.onSubmit()
              }
            }
          })
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-ab7facce", module.exports)
  }
}

/***/ })

});