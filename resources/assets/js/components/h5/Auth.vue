<template>
    <div>
        222
    </div>
</template>

<script>
    import {Toast} from 'vant';
    import Vue from 'vue';
    import {
        GoodsAction,
        // GoodsActionBigBtn,
        // GoodsActionMiniBtn
    } from 'vant';

    Vue
        .use(GoodsAction)
        // .use(GoodsActionBigBtn)
        // .use(GoodsActionMiniBtn);

    export default {
        data() {
            return {
            };
        },
        created() {
            // this.getCode();
        },
        computed: {},
        mounted() {
        },
        methods: {
            getCode() {
                // 非静默授权，第一次有弹框
                const code = this.getUrlParam("code"); // 截取路径中的code，如果没有就去微信授权，如果已经获取到了就直接传code给后台获取openId
                const local = window.location.href;
                const APPID = "wx5e0fd315aff830a4"; // 企业微信
                if (code === null || code === "") {
                    window.location.href =
                        "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" +
                        APPID +
                        "&redirect_uri=" +
                        encodeURIComponent(local) +
                        "&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect";
                } else {
                    this.getOpenId(code); //把code传给后台获取用户信息
                    console.log(code);
                }
            },
            getUrlParam(name) {
                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");

                var r = window.location.search.substr(1).match(reg);
                console.log(r);

                if (r != null) return unescape(r[2]);

                return null;
            },

            getOpenId(code) {
                // 通过code获取 openId等用户信息，/api/user/wechat/login 为后台接口
                let _this = this;
                console.log(code);
                this.$api.getOpenId({code: code}).then(res => {
                    console.log(res);
                    let openid ;
                    if (res.data.status === 0) {
                        openid = res.data;
                        this.$router.push({ name: "wechatOrder", query:{
                                merchant_id:merchant_id,
                                table_id:table_id,
                                seat_id:seat_id
                            }});
                    }else{
                        console.log(res);
                        return;
                    }
                    localStorage.setItem("openid", openid);
                    _this.getindexOne(openid);
                });
            },
            // getindexOne(openid) {
            //     let params = {
            //         'channel': "qyvx",
            //         'openID': openid
            //     };
            //     api("/app/arrange/judgeOrder", "get", params).then(res => {
            //         if (res.data.status == 0) {
            //             this.$router.push({ name: "h5Order" });
            //             //   window.location.replace("/#/index");
            //         } else {
            //             // this.$router.push({ name: "" });
            //             //   window.location.replace("/#/about");
            //         }
            //     });
            // }
        }
    }
</script>

<style lange="less">

</style>
