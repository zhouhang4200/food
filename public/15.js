webpackJsonp([15],{

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(881)
}
var normalizeComponent = __webpack_require__(202)
/* script */
var __vue_script__ = __webpack_require__(883)
/* template */
var __vue_template__ = __webpack_require__(884)
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
Component.options.__file = "resources/assets/js/components/auth/Login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-dca5370e", Component.options)
  } else {
    hotAPI.reload("data-v-dca5370e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 881:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(882);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(363)("e5ee413c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-dca5370e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/less-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Login.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-dca5370e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/less-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Login.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 882:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(105)(false);
// imports


// module
exports.push([module.i, "\n.geetest_holder.geetest_mobile.geetest_ant .geetest_slider .geetest_slider_track .geetest_slider_tip.geetest_multi_slide {\n  word-wrap: break-word !important;\n  white-space: normal !important;\n  text-align: left !important;\n  font-size: 12px !important;\n  line-height: 40px !important;\n}\n.geetest_holder.geetest_mobile.geetest_ant .geetest_panel .geetest_copyright .geetest_logo {\n  width: 0 !important;\n}\n.geetest_holder.geetest_mobile.geetest_ant .geetest_panel .geetest_copyright .geetest_copyright_tip {\n  margin: 0 !important;\n}\n.login-register {\n  /*@keyframes move_wave {*/\n  /*0% {*/\n  /*transform: translateX(0) translateZ(0) scaleY(1)*/\n  /*}*/\n  /*50% {*/\n  /*transform: translateX(-25%) translateZ(0) scaleY(0.55)*/\n  /*}*/\n  /*100% {*/\n  /*transform: translateX(-50%) translateZ(0) scaleY(1)*/\n  /*}*/\n  /*}*/\n  /*.waveWrapper {*/\n  /*overflow: hidden;*/\n  /*position: absolute;*/\n  /*left: 0;*/\n  /*right: 0;*/\n  /*!*bottom: 0;*!*/\n  /*top: 0;*/\n  /*margin: auto;*/\n  /*width: 1000px;*/\n  /*height: 100px;*/\n  /*}*/\n  /*.waveWrapperInner {*/\n  /*position: absolute;*/\n  /*width: 100%;*/\n  /*overflow: hidden;*/\n  /*height: 100%;*/\n  /*bottom: -1px;*/\n  /*background-image: linear-gradient(to top, #fd6019 20%, #fd6019 80%);*/\n  /*}*/\n  /*.bgTop {*/\n  /*z-index: 15;*/\n  /*opacity: 0.5;*/\n  /*}*/\n  /*.bgMiddle {*/\n  /*z-index: 10;*/\n  /*opacity: 0.75;*/\n  /*}*/\n  /*.bgBottom {*/\n  /*z-index: 5;*/\n  /*}*/\n  /*.wave {*/\n  /*position: absolute;*/\n  /*left: 0;*/\n  /*width: 200%;*/\n  /*height: 100%;*/\n  /*background-repeat: repeat no-repeat;*/\n  /*background-position: 0 bottom;*/\n  /*transform-origin: center bottom;*/\n  /*}*/\n  /*.waveTop {*/\n  /*background-size: 50% 100px;*/\n  /*}*/\n  /*.waveAnimation .waveTop {*/\n  /*animation: move-wave 3s;*/\n  /*-webkit-animation: move-wave 3s;*/\n  /*-webkit-animation-delay: 1s;*/\n  /*animation-delay: 1s;*/\n  /*}*/\n  /*.waveMiddle {*/\n  /*background-size: 50% 120px;*/\n  /*}*/\n  /*.waveAnimation .waveMiddle {*/\n  /*animation: move_wave 10s linear infinite;*/\n  /*}*/\n  /*.waveBottom {*/\n  /*background-size: 50% 100px;*/\n  /*}*/\n  /*.waveAnimation .waveBottom {*/\n  /*animation: move_wave 15s linear infinite;*/\n  /*}*/\n}\n.login-register .el-input__inner {\n  border: none;\n  border-radius: 0;\n  border-bottom: 1px solid #f0f2f5;\n}\n.login-register .el-input__prefix .el-input__icon {\n  font-size: 26px;\n}\n.login-register .icon-youxiang {\n  font-size: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ 883:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "Login",
    computed: {
        active: {
            get: function get() {
                return this.$route.path;
            },
            set: function set() {}
        }
    },
    data: function data() {
        var _this = this;

        var validateCaptcha = function validateCaptcha(rule, value, callback) {
            if (value == '') {
                callback(new Error('请点击按钮完成验证'));
            } else {
                callback();
            }
        };
        var validatePass = function validatePass(rule, value, callback) {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== _this.formRegister.password) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {
            // active: '/login',
            loginPasswordErrorMessage: '',
            formLogin: {
                phone: '',
                password: ''
                // username: '',
                // geetest_challenge: '',
                // geetest_seccode: '',
                // geetest_validate: '',
            },
            formLoginRules: {
                phone: [{ required: true, message: '请输入正确的手机号', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
                // geetest_seccode: [
                //     {validator: validateCaptcha, trigger: 'change'}
                // ],
            },
            registerPassword: '',
            formRegister: {
                name: '',
                email: '',
                qq: '',
                phone: '',
                username: '',
                password: '',
                password_confirmation: '',
                geetest_challenge: '',
                geetest_seccode: '',
                geetest_validate: ''
            },
            formRegisterErrorMessage: {
                name: '',
                email: '',
                qq: '',
                phone: '',
                username: '',
                password: '',
                password_confirmation: '',
                geetest_challenge: '',
                geetest_seccode: '',
                geetest_validate: ''
            },
            formRegisterRules: {
                name: [{ required: true, message: '请输入', trigger: 'blur' }],
                username: [{ required: true, message: '请输入账号呢称', trigger: 'blur' }],
                // email: [
                //     {required: true, message: '请输入您的邮箱', trigger: 'blur'},
                //     {
                //         validator:(rule,value,callback)=>{
                //             if(value != ""){
                //                 if((/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/).test(value) == false){
                //                     callback(new Error("请输入正确的邮箱地址"));
                //                 }else{
                //                     callback();
                //                 }
                //             }else{
                //                 callback();
                //             }
                //         },
                //         trigger:'blur'
                //     },
                // ],
                // qq: [
                //     {required: true, message: '请输入QQ', trigger: 'blur'},
                //     {
                //         validator:(rule,value,callback)=>{
                //             if((/^[0-9]{5,12}$/).test(value) == false){
                //                 callback(new Error("请输入正确的QQ"));
                //             }else{
                //                 callback();
                //             }
                //         },
                //         trigger:'blur'
                //     },
                // ],
                phone: [{ required: true, message: '请输入手机号', trigger: 'blur' }, {
                    validator: function validator(rule, value, callback) {
                        if (value != "") {
                            if (/^1[34578]\d{9}$/.test(value) == false) {
                                callback(new Error("请输入正确的手机号"));
                            } else {
                                callback();
                            }
                        } else {
                            callback();
                        }
                    },
                    trigger: 'blur'
                }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
                password_confirmation: [{ validator: validatePass, trigger: 'blur' }]
                // geetest_seccode: [
                //     {validator: validateCaptcha, trigger: 'change'}
                // ],
            }
        };
    },

    methods: {
        // 初始化登录验证码
        // initLoginCaptcha() {
        //     let currentThis = this;
        //     this.$api.captcha({}).then(res => {
        //         window.initGeetest({
        //             gt: res.gt,
        //             challenge: res.challenge,
        //             offline: !res.success,
        //             new_captcha: true,
        //             product: 'float',
        //             area: '#form',
        //             next_width: '100%',
        //             bg_color: '#ffffff',
        //             lang: 'zh-cn',
        //             http: 'http://',
        //             width: '100%',
        //         }, function (captchaObj) {
        //             captchaObj.appendTo("#captcha-login");
        //             captchaObj.onReady(function () {
        //             }).onSuccess(function () {
        //                 currentThis.formLogin.geetest_challenge = document.getElementById('captcha-login').getElementsByTagName('input')['geetest_challenge'].value;
        //                 currentThis.formLogin.geetest_seccode = document.getElementById('captcha-login').getElementsByTagName('input')['geetest_seccode'].value;
        //                 currentThis.formLogin.geetest_validate = document.getElementById('captcha-login').getElementsByTagName('input')['geetest_validate'].value;
        //                 currentThis.$refs['captchaLogin'].clearValidate();
        //             }).onError(function () {
        //
        //             })
        //         });
        //     });
        // },
        // 初始化注册验证码
        // initRegisterCaptcha() {
        //     let currentThis = this;
        //     this.$api.captcha({}).then(res => {
        //         window.initGeetest({
        //             gt: res.gt,
        //             challenge: res.challenge,
        //             offline: !res.success,
        //             new_captcha: true,
        //             product: 'float',
        //             area: '#form',
        //             next_width: '100%',
        //             bg_color: 'black',
        //             lang: 'zh-cn',
        //             http: 'http://',
        //             width: '100%',
        //         }, function (captchaObj) {
        //             captchaObj.appendTo("#captcha-register");
        //             captchaObj.onReady(function () {
        //             }).onSuccess(function () {
        //                 currentThis.formRegister.geetest_challenge = document.getElementById('captcha-register').getElementsByTagName('input')['geetest_challenge'].value;
        //                 currentThis.formRegister.geetest_seccode = document.getElementById('captcha-register').getElementsByTagName('input')['geetest_seccode'].value;
        //                 currentThis.formRegister.geetest_validate = document.getElementById('captcha-register').getElementsByTagName('input')['geetest_validate'].value;
        //                 currentThis.$refs['captchaRegister'].clearValidate();
        //             }).onError(function () {
        //             })
        //         });
        //     });
        // },
        handleTabClick: function handleTabClick(tab, event) {
            sessionStorage.setItem('loginRegisterActive', tab.name);
            this.$router.push(tab.name);
        },

        // 提交登录表单
        handleSubmitLoginForm: function handleSubmitLoginForm() {
            var _this2 = this;

            this.$refs.formLogin.validate(function (valid) {
                if (valid) {
                    _this2.loginPasswordErrorMessage = '';
                    // this.formLogin.password = encrypt(this.formLogin.password);
                    _this2.$api.login(_this2.formLogin).then(function (res) {
                        if (res.status === 1) {
                            console.log(res.data);
                            // sessionStorage.setItem('token', res.data.token);
                            // sessionStorage.setItem('success', 'success');
                            sessionStorage.setItem('name', res.data);
                            // window.location.href = '/dish/list';
                            _this2.$router.push({ name: 'dish', query: {} });
                        } else {
                            _this2.loginPasswordErrorMessage = res.content;
                            _this2.formLogin.password = '';
                        }
                    }).catch(function (error) {
                        _this2.formLogin.password = '';
                    });
                }
            });
        },

        // 提交注册表单
        handleSubmitRegisterForm: function handleSubmitRegisterForm() {
            var _this3 = this;

            this.$refs.formRegister.validate(function (valid) {
                if (valid) {
                    _this3.registerPassword = _this3.formRegister.password_confirmation;
                    _this3.formRegister.password = encrypt(_this3.formRegister.password);
                    _this3.formRegister.password_confirmation = encrypt(_this3.formRegister.password_confirmation);
                    _this3.$api.register(_this3.formRegister).then(function (res) {
                        if (res.status == 1) {
                            sessionStorage.setItem('openMenu', '/v2/order/');
                            _this3.$confirm('注册成功, 现在登录?', '提示', {
                                confirmButtonText: '确定',
                                cancelButtonText: '取消',
                                type: 'warning'
                            }).then(function () {
                                _this3.$route.push('/login');
                            }).catch(function () {});
                        } else {
                            // console.log(res.content);
                            // this.formRegister.password = this.registerPassword;
                            // this.formRegister.password_confirmation = this.registerPassword;

                            // res.content.forEach(function (key, item) {
                            //     console.log(key.email[0],item);
                            //     // this.formRegisterErrorMessage.key = item[0];
                            // });

                            // this.loginPasswordErrorMessage = res.message;
                            // this.formLogin.password = '';
                        }
                    });
                }
            });
        }
    },
    created: function created() {
        // this.initLoginCaptcha();
        // this.initRegisterCaptcha();
    }
});

/***/ }),

/***/ 884:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "login-register",
      staticStyle: {
        width: "950px",
        margin: "100px auto 0 auto",
        background: "#ffffff",
        overflow: "hidden",
        border: "1px solid #fff",
        "border-radius": "10px"
      }
    },
    [
      _c("el-container", [
        _c(
          "div",
          { staticStyle: { width: "500px", padding: "50px 50px 0 50px" } },
          [
            _c(
              "el-tabs",
              {
                attrs: { id: "form" },
                on: { "tab-click": _vm.handleTabClick },
                model: {
                  value: _vm.active,
                  callback: function($$v) {
                    _vm.active = $$v
                  },
                  expression: "active"
                }
              },
              [
                _c(
                  "el-tab-pane",
                  { attrs: { label: "登录", name: "/login" } },
                  [
                    _c(
                      "el-form",
                      {
                        ref: "formLogin",
                        staticClass: "demo-ruleForm",
                        attrs: {
                          model: _vm.formLogin,
                          "status-icon": "",
                          rules: _vm.formLoginRules
                        }
                      },
                      [
                        _c(
                          "div",
                          { staticStyle: { "margin-top": "30px" } },
                          [
                            _c(
                              "el-form-item",
                              { attrs: { prop: "phone" } },
                              [
                                _c("el-input", {
                                  attrs: {
                                    placeholder: "请输入手机号",
                                    "prefix-icon": "icon-user-o"
                                  },
                                  model: {
                                    value: _vm.formLogin.phone,
                                    callback: function($$v) {
                                      _vm.$set(_vm.formLogin, "phone", $$v)
                                    },
                                    expression: "formLogin.phone"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "el-form-item",
                              {
                                attrs: {
                                  error: _vm.loginPasswordErrorMessage,
                                  prop: "password"
                                }
                              },
                              [
                                _c("el-input", {
                                  attrs: {
                                    type: "password",
                                    placeholder: "请输入密码",
                                    "prefix-icon": "icon-lock-o"
                                  },
                                  model: {
                                    value: _vm.formLogin.password,
                                    callback: function($$v) {
                                      _vm.$set(_vm.formLogin, "password", $$v)
                                    },
                                    expression: "formLogin.password"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "el-form-item",
                              [
                                _c(
                                  "el-row",
                                  { attrs: { gutter: 20 } },
                                  [
                                    _c(
                                      "el-col",
                                      { attrs: { span: 12 } },
                                      [
                                        _c(
                                          "el-button",
                                          {
                                            staticStyle: { width: "100%" },
                                            attrs: { type: "primary" },
                                            on: {
                                              click: function($event) {
                                                return _vm.handleSubmitLoginForm(
                                                  "form"
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                            确认\n                                        "
                                            )
                                          ]
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
                      ]
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
        _c("div", [
          _c("img", {
            staticStyle: { height: "350px", display: "block" },
            attrs: { src: __webpack_require__(885), alt: "" }
          })
        ])
      ])
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
    require("vue-hot-reload-api")      .rerender("data-v-dca5370e", module.exports)
  }
}

/***/ }),

/***/ 885:
/***/ (function(module, exports) {

module.exports = "/images/a.jpg?1c1ea0504a9447afe153ce1e5a7c867b";

/***/ })

});