webpackJsonp([5],{

/***/ 872:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(892)
}
var normalizeComponent = __webpack_require__(202)
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
Component.options.__file = "resources/assets/js/components/h5/WechatOrder.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c8077f86", Component.options)
  } else {
    hotAPI.reload("data-v-c8077f86", Component.options)
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
var update = __webpack_require__(363)("3bcc8297", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c8077f86\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./WechatOrder.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c8077f86\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./WechatOrder.vue");
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

exports = module.exports = __webpack_require__(105)(false);
// imports


// module
exports.push([module.i, "\n.imageStyle img {\n    width: 100%;\n    height: 100%;\n    display: block;\n}\n.van-card__thumb {\n    width: 100px;\n    height: 70px;\n    margin-right: 10px;\n    /* -webkit-box-align: center; */\n    /* -webkit-align-items: center; */\n    /* align-items: center; */\n    /* -webkit-box-pack: center; */\n    -webkit-justify-content: center;\n    /* justify-content: center; */\n    /* -webkit-box-flex: 0; */\n    -webkit-flex: none;\n    /* flex: none; */\n    /* margin-top: 20px; */\n}\n.van-button--warning {\n    color: #fff;\n    background-color: #409eff;\n    border: 1px solid #409eff;\n}\n.van-card {\n    position: relative;\n    color: #323233;\n    padding: 10px 15px;\n    font-size: 14px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    background-color: #fafafa;\n}\n.van-card__content, .van-card__header {\n    height: 44px;\n}\n.van-card__title {\n    line-height: 16px;\n    max-height: 32px;\n    font-weight: 500;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    padding-top: 5px;\n}\n.van-card__bottom, .van-card__desc {\n    line-height: 20px;\n    margin-top: 4px;\n    font-size: 14px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ 894:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vant__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(11);
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
//
//
//
//
//
//






__WEBPACK_IMPORTED_MODULE_1_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_0_vant__["a" /* GoodsAction */]);
// .use(GoodsActionBigBtn)
// .use(GoodsActionMiniBtn);

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            activeKey: 0,
            categories: {},
            store: {},
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
        this.handleCategories();
        this.handleBanner();
        this.dishes();
    },

    methods: {
        check: function check(category_id, key) {
            if (key === 0) {
                document.documentElement.scrollTop = 1;
            } else {
                document.getElementById(category_id).scrollIntoView();
            }
        },
        dishes: function dishes(category_id) {
            var _this = this;

            var merchant_id = this.$route.query.merchant_id;
            // console.log(merchant_id);
            this.$api.h5DishList({ merchant_id: merchant_id, category_id: category_id }).then(function (res) {
                if (res.status === 1) {
                    _this.dishData = res.data;
                } else if (res.status === 3) {
                    __WEBPACK_IMPORTED_MODULE_0_vant__["d" /* Toast */].fail(res.message);
                    // this.$router.push({name: 'login', query: {}});
                } else {
                    __WEBPACK_IMPORTED_MODULE_0_vant__["d" /* Toast */].fail(res.message);
                }
            });
        },
        getUrlKey: function getUrlKey(name) {
            //获取url 参数
            return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null;
        },
        getCodeApi: function getCodeApi(state) {
            //获取code
            var urlNow = encodeURIComponent(window.location.href);
            var scope = 'snsapi_base'; //snsapi_userinfo   //静默授权 用户无感知
            var appid = 'wx5e0fd315aff830a4';
            var url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appid + '&redirect_uri=' + urlNow + '&response_type=code&scope=' + scope + '&state=' + state + '#wechat_redirect';
            window.location.replace(url);
        },
        getOpenIdApi: function getOpenIdApi(code) {
            this.$api.getopenId({ code: code }).then(function (res) {
                if (res.status === 1) {
                    // console.log('pay_success');
                } else if (res.status === 3) {
                    // Toast.fail(res.message);
                } else {
                        // Toast.fail(res.message);
                    }
            });
        },
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

            // console.log(this.customerDishDetail);
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

            // console.log(this.customerDishDetail);
            // console.log(Number(dish.amount), this.totalAmount, dish.amount);
        },
        onSubmit: function onSubmit() {
            // console.log(this.totalAmount);
            if (this.totalAmount > 0) {
                var amount = this.totalAmount;
                var detail = this.customerDishDetail;
                var open_id = this.$route.query.open_id;
                var merchant_id = this.$route.query.merchant_id;
                var seat_id = this.$route.query.seat_id;
                var table_id = this.$route.query.table_id;
                var query = this.$route.query;
                var _jsApiParameters = '';
                this.$api.h5Pay({
                    amount: amount,
                    detail: detail,
                    open_id: open_id,
                    merchant_id: merchant_id,
                    seat_id: seat_id,
                    table_id: table_id,
                    query: query
                }).then(function (res) {
                    if (res.status === 1) {
                        _jsApiParameters = JSON.parse(res.jsApiParameters);

                        if (typeof WeixinJSBridge == "undefined") {
                            if (document.addEventListener) {
                                document.addEventListener('WeixinJSBridgeReady', WeixinJSBridge.invoke('getBrandWCPayRequest', _jsApiParameters, function (res) {
                                    //WeixinJSBridge.log(res.err_msg);
                                    if (res.err_msg == "get_brand_wcpay_request:ok") {
                                        alert('支付成功');
                                        //可以进行查看订单，等操作
                                    } else {
                                        // alert('支付失败0！');
                                        alert('支付失败0！' + res.err_code + res.err_desc + res.err_msg);
                                    }
                                    //alert(res.err_code+res.err_desc+res.err_msg);
                                }), false);
                            } else if (document.attachEvent) {
                                document.attachEvent('WeixinJSBridgeReady', WeixinJSBridge.invoke('getBrandWCPayRequest', _jsApiParameters, function (res) {
                                    //WeixinJSBridge.log(res.err_msg);
                                    if (res.err_msg == "get_brand_wcpay_request:ok") {
                                        alert('支付成功');
                                        //可以进行查看订单，等操作
                                    } else {
                                        alert('支付失败1！' + res.err_code + res.err_desc + res.err_msg);
                                    }
                                    //alert(res.err_code+res.err_desc+res.err_msg);
                                }));
                                document.attachEvent('onWeixinJSBridgeReady', WeixinJSBridge.invoke('getBrandWCPayRequest', _jsApiParameters, function (res) {
                                    //WeixinJSBridge.log(res.err_msg);
                                    if (res.err_msg == "get_brand_wcpay_request:ok") {
                                        alert('支付成功');
                                        //可以进行查看订单，等操作
                                    } else {
                                        alert('支付失败2！' + res.err_code + res.err_desc + res.err_msg);
                                    }
                                    //alert(res.err_code+res.err_desc+res.err_msg);
                                }));
                            }
                        } else {
                            WeixinJSBridge.invoke('getBrandWCPayRequest', _jsApiParameters, function (res) {
                                //WeixinJSBridge.log(res.err_msg);
                                if (res.err_msg == "get_brand_wcpay_request:ok") {
                                    alert('支付成功');
                                    //可以进行查看订单，等操作
                                } else {
                                    alert('支付失败3！' + res.err_code + res.err_desc + res.err_msg);
                                }
                                //alert(res.err_code+res.err_desc+res.err_msg);
                            });
                        }
                    } else {
                        alert('网络错误，请稍后再试！');
                    }
                });
            }
            // console.log(this.$route.params);
        },
        handleCategories: function handleCategories() {
            var _this2 = this;

            var merchant_id = this.$route.query.merchant_id;
            this.$api.h5Category({ merchant_id: merchant_id }).then(function (res) {
                _this2.categories = res.data;
                // let category_id = res.data[0].id;
                // this.dishes(category_id);
            }).catch(function (err) {
                _this2.$message({
                    type: 'error',
                    message: '类目获取失败'
                });
            });
        },
        handleBanner: function handleBanner() {
            var _this3 = this;

            var merchant_id = this.$route.query.merchant_id;
            this.$api.h5Banner({ merchant_id: merchant_id }).then(function (res) {
                _this3.store = res.data;
            }).catch(function (err) {
                _this3.$message({
                    type: 'error',
                    message: 'store获取失败'
                });
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
            var _this4 = this;

            this.$validator.validateAll().then(function (result) {
                if (result) {
                    _this4.$api.FinanceWithdrawApply(_this4.form).then(function (res) {
                        if (res.status === 1) {
                            __WEBPACK_IMPORTED_MODULE_0_vant__["d" /* Toast */].success(res.message);
                        } else if (res.status === 3) {
                            __WEBPACK_IMPORTED_MODULE_0_vant__["d" /* Toast */].fail(res.message);
                            _this4.$router.push({ name: 'login', query: {} });
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

function jsApiCall() {
    WeixinJSBridge.invoke('getBrandWCPayRequest', jsApiParameters, function (res) {
        //WeixinJSBridge.log(res.err_msg);
        if (res.err_msg == "get_brand_wcpay_request:ok") {
            alert('支付成功');
            //可以进行查看订单，等操作
        } else {
            alert('支付失败！');
        }
        //alert(res.err_code+res.err_desc+res.err_msg);
    });
}

function callPay() {
    if (typeof WeixinJSBridge == "undefined") {
        if (document.addEventListener) {
            document.addEventListener('WeixinJSBridgeReady', jsApiCall, false);
        } else if (document.attachEvent) {
            document.attachEvent('WeixinJSBridgeReady', jsApiCall);
            document.attachEvent('onWeixinJSBridgeReady', jsApiCall);
        }
    } else {
        jsApiCall();
    }
}

/***/ }),

/***/ 895:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      {
        staticClass: "body",
        staticStyle: { margin: "0", padding: "0", height: "100%" }
      },
      [
        _c(
          "div",
          {
            staticClass: "main",
            staticStyle: { width: "100%", margin: "0", padding: "0" }
          },
          [
            _c(
              "div",
              {
                staticClass: "head",
                staticStyle: {
                  position: "fixed",
                  width: "100%",
                  top: "0",
                  "line-height": "150px",
                  "z-index": "9999"
                }
              },
              [
                _c(
                  "van-swipe",
                  {
                    staticClass: "imageStyle",
                    attrs: {
                      autoplay: 3000,
                      height: 150,
                      "indicator-color": "white"
                    }
                  },
                  [
                    _vm.store.banner1
                      ? _c("van-swipe-item", [
                          _c("img", { attrs: { src: _vm.store.banner1 } })
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.store.banner2
                      ? _c("van-swipe-item", [
                          _c("img", { attrs: { src: _vm.store.banner2 } })
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.store.banner3
                      ? _c("van-swipe-item", [
                          _c("img", { attrs: { src: _vm.store.banner3 } })
                        ])
                      : _vm._e()
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticStyle: {
                  position: "absolute",
                  width: "100%",
                  "margin-top": "150px"
                }
              },
              [
                _c(
                  "div",
                  { staticStyle: { width: "20%", position: "fixed" } },
                  [
                    _c(
                      "van-sidebar",
                      {
                        model: {
                          value: _vm.activeKey,
                          callback: function($$v) {
                            _vm.activeKey = $$v
                          },
                          expression: "activeKey"
                        }
                      },
                      _vm._l(_vm.categories, function(category, key) {
                        return _c("van-sidebar-item", {
                          attrs: { title: category.name },
                          on: {
                            click: function($event) {
                              return _vm.check(category.id, key)
                            }
                          }
                        })
                      }),
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticStyle: {
                      width: "80%",
                      position: "absolute",
                      "margin-left": "75px",
                      overflow: "scroll"
                    },
                    attrs: { id: "dish" }
                  },
                  _vm._l(_vm.dishData, function(category) {
                    return _c(
                      "van-swipe-cell",
                      {
                        key: category.id,
                        attrs: {
                          "right-width": 10,
                          "on-close": _vm.onClose,
                          id: category.id
                        }
                      },
                      _vm._l(category.dishes, function(dish) {
                        return _c(
                          "div",
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
                                      {
                                        attrs: { slot: "footer" },
                                        slot: "footer"
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "amount_container" },
                                          [
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
                                          ]
                                        )
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
                      0
                    )
                  }),
                  1
                )
              ]
            ),
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
          1
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c8077f86", module.exports)
  }
}

/***/ })

});